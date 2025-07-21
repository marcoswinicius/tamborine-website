import { Space_Grotesk } from "next/font/google";
import "@/app/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Tamborine",
    default: "Tamborine",
  },
  description: "Orchestrating Innovation in Payments - Modern, secure, and scalable platform for card issuance and payment processing.",
};

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
