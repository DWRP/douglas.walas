import { defaultLocale, locales } from "@/locales";
import { NextIntlClientProvider } from "next-intl";
import "../../styles/globals.css";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Douglas Pardim",
  description:
    "Bringing frontend and backend together to create fluid and scalable web applications!",
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider
          locale={locale || defaultLocale}
          messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
