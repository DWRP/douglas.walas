"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "./sections/Header";
import { Main } from "./sections/Main";
import { Footer } from "./sections/Footer";

export default function FullstackDeveloperLanding() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const router = useRouter();

  const changeLanguage = (newLang: string) => {
    router.push(`/${newLang}${window.location.hash}`);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <Header
        {...{
          changeLanguage,
          isDarkMode,
          setIsDarkMode,
        }}
      />

      <Main />

      <Footer />
    </div>
  );
}

const CodeIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
