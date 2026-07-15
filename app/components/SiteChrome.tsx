import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="site-brand" href="/"><b>文</b><span>文献哨兵<small>Paper Sentinel</small></span></Link>
        <nav aria-label="主导航">
          <Link href="/#features">功能</Link>
          <Link href="/privacy">隐私</Link>
          <Link href="/terms">条款</Link>
          <Link href="/support">支持</Link>
        </nav>
        <span className="nav-status">即将发布</span>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div><Link className="site-brand footer-brand" href="/"><b>文</b><span>文献哨兵<small>Paper Sentinel</small></span></Link><p>看一眼，就知道这篇文献是否已经在你的库里。</p></div>
        <div><strong>产品</strong><Link href="/#features">功能</Link><Link href="/support">使用帮助</Link></div>
        <div><strong>法律</strong><Link href="/privacy">隐私政策</Link><Link href="/terms">用户条款</Link></div>
        <div><strong>联系</strong><a href="https://github.com/zpf309519086/paper-sentinel-site/issues">GitHub Issues</a></div>
      </div>
      <div className="wrap legal-line">
        <span>© 2026 文献哨兵</span>
        <span>本产品与中国知网、Clarivate 或 Microsoft 无隶属、授权或背书关系。</span>
      </div>
    </footer>
  );
}
