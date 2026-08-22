"use client";

import { useState } from "react";

const services = [
  ["Costs & Margins", "Find hidden costs cutting into profit."],
  ["Systems & Workflow", "Fix slow processes and automate draining work."],
  ["Growth & Capacity", "Turn saved time and cash into margin and growth."],
];

const wins = ["Spend uncovered", "Hours reclaimed", "Cash retained", "Capacity created", "Growth accelerated", "Systems simplified"];

const steps = [
  ["Discover", "Trace friction", "Find what’s slowing work down, wasting time, or draining value."],
  ["Prioritize", "Find the wins", "Rank each fix by impact, effort, urgency, and potential upside."],
  ["Plan", "Map the plan", "Turn the findings into a clear rollout plan with priorities and timing."],
  ["Build", "Build the systems", "Create the systems, workflows, and automations needed to run better."],
  ["Launch", "Put it live", "Launch fast, test it in the real business, and refine what matters."],
  ["Improve", "Compound gains", "Track the impact, improve what works, and expand it across the business."],
];

const faqs = [
  ["What does gwen actually do?", "We find where your business is wasting time and money, then build and implement the systems to fix it."],
  ["How do you find where money is being wasted?", "We audit your workflows, tools, team structure and recurring processes to find unnecessary spend, bottlenecks and manual work."],
  ["What happens after you map our operations?", "We show you what is costing you money, what should change and where the biggest upside is. Then we implement the fixes."],
  ["How quickly can we expect to see an impact?", "The biggest inefficiencies usually become clear early. We prioritise the changes that can create the fastest meaningful impact."],
  ["Will we need to replace our current tools or team?", "Usually not. The goal is to get more out of what you already have before adding complexity."],
  ["What kind of businesses are a good fit for gwen?", "Established businesses with real revenue, growing teams and enough operational complexity that small inefficiencies are becoming expensive."],
];

