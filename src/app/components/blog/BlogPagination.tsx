"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  selectedCategory: string;
}

export default function BlogPagination({ 
  currentPage, 
  totalPages, 
  selectedCategory 
}: BlogPaginationProps) {
  const t = useTranslations("blog");

  const generatePageUrl = (page: number) => {
    const params = new URLSearchParams();
    if (page > 1) params.set("page", page.toString());
    if (selectedCategory !== "all") params.set("category", selectedCategory);
    const queryString = params.toString();
    return queryString ? `?${queryString}` : "";
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages <= 1) return null;

  return (
    <nav className="flex justify-center mt-16" aria-label="Blog pagination">
      <motion.div 
        className="flex items-center space-x-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Previous button */}
        {currentPage > 1 && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={generatePageUrl(currentPage - 1)}
              className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
            >
              {t("pagination.previous")}
            </Link>
          </motion.div>
        )}

        {/* Page numbers */}
        {pages.map((page) => {
          const isCurrentPage = page === currentPage;
          
          return (
            <motion.div
              key={page}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={generatePageUrl(page)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm ${
                  isCurrentPage
                    ? "bg-[var(--color-primary)] text-black font-semibold shadow-lg"
                    : "text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
                aria-current={isCurrentPage ? "page" : undefined}
              >
                {page}
              </Link>
            </motion.div>
          );
        })}

        {/* Next button */}
        {currentPage < totalPages && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={generatePageUrl(currentPage + 1)}
              className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
            >
              {t("pagination.next")}
            </Link>
          </motion.div>
        )}
      </motion.div>
    </nav>
  );
}
