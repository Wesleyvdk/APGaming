import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { NewsArticleDetail } from "@/components/news/news-article-detail";
import { NewsArticleLoading } from "@/components/news/news-article-loading";
import { getNewsArticleById } from "@/lib/api";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const paramProps = await params;
    const article = await getNewsArticleById(paramProps.id);
    return {
      title: `${article.title} | AP Gaming News`,
      description:
        article.content?.slice(0, 160).replace(/<[^>]*>/g, "") ||
        "AP Gaming news article",
    };
  } catch (error) {
    return {
      title: "News Article | AP Gaming",
      description: "Read the latest news from AP Gaming.",
    };
  }
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const paramProps = await params;
  return (
    <>
      <div className="grid-overlay"></div>
      <div className="vignette-overlay"></div>

      <main className="min-h-screen">
        <Navbar />
        <Suspense fallback={<NewsArticleLoading />}>
          <NewsArticleWrapper id={paramProps.id} />
        </Suspense>
        <Footer />
      </main>
    </>
  );
}

async function NewsArticleWrapper({ id }: { id: string }) {
  try {
    const article = await getNewsArticleById(id);
    return <NewsArticleDetail article={article} />;
  } catch (error) {
    notFound();
  }
}
