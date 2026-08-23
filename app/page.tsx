import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "gwen | OnlyFans growth and management",
  description: "gwen builds and operates the content, traffic, conversion, monetization, and retention systems behind serious OnlyFans creator businesses.",
};

const services = [
  { number: "01", label: "Offer", title: "Give fans a reason to subscribe.", copy: "We sharpen your positioning, page offer, pricing, and content promise so the right fan knows exactly why they should pay.", tone: "rose" },
  { number: "02", label: "Traffic", title: "Bring in fans who actually buy.", copy: "We build your channel plan, content angles, posting rhythm, and profile funnel around qualified traffic instead of empty views.", tone: "blue" },
  { number: "03", label: "Monetization", title: "Turn new fans into real spend.", copy: "We improve your welcome flow, paid messages, PPV offers, pricing, and upsell paths so attention has somewhere profitable to go.", tone: "cream" },
  { number: "04", label: "Retention", title: "Keep your best fans spending longer.", copy: "We build renewal, reactivation, and VIP journeys that give good subscribers a reason to stay active and keep buying.", tone: "ink" },
];

const results = [
  { image: "/chuck-app/images/results/results-3904495.png", value: "$3.9M", title: "Net revenue on one creator account", copy: "Multi-year performance across subscriptions, tips, posts, messages, referrals, and streams, shown directly from the creator dashboard." },
  { image: "/chuck-app/images/results/results-5181871.png", value: "$5.18M", title: "Net revenue built over time", copy: "Long-term account performance powered by consistent traffic, stronger fan monetization, and retention that did not rely on one spike." },
  { image: "/chuck-app/images/results/results-2025-months.png", value: "$100K+", title: "Eight straight six-figure months", copy: "January through August 2025 ranged from $103K to $212K per month, shown directly from the monthly earnings view." },
];

const system = [
  ["01", "Find the leaks", "Audit your profile, pricing, traffic, content, paid offers, messages, and retention."],
  ["02", "Build the offer", "Set the positioning, page promise, pricing, welcome flow, and reasons fans buy."],
  ["03", "Install the engine", "Launch the content plan, traffic system, conversion flows, and weekly reporting."],
  ["04", "Scale what pays", "Cut weak plays, push the winners, and improve fan value and retention every week."],
];

