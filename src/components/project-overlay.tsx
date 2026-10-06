"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function motionReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ProjectOverlay({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  const reduced = useRef(false);
  const openRef = useRef(false);
  const closingRef = useRef(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useLayoutEffect(() => {
    const sheet = sheetRef.current;
    const overlay = rootRef.current;
    if (!sheet || !overlay || motionReduced()) return;
    // Pin the first paint fully below the viewport, even if a class lands early.
    sheet.style.transform = "translate3d(0, 100%, 0)";
    sheet.style.transition = "none";
    overlay.style.transition = "none";
    void sheet.offsetHeight;
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const root = rootRef.current;
    const blocked: Element[] = [];
    for (const child of Array.from(document.body.children)) {
      if (child === root || child.hasAttribute("inert")) continue;
      child.setAttribute("inert", "");
      blocked.push(child);
    }

    reduced.current = motionReduced();
    if (reduced.current) {
      openRef.current = true;
      setOpen(true);
      closeRef.current?.focus();
    }

    let secondFrame = 0;
    const firstFrame = reduced.current
      ? 0
      : window.requestAnimationFrame(() => {
          secondFrame = window.requestAnimationFrame(() => {
            const sheet = sheetRef.current;
            const overlay = rootRef.current;
            if (sheet) {
              sheet.style.transition = "";
              sheet.style.transform = "";
            }
            if (overlay) overlay.style.transition = "";
            openRef.current = true;
            setOpen(true);
            closeRef.current?.focus();
          });
        });

    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      event.preventDefault();
      beginClose();
    }

    document.addEventListener("keydown", onKey);
    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      document.body.style.overflow = previousOverflow;
      for (const child of blocked) child.removeAttribute("inert");
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function beginClose() {
    if (closingRef.current) return;
    if (!openRef.current || reduced.current) {
      onCloseRef.current();
      return;
    }
    closingRef.current = true;
    openRef.current = false;
    setOpen(false);
    window.setTimeout(() => {
      if (closingRef.current) onCloseRef.current();
    }, 1560);
  }

  function onSheetTransitionEnd(event: React.TransitionEvent<HTMLDivElement>) {
    if (event.target !== sheetRef.current || event.propertyName !== "transform") return;
    if (closingRef.current) onCloseRef.current();
  }

  if (typeof document === "undefined") return null;

  const motionClass = open ? " is-open" : "";

  return createPortal(
    <div ref={rootRef} className={`project-overlay${motionClass}`} onClick={beginClose}>
      <div
        ref={sheetRef}
        className={`project-sheet${motionClass}`}
        role="dialog"
        aria-modal="true"
        aria-label="Project"
        onClick={(event) => event.stopPropagation()}
        onTransitionEnd={onSheetTransitionEnd}
      >
        <button ref={closeRef} type="button" className="project-sheet-close" onClick={beginClose}>
          <span className="sr-only">Close</span>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>,
    document.body,
  );
}
