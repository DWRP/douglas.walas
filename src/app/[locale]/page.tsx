"use client";
import { useState, useEffect } from "react";
import Header from "./sections/Header";
import Main from "./sections/Main";
import Footer from "./sections/Footer";
import Head from "next/head";
import { useAppStore } from "@/store/app";
import { Locale } from "@/locales";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  const { theme, setTheme, setLocale } = useAppStore();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  const changeLanguage = async (newLang: Locale) => {
    setLocale(newLang);
    router.push(`/${newLang}${location.hash}`);
  };

  useEffect(() => {
    if (isDarkMode) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode, setTheme]);

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <Head>
        <title>Douglas Pardim Developer</title>
      </Head>
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
