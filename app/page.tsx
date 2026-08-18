import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gwen — Creator growth, handled",
  description: "A hands-on creator team for content, growth and everything behind the scenes.",
};

export default function Home() {
  return (
    <main id="top">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Gwen home">
          <span className="brand-spark" aria-hidden="true">✦</span>
          gwen
        </a>
        <nav aria-label="Primary navigation">
          <a href="#how">How it works</a>
          <a href="#services">What we do</a>
          <a className="nav-cta" href="#apply">Apply now <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow"><span /> Creator growth, properly handled</p>
        <h1 id="hero-title">You bring the spark.<br />We make it <em>go big.</em></h1>
        <p className="hero-copy">Content, growth and the work behind the scenes—done with you, every week.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#apply">See if we’re a fit <span>↗</span></a>
          <a className="text-link" href="#how">See how Gwen works <span>↓</span></a>
        </div>
        <div className="hero-stage" aria-label="Gwen creator growth snapshot">
          <div className="stage-card stage-card-left"><span>Content day</span><strong>Ideas to posts</strong><i>01</i></div>
          <div className="stage-orbit"><span className="orbit-core">g</span></div>
          <div className="stage-card stage-card-right"><span>Momentum</span><strong>Built weekly</strong><i>02</i></div>
          <div className="stage-note">Made to move<br /><b>with you.</b></div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true"><div>CONTENT THAT HITS ✦ REAL CREATOR SUPPORT ✦ GROWTH WITHOUT THE GUESSWORK ✦ CONTENT THAT HITS ✦ REAL CREATOR SUPPORT ✦</div></div>

      <section className="stuck section-pad" id="how" aria-labelledby="stuck-title">
        <div className="section-label"><span>01</span> The hard part</div>
        <div className="stuck-grid">
          <h2 id="stuck-title">You know you can grow.<br /><em>You shouldn’t have to<br />figure it out alone.</em></h2>
          <div className="stuck-list">
            <p><b>Too many ideas.</b><br />Not enough time to turn them into great posts.</p>
            <p><b>Always guessing.</b><br />What to make, when to post, what actually works.</p>
            <p><b>Everything on you.</b><br />Content, messages, admin and momentum—all at once.</p>
          </div>
        </div>
      </section>

      <section className="services section-pad" id="services" aria-labelledby="services-title">
        <div className="section-label section-label-light"><span>02</span> What Gwen does</div>
        <div className="services-heading">
          <h2 id="services-title">You show up.<br /><em>We make it move.</em></h2>
          <p>A real team around your talent. Here’s what stops being your problem.</p>
        </div>
        <div className="service-grid">
          <article className="service-card service-card-yellow">
            <span className="card-index">01</span><div className="card-icon">✦</div>
            <h3>Your content</h3><p>Ideas, scripts, shoots, edits and posts—built around what feels like you.</p>
          </article>
          <article className="service-card service-card-white">
            <span className="card-index">02</span><div className="card-icon">↗</div>
            <h3>Your growth</h3><p>Clear direction and weekly momentum. Less guessing, more of what works.</p>
          </article>
          <article className="service-card service-card-blue">
            <span className="card-index">03</span><div className="card-icon">☺</div>
            <h3>Your community</h3><p>We help keep fans close and opportunities moving without living in your inbox.</p>
          </article>
          <article className="service-card service-card-ink">
            <span className="card-index">04</span><div className="card-icon">✓</div>
            <h3>Your back office</h3><p>Organised, calm and handled—so your energy stays on the work only you can do.</p>
          </article>
        </div>
      </section>

      <section className="method section-pad" aria-labelledby="method-title">
        <div className="section-label"><span>03</span> The Gwen rhythm</div>
        <div className="method-grid">
          <div className="method-copy">
            <h2 id="method-title">No mystery.<br /><em>Just momentum.</em></h2>
            <p>We keep the plan simple, the feedback fast and the work moving.</p>
          </div>
          <ol className="steps">
            <li><span>01</span><div><b>Find the angle</b><p>We learn your voice, audience and ambition.</p></div><i>↘</i></li>
            <li><span>02</span><div><b>Build the plan</b><p>Ideas become a clear, shoot-ready content rhythm.</p></div><i>↘</i></li>
            <li><span>03</span><div><b>Make it happen</b><p>We create, refine and keep showing up with you.</p></div><i>↘</i></li>
            <li><span>04</span><div><b>Grow what works</b><p>We learn quickly and double down with confidence.</p></div><i>✦</i></li>
          </ol>
        </div>
      </section>

      <section className="promise section-pad" aria-labelledby="promise-title">
        <div className="promise-sticker">THIS IS<br /><b>TEAMWORK</b><br />FOR REAL</div>
        <div className="section-label section-label-light"><span>04</span> Built around you</div>
        <h2 id="promise-title">An actual team.<br /><em>Actually in your corner.</em></h2>
        <p>Quick replies. Clear next steps. People who know your work and care where it goes.</p>
        <div className="promise-strip">
          <div><b>Every week</b><span>A rhythm you can rely on.</span></div>
          <div><b>Every post</b><span>Made to sound and feel like you.</span></div>
          <div><b>Every next move</b><span>Decided together, then done.</span></div>
        </div>
      </section>

      <section className="faq section-pad" aria-labelledby="faq-title">
        <div className="section-label"><span>05</span> Good questions</div>
        <div className="faq-grid">
          <h2 id="faq-title">Before we<br /><em>get going.</em></h2>
          <div className="faq-list">
            <details open><summary>What does Gwen actually do?<span>+</span></summary><p>We help creators make stronger content, grow with direction and keep the work behind the scenes under control.</p></details>
            <details><summary>Do I need a huge audience?<span>+</span></summary><p>No. We care more about your potential, consistency and fit than a single follower number.</p></details>
            <details><summary>Will the content still feel like me?<span>+</span></summary><p>Always. Gwen adds structure and creative support without flattening the personality people follow you for.</p></details>
            <details><summary>How do we start?<span>+</span></summary><p>Send a short application. If there’s a fit, we’ll talk through your goals and what working together could look like.</p></details>
          </div>
        </div>
      </section>

      <section className="apply" id="apply" aria-labelledby="apply-title">
        <div className="apply-sun" aria-hidden="true">✦</div>
        <p className="eyebrow"><span /> By application</p>
        <h2 id="apply-title">Ready for a team<br />that <em>gets it?</em></h2>
        <p>Tell us where you are and where you want to go. We’ll take it from there.</p>
        <a className="button button-dark" href="mailto:hello@gwen.care?subject=Creator%20application">Apply to Gwen <span>↗</span></a>
      </section>

      <footer>
        <div className="footer-top"><a className="footer-brand" href="#top">gwen<span>✦</span></a><p>Creator growth, properly handled.</p></div>
        <div className="footer-links"><a href="#services">What we do</a><a href="#how">How it works</a><a href="#faq-title">FAQ</a><a href="mailto:hello@gwen.care">Contact</a></div>
        <div className="footer-bottom"><span>© 2026 Gwen</span><span>Made for momentum.</span></div>
      </footer>
    </main>
  );
}
