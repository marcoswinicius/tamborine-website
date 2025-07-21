import "@/app/styles/globals.css";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Footer from "../components/Footer";
import NextTopLoader from "nextjs-toploader";
import { CookieConsent } from "@/app/components/cookies";

export const metadata: Metadata = {
  title: {
    template: "%s | Tamborine",
    default: "Tamborine",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <>
      <NextTopLoader color="#a7e97f" />
      <NextIntlClientProvider>
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </NextIntlClientProvider>
    </>
  );
}