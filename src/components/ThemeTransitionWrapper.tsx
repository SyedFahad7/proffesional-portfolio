"use client";
import React, { useRef, useEffect, useState } from "react";

export function ThemeTransitionWrapper({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const prevTheme = useRef<string | null>(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const html = document.documentElement;
      const theme = html.classList.contains("dark") ? "dark" : "light";
      if (prevTheme.current && prevTheme.current !== theme) {
        setShow(true);
        setTimeout(() => setShow(false), 400);
      }
      prevTheme.current = theme;
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    prevTheme.current = document.documentElement.classList.contains("dark") ? "dark" : "light";
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {show && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            pointerEvents: "none",
            background: document.documentElement.classList.contains("dark")
              ? "#18181b"
              : "#fff",
            opacity: 1,
            animation: "theme-fade-down-strong 0.5s cubic-bezier(.4,0,.2,1)",
          }}
        />
      )}
      {children}
      <style>{`
        @keyframes theme-fade-down-strong {
          0% { opacity: 1; transform: translateY(-100%); }
          60% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}