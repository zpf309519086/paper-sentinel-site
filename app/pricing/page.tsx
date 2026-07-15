import { Footer, Header } from "../components/SiteChrome";

export const metadata = { title: "价格方案｜文献哨兵", description: "文献哨兵免费试用、31 天会员和永久版方案。" };

const plans = [
  {
    name: "免费试用",
    price: "¥0",
    suffix: "14 天",
    note: "先用自己的真实文献库完整体验",
    features: ["全部功能", "无需绑定付款方式", "1 台电脑", "到期前不自动扣费"],
  },
  {
    name: "31 天会员",
    price: "¥6.9",
    suffix: "首发价",
    note: "适合按阶段集中整理文献",
    features: ["全部功能", "2 台电脑", "可一次购买多个月", "到期后手动续期"],
  },
  {
    name: "永久版",
    price: "¥99",
    suffix: "首发价",
    note: "一次购买，长期使用本地功能",
    features: ["全部本地功能", "3 台电脑", "兼容性与安全更新", "未来独立云服务可能不包含"],
    featured: true,
  },
];

export default function PricingPage() {
  return (
    <><Header /><main className="pricing-page wrap">
      <div className="pricing-hero">
        <p className="kicker">Pricing</p>
        <h1>简单、透明，不自动扣费</h1>
        <p>首发价格面向前 100 名付费用户。购买通道接通前不会收取任何费用。</p>
      </div>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article className={`price-card${plan.featured ? " price-featured" : ""}`} key={plan.name}>
            {plan.featured && <b className="price-badge">推荐</b>}
            <p>{plan.name}</p>
            <h2>{plan.price}<small>{plan.suffix}</small></h2>
            <span>{plan.note}</span>
            <ul>{plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
            <span className="button price-button">购买通道配置中</span>
          </article>
        ))}
      </div>
      <section className="pricing-note">
        <div><strong>关于“31 天会员”</strong><p>中国大陆个人首发渠道不支持自动扣款。会员自付款日起有效 31 天，可以一次购买多个月；到期后由用户自主决定是否续期。</p></div>
        <div><strong>关于“永久版”</strong><p>永久使用当前本地文献核对功能，并包含知网、Web of Science 的兼容性维护和安全更新。未来新增的独立云端服务可能单独收费。</p></div>
      </section>
    </main><Footer /></>
  );
}
