import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BlogHeader from "@/app/components/blog/BlogHeader";
import BlogGrid from "@/app/components/blog/BlogGrid";
import BlogPagination from "@/app/components/blog/BlogPagination";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");

  return {
    title: t("blog.title"),
    description: t("blog.description"),
  };
}

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
    category?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const selectedCategory = params.category || "all";

  return (
    <main className="min-h-screen bg-gray-50 bg-solutions">
      <BlogHeader selectedCategory={selectedCategory} />
      <div className="container mx-auto px-4 py-16">
        <BlogGrid 
          currentPage={currentPage} 
          selectedCategory={selectedCategory} 
        />
        <BlogPagination 
          currentPage={currentPage}
          totalPages={5} // This would come from your data source
          selectedCategory={selectedCategory}
        />
      </div>
    </main>
  );
}