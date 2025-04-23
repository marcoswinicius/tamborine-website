import { Space_Grotesk } from "next/font/google";
import "@/app/styles/globals.css";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import {routing} from '@/i18n/routing';
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    template: '%s | Tamborine',
    default: 'Tamborine',
  },
}

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}