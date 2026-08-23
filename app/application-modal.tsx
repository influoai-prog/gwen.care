"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

const ApplicationContext = createContext<(() => void) | null>(null);

export function ApplicationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = useCallback(() => {
    triggerRef.current = document.activeElement as HTMLElement | null;
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

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const closeFromApplication = (event: MessageEvent) => {
      if (event.origin === window.location.origin && event.data?.type === "gwen:close-application") close();
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("message", closeFromApplication);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("message", closeFromApplication);
    };
  }, [close, isOpen]);

  return (
    <ApplicationContext.Provider value={open}>
      {children}
      {isOpen && typeof document !== "undefined" && createPortal(
        <div className="gwen-application-embed" role="dialog" aria-modal="true" aria-label="Creator application">
          <iframe
            src="/chuck-app/index.html?application=1"
            title="gwen creator application"
            allow="payment"
          />
        </div>,
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
