import { defaultLocale, locales } from "@/locales";
import { NextIntlClientProvider } from "next-intl";
import "../../styles/globals.css";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Douglas Pardim",
  description:
    "Bringing frontend and backend together to create fluid and scalable web applications!",
  metadataBase: new URL("https://dwrp.github.io/"),
  keywords: [
    "Douglas Pardim",
    "Douglas Pardim Fullstack",
    "Douglas Pardim Developer",
    "Douglas Pardim Fulstack Developer",
    "Fullstack Developer",
    "React Developer",
    "Node.js Developer",
    "React Native Developer",
    "JavaScript Expert",
    "Web Development",
    "Mobile Development",
    "UI/UX Development",
    "E-commerce Development",
    "React Developer (5+ years)",
    "Node.js Developer (5+ years)",
  ],
  openGraph: {
    description:
      "Full-stack developer proficient in React, Node.js, and React Native. I create intuitive interfaces using Tailwind CSS and TypeScript. Expert in Next.js and Nest.js for scalable applications.",
    images: ["https://dwrp.github.io/cover", "https://dwrp.github.io/cover2"],
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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
