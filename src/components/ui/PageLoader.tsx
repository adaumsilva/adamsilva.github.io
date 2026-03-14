"use client";

import { useState, useEffect } from "react";
import { useLoader } from "@/components/ui/LoaderContext";

export function PageLoader() {
  const [state, setState] = useState<"visible" | "fading" | "hidden">("visible");
  const { setLoaded } = useLoader();

  useEffect(() => {
    let fadeTimer: ReturnType<typeof setTimeout>;

    const fade = () => {
      fadeTimer = setTimeout(() => {
        setLoaded(true);
        setState("fading");
        setTimeout(() => setState("hidden"), 500);
      }, 2000);
    };

    if (document.readyState === "complete") {
      fade();
    } else {
      window.addEventListener("load", fade, { once: true });
    }

    return () => {
      clearTimeout(fadeTimer);
      window.removeEventListener("load", fade);
    };
  }, []);

  if (state === "hidden") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy"
      style={{
        opacity: state === "fading" ? 0 : 1,
        transition: "opacity 500ms ease",
        pointerEvents: state === "fading" ? "none" : "auto",
      }}
      aria-hidden="true"
    >
      <div className="loading">
        <svg width="64px" height="48px" viewBox="0 0 64 48">
          <polyline
            id="back"
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          />
          <polyline
            id="front"
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          />
        </svg>
      </div>
    </div>
  );
}
