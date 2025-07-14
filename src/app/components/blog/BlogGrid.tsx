"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/app/data/blogPosts";

interface BlogGridProps {
  currentPage: number;
  selectedCategory: string;
}

const POSTS_PER_PAGE = 6;

export default function BlogGrid({ currentPage, selectedCategory }: BlogGridProps) {
  const t = useTranslations("blog");

  // Filter posts by category
  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter((post) => post.category === selectedCategory);

  // Paginate posts
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  if (paginatedPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          {t("noPosts")}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {paginatedPosts.map((post, index) => (
        <motion.article 
          key={post.id} 
          className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <Link href={`/blog/${post.slug}`}>
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[var(--color-primary)] text-black px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {t(`categories.${post.category}`)}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
          
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString()}
              </time>
              <span className="mx-2">•</span>
              <span>{post.readTime} {t("readTime")}</span>
            </div>
            
            <Link href={`/blog/${post.slug}`}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-[var(--color-primary)] transition-colors line-clamp-2 leading-tight">
                {post.title}
              </h3>
            </Link>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center pt-4 border-t border-gray-100 dark:border-gray-700">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {post.author.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {post.author.role}
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
