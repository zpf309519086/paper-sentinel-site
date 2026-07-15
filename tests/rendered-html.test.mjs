import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the 文献哨兵 product page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="zh-CN"/i);
  assert.match(html, /<title>文献哨兵｜打开论文，立刻知道是否已经收藏<\/title>/i);
  assert.match(html, /打开一篇论文/);
  assert.match(html, /已存在：第 220 号文献/);
  assert.match(html, /数据留在本机/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

for (const [pathname, title, marker] of [
  ["/privacy", "隐私政策", "当前版本不会把你的论文正文"],
  ["/terms", "用户条款", "当前产品仍在购买通道配置阶段"],
  ["/support", "使用支持", "必须使用 Zotero 吗"],
  ["/pricing", "简单、透明，不自动扣费", "31 天会员"],
]) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(`<h1[^>]*>${title}<\\/h1>`));
    assert.match(html, new RegExp(marker));
  });
}

test("ships the social sharing image and excludes private machine paths", async () => {
  const image = await stat(new URL("../public/og.png", import.meta.url));
  assert.ok(image.size > 100_000);

  const files = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/privacy/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/terms/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/support/page.tsx", import.meta.url), "utf8"),
  ]);
  const source = files.join("\n");
  assert.doesNotMatch(source, /\/Users\/|Nutstore|张鹏飞|henry/i);
});

test("exports a GitHub Pages fallback with repository-prefixed links", async () => {
  const home = await readFile(new URL("../pages-dist/index.html", import.meta.url), "utf8");
  const pricing = await readFile(new URL("../pages-dist/pricing/index.html", import.meta.url), "utf8");
  assert.match(home, /href="\/paper-sentinel-site\/pricing\//);
  assert.match(home, /href="\/paper-sentinel-site\/assets\//);
  assert.match(home, /https:\/\/zpf309519086\.github\.io\/paper-sentinel-site\/og\.png/);
  assert.doesNotMatch(home, /<script\b/i);
  assert.match(pricing, /¥6\.9/);
  assert.match(pricing, /¥99/);
});
