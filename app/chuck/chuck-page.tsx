"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || "soaplabs/audit";

const initialAnswers = {
  name: "",
  email: "",
  handle: "",
  platform: "",
  audience: "",
  goal: "",
};

export default function ChuckPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState(initialAnswers);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const calendarUrl = useMemo(() => {
    const params = new URLSearchParams({
      embed: "1",
      theme: "light",
      layout: "month_view",
      name: answers.name,
      email: answers.email,
      notes: [
        `Creator handle: ${answers.handle}`,
        `Main platform: ${answers.platform}`,
        `Audience size: ${answers.audience}`,
        `90-day goal: ${answers.goal}`,
      ].join("\n"),
    });
    return `https://cal.com/${CAL_LINK}?${params.toString()}`;
  }, [answers]);

  useEffect(() => {
    if (!bookingOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setBookingOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [bookingOpen]);

  function openBooking() {
    setStep(1);
    setBookingOpen(true);
  }

  function updateAnswer(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setAnswers((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function nextStep(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStep((current) => Math.min(current + 1, 3));
  }

  async function playVideo() {
    await videoRef.current?.play();
    setPlaying(true);
  }

  return (
    <main className="chuck" id="chuck-top">
      <header className="chuck-nav">
        <a className="chuck-logo" href="#chuck-top" aria-label="Gwen Chuck home"><span>✦</span> gwen</a>
        <div className="chuck-nav-links">
          <a href="#system">The system</a>
          <a href="#vsl">Watch</a>
          <button type="button" onClick={openBooking}>Book a call <span>↗</span></button>
        </div>
      </header>

      <section className="chuck-hero">
        <div className="chuck-kicker"><span>For creators ready for the next level</span><i>Limited client roster</i></div>
        <h1>Your audience is growing.<br /><em>Now build the business.</em></h1>
        <p>We install the content, growth and operating system behind serious creators—so your next level doesn’t depend on doing everything yourself.</p>
        <div className="chuck-actions">
          <button className="chuck-button chuck-button-dark" type="button" onClick={openBooking}>Book your growth call <span>↗</span></button>
          <a href="#vsl">Watch the breakdown <span>↓</span></a>
        </div>
        <div className="chuck-proof-row">
          <div><strong>01</strong><span>Clear positioning</span></div>
          <div><strong>02</strong><span>Consistent content</span></div>
          <div><strong>03</strong><span>A team that executes</span></div>
        </div>
      </section>

      <section className="chuck-vsl" id="vsl" aria-labelledby="vsl-title">
        <div className="chuck-section-tag"><span>01</span> See the system</div>
        <div className="chuck-vsl-heading">
          <h2 id="vsl-title">More views aren’t the goal.<br /><em>Leverage is.</em></h2>
          <p>See how we turn scattered creator work into one clear engine for content, audience growth and revenue.</p>
        </div>
        <div className={`chuck-video-frame${playing ? " is-playing" : ""}`}>
          <div className="chuck-video-top"><span>GWEN / THE CREATOR GROWTH SYSTEM</span><span>03:12</span></div>
          <video ref={videoRef} controls={playing} playsInline preload="metadata" onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)}>
            <source src="/chuck-vsl.mp4" type="video/mp4" />
          </video>
          {!playing && <button className="chuck-play" type="button" onClick={playVideo} aria-label="Play the creator growth video"><span>▶</span><b>Play the film</b></button>}
        </div>
        <div className="chuck-video-caption"><span>Built for creators, not corporations.</span><span>Strategy → systems → scale</span></div>
      </section>

      <section className="chuck-friction" aria-labelledby="friction-title">
        <div className="chuck-section-tag chuck-section-tag-light"><span>02</span> What’s really stuck</div>
        <div className="chuck-friction-grid">
          <h2 id="friction-title">You don’t need<br />more advice.<br /><em>You need capacity.</em></h2>
          <div className="chuck-friction-list">
            <article><span>01</span><div><h3>The content treadmill</h3><p>You’re always posting, rarely building. The output grows, but the system underneath it doesn’t.</p></div></article>
            <article><span>02</span><div><h3>Growth without direction</h3><p>Good weeks feel random. You need a repeatable plan your audience—and your team—can understand.</p></div></article>
            <article><span>03</span><div><h3>Everything depends on you</h3><p>Ideas, edits, deals, admin. You’ve become the bottleneck in the business your talent created.</p></div></article>
          </div>
        </div>
      </section>

      <section className="chuck-system" id="system" aria-labelledby="system-title">
        <div className="chuck-section-tag"><span>03</span> The Gwen operating system</div>
        <div className="chuck-system-head">
          <h2 id="system-title">One team.<br /><em>Three growth levers.</em></h2>
          <p>We don’t hand you another strategy deck. We get inside the work and help move it every week.</p>
        </div>
        <div className="chuck-cards">
          <article className="chuck-card chuck-card-blue"><span>01 / POSITION</span><i>◎</i><h3>Know what you own</h3><p>A sharper angle, a recognisable voice and content pillars people remember.</p><b>Clarity first</b></article>
          <article className="chuck-card chuck-card-yellow"><span>02 / PUBLISH</span><i>✦</i><h3>Make consistency lighter</h3><p>Ideas, scripting, production and feedback shaped into a rhythm that lasts.</p><b>Momentum weekly</b></article>
          <article className="chuck-card chuck-card-white"><span>03 / SCALE</span><i>↗</i><h3>Turn attention into leverage</h3><p>Better systems, stronger opportunities and a business that can grow around you.</p><b>Built to compound</b></article>
        </div>
      </section>

      <section className="chuck-process" aria-labelledby="process-title">
        <div className="chuck-process-copy">
          <div className="chuck-section-tag"><span>04</span> How it starts</div>
          <h2 id="process-title">Four weeks to<br /><em>a better rhythm.</em></h2>
          <p>Fast enough to feel movement. Thoughtful enough to build the right thing.</p>
          <button className="chuck-button chuck-button-dark" type="button" onClick={openBooking}>Start with a call <span>↗</span></button>
        </div>
        <ol className="chuck-timeline">
          <li><span>Week 01</span><div><b>Creator deep dive</b><p>Voice, audience, offers and the real bottlenecks.</p></div><i>↘</i></li>
          <li><span>Week 02</span><div><b>Your growth map</b><p>The clearest opportunities, prioritised and owned.</p></div><i>↘</i></li>
          <li><span>Week 03</span><div><b>Production rhythm</b><p>A working content engine—not another folder of ideas.</p></div><i>↘</i></li>
          <li><span>Week 04</span><div><b>Scale what lands</b><p>Measure, learn and put more energy behind the winners.</p></div><i>✦</i></li>
        </ol>
      </section>

      <section className="chuck-callout">
        <p>THE NEXT LEVEL NEEDS A DIFFERENT WAY OF WORKING ✦</p>
        <h2>Stay the talent.<br /><em>Stop being the whole team.</em></h2>
        <button className="chuck-button chuck-button-light" type="button" onClick={openBooking}>Book a growth call <span>↗</span></button>
      </section>

      <footer className="chuck-footer"><a href="#chuck-top"><span>✦</span> gwen</a><p>Creator growth, properly handled.</p><button type="button" onClick={openBooking}>Book a call ↗</button></footer>

      {bookingOpen && (
        <div className="chuck-modal" role="dialog" aria-modal="true" aria-label="Book a growth call">
          <button className="chuck-modal-backdrop" type="button" onClick={() => setBookingOpen(false)} aria-label="Close booking" />
          <section className={`chuck-modal-panel chuck-modal-step-${step}`}>
            <button className="chuck-modal-close" type="button" onClick={() => setBookingOpen(false)} aria-label="Close booking">×</button>
            {step === 1 && (
              <form className="chuck-booking-form" onSubmit={nextStep}>
                <div className="chuck-form-progress"><span>01</span><i><b /></i><small>03</small></div>
                <p className="chuck-form-kicker">First, the basics</p>
                <h2>Tell us about you.</h2>
                <div className="chuck-field-row"><label><span>Your name</span><input name="name" value={answers.name} onChange={updateAnswer} placeholder="Chuck" autoComplete="name" required /></label><label><span>Email</span><input name="email" value={answers.email} onChange={updateAnswer} placeholder="you@email.com" type="email" autoComplete="email" required /></label></div>
                <label><span>Creator handle</span><input name="handle" value={answers.handle} onChange={updateAnswer} placeholder="@yourhandle" required /></label>
                <button className="chuck-form-next" type="submit">Keep going <span>↗</span></button>
              </form>
            )}
            {step === 2 && (
              <form className="chuck-booking-form" onSubmit={nextStep}>
                <div className="chuck-form-progress"><span>02</span><i><b /></i><small>03</small></div>
                <p className="chuck-form-kicker">Now, the opportunity</p>
                <h2>Where are you heading?</h2>
                <div className="chuck-field-row"><label><span>Main platform</span><select name="platform" value={answers.platform} onChange={updateAnswer} required><option value="">Choose one</option><option>TikTok</option><option>Instagram</option><option>YouTube</option><option>Multi-platform</option></select></label><label><span>Audience size</span><select name="audience" value={answers.audience} onChange={updateAnswer} required><option value="">Choose one</option><option>Under 25k</option><option>25k–100k</option><option>100k–500k</option><option>500k+</option></select></label></div>
                <label><span>Your biggest 90-day goal</span><textarea name="goal" value={answers.goal} onChange={updateAnswer} placeholder="More consistency, launching an offer, building a team…" required /></label>
                <div className="chuck-form-actions"><button type="button" className="chuck-form-back" onClick={() => setStep(1)}>← Back</button><button className="chuck-form-next" type="submit">Choose a time <span>↗</span></button></div>
              </form>
            )}
            {step === 3 && (
              <div className="chuck-calendar">
                <div className="chuck-calendar-bar"><button type="button" onClick={() => setStep(2)}>← Back</button><span>Pick a time that works</span></div>
                <iframe src={calendarUrl} title="Book a growth call" allow="payment" />
                <a href={`https://cal.com/${CAL_LINK}`} target="_blank" rel="noreferrer">Calendar not loading? Open it in a new tab ↗</a>
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
