import Link from "next/link";
import { Footer, Header } from "../components/SiteChrome";

export const metadata = {
  title: "付款结果｜文献哨兵",
  description: "文献哨兵付款后的会员同步说明。",
};

export default function PaymentCompletePage() {
  return (
    <><Header /><main className="payment-page wrap">
      <section className="payment-result">
        <div className="payment-mark" aria-hidden="true">✓</div>
        <p className="kicker">Payment returned</p>
        <h1>付款页面已经返回</h1>
        <p className="payment-lead">本页会自动验证支付平台返回的签名并同步会员。验证成功后，请回到 Edge 刷新账号状态。</p>
        <p id="payment-sync-status" className="payment-sync-status" data-state="pending" role="status" aria-live="polite">正在安全确认付款并同步会员…</p>
        <noscript><p className="payment-sync-status" data-state="warning">浏览器已停用脚本，无法自动同步。请回到 Edge，在账号页点击“已付款？同步支付结果”。</p></noscript>
        <ol className="payment-steps">
          <li><b>01</b><span><strong>返回 Edge</strong>点击工具栏中的“文献哨兵”，打开“账号”。</span></li>
          <li><b>02</b><span><strong>刷新状态</strong>点击“刷新会员状态”，查看会员期限和最近订单。</span></li>
          <li><b>03</b><span><strong>仍未到账</strong>等待一分钟后仍未更新，请在账号页提交“付款与会员”私密工单并关联订单。</span></li>
        </ol>
        <div className="payment-actions"><Link className="button primary" href="/support">查看使用支持</Link><Link className="button ghost" href="/pricing">查看价格说明</Link></div>
        <p className="payment-warning">请勿在公开页面提交密码、身份证、银行卡信息或完整付款截图。</p>
      </section>
    </main><Footer /><script data-payment-sync src="/payment-sync.js" defer /></>
  );
}
