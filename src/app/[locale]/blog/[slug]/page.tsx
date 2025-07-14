import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/app/data/blogPosts";
import BlogPostHeader from "@/app/components/blog/BlogPostHeader";
import BlogPostContent from "@/app/components/blog/BlogPostContent";
import BlogPostFooter from "@/app/components/blog/BlogPostFooter";
import RelatedPosts from "@/app/components/blog/RelatedPosts";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-horizontal">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <BlogPostHeader post={post} />
        <BlogPostContent post={post} />
        <BlogPostFooter post={post} />
      </article>
      
      {relatedPosts.length > 0 && (
        <section className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <RelatedPosts posts={relatedPosts} />
        </section>
      )}
    </main>
  );
}
