import { Footer, Header } from "../components/SiteChrome";

export const metadata = { title: "使用支持｜文献哨兵", description: "文献哨兵安装、授权和匹配问题帮助。" };

const questions = [
  ["必须使用 Zotero 吗？", "不需要。文献哨兵专门支持自己的文件夹和 Excel、CSV、RIS、BibTeX 等清单。"],
  ["为什么需要文件授权？", "Edge 不允许扩展在未获同意时读取磁盘。首次选择资料后，请在授权弹窗中选择“每次访问时都允许”，以便自动扫描。"],
  ["插件会读取论文正文吗？", "不会。文件夹扫描只读取文件名、相对路径、大小和修改时间，不读取 PDF 或其他文献正文。"],
  ["支持哪些文献网站？", "当前重点支持中国知网和 Web of Science 的文献详情页。网站改版后，个别页面可能需要更新识别规则。"],
  ["支持哪些文件？", "论文文件支持 PDF、CAJ、NH 和 EPUB；清单支持 XLSX、CSV、TSV、JSON、RIS、BibTeX 和 TXT。"],
  ["为什么显示未找到？", "可能是题名或 DOI 信息不足、文件名过于简单、下载记录已清除，或者网页结构发生变化。建议先检查 Excel 序号和文件名是否对应。"],
  ["如何更新插件？", "从 Edge 商店安装后会自动更新。开发测试版可在 edge://extensions 中点击“重新加载”，然后刷新文献网页。"],
];

export default function SupportPage() {
  return (
    <><Header /><main className="support-page wrap">
      <div className="support-hero"><p className="kicker">Support</p><h1>使用支持</h1><p>先看常见问题。如果仍未解决，可以通过 GitHub 提交问题。</p><a className="button primary" href="https://github.com/zpf309519086/paper-sentinel-site/issues/new">提交问题</a></div>
      <div className="faq-grid">
        {questions.map(([question, answer]) => <article key={question}><h2>{question}</h2><p>{answer}</p></article>)}
      </div>
      <div className="support-note"><strong>提交问题前</strong><p>请说明 Edge 版本、文献网站和问题表现。不要上传包含个人文献清单、文件路径或未公开论文的截图。</p></div>
    </main><Footer /></>
  );
}