export default function ChuckPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [booking, setBooking] = useState(false);

  return (
    <main className="gsoap" id="top">
      <style>{css}</style>

      <header className="gsoap-nav">
        <a className="gsoap-brand" href="#top"><i>✦</i><strong>gwen</strong><span>Labs</span></a>
        <nav aria-label="Primary navigation">
          <a href="#agency">Services</a><a href="#process">Process</a><a href="#faq">FAQ</a>
          <button onClick={() => setBooking(true)}>Book a call</button>
        </nav>
      </header>

      <section className="gsoap-hero">
        <div className="gsoap-hero-copy">
          <h1><span>Your Business Is Leaking</span><em>Money Right Now</em></h1>
          <p>We find the costs, bottlenecks and wasted hours dragging down your margins then turn them into profit.</p>
        </div>
        <div className="gsoap-work-card"><span>Doing work</span><b>✦</b></div>
        <div className="gsoap-hero-actions"><button className="gsoap-button" onClick={() => setBooking(true)}>Book a call ↗</button><a href="#process">Explore more ↓</a></div>
      </section>

      <section className="gsoap-value" id="agency">
        <div className="gsoap-section-head"><small>01 / WHAT WE FIX</small><h2>Value Creation<br />Process</h2><p>We find where time and money are being lost, then build the systems that win both back.</p></div>
        <div className="gsoap-service-grid">
          {services.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><div className="gsoap-orbit">{index === 0 ? "↘" : index === 1 ? "⌁" : "↗"}</div><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="gsoap-build">
        <div className="gsoap-build-copy"><small>02 / THE UPSIDE</small><h2>Build More<br /><em>With What You Have</em></h2><p>We find the operational drag keeping your business from performing at its best. Then free up the cash, time and capacity you need to move faster.</p></div>
        <div className="gsoap-win-grid">{wins.map((win, index) => <article key={win}><b>0{index + 1}</b><span>{win}</span></article>)}</div>
      </section>

      <section className="gsoap-growth">
        <div className="gsoap-growth-art"><div /><span>↗</span></div>
        <div><small>03 / OPERATE BETTER</small><h2>Turn Waste<br /><em>Into Growth</em></h2><p>Cleaner operations and less dependence on people holding everything together. We build the infrastructure your business needs to scale without adding more complexity.</p><button className="gsoap-button gsoap-button-light" onClick={() => setBooking(true)}>Find the waste ↗</button></div>
      </section>

      <section className="gsoap-process" id="process">
        <div className="gsoap-section-head"><small>04 / HOW IT WORKS</small><h2>From friction<br />to momentum.</h2><p>Six clear moves. No endless strategy phase.</p></div>
        <div className="gsoap-step-grid">{steps.map(([tag, title, body], index) => <article key={title}><div><b>0{index + 1}</b><span>{tag}</span></div><h3>{title}</h3><p>{body}</p><i>{index === steps.length - 1 ? "✦" : "↘"}</i></article>)}</div>
        <div className="gsoap-mid-cta"><h3>Let’s find what your business is leaving on the table.</h3><button className="gsoap-button" onClick={() => setBooking(true)}>See our plans ↗</button></div>
      </section>

      <section className="gsoap-proof">
        <small>05 / CLIENT NOTE</small><blockquote>“gwen mapped where our margins were leaking, then built the operating system that closed the gaps. Within weeks, our team had fewer handoffs, clearer ownership and more time for growth.”</blockquote><div><span>Operations lead</span><b>01/01</b></div>
      </section>

      <section className="gsoap-faq" id="faq">
        <div><small>06 / GOOD TO KNOW</small><h2>Frequently Asked<br /><em>Questions</em></h2></div>
        <div>{faqs.map(([question, answer], index) => <article className={openFaq === index ? "is-active" : ""} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><b>{openFaq === index ? "×" : "+"}</b></button><p className={openFaq === index ? "is-open" : ""}>{answer}</p></article>)}</div>
      </section>

      <section className="gsoap-legal"><article><span>Privacy</span><p>We only collect what we need and never sell your data.</p><a href="/privacy-policy">Read policy →</a></article><article><span>Terms</span><p>Work is delivered under a written agreement.</p><a href="/terms-of-service">Read terms →</a></article></section>

      <footer className="gsoap-footer"><div className="gsoap-footer-brand"><a className="gsoap-brand" href="#top"><i>✦</i><strong>gwen</strong><span>Labs</span></a><p>Better operations. Less waste. More room to grow.</p></div><nav><div><a href="#agency">Services</a><a href="#agency">Agency</a><a href="#process">Process</a></div><div><a href="#proof">Testimonials</a><a href="mailto:hello@gwen.care">Contact</a><button onClick={() => setBooking(true)}>Book a call</button></div></nav><small>© gwen 2026</small><div className="gsoap-footer-legal"><a href="/privacy-policy">Privacy policy</a><a href="/terms-of-service">Terms</a></div></footer>

      {booking && <div className="gsoap-modal" role="dialog" aria-modal="true" aria-label="Book a call"><button className="gsoap-backdrop" onClick={() => setBooking(false)} aria-label="Close" /><section><button className="gsoap-close" onClick={() => setBooking(false)}>×</button><small>START HERE</small><h2>Find what your business is leaving on the table.</h2><p>Tell us where to reach you and we’ll start with the most useful conversation.</p><a className="gsoap-button" href="mailto:hello@gwen.care?subject=Operations%20call">Email hello@gwen.care ↗</a></section></div>}
    </main>
  );
}

