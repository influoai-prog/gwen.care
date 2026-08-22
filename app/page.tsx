import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "gwen — The creator growth company",
  description: "We build the content, conversion, and retention systems that turn creator attention into recurring revenue.",
};

const services = [
  { number: "01", label: "Positioning", title: "Become impossible to scroll past.", copy: "We sharpen your brand, offer, and content angles so the right audience instantly understands why they should stay.", tone: "rose" },
  { number: "02", label: "Growth", title: "Turn attention into subscribers.", copy: "We build the traffic and content engine that brings qualified fans into your world every single day.", tone: "blue" },
  { number: "03", label: "Conversion", title: "Make every fan worth more.", copy: "Pricing, DMs, upsells, and buyer journeys work together to lift conversion and increase fan spend.", tone: "cream" },
  { number: "04", label: "Retention", title: "Build revenue that comes back.", copy: "We create retention and reactivation systems that keep subscribers engaged and monthly income compounding.", tone: "ink" },
];

const results = [
  { image: "/chuck-app/images/results/results-3904495.png", value: "$3.9M", title: "Net creator revenue tracked", copy: "A multi-year account built through content, conversion, and retention working as one system." },
  { image: "/chuck-app/images/results/results-5181871.png", value: "$5.18M", title: "Net creator revenue tracked", copy: "Long-term growth driven by consistency, stronger monetization, and a system designed to compound." },
  { image: "/chuck-app/images/results/results-2025-months.png", value: "$100K+", title: "Consistent monthly revenue", copy: "Eight consecutive six-figure months, built without depending on one short-lived viral spike." },
];

const system = [
  ["01", "Position", "Build the brand, offer, and reason fans choose you."],
  ["02", "Create", "Install a content rhythm designed around what converts."],
  ["03", "Convert", "Turn traffic and DMs into paid subscribers and higher spend."],
  ["04", "Compound", "Retain fans, reactivate buyers, and scale the winning moves."],
];

