import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const output = path.join(root, "pages-dist");
const base = "/paper-sentinel-site";
const publicOrigin = "https://zpf309519086.github.io";
const routes = ["/", "/pricing", "/privacy", "/terms", "/support"];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, "dist/client"), output, { recursive: true });

const workerUrl = pathToFileURL(path.join(root, "dist/server/index.js"));
workerUrl.searchParams.set("export", String(Date.now()));
const { default: worker } = await import(workerUrl.href);

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`${publicOrigin}${route}`, {
      headers: { accept: "text/html", host: "zpf309519086.github.io", "x-forwarded-proto": "https" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  if (!response.ok) throw new Error(`Unable to render ${route}: ${response.status}`);
  const html = transformHtml(await response.text());
  const directory = route === "/" ? output : path.join(output, route.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), html);
}

const assetsPath = path.join(output, "assets");
for (const file of await readdir(assetsPath)) {
  if (!file.endsWith(".css")) continue;
  const filename = path.join(assetsPath, file);
  const css = await readFile(filename, "utf8");
  await writeFile(filename, css.replaceAll("/assets/", `${base}/assets/`));
}

await writeFile(path.join(output, ".nojekyll"), "");
await cp(path.join(output, "index.html"), path.join(output, "404.html"));

function transformHtml(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
    .replaceAll('href="/assets/', `href="${base}/assets/`)
    .replaceAll('src="/assets/', `src="${base}/assets/`)
    .replaceAll('href="/#features"', `href="${base}/#features"`)
    .replaceAll('href="/pricing"', `href="${base}/pricing/"`)
    .replaceAll('href="/privacy"', `href="${base}/privacy/"`)
    .replaceAll('href="/terms"', `href="${base}/terms/"`)
    .replaceAll('href="/support"', `href="${base}/support/"`)
    .replaceAll('href="/"', `href="${base}/"`)
    .replaceAll(`${publicOrigin}/og.png`, `${publicOrigin}${base}/og.png`)
    .replaceAll("http://localhost:3000/og.png", `${publicOrigin}${base}/og.png`);
}
