"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/app/data/blogPosts";

interface BlogPostHeaderProps {
  post: BlogPost;
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  const t = useTranslations("blog");

  return (
    <motion.header 
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <li>
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <Link href="/blog" className="hover:text-[var(--color-primary)] transition-colors">
              Blog
            </Link>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-900 dark:text-white font-medium">{post.title}</span>
          </li>
        </ol>
      </nav>

      {/* Category Badge */}
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <span className="bg-[var(--color-primary)] text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          {t(`categories.${post.category}`)}
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {post.title}
      </motion.h1>

      {/* Meta information */}
      <motion.div 
        className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-[var(--color-primary)]">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              {post.author.name}
            </p>
            <p className="text-sm text-[var(--color-primary)]">{post.author.role}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <time dateTime={post.publishedAt} className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {new Date(post.publishedAt).toLocaleDateString()}
          </time>
          
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readTime} {t("readTime")}
          </span>
        </div>
      </motion.div>

      {/* Featured Image */}
      <motion.div 
        className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden mb-8 shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>
    </motion.header>
  );
}
