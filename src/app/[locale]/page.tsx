import type { Metadata } from "next";
import Hero from "@/app/components/Hero";
import Solutions from "@/app/components/Solutions";
import { getTranslations } from "next-intl/server";
import HorizontalCards from "../components/HorizontalCards";
import React from "react";
import Display from "@/app/components/Display";
import CardsSolutions from "@/app/components/CardsSolutions";
import CTA from "@/app/components/CTA";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");

  return {
    title: t("home.title"),
  };
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Solutions />
      <HorizontalCards />
      <Display />
      <CardsSolutions />
      <CTA />
    </main>
  );
}