"use client";

import { createContext, useContext, useState } from "react";

const LoaderContext = createContext<{
  loaded: boolean;
  setLoaded: (v: boolean) => void;
}>({ loaded: false, setLoaded: () => {} });

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <LoaderContext.Provider value={{ loaded, setLoaded }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function ContentReveal({ children }: { children: React.ReactNode }) {
  const { loaded } = useContext(LoaderContext);
  return (
    <div
      style={{
        opacity: loaded ? 1 : 0,
        transition: loaded ? "opacity 700ms ease" : "none",
      }}
    >
      {children}
    </div>
  );
}

export const useLoader = () => useContext(LoaderContext);