export default function Home() {
  return (
    <main className="gwen-home" id="top">
      <header className="gwen-nav-shell">
        <a className="gwen-wordmark" href="#top" aria-label="gwen home">gwen</a>
        <nav aria-label="Primary navigation"><a href="#services">Services</a><a href="#results">Results</a><a href="#faq">FAQ</a></nav>
        <a className="gwen-nav-cta" href="/chuck">Apply now <span>↗</span></a>
      </header>

      <section className="gwen-hero" aria-labelledby="gwen-hero-title">
        <p className="gwen-kicker"><span>Creator growth systems</span><i>Durden Inc</i></p>
        <h1 id="gwen-hero-title">Turn your attention into a <em>creator business.</em></h1>
        <p className="gwen-hero-copy">gwen builds the content, subscriber growth, conversion, and retention systems behind predictable recurring revenue.</p>
        <div className="gwen-hero-actions"><a className="gwen-button gwen-button-dark" href="/chuck">Apply now <span>↗</span></a><a className="gwen-text-link" href="#system">See the system <span>↓</span></a></div>
        <div className="gwen-hero-board" aria-label="The gwen creator revenue system">
          <div className="gwen-board-top"><span>THE GWEN SYSTEM</span><b>BUILT TO COMPOUND</b></div>
          <div className="gwen-board-flow">
            <article><small>01</small><strong>Content</strong><span>Attention</span></article><i>→</i>
            <article><small>02</small><strong>Traffic</strong><span>Qualified fans</span></article><i>→</i>
            <article><small>03</small><strong>Conversion</strong><span>Paid subscribers</span></article><i>→</i>
            <article><small>04</small><strong>Retention</strong><span>Recurring revenue</span></article>
          </div>
          <div className="gwen-board-stamp">g</div>
        </div>
      </section>

      <section className="gwen-signal" aria-label="What gwen builds"><span>CONTENT THAT CONVERTS</span><i>✦</i><span>MORE PAID SUBSCRIBERS</span><i>✦</i><span>STRONGER FAN SPEND</span><i>✦</i><span>REVENUE THAT RETURNS</span></section>

      <section className="gwen-problem gwen-pad" aria-labelledby="problem-title">
        <div className="gwen-section-tag gwen-section-tag-light"><span>01</span> The real problem</div>
        <div className="gwen-problem-grid">
          <h2 id="problem-title">You do not need more noise.<br /><em>You need a machine.</em></h2>
          <div className="gwen-problem-list">
            <article><span>01</span><div><h3>Attention without conversion</h3><p>Views feel good. A system turns them into subscribers, buyers, and repeat revenue.</p></div></article>
            <article><span>02</span><div><h3>Income without consistency</h3><p>One strong month is not a business. We build the structure that makes growth repeatable.</p></div></article>
            <article><span>03</span><div><h3>Growth without leverage</h3><p>Your best work should compound. We connect every moving part so momentum stops resetting.</p></div></article>
          </div>
        </div>
      </section>

      <section className="gwen-services gwen-pad" id="services" aria-labelledby="services-title">
        <div className="gwen-section-tag"><span>02</span> What we build</div>
        <div className="gwen-section-head"><h2 id="services-title">One team behind your <em>entire growth engine.</em></h2><p>Strategy is only useful when it gets built. We work across the full creator journey, from first impression to recurring fan spend.</p></div>
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
        <div className="gwen-results-head"><h2 id="results-title">Real numbers.<br /><em>Real creator growth.</em></h2><p>Direct from creator dashboards. Individual outcomes vary, but the systems behind strong results are never accidental.</p></div>
        <div className="gwen-results-grid">
          {results.map((result) => (
            <article className="gwen-result-card" key={result.value}>
              <div className="gwen-result-media"><Image src={result.image} alt="Creator earnings dashboard result" width={1600} height={1300} unoptimized /></div>
              <div className="gwen-result-copy"><strong>{result.value}</strong><h3>{result.title}</h3><p>{result.copy}</p></div>
            </article>
          ))}
        </div>
        <p className="gwen-results-note">Results are not guaranteed. Performance depends on the creator, audience, offer, consistency, and market.</p>
      </section>

      <section className="gwen-system gwen-pad" id="system" aria-labelledby="system-title">
        <div className="gwen-section-tag"><span>04</span> The system</div>
        <div className="gwen-system-head"><h2 id="system-title">Your next 60 days,<br /><em>built to compound.</em></h2><a className="gwen-button gwen-button-dark" href="/chuck">Apply now <span>↗</span></a></div>
        <ol className="gwen-system-list">
          {system.map(([number, title, copy]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><i>↘</i></li>)}
        </ol>
      </section>

      <section className="gwen-faq gwen-pad" id="faq" aria-labelledby="faq-title">
        <div className="gwen-section-tag"><span>05</span> FAQ</div>
        <div className="gwen-faq-grid">
          <h2 id="faq-title">Questions before<br /><em>we build?</em></h2>
          <div className="gwen-faq-list">
            <details open><summary>What exactly does gwen do?<span>+</span></summary><p>We build and operate the content, traffic, conversion, and retention systems that help creator businesses grow recurring revenue.</p></details>
            <details><summary>Who is gwen for?<span>+</span></summary><p>Creators with strong potential who want a hands-on growth partner, clearer systems, and a serious plan for scaling.</p></details>
            <details><summary>Will my content still feel like me?<span>+</span></summary><p>Yes. The brand and voice stay yours. Our job is to sharpen what makes you compelling and build the machine around it.</p></details>
            <details><summary>How quickly can we start?<span>+</span></summary><p>Apply through the short form. If there is a fit, we will map the opportunity, agree on the plan, and move quickly.</p></details>
          </div>
        </div>
      </section>

      <section className="gwen-final" aria-labelledby="final-title"><p>BUILT FOR CREATORS READY TO SCALE</p><h2 id="final-title">Turn momentum into<br /><em>your next level.</em></h2><a className="gwen-button gwen-button-dark" href="/chuck">Apply to gwen <span>↗</span></a></section>

      <footer className="gwen-footer">
        <div><a className="gwen-footer-logo" href="#top">gwen</a><span>Durden Inc</span></div>
        <p>Creator growth systems built to compound.</p>
        <nav aria-label="Footer navigation"><a href="#services">Services</a><a href="#results">Results</a><a href="#faq">FAQ</a><a href="/chuck">Apply</a></nav>
      </footer>
    </main>
  );
}
