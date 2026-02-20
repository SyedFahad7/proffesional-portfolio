"use client";
import React, { useRef, useEffect, useState } from "react";

export function ThemeTransitionWrapper({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const [overlayTheme, setOverlayTheme] = useState("light");
  const prevTheme = useRef<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const html = document.documentElement;
      const theme = html.classList.contains("dark") ? "dark" : "light";
      if (prevTheme.current && prevTheme.current !== theme) {
        setOverlayTheme(theme);
        setShow(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setShow(false), 300);
      }
      prevTheme.current = theme;
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    prevTheme.current = document.documentElement.classList.contains("dark") ? "dark" : "light";
    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      {show && (
        <div
          className="theme-transition-overlay"
          aria-hidden
        />
      )}
      {children}
      <style>{`
        .theme-transition-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          pointer-events: none;
          background: ${overlayTheme === "dark" ? "#18181b" : "#fff"};
          color: transparent;
          opacity: 1;
          transition: background 0.3s cubic-bezier(.4,0,.2,1), opacity 0.3s cubic-bezier(.4,0,.2,1);
          animation: theme-fade-smooth 0.3s cubic-bezier(.4,0,.2,1) forwards;
        }
        @keyframes theme-fade-smooth {
          0% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
        html, body, .min-h-screen {
          transition: background 0.3s cubic-bezier(.4,0,.2,1), color 0.3s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </>
  );
}