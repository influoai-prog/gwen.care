"use client";

import {
  createContext,
  type FormEvent,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

type Answers = {
  creatorName: string;
  primaryPlatform: string;
  profileLinks: string;
  audienceSize: string;
  monthlyEarnings: string;
  challenge: string;
  priority: string;
  urgency: string;
  desiredOutcome: string;
};

const initialAnswers: Answers = {
  creatorName: "",
  primaryPlatform: "",
  profileLinks: "",
  audienceSize: "",
  monthlyEarnings: "",
  challenge: "",
  priority: "",
  urgency: "",
  desiredOutcome: "",
};

const ApplicationContext = createContext<(() => void) | null>(null);

export function ApplicationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = useCallback(() => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    setHasOpened(true);
    setStep(1);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [close, isOpen]);

  const calendarUrl = useMemo(() => {
    const notes = [
      `Creator / channel: ${answers.creatorName}`,
      `Primary platform: ${answers.primaryPlatform}`,
      `Profiles / handles: ${answers.profileLinks}`,
      `Audience size: ${answers.audienceSize}`,
      `Current monthly earnings: ${answers.monthlyEarnings}`,
      `Primary goal: ${answers.priority}`,
      `Timing: ${answers.urgency}`,
      `Current challenge: ${answers.challenge}`,
      answers.desiredOutcome ? `90-day win: ${answers.desiredOutcome}` : "",
    ].filter(Boolean).join("\n");
    const params = new URLSearchParams({
      embed: "true",
      layout: "month_view",
      notes,
    });
    return `https://cal.com/soaplabs/audit?${params.toString()}`;
  }, [answers]);

  const updateAnswer = (name: keyof Answers, value: string) => {
    setAnswers((current) => ({ ...current, [name]: value }));
  };

  const advance = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep((current) => Math.min(current + 1, 3));
  };

  return (
    <ApplicationContext.Provider value={open}>
      {children}
      {hasOpened && typeof document !== "undefined" && createPortal(
        isOpen ? (
          <div className="gwen-application-modal" role="dialog" aria-modal="true" aria-labelledby="application-title">
            <button className="gwen-application-backdrop" type="button" onClick={close} aria-label="Close application" />
            <section className={`gwen-application-panel gwen-application-step-${step}`}>
              <button ref={closeButtonRef} className="gwen-application-close" type="button" onClick={close} aria-label="Close application">×</button>

              {step < 3 ? (
                <div className="gwen-application-content">
                  <div className="gwen-application-progress" aria-label={`Step ${step} of 2`}>
                    <span>CREATOR APPLICATION</span><i><b style={{ width: step === 1 ? "50%" : "100%" }} /></i><small>{step}/2</small>
                  </div>
                  <h2 id="application-title">Let&apos;s see if<br /><em>we&apos;re a fit.</em></h2>

                  {step === 1 ? (
                    <form className="gwen-application-form" onSubmit={advance}>
                      <div className="gwen-application-row">
                        <label><span>Creator or channel name</span><input name="creatorName" value={answers.creatorName} onChange={(event) => updateAnswer("creatorName", event.target.value)} placeholder="How people know you" autoComplete="organization" required /></label>
                        <label><span>Primary platform</span><input name="primaryPlatform" value={answers.primaryPlatform} onChange={(event) => updateAnswer("primaryPlatform", event.target.value)} placeholder="e.g. OnlyFans" required /></label>
                      </div>
                      <label><span>Profile links or handles</span><input name="profileLinks" value={answers.profileLinks} onChange={(event) => updateAnswer("profileLinks", event.target.value)} placeholder="@handle or profile link" required /></label>
                      <div className="gwen-application-row">
                        <label><span>Total audience</span><select name="audienceSize" value={answers.audienceSize} onChange={(event) => updateAnswer("audienceSize", event.target.value)} required><option value="" disabled>Select a range</option><option>Just started</option><option>Under 10k</option><option>10k-50k</option><option>50k-250k</option><option>250k-1m</option><option>1m+</option></select></label>
                        <label><span>Current monthly earnings</span><select name="monthlyEarnings" value={answers.monthlyEarnings} onChange={(event) => updateAnswer("monthlyEarnings", event.target.value)} required><option value="" disabled>Select a range</option><option>Not earning yet</option><option>Under $1k</option><option>$1k-$5k</option><option>$5k-$10k</option><option>$10k-$25k</option><option>$25k-$50k</option><option>$50k+</option></select></label>
                      </div>
                      <button className="gwen-application-primary" type="submit">Continue <span>→</span></button>
                    </form>
                  ) : (
                    <form className="gwen-application-form" onSubmit={advance}>
                      <label><span>What is holding your account back?</span><textarea name="challenge" value={answers.challenge} onChange={(event) => updateAnswer("challenge", event.target.value)} placeholder="Tell us what is stuck: content, promotion, subscriber growth, retention, DMs, or operations." rows={3} required /></label>
                      <div className="gwen-application-row">
                        <label><span>Primary goal</span><select name="priority" value={answers.priority} onChange={(event) => updateAnswer("priority", event.target.value)} required><option value="" disabled>Select one</option><option>Creator positioning</option><option>Consistent production</option><option>Audience growth</option><option>Subscriber growth</option><option>Monetization</option></select></label>
                        <label><span>Timing</span><select name="urgency" value={answers.urgency} onChange={(event) => updateAnswer("urgency", event.target.value)} required><option value="" disabled>Select one</option><option>As soon as possible</option><option>Within 30 days</option><option>Within 90 days</option><option>Exploring options</option></select></label>
                      </div>
                      <label><span>What would make the next 90 days a win? <small>Optional</small></span><input name="desiredOutcome" value={answers.desiredOutcome} onChange={(event) => updateAnswer("desiredOutcome", event.target.value)} placeholder="More subscribers, higher fan spend, or consistent monthly revenue" /></label>
                      <div className="gwen-application-actions"><button className="gwen-application-back" type="button" onClick={() => setStep(1)}>← Back</button><button className="gwen-application-primary" type="submit">See available times <span>→</span></button></div>
                    </form>
                  )}
                </div>
              ) : (
                <div className="gwen-application-calendar">
                  <div><button type="button" onClick={() => setStep(2)}>← Edit answers</button><span>CHOOSE A TIME</span></div>
                  <iframe src={calendarUrl} title="Book your gwen application call" allow="payment" />
                </div>
              )}
            </section>
          </div>
        ) : null,
        document.body,
      )}
    </ApplicationContext.Provider>
  );
}

export function ApplyButton({ className, children }: { className: string; children: ReactNode }) {
  const open = useContext(ApplicationContext);
  if (!open) throw new Error("ApplyButton must be used inside ApplicationProvider");
  return <button className={className} type="button" onClick={open}>{children}</button>;
}
