import { Footer, Header } from "../components/SiteChrome";

export const metadata = { title: "隐私政策｜文献哨兵", description: "文献哨兵的本地数据处理与隐私承诺。" };

export default function PrivacyPage() {
  return (
    <><Header /><main className="legal-page wrap">
      <div className="legal-hero"><p className="kicker">Privacy Policy</p><h1>隐私政策</h1><p>最后更新：2026 年 7 月 14 日</p></div>
      <article className="legal-content">
        <section><h2>1. 核心承诺</h2><p>文献哨兵采用本地优先设计。当前版本不会把你的论文正文、文献清单内容、文件名、文件路径或浏览记录上传到开发者服务器，也不出售用户数据。</p></section>
        <section><h2>2. 插件访问的数据</h2><p>为提供“当前论文是否已经收藏或下载”的功能，插件可能在你的设备上访问和处理：</p><ul><li>受支持文献网页中的题名、作者、年份、DOI 和网站记录号；</li><li>你主动选择的文献清单内容，例如序号、题名、作者、DOI 和文件状态；</li><li>你主动选择的论文文件夹中的文件名、相对路径、文件大小和修改时间；</li><li>你选择开启下载记录核对时，Edge 中仍存在的相关下载记录；</li><li>插件设置、匹配索引和授权状态。</li></ul></section>
        <section><h2>3. 插件不会做什么</h2><ul><li>不会读取或分析论文 PDF、CAJ、NH 或 EPUB 的正文；</li><li>不会修改、移动或删除论文文件和文献清单；</li><li>不会将文献数据用于广告、用户画像或训练模型；</li><li>不会加载或执行远程托管的程序代码。</li></ul></section>
        <section><h2>4. 数据存储与保留</h2><p>匹配索引和设置保存在 Edge 提供的本地扩展存储中。你可以在插件设置中清除文件夹索引和文献清单。卸载插件后，Edge 会删除插件的本地存储；原始论文和清单不受影响。</p></section>
        <section><h2>5. 权限说明</h2><ul><li><strong>storage / unlimitedStorage：</strong>保存设置和本地文献索引。</li><li><strong>alarms：</strong>按照用户选择的间隔自动刷新索引。</li><li><strong>downloads：</strong>仅在用户开启相关功能时核对 Edge 下载记录。</li><li><strong>网站访问：</strong>在中国知网和 Web of Science 页面识别当前文献信息并显示结果。</li><li><strong>文件访问：</strong>仅访问用户通过系统选择器明确选择并授权的位置。</li></ul></section>
        <section><h2>6. 第三方组件</h2><p>插件内置 SheetJS Community Edition，用于在本机解析 XLSX 文件。相关许可声明随插件一并提供。当前版本不包含广告、统计分析或第三方跟踪服务。</p></section>
        <section><h2>7. 用户控制</h2><p>你可以关闭自动扫描、下载记录核对或网页悬浮提示，也可以随时在 Edge 或操作系统中撤销文件访问权限。</p></section>
        <section><h2>8. 商业授权与未来变更</h2><p>如果未来加入账户、许可证验证或支付功能，本政策会在该功能上线前更新，并明确说明需要传输的数据。文献内容、清单内容和本地文件名不会作为许可证验证数据上传。</p></section>
        <section><h2>9. 联系我们</h2><p>如有隐私问题，请通过 <a href="https://github.com/zpf309519086/paper-sentinel-site/issues">GitHub Issues</a> 联系。提交问题时请勿附上包含私人文献资料的截图或文件。</p></section>
      </article>
    </main><Footer /></>
  );
}