const css = `
:root{--g-blue:#9bd4f7;--g-blue-deep:#5caee0;--g-yellow:#ffed76;--g-ink:#0b0c0d;--g-paper:#fbfbfa;--g-line:#d8d9d8}.gsoap{background:var(--g-ink);color:var(--g-ink);font-family:Arial,Helvetica,sans-serif;min-height:100vh;overflow:hidden}.gsoap *{box-sizing:border-box}.gsoap button,.gsoap a{font:inherit}.gsoap-nav{position:fixed;z-index:50;top:20px;left:50%;transform:translateX(-50%);width:min(760px,calc(100% - 32px));height:58px;padding:7px 8px 7px 16px;border:1px solid #dfdfdf;border-radius:999px;background:rgba(248,248,247,.91);backdrop-filter:blur(18px);display:flex;align-items:center;justify-content:space-between;box-shadow:0 10px 40px #0000000d}.gsoap-brand{display:flex;align-items:baseline;gap:4px;color:inherit;text-decoration:none}.gsoap-brand i{align-self:center;width:27px;height:27px;margin-right:4px;border-radius:50%;background:var(--g-blue);display:grid;place-items:center;font-style:normal;font-size:12px}.gsoap-brand strong{font-size:21px;letter-spacing:-1.2px}.gsoap-brand span{font-size:9px;color:#777}.gsoap-nav nav{display:flex;align-items:center;gap:24px}.gsoap-nav nav a{font-size:11px;text-decoration:none;color:#333}.gsoap-nav nav button,.gsoap-footer nav button{border:0;background:var(--g-ink);color:#fff;border-radius:999px;padding:13px 18px;font-size:11px;cursor:pointer}.gsoap-hero{min-height:1180px;padding:190px 6vw 90px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:64px;background:var(--g-paper)}.gsoap-hero-copy{text-align:center;width:min(94vw,1800px)}.gsoap-hero h1{font-size:clamp(52px,8.3vw,178px);line-height:.84;letter-spacing:-.075em;margin:0;font-weight:700}.gsoap-hero h1>span,.gsoap-hero h1>em{display:block;white-space:nowrap}.gsoap-hero h1>em{position:relative;z-index:1;width:max-content;margin:12px auto 0;font-family:Georgia,'Times New Roman',serif;font-size:1.08em;font-weight:400;line-height:.88;color:var(--g-blue-deep);letter-spacing:-.07em}.gsoap-hero h1>em:after{content:'';position:absolute;z-index:-1;left:-2%;right:-2%;height:.22em;bottom:.03em;border-radius:999px;background:var(--g-yellow);transform:rotate(-1.2deg)}.gsoap h2 em{font-style:normal;color:var(--g-blue-deep)}.gsoap-hero-copy>p{max-width:580px;margin:42px auto 5px;font-size:15px;line-height:1.55;color:#5c5f5f}.gsoap-hero-actions{display:flex;justify-content:center;align-items:center;gap:25px;margin-top:-8px}.gsoap-hero-actions>a{color:#222;font-size:12px}.gsoap-button{display:inline-flex;border:0;border-radius:999px;padding:15px 22px;background:var(--g-ink);color:white;text-decoration:none;cursor:pointer;font-size:12px;font-weight:700}.gsoap-work-card{width:min(1040px,90vw);height:520px;border:16px solid #f1f1f0;border-radius:30px;background:radial-gradient(circle at 50% 110%,#86c8ef66,transparent 48%),#050607;color:white;display:grid;place-items:center;position:relative;box-shadow:0 30px 70px #00000018}.gsoap-work-card span{font-size:50px;font-weight:700;letter-spacing:-.055em}.gsoap-work-card b{position:absolute;right:30px;bottom:24px;color:var(--g-blue);font-size:28px}.gsoap-value,.gsoap-process{padding:130px max(5vw,24px);background:var(--g-paper)}.gsoap-section-head{display:grid;grid-template-columns:1fr 2fr 1fr;gap:50px;align-items:end;margin-bottom:70px}.gsoap small{font-size:9px;font-weight:700;letter-spacing:.15em}.gsoap-section-head h2,.gsoap-build h2,.gsoap-growth h2,.gsoap-faq h2{font-size:clamp(54px,6vw,90px);line-height:.88;letter-spacing:-.07em;margin:0}.gsoap-section-head p{font-size:14px;line-height:1.55}.gsoap-service-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.gsoap-service-grid article{min-height:500px;border:1px solid var(--g-ink);border-radius:22px;padding:25px;display:flex;flex-direction:column}.gsoap-service-grid article:nth-child(1){background:var(--g-blue)}.gsoap-service-grid article:nth-child(2){background:#f4f4f3}.gsoap-service-grid article:nth-child(3){background:#dff1fc}.gsoap-service-grid article>span{font-size:10px}.gsoap-orbit{width:130px;height:130px;border:1px solid;border-radius:50%;display:grid;place-items:center;margin:70px auto;font-size:36px}.gsoap-service-grid h3{font-size:30px;line-height:.95;letter-spacing:-.055em;margin:0 0 18px}.gsoap-service-grid p{font-size:13px;line-height:1.5;margin:0}.gsoap-build{background:var(--g-blue);padding:130px max(5vw,24px);display:grid;grid-template-columns:1fr 1.25fr;gap:80px}.gsoap-build-copy p{max-width:480px;line-height:1.55;margin-top:35px}.gsoap-win-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.gsoap-win-grid article{min-height:160px;background:#fff;border:1px solid var(--g-ink);border-radius:18px;padding:20px;display:flex;flex-direction:column;justify-content:space-between}.gsoap-win-grid b{font-size:10px}.gsoap-win-grid span{font-size:23px;letter-spacing:-.04em}.gsoap-growth{background:var(--g-ink);color:#fff;padding:130px max(5vw,24px);display:grid;grid-template-columns:1fr 1fr;gap:90px;align-items:center}.gsoap-growth-art{height:570px;background:linear-gradient(135deg,#12191d,#070707);border:1px solid #444;border-radius:26px;position:relative;overflow:hidden}.gsoap-growth-art div{width:320px;height:320px;border:1px solid var(--g-blue);border-radius:50%;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);box-shadow:0 0 100px #9bd4f744}.gsoap-growth-art span{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:95px;color:var(--g-blue)}.gsoap-growth h2{margin:24px 0 30px}.gsoap-growth p{color:#b8baba;line-height:1.6;max-width:550px}.gsoap-button-light{background:#fff;color:#000;margin-top:20px}.gsoap-step-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.gsoap-step-grid article{min-height:310px;border:1px solid var(--g-line);border-radius:20px;padding:22px;position:relative;background:#f4f4f3}.gsoap-step-grid article:nth-child(2),.gsoap-step-grid article:nth-child(5){background:#dff1fc}.gsoap-step-grid article:nth-child(3){background:var(--g-blue)}.gsoap-step-grid article>div{display:flex;justify-content:space-between;font-size:10px;text-transform:uppercase}.gsoap-step-grid h3{font-size:29px;letter-spacing:-.05em;margin:90px 0 12px}.gsoap-step-grid p{font-size:13px;line-height:1.5;max-width:320px}.gsoap-step-grid i{position:absolute;right:22px;bottom:20px;font-style:normal;font-size:25px}.gsoap-mid-cta{margin-top:90px;background:var(--g-blue);border-radius:24px;padding:50px;display:flex;justify-content:space-between;align-items:center}.gsoap-mid-cta h3{font-size:clamp(30px,4vw,58px);max-width:800px;letter-spacing:-.055em;margin:0}.gsoap-proof{padding:150px max(8vw,32px);background:#f0f0ef}.gsoap-proof blockquote{font-size:clamp(35px,5vw,70px);line-height:1.02;letter-spacing:-.055em;max-width:1150px;margin:50px 0}.gsoap-proof>div{display:flex;justify-content:space-between;border-top:1px solid;padding-top:20px}.gsoap-faq{padding:145px max(5vw,24px);display:grid;grid-template-columns:.95fr 1.4fr;gap:90px;background:var(--g-paper)}.gsoap-faq>div:first-child small{display:block;margin-bottom:35px}.gsoap-faq h2 em{color:var(--g-ink)}.gsoap-faq article{border-top:1px solid #e2e2e2;transition:.25s}.gsoap-faq article:last-child{border-bottom:1px solid #e2e2e2}.gsoap-faq article.is-active{border:0;border-radius:25px;background:#f1f1f1;padding:0 28px;margin:0 -28px 14px}.gsoap-faq article button{width:100%;padding:28px 0;border:0;background:none;display:flex;justify-content:space-between;text-align:left;font-size:18px;font-weight:700;cursor:pointer;color:#5c5c5c}.gsoap-faq article.is-active button{color:#303233}.gsoap-faq article button b{font-size:23px;font-weight:400}.gsoap-faq article p{max-height:0;overflow:hidden;margin:0;line-height:1.55;color:#6f7272;transition:.3s}.gsoap-faq article p.is-open{max-height:150px;padding:0 38px 28px 0}.gsoap-legal{position:relative;z-index:2;min-height:380px;display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--g-line);border-radius:0 0 34px 34px;background:var(--g-paper);overflow:hidden}.gsoap-legal article{padding:70px max(5vw,24px)}.gsoap-legal article+article{border-left:1px solid var(--g-line)}.gsoap-legal span{font-size:32px;font-weight:700;letter-spacing:-.04em}.gsoap-legal p{color:#666}.gsoap-legal a{color:var(--g-ink);font-weight:700;text-decoration:none}.gsoap-footer{min-height:520px;margin-top:-34px;background:#121313;color:#fff;padding:105px max(6vw,38px) 38px;display:grid;grid-template-columns:1.5fr 1fr;grid-template-rows:1fr auto;gap:60px;align-items:start}.gsoap-footer-brand .gsoap-brand{width:max-content}.gsoap-footer-brand p{font-size:14px;color:#aaa;max-width:430px;letter-spacing:-.01em;margin:32px 0 0}.gsoap-footer nav{display:grid;grid-template-columns:1fr 1fr;gap:80px;justify-self:end}.gsoap-footer nav>div{display:flex;flex-direction:column;align-items:flex-start;gap:18px}.gsoap-footer nav a,.gsoap-footer nav button{padding:0;border:0;background:none;color:#ddd;text-decoration:none;font-size:13px}.gsoap-footer nav button{cursor:pointer}.gsoap-footer small{align-self:end;color:#888}.gsoap-footer-legal{align-self:end;justify-self:end;display:flex;gap:25px}.gsoap-footer-legal a{color:#888;text-decoration:none;font-size:12px}.gsoap-modal{position:fixed;z-index:100;inset:0;display:grid;place-items:center}.gsoap-backdrop{position:absolute;inset:0;border:0;background:#0b0c0dcc;backdrop-filter:blur(8px)}.gsoap-modal section{position:relative;background:var(--g-paper);width:min(620px,calc(100% - 32px));padding:55px;border-radius:25px;box-shadow:12px 14px 0 var(--g-blue)}.gsoap-modal h2{font-size:47px;letter-spacing:-.06em;line-height:.95}.gsoap-modal p{line-height:1.55;color:#555}.gsoap-close{position:absolute;right:18px;top:13px;border:0;background:none;font-size:32px;cursor:pointer}@media(max-width:800px){.gsoap-nav nav a{display:none}.gsoap-nav nav{gap:0}.gsoap-hero{min-height:980px;padding:150px 16px 75px;gap:55px}.gsoap-hero h1{font-size:clamp(39px,11vw,60px);line-height:.92}.gsoap-hero h1>em{margin-top:8px;font-size:1.05em}.gsoap-hero-copy>p{margin-top:32px}.gsoap-work-card{height:280px;border-width:10px}.gsoap-work-card span{font-size:36px}.gsoap-hero-actions{margin-top:0}.gsoap-section-head,.gsoap-build,.gsoap-growth,.gsoap-faq{grid-template-columns:1fr}.gsoap-section-head{gap:25px}.gsoap-service-grid,.gsoap-step-grid{grid-template-columns:1fr}.gsoap-build,.gsoap-growth{gap:50px}.gsoap-win-grid{grid-template-columns:1fr 1fr}.gsoap-growth-art{height:390px}.gsoap-mid-cta{padding:32px;align-items:flex-start;gap:30px;flex-direction:column}.gsoap-proof{padding-block:95px}.gsoap-faq{gap:55px}.gsoap-faq article.is-active{margin-inline:0}.gsoap-legal{min-height:0;grid-template-columns:1fr}.gsoap-legal article+article{border-left:0;border-top:1px solid var(--g-line)}.gsoap-footer{min-height:610px;grid-template-columns:1fr;grid-template-rows:auto auto 1fr auto;gap:42px}.gsoap-footer nav{justify-self:start;gap:55px}.gsoap-footer small{align-self:end}.gsoap-footer-legal{justify-self:start}.gsoap-modal section{padding:42px 28px}.gsoap-modal h2{font-size:38px}}`;
