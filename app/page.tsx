import type { Metadata } from "next";
import Image from "next/image";
import { ApplicationProvider, ApplyButton } from "./application-modal";

export const metadata: Metadata = {
  title: "gwen | OnlyFans growth and management",
  description: "gwen builds and operates the systems behind serious OnlyFans creator businesses. That includes content and traffic. It also covers sales and retention.",
};

const services = [
  { number: "01", label: "Offer", title: "Give fans a reason to subscribe.", copy: "We sharpen your positioning and page offer. Then we set pricing and a content promise that gives the right fan a clear reason to pay.", tone: "rose" },
  { number: "02", label: "Traffic", title: "Bring in fans who actually buy.", copy: "We build a channel plan and posting rhythm around qualified traffic. Every content angle and profile step has a job.", tone: "blue" },
  { number: "03", label: "Monetization", title: "Turn new fans into real spend.", copy: "We improve the welcome flow and paid messages. PPV, pricing and upsells give attention somewhere profitable to go.", tone: "cream" },
  { number: "04", label: "Retention", title: "Keep your best fans spending longer.", copy: "We build renewal and reactivation journeys for your best fans. VIP buyers get a clear reason to stay active and keep buying.", tone: "ink" },
];

const results = [
  { image: "/chuck-app/images/results/results-3904495.png", value: "$3.9M", title: "Net revenue on one creator account", copy: "The dashboard shows multi-year performance across every revenue stream. That covers subscriptions and tips through messages and streams." },
  { image: "/chuck-app/images/results/results-5181871.png", value: "$5.18M", title: "Net revenue built over time", copy: "Long-term performance came from consistent traffic and stronger fan monetization. Retention mattered more than a single spike." },
  { image: "/chuck-app/images/results/results-2025-months.png", value: "$100K+", title: "Eight straight six-figure months", copy: "The monthly earnings view shows January through August 2025. Revenue ranged from $103K to $212K per month." },
];

const system = [
  ["01", "Find the leaks", "Audit the full customer path from profile visit to renewal."],
  ["02", "Build the offer", "Set the positioning and page promise. Then lock in pricing and the welcome flow."],
  ["03", "Install the engine", "Launch the content and traffic plan. Connect it to conversion flows and weekly reporting."],
  ["04", "Scale what pays", "Cut weak plays and push the winners. Improve fan value and retention every week."],
];

export default function Home() {
  return (
    <ApplicationProvider>
    <main className="gwen-home" id="top">
      <header className="gwen-nav-shell">
        <a className="gwen-wordmark" href="#top" aria-label="gwen home">gwen</a>
        <nav aria-label="Primary navigation"><a href="#services">Services</a><a href="#results">Results</a><a href="#faq">FAQ</a></nav>
        <ApplyButton className="gwen-nav-cta">Apply now</ApplyButton>
      </header>

      <section className="gwen-hero" aria-labelledby="gwen-hero-title">
        <h1 id="gwen-hero-title">Turn your OnlyFans into a <em>real creator business.</em></h1>
        <p className="gwen-hero-copy">Give us 60 days. We build the content plan and traffic engine. Then we improve paid conversion, fan sales and retention while you stay focused on creating.</p>
        <div className="gwen-hero-actions"><ApplyButton className="gwen-button gwen-button-dark">Apply now <span>↗</span></ApplyButton><a className="gwen-text-link" href="#system">See the system <span>↓</span></a></div>
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
            <article><span>02</span><div><h3>New fans do not spend enough</h3><p>Fans drop when pricing and offers feel random. We fix the welcome flow and the path from first click to first purchase.</p></div></article>
            <article><span>03</span><div><h3>You are doing every job</h3><p>You should not have to run the whole account alone. We handle the operations so you can focus on content.</p></div></article>
          </div>
        </div>
      </section>

      <section className="gwen-services gwen-pad" id="services" aria-labelledby="services-title">
        <div className="gwen-section-tag"><span>02</span> What we build</div>
        <div className="gwen-section-head"><h2 id="services-title">We run the business behind your <em>OnlyFans growth.</em></h2><p>You create. We run everything from strategy and traffic to monetization and retention. Weekly decisions come from real account data.</p></div>
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
        <p className="gwen-results-note">Results are not guaranteed. Performance depends on your audience and offer. Consistency and market conditions matter too.</p>
      </section>

      <section className="gwen-system gwen-pad" id="system" aria-labelledby="system-title">
        <div className="gwen-section-tag"><span>04</span> The system</div>
        <div className="gwen-system-head"><h2 id="system-title">What we build in your<br /><em>first 60 days.</em></h2><ApplyButton className="gwen-button gwen-button-dark">Apply now <span>↗</span></ApplyButton></div>
        <ol className="gwen-system-list">
          {system.map(([number, title, copy]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><i>↘</i></li>)}
        </ol>
      </section>

      <section className="gwen-faq gwen-pad" id="faq" aria-labelledby="faq-title">
        <div className="gwen-section-tag"><span>05</span> FAQ</div>
        <div className="gwen-faq-grid">
          <h2 id="faq-title">Questions before<br /><em>we build?</em></h2>
          <div className="gwen-faq-list">
            <details open><summary>Is gwen an OnlyFans agency?<span>+</span></summary><p>Yes. gwen is a growth and management partner for adult creators. We handle the business layer from offer to reporting. That includes growth and conversion. It also covers monetization and retention.</p></details>
            <details><summary>Who is a strong fit?<span>+</span></summary><p>You must be 18 or older and already producing content. The best fit takes the business seriously, respects clear boundaries and wants a hands-on growth team.</p></details>
            <details><summary>What do I still control?<span>+</span></summary><p>You keep your brand and voice. You also control your content boundaries and final decisions. We run the business systems around your creative work.</p></details>
            <details><summary>Do you guarantee income?<span>+</span></summary><p>No. Nobody credible can guarantee a creator&apos;s income. We build and test the parts of the business we can control. Then we measure what works and improve it.</p></details>
            <details><summary>How quickly can we start?<span>+</span></summary><p>Apply through the short form. If the fit is right we review your account first. Then we agree on priorities and boundaries before mapping the first 60 days.</p></details>
          </div>
        </div>
      </section>

      <section className="gwen-final" aria-labelledby="final-title"><p>FOR ADULT CREATORS READY TO BUILD PROPERLY</p><h2 id="final-title">Stop winging it.<br /><em>Build the account properly.</em></h2><ApplyButton className="gwen-button gwen-button-dark">Apply to work with gwen <span>↗</span></ApplyButton></section>

      <div className="gwen-footer-shell">
        <footer className="gwen-footer" aria-label="Footer">
          <div className="gwen-footer-top">
            <div className="gwen-footer-brand-column">
              <a className="gwen-footer-brand" href="#top" aria-label="gwen home"><strong>gwen</strong><span>Durden Inc</span></a>
              <p>The business team behind serious OnlyFans creators.</p>
            </div>
            <nav className="gwen-footer-nav" aria-label="Footer navigation">
              <div><a href="#services">Service</a><a href="#services">Agency</a><a href="#system">Process</a></div>
              <div><a href="#results">Results</a><a href="mailto:hello@gwen.care">Contact</a><ApplyButton className="gwen-footer-apply">Apply now</ApplyButton></div>
            </nav>
          </div>
          <div className="gwen-footer-bottom"><span>© gwen 2026</span><div><a href="/privacy-policy">Privacy policy</a><a href="/terms-of-service">Terms</a></div></div>
        </footer>
      </div>
    </main>
    </ApplicationProvider>
  );
}
