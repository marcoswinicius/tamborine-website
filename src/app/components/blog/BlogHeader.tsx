"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion } from "framer-motion";

interface BlogHeaderProps {
  selectedCategory: string;
}

const categories = [
  { id: "all", key: "all" },
  { id: "technology", key: "technology" },
  { id: "fintech", key: "fintech" },
  { id: "payments", key: "payments" },
  { id: "innovation", key: "innovation" },
];

export default function BlogHeader({ selectedCategory }: BlogHeaderProps) {
  const t = useTranslations("blog");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="relative flex items-center justify-center w-full overflow-hidden bg-hero py-20">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 title-gradient-hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("title")}
          </motion.h1>
          <motion.p 
            className="text-xl text-gradient-hero max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("description")}
          </motion.p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="max-w-md mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-600 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {categories.map((category, index) => (
            <motion.a
              key={category.id}
              href={`?category=${category.id}`}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-[var(--color-primary)] text-black font-semibold shadow-lg"
                  : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t(`categories.${category.key}`)}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
