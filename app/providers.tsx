"use client";

import { ReactNode, useEffect } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Apply theme on initial load
  useEffect(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem("theme");
    
    // Check user's system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Apply dark mode if saved as dark or if system prefers dark and no saved preference
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return <>{children}</>;
}