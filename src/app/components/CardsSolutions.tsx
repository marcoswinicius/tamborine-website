"use client";

import React, { useState } from "react";
import {
  Shield,
  CreditCard,
  Zap,
  Network,
  LayoutDashboard,
  AlertTriangle,
} from "lucide-react";
import { useTranslations } from "next-intl";
import BackgroundSquares from "./ui/BackgroundSquares";

interface CardProps {
  id: number;
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
}

const CardsSolutions = () => {
  const t = useTranslations("cardsSolutions");
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Estilo comum para todos os ícones
  const iconClassName =
    "w-10 h-10 text-[#A7E97F] stroke-1 bg-[#20261C] rounded-sm";

  const cards: CardProps[] = [
    {
      id: 1,
      icon: <Shield className={iconClassName} />,
      titleKey: "cards.card1.title",
      descriptionKey: "cards.card1.description",
    },
    {
      id: 2,
      icon: <CreditCard className={iconClassName} />,
      titleKey: "cards.card2.title",
      descriptionKey: "cards.card2.description",
    },
    {
      id: 3,
      icon: <Zap className={iconClassName} />,
      titleKey: "cards.card3.title",
      descriptionKey: "cards.card3.description",
    },
    {
      id: 4,
      icon: <Network className={iconClassName} />,
      titleKey: "cards.card4.title",
      descriptionKey: "cards.card4.description",
    },
    {
      id: 5,
      icon: <LayoutDashboard className={iconClassName} />,
      titleKey: "cards.card5.title",
      descriptionKey: "cards.card5.description",
    },
    {
      id: 6,
      icon: <AlertTriangle className={iconClassName} />,
      titleKey: "cards.card6.title",
      descriptionKey: "cards.card6.description",
    },
  ];

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl text-center mb-12 title-gradient-hero">
          {t("title")}
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="p-6 flex flex-col transition-all duration-300 hover:border-[#A7E97F]/50 group"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-medium mb-4 title-gradient-hero">
                {t(card.titleKey)}
              </h3>
              <p className="text-gradient-custom text-sm">
                {t(card.descriptionKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                className="w-full p-4 flex items-center justify-between"
                onClick={() => toggleCard(card.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="text-[#A7E97F]">{card.icon}</div>
                  <h3 className="text-lg font-medium text-white">
                    {t(card.titleKey)}
                  </h3>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    expandedCard === card.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expandedCard === card.id && (
                <div className="p-4 pt-0 border-t border-white/10">
                  <p className="text-white/70 text-sm">
                    {t(card.descriptionKey)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <BackgroundSquares className="absolute inset-0 w-full h-full object-cover" />
    </section>
  );
};

export default CardsSolutions;