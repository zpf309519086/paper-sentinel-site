import { Footer, Header } from "../components/SiteChrome";

export const metadata = { title: "用户条款｜文献哨兵", description: "使用文献哨兵浏览器扩展的基本条款。" };

export default function TermsPage() {
  return (
    <><Header /><main className="legal-page wrap">
      <div className="legal-hero"><p className="kicker">Terms of Use</p><h1>用户条款</h1><p>最后更新：2026 年 7 月 15 日</p></div>
      <article className="legal-content">
        <section><h2>1. 接受条款</h2><p>安装或使用文献哨兵，即表示你同意本条款和隐私政策。如果你不同意，请停止使用并卸载扩展。</p></section>
        <section><h2>2. 产品用途</h2><p>文献哨兵用于辅助用户核对网页文献与个人文献清单、本地文件夹和可选下载记录。匹配结果仅供整理参考，不保证在所有网站、题录格式和文件命名方式下完全准确。</p></section>
        <section><h2>3. 用户责任</h2><ul><li>你应确保自己有权访问所选择的文件、文件夹和文献清单；</li><li>你应妥善保管用户名和密码，并对账号内的活动负责；</li><li>你应自行核对重要匹配结果，并保留必要的数据备份；</li><li>不得利用本扩展规避付费墙、访问控制、版权保护或从事违法活动；</li><li>不得尝试破坏扩展、商店或会员服务的安全与正常运行。</li></ul></section>
        <section><h2>4. 知识产权</h2><p>文献哨兵的名称、界面、程序代码和原创材料受适用法律保护。第三方组件仍受各自许可证约束。除明确许可外，不授予复制、转售或冒充官方版本的权利。</p></section>
        <section><h2>5. 账号、会员与付款</h2><p>产品计划提供 14 天免费试用、31 天会员和永久版。试用版、31 天会员和永久版分别支持 1、2、3 台设备。账号采用用户名和密码登录，不要求短信或邮箱验证码；已登录用户可以修改密码，忘记密码时仍需要联系支持人员处理。31 天会员不自动扣费，永久版仅覆盖购买页面明确列出的本地功能与维护范围。付款结果以支付平台的成功通知和账号页订单状态为准。</p></section>
        <section><h2>6. 售后与退款</h2><p>付款或会员状态异常时，用户应通过插件账号页的私密工单联系，并关联对应订单。请勿在公开渠道提交密码、身份证、银行卡信息或完整付款资料。退款条件以购买页面展示、支付平台规则和适用法律为准；退款只有在支付平台确认成功后才视为完成，会员权限会根据退款结果相应调整。</p></section>
        <section><h2>7. 可用性与变更</h2><p>学术网站可能改版或限制扩展运行，因此部分页面识别可能暂时失效。我们可以为修复错误、提高安全性或遵守商店政策而更新扩展。</p></section>
        <section><h2>8. 免责声明与责任限制</h2><p>在适用法律允许的范围内，本产品按现状提供，不对科研判断、引用准确性、文件备份或第三方网站可用性作保证。用户应对自己的文献管理和研究决策负责。</p></section>
        <section><h2>9. 第三方关系</h2><p>文献哨兵是独立产品，与中国知网、Clarivate、Web of Science、Microsoft、支付宝或 ZPAY 无隶属、授权或背书关系。相关商标归各自权利人所有。</p></section>
        <section><h2>9. 联系</h2><p>条款相关问题可通过 <a href="https://github.com/zpf309519086/paper-sentinel-site/issues">GitHub Issues</a> 提交。</p></section>
      </article>
    </main><Footer /></>
  );
}
