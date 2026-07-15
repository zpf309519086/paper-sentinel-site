import { Footer, Header } from "../components/SiteChrome";

export const metadata = { title: "隐私政策｜文献哨兵", description: "文献哨兵的本地数据处理与隐私承诺。" };

export default function PrivacyPage() {
  return (
    <><Header /><main className="legal-page wrap">
      <div className="legal-hero"><p className="kicker">Privacy Policy</p><h1>隐私政策</h1><p>最后更新：2026 年 7 月 15 日</p></div>
      <article className="legal-content">
        <section><h2>1. 核心承诺</h2><p>文献哨兵采用本地优先设计。账号功能与文献处理相互分离：论文正文、文献清单内容、文件名、文件路径和浏览记录不会上传到账号服务器。我们不出售用户数据。</p></section>
        <section><h2>2. 插件访问的数据</h2><p>为提供“当前论文是否已经收藏或下载”的功能，插件可能在你的设备上访问和处理：</p><ul><li>受支持文献网页中的题名、作者、年份、DOI 和网站记录号；</li><li>你主动选择的文献清单内容，例如序号、题名、作者、DOI 和文件状态；</li><li>你主动选择的论文文件夹中的文件名、相对路径、文件大小和修改时间；</li><li>你选择开启下载记录核对时，Edge 中仍存在的相关下载记录；</li><li>插件设置、匹配索引和授权状态。</li></ul></section>
        <section><h2>3. 插件不会做什么</h2><ul><li>不会读取或分析论文 PDF、CAJ、NH 或 EPUB 的正文；</li><li>不会修改、移动或删除论文文件和文献清单；</li><li>不会将文献数据用于广告、用户画像或训练模型；</li><li>不会加载或执行远程托管的程序代码。</li></ul></section>
        <section><h2>4. 账号、订单与售后数据</h2><p>注册或登录账号时，服务器处理用户名、加盐后的密码哈希、隐私政策同意时间、会员类型、到期时间、随机设备编号、设备名称以及登录会话信息。购买时还会处理商户订单号、商品方案、金额、支付方式、支付平台交易号和付款状态；提交私密工单时会保存工单类型、关联订单、问题说明和处理状态。我们不要求手机号码、邮箱或验证码，也不会保存明文密码、银行卡号或支付宝登录凭据。</p></section>
        <section><h2>5. 数据存储与保留</h2><p>匹配索引和设置保存在 Edge 提供的本地扩展存储中。登录令牌保存在扩展本地存储中，账号、会员、订单和工单记录保存在账号服务器中。你可以清除本地索引、退出登录、移除其他设备或删除账号；删除账号会删除账号、会员、设备、会话和私密工单，但不会删除本机原始论文和清单。已产生的支付订单可能为对账、退款、争议处理和履行适用法律义务而在必要期限内保留，并与已删除账号解除关联。</p></section>
        <section><h2>6. 权限说明</h2><ul><li><strong>storage / unlimitedStorage：</strong>保存设置、本地文献索引、随机设备编号和登录令牌。</li><li><strong>alarms：</strong>按照用户选择的间隔自动刷新索引。</li><li><strong>downloads：</strong>仅在用户开启相关功能时核对 Edge 下载记录。</li><li><strong>网站访问：</strong>在中国知网和 Web of Science 页面识别当前文献信息并显示结果。</li><li><strong>文件访问：</strong>仅访问用户通过系统选择器明确选择并授权的位置。</li><li><strong>账号服务器访问：</strong>仅用于注册、登录、会员状态和设备管理，不传输文献资料。</li></ul></section>
        <section><h2>7. 第三方组件</h2><p>插件内置 SheetJS Community Edition，用于在本机解析 XLSX 文件。相关许可声明随插件一并提供。当前版本不包含广告、统计分析或第三方跟踪服务，也不会加载或执行远程托管的程序代码。</p></section>
        <section><h2>8. 用户控制</h2><p>你可以关闭自动扫描、下载记录核对或网页悬浮提示，也可以在 Edge 或操作系统中撤销文件访问权限。账号中心提供修改密码、退出登录、移除其他设备、查看订单、提交私密工单和删除账号功能。</p></section>
        <section><h2>9. 跨境与安全</h2><p>账号服务目前部署在新加坡，账号、会员、订单和工单数据可能在中国大陆境外处理和存储。我们采用 HTTPS 传输、密码加盐哈希、会话令牌哈希、登录次数限制、支付通知验签、订单金额核对和最小化收集等措施保护数据。</p></section>
        <section><h2>10. 政策变更</h2><p>如果数据类型、服务器位置、支付或许可证验证方式发生实质变化，我们会在相关功能上线前更新本政策。文献内容、清单内容和本地文件名不会作为会员验证数据上传。</p></section>
        <section><h2>11. 联系我们</h2><p>如有隐私问题，请通过 <a href="https://github.com/zpf309519086/paper-sentinel-site/issues">GitHub Issues</a> 联系。提交问题时请勿附上包含私人文献资料的截图或文件。</p></section>
      </article>
    </main><Footer /></>
  );
}
