import Link from "next/link";
import { Footer, Header } from "./components/SiteChrome";

const features = [
  {
    number: "01",
    title: "打开即核对",
    text: "在中国知网和 Web of Science 文献详情页自动识别题名、DOI 与记录号。",
  },
  {
    number: "02",
    title: "沿用自己的文献库",
    text: "直接使用自己的 Excel 文献清单和本地文件夹，不必迁移到 Zotero。",
  },
  {
    number: "03",
    title: "显示文献编号",
    text: "匹配成功后直接提示“第几号文献”，快速定位阅读记录。",
  },
  {
    number: "04",
    title: "本地优先",
    text: "文献题录、文件名和 Excel 数据在浏览器本机处理，不上传论文正文。",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span />Edge 浏览器扩展 · 本地优先</div>
            <h1>打开一篇论文，<br />立刻知道<span>是否已经收藏。</span></h1>
            <p className="hero-lead">
              文献哨兵会核对你的 Excel 阅读记录、本地论文文件夹和可选的 Edge 下载记录，告诉你文献是否已有、是否下载，以及它是第几号。
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/pricing">查看首发方案</Link>
              <Link className="button ghost" href="/privacy">查看隐私承诺 →</Link>
            </div>
            <p className="compatibility">支持中国知网 · Web of Science · XLSX · CSV · RIS · BibTeX</p>
          </div>

          <div className="product-stage" aria-label="文献哨兵匹配结果示意">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <article className="sentinel-card">
              <header className="card-head">
                <div className="brand-mini"><b>文</b><span>文献哨兵</span></div>
                <span className="card-dot">•••</span>
              </header>
              <div className="paper-meta">WEB OF SCIENCE · 2024</div>
              <h2>数字技术采用与劳动力市场转型</h2>
              <div className="result featured">
                <i>#</i><div><strong>已存在：第 220 号文献</strong><small>编号来自论文阅读记录表</small></div>
              </div>
              <div className="result">
                <i>✓</i><div><strong>文献清单中已登记</strong><small>作者 · 2024</small></div>
              </div>
              <div className="result">
                <i>↓</i><div><strong>论文文件夹中已有文件</strong><small>220_数字技术采用与劳动力市场转型.pdf</small></div>
              </div>
              <footer className="card-foot"><span>刚刚核对</span><b>重新检查</b></footer>
            </article>
            <div className="privacy-chip"><span>●</span> 数据留在本机</div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="wrap trust-grid">
            <div><strong>无需 Zotero</strong><span>保留现有整理方式</span></div>
            <div><strong>自动刷新</strong><span>文件夹与清单定时核对</span></div>
            <div><strong>只读访问</strong><span>不修改论文或 Excel</span></div>
            <div><strong>本机匹配</strong><span>不上传文献资料</span></div>
          </div>
        </section>

        <section className="section wrap" id="features">
          <div className="section-heading">
            <div><p className="kicker">为真实的文献整理习惯设计</p><h2>不用重建文献库，也能避免重复下载</h2></div>
            <p>让浏览器认识你已经维护多年的 Excel 和文件夹，而不是要求你迁移到另一套系统。</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature" key={feature.number}>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section wrap home-pricing">
          <div>
            <p className="kicker">首发会员方案</p>
            <h2>先完整试用，再决定包月或买断</h2>
            <p>14 天免费体验全部功能。首发用户可选择 31 天会员或永久版，不设置自动扣费。</p>
          </div>
          <div className="home-price"><small>31 天会员</small><strong>¥6.9</strong><span>支持 2 台电脑</span></div>
          <div className="home-price featured-price"><small>永久版</small><strong>¥99</strong><span>支持 3 台电脑</span></div>
          <Link className="text-link" href="/pricing">查看详细权益 →</Link>
        </section>

        <section className="workflow-section">
          <div className="wrap workflow">
            <div>
              <p className="kicker light">三步开始</p>
              <h2>一次设置，之后自动核对</h2>
              <p className="workflow-copy">选择论文文件夹和文献清单，授予长期只读访问。以后打开受支持的文献页面，结果会自动出现。</p>
            </div>
            <ol>
              <li><b>01</b><span><strong>选择资料</strong>选择自己的论文文件夹与 Excel 清单</span></li>
              <li><b>02</b><span><strong>长期授权</strong>在 Edge 中选择“每次访问时都允许”</span></li>
              <li><b>03</b><span><strong>浏览论文</strong>打开知网或 Web of Science 文献页面</span></li>
            </ol>
          </div>
        </section>

        <section className="section wrap privacy-callout">
          <div className="shield" aria-hidden="true">只读</div>
          <div>
            <p className="kicker">隐私从架构开始</p>
            <h2>论文和清单属于你，不属于插件。</h2>
            <p>文献哨兵只建立本地匹配索引。当前版本不包含广告、跟踪分析或远程代码，也不会上传论文正文、Excel 内容和文件名。</p>
          </div>
          <Link className="text-link" href="/privacy">阅读完整隐私政策 →</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
