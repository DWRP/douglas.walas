import { NextIntlClientProvider } from "next-intl";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { defaultLocale } from "@/locales";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [messages, setMessages] = useState(null);
  const [locale, setLocale] = useState(router.locale);

  useEffect(() => {
    const queryLocale = (router.query.lang as string) || "en";
    setLocale(queryLocale);

    import(`../../messages/${queryLocale}.json`).then((module) => {
      setMessages(module.default);
    });
  }, [router.query.lang]);

  if (!messages) return null;

  return (
    <NextIntlClientProvider
      locale={locale || defaultLocale}
      messages={messages}
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