export default function Home() {
  return (
    <main className="gwen-home" id="top">
      <header className="gwen-nav-shell">
        <a className="gwen-wordmark" href="#top" aria-label="gwen home">gwen</a>
        <nav aria-label="Primary navigation"><a href="#services">Services</a><a href="#results">Results</a><a href="#faq">FAQ</a></nav>
        <a className="gwen-nav-cta" href="/chuck">Apply now</a>
      </header>

      <section className="gwen-hero" aria-labelledby="gwen-hero-title">
        <h1 id="gwen-hero-title">Turn your OnlyFans into a <em>real creator business.</em></h1>
        <p className="gwen-hero-copy">Give us 60 days. We build the content plan, traffic engine, paid conversion, fan sales, and retention systems while you stay focused on creating.</p>
        <div className="gwen-hero-actions"><a className="gwen-button gwen-button-dark" href="/chuck">Apply now <span>↗</span></a><a className="gwen-text-link" href="#system">See the system <span>↓</span></a></div>
        <div className="gwen-hero-board" aria-label="The gwen creator revenue system">
          <div className="gwen-board-top"><span>THE GWEN SYSTEM</span><b>BUILT IN 60 DAYS</b></div>
          <div className="gwen-board-flow">
            <article><small>01</small><strong>Offer</strong><span>Why fans pay</span></article><i>→</i>
            <article><small>02</small><strong>Traffic</strong><span>Fans who fit</span></article><i>→</i>
            <article><small>03</small><strong>Sales</strong><span>More fan spend</span></article><i>→</i>
            <article><small>04</small><strong>Retention</strong><span>More renewals</span></article>
          </div>
          <div className="gwen-board-stamp">g</div>
        </div>
      </section>

      <section className="gwen-signal" aria-label="What gwen builds"><span>BETTER CONTENT OFFERS</span><i>✦</i><span>MORE QUALIFIED FANS</span><i>✦</i><span>HIGHER FAN SPEND</span><i>✦</i><span>STRONGER RETENTION</span></section>

      <section className="gwen-problem gwen-pad" aria-labelledby="problem-title">
        <div className="gwen-section-tag gwen-section-tag-light"><span>01</span> The real problem</div>
        <div className="gwen-problem-grid">
          <h2 id="problem-title">Your content is not the problem.<br /><em>The business behind it is.</em></h2>
          <div className="gwen-problem-list">
            <article><span>01</span><div><h3>Your traffic is random</h3><p>Posting more is not a growth plan. We turn social content and promotion into a steady flow of qualified fans.</p></div></article>
            <article><span>02</span><div><h3>New fans do not spend enough</h3><p>Weak pricing, welcome flows, paid offers, and messages leave money untouched. We fix the path from first click to first purchase.</p></div></article>
            <article><span>03</span><div><h3>You are doing every job</h3><p>Content, posting, sales, analytics, and retention should not all live in your head. We build the operating team around you.</p></div></article>
          </div>
        </div>
      </section>

      <section className="gwen-services gwen-pad" id="services" aria-labelledby="services-title">
        <div className="gwen-section-tag"><span>02</span> What we build</div>
        <div className="gwen-section-head"><h2 id="services-title">We run the business behind your <em>OnlyFans growth.</em></h2><p>You create. We handle strategy, content planning, traffic, account conversion, fan monetization, retention, and weekly performance decisions.</p></div>
        <div className="gwen-service-grid">
          {services.map((service) => (
            <article className={`gwen-service-card gwen-service-card-${service.tone}`} key={service.number}>
              <div className="gwen-card-meta"><span>{service.number}</span><b>{service.label}</b></div>
              <div className="gwen-card-mark" aria-hidden="true">{service.number === "01" ? "✦" : service.number === "02" ? "↗" : service.number === "03" ? "+" : "∞"}</div>
              <div><h3>{service.title}</h3><p>{service.copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="gwen-results gwen-pad" id="results" aria-labelledby="results-title">
        <div className="gwen-section-tag"><span>03</span> Real results</div>
        <div className="gwen-results-head"><h2 id="results-title">Creator revenue.<br /><em>Shown, not promised.</em></h2><p>These are dashboard results from individual creator accounts. They show what is possible, not what every creator should expect.</p></div>
        <div className="gwen-results-grid">
          {results.map((result) => (
            <article className="gwen-result-card" key={result.value}>
              <div className="gwen-result-media"><Image src={result.image} alt="Creator earnings dashboard result" fill sizes="(max-width: 760px) calc(100vw - 40px), 31vw" unoptimized /></div>
              <div className="gwen-result-copy"><strong>{result.value}</strong><h3>{result.title}</h3><p>{result.copy}</p></div>
            </article>
          ))}
        </div>
        <p className="gwen-results-note">Results are not guaranteed. Performance depends on the creator, audience, offer, consistency, and market.</p>
      </section>

      <section className="gwen-system gwen-pad" id="system" aria-labelledby="system-title">
        <div className="gwen-section-tag"><span>04</span> The system</div>
        <div className="gwen-system-head"><h2 id="system-title">What we build in your<br /><em>first 60 days.</em></h2><a className="gwen-button gwen-button-dark" href="/chuck">Apply now <span>↗</span></a></div>
        <ol className="gwen-system-list">
          {system.map(([number, title, copy]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><i>↘</i></li>)}
        </ol>
      </section>

      <section className="gwen-faq gwen-pad" id="faq" aria-labelledby="faq-title">
        <div className="gwen-section-tag"><span>05</span> FAQ</div>
        <div className="gwen-faq-grid">
          <h2 id="faq-title">Questions before<br /><em>we build?</em></h2>
          <div className="gwen-faq-list">
            <details open><summary>Is gwen an OnlyFans agency?<span>+</span></summary><p>Yes. gwen is a growth and management partner for adult creators. We work across your offer, content strategy, traffic, account conversion, fan monetization, retention, and reporting.</p></details>
            <details><summary>Who is a strong fit?<span>+</span></summary><p>Creators aged 18 or older who are already producing content, take the business seriously, respect clear boundaries, and want a hands-on team to help them grow.</p></details>
            <details><summary>What do I still control?<span>+</span></summary><p>You keep your brand, voice, content boundaries, and final say. We agree on the strategy together and run the business systems around your creative work.</p></details>
            <details><summary>Do you guarantee income?<span>+</span></summary><p>No. Nobody credible can guarantee a creator&apos;s income. We build, test, measure, and improve the parts of the business we can control.</p></details>
            <details><summary>How quickly can we start?<span>+</span></summary><p>Apply through the short form. If the fit is right, we review your current account, agree on priorities and boundaries, then map the first 60 days.</p></details>
          </div>
        </div>
      </section>

      <section className="gwen-final" aria-labelledby="final-title"><p>FOR ADULT CREATORS READY TO BUILD PROPERLY</p><h2 id="final-title">Stop winging it.<br /><em>Build the account properly.</em></h2><a className="gwen-button gwen-button-dark" href="/chuck">Apply to work with gwen <span>↗</span></a></section>

      <div className="gwen-footer-shell">
        <footer className="gwen-footer" aria-label="Footer">
          <div className="gwen-footer-top">
            <div className="gwen-footer-brand-column">
              <a className="gwen-footer-brand" href="#top" aria-label="gwen home"><strong>gwen</strong><span>Durden Inc</span></a>
              <p>The business team behind serious OnlyFans creators.</p>
            </div>
            <nav className="gwen-footer-nav" aria-label="Footer navigation">
              <div><a href="#services">Service</a><a href="#services">Agency</a><a href="#system">Process</a></div>
              <div><a href="#results">Results</a><a href="mailto:hello@gwen.care">Contact</a><a href="/chuck">Apply now</a></div>
            </nav>
          </div>
          <div className="gwen-footer-bottom"><span>© gwen 2026</span><div><a href="/privacy-policy">Privacy policy</a><a href="/terms-of-service">Terms</a></div></div>
        </footer>
      </div>
    </main>
  );
}
