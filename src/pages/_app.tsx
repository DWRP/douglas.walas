import { NextIntlClientProvider } from "next-intl";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { defaultLocale } from "@/locales";
import { useEffect, useState } from "react";
import { useAppStore } from "@/store/app";

export default function App({ Component, pageProps }: AppProps) {
  const { lang, setLocale, setActiveMenu } = useAppStore();

  const [messages, setMessages] = useState(null);

  useEffect(() => {
    import(`../../messages/${lang || "en"}.json`).then((module) => {
      setMessages(module.default);
    });
  }, [lang, setLocale]);

  useEffect(() => {
    return () => setActiveMenu("");
  }, [setActiveMenu]);

  if (!messages) return null;

  return (
    <NextIntlClientProvider locale={lang || defaultLocale} messages={messages}>
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
