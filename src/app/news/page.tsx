import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { NewsHero } from "@/components/news/news-hero";
import { FeaturedNews } from "@/components/news/featured-news";
import { NewsGrid } from "@/components/news/news-grid";
import { NewsletterSignup } from "@/components/news/newsletter-signup";
import { NewsLoading } from "@/components/news/news-loading";

export const metadata = {
  title: "News | AP Gaming",
  description: "Latest news, updates, and announcements from AP Gaming.",
};

export default function NewsPage() {
  return (
    <>
      <div className="grid-overlay"></div>
      <div className="vignette-overlay"></div>

      <main className="min-h-screen">
        <Navbar />
        <NewsHero />
        <Suspense fallback={<NewsLoading />}>
          <NewsContent />
        </Suspense>
        <NewsletterSignup />
        <Footer />
      </main>
    </>
  );
}

async function NewsContent() {
  return (
    <>
      <FeaturedNews />
      <NewsGrid />
    </>
  );
}
