import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const noto = Noto_Sans_SC({ variable: "--font-noto", subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") || "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "文献哨兵｜打开论文，立刻知道是否已经收藏";
  const description = "在中国知网和 Web of Science 页面自动核对自己的 Excel 文献清单与本地论文文件夹。";
  return {
    title,
    description,
    applicationName: "文献哨兵",
    openGraph: {
      title: "文献哨兵｜你的本地文献查重助手",
      description: "打开论文页面，立刻知道是否已经收藏、是否下载，以及它是第几号文献。",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1536, height: 1024, alt: "文献哨兵产品介绍" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body className={noto.variable}>{children}</body></html>;
}
