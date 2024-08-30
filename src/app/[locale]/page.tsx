"use client";
import { useState, useEffect, useCallback } from "react";
import Header from "./sections/Header";
import Main from "./sections/Main";
import Footer from "./sections/Footer";
import Head from "next/head";
import { useAppStore } from "@/store/app";
import { Locale } from "@/locales";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function RootPage() {
  const router = useRouter();
  const locale = useLocale();

  const { lang, theme, setTheme, setLocale } = useAppStore();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  const changeLanguage = useCallback(
    async (newLang: Locale) => {
      setLocale(newLang);
      router.push(`/${newLang}${location.hash}`);
    },
    [router, setLocale]
  );

  useEffect(() => {
    if (isDarkMode) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode, setTheme]);

  useEffect(() => {
    if (locale !== lang) {
      changeLanguage(lang);
    }
  }, [changeLanguage, lang, locale]);

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
