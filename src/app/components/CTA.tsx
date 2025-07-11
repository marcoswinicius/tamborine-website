import React from "react";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-[var(--color-dark-green)] relative">
      {/* Background grid effect */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-grid-pattern" />
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-4 px-4 py-1 rounded-full bg-[var(--color-primary)] bg-opacity-10 text-[var(--color-dark-green)] text-sm font-medium">
          {t("getStarted")}
        </span>
        <h2 className="title-gradient-hero text-3xl md:text-4xl lg:text-5xl text-white text-center mb-2">
          {t("headline")}
        </h2>
        <p className="text-gradient-hero text-base md:text-lg lg:text-xl text-center mb-6">
          {t("description")}
        </p>
        <button className="button text-solid cursor-pointer flex items-center gap-2 px-6 py-3 font-medium">
          {t("button")}
        </button>
      </div>
    </section>
  );
}