import { Space_Grotesk } from "next/font/google";
import "@/app/styles/globals.css";
import type { Metadata } from "next";
import Header from "@/app/components/Header";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}