import { Footer, Header } from "../components/SiteChrome";

export const metadata = { title: "用户条款｜文献哨兵", description: "使用文献哨兵浏览器扩展的基本条款。" };

export default function TermsPage() {
  return (
    <><Header /><main className="legal-page wrap">
      <div className="legal-hero"><p className="kicker">Terms of Use</p><h1>用户条款</h1><p>最后更新：2026 年 7 月 14 日</p></div>
      <article className="legal-content">
        <section><h2>1. 接受条款</h2><p>安装或使用文献哨兵，即表示你同意本条款和隐私政策。如果你不同意，请停止使用并卸载扩展。</p></section>
        <section><h2>2. 产品用途</h2><p>文献哨兵用于辅助用户核对网页文献与个人文献清单、本地文件夹和可选下载记录。匹配结果仅供整理参考，不保证在所有网站、题录格式和文件命名方式下完全准确。</p></section>
        <section><h2>3. 用户责任</h2><ul><li>你应确保自己有权访问所选择的文件、文件夹和文献清单；</li><li>你应自行核对重要匹配结果，并保留必要的数据备份；</li><li>不得利用本扩展规避付费墙、访问控制、版权保护或从事违法活动；</li><li>不得尝试破坏扩展、商店或许可证服务的安全与正常运行。</li></ul></section>
        <section><h2>4. 知识产权</h2><p>文献哨兵的名称、界面、程序代码和原创材料受适用法律保护。第三方组件仍受各自许可证约束。除明确许可外，不授予复制、转售或冒充官方版本的权利。</p></section>
        <section><h2>5. 付费功能</h2><p>当前产品仍在购买通道配置阶段，尚未开放销售。计划提供 14 天免费试用、31 天会员和永久版。31 天会员不自动扣费；永久版包含现有本地功能及必要的兼容性和安全更新，但未来独立云端服务可能不包含。正式销售前，购买页面会明确展示实际价格、授权期限、退款规则和完整权益。</p></section>
        <section><h2>6. 可用性与变更</h2><p>学术网站可能改版或限制扩展运行，因此部分页面识别可能暂时失效。我们可以为修复错误、提高安全性或遵守商店政策而更新扩展。</p></section>
        <section><h2>7. 免责声明与责任限制</h2><p>在适用法律允许的范围内，本产品按现状提供，不对科研判断、引用准确性、文件备份或第三方网站可用性作保证。用户应对自己的文献管理和研究决策负责。</p></section>
        <section><h2>8. 第三方关系</h2><p>文献哨兵是独立产品，与中国知网、Clarivate、Web of Science 或 Microsoft 无隶属、授权或背书关系。相关商标归各自权利人所有。</p></section>
        <section><h2>9. 联系</h2><p>条款相关问题可通过 <a href="https://github.com/zpf309519086/paper-sentinel-site/issues">GitHub Issues</a> 提交。</p></section>
      </article>
    </main><Footer /></>
  );
}
