"use client";

import { useTranslations } from "next-intl";
import {
  CircuitBoard,
  ArrowLeftRight,
  Webhook,
  CreditCard,
} from "lucide-react";
import Link from "next/link";
import BackgroundSquares from "@/app/components/ui/BackgroundSquares";
import CTA from "@/app/components/CTA";

const products = [
  {
    id: "card-processor",
    titleKey: "items.cardProcessor.title",
    descriptionKey: "items.cardProcessor.description",
    href: "/processadora-de-cartoes",
    icon: CircuitBoard,
    image: "/images/operation-system.png",
    color: "from-primary/20 to-primary/10",
  },
  {
    id: "payment-gateway",
    titleKey: "items.paymentGateway.title",
    descriptionKey: "items.paymentGateway.description",
    href: "/gateway-de-pagamento",
    icon: ArrowLeftRight,
    image: "/images/solutions/paymentGateway.jpg",
    color: "from-primary/20 to-primary/10",
  },
  {
    id: "apis",
    titleKey: "items.apis.title",
    descriptionKey: "items.apis.description",
    href: "/api-e-tos",
    icon: Webhook,
    image: "/images/solutions/apis.jpg",
    color: "from-primary/20 to-primary/10",
  },
  {
    id: "bin-sponsor",
    titleKey: "items.binSponsor.title",
    descriptionKey: "items.binSponsor.description",
    href: "/bin-sponsor-e-emissao-de-cartoes",
    icon: CreditCard,
    image: "/images/solutions/binSponsor.jpg",
    color: "from-primary/20 to-primary/10",
  },
];

export default function ProductsPage() {
  const t = useTranslations("products");

  return (
    <div className="min-h-screen">
      <BackgroundSquares className="absolute inset-0 opacity-80" />
      {/* Header Section */}
      <div className="bg-gradient-to-br from-solid via-dark-green to-solid">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl  text-neutral mb-6 tracking-tight">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-neutral/80 leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Link
                key={product.id}
                href={product.href}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg border border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative p-8 lg:p-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl  text-neutral mb-4 group-hover:text-primary transition-colors duration-300">
                    {t(product.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral/70 leading-relaxed mb-6 group-hover:text-neutral/80 transition-colors duration-300">
                    {t(product.descriptionKey)}
                  </p>

                  {/* Learn More Link */}
                  <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>{t("learnMore")}</span>
                    <ArrowLeftRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
