"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/app/data/blogPosts";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  const t = useTranslations("blog");

  if (posts.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <motion.h2 
        className="text-3xl  text-gray-900 dark:text-white mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("relatedPosts")}
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article 
            key={post.id} 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[var(--color-primary)] text-black px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {t(`categories.${post.category}`)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
            
            <div className="p-4">
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </time>
                <span className="mx-2">•</span>
                <span>{post.readTime} {t("readTime")}</span>
              </div>
              
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-lg  text-gray-900 dark:text-white mb-2 hover:text-[var(--color-primary)] transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h3>
              </Link>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
