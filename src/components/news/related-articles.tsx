"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { getAllNewsArticles } from "@/lib/api";
import type { NewsArticle } from "@/types/api";
import { formatDate } from "@/lib/utils";

interface RelatedArticlesProps {
  currentArticleId: string;
  tags: string[]; // Tag IDs
}

export function RelatedArticles({
  currentArticleId,
  tags,
}: RelatedArticlesProps) {
  const [relatedArticles, setRelatedArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRelatedArticles() {
      try {
        setLoading(true);
        const allArticles = await getAllNewsArticles();

        // Filter out current article
        const otherArticles = allArticles.filter(
          (article) => article.id !== currentArticleId
        );

        // Find articles with matching tags
        const articlesWithMatchingTags = otherArticles.filter((article) =>
          article.tags.some((tag) => tags.includes(tag.id))
        );

        // If we have enough related articles by tag, use those
        if (articlesWithMatchingTags.length >= 3) {
          setRelatedArticles(articlesWithMatchingTags.slice(0, 3));
        } else {
          // Otherwise, fill with recent articles
          const recentArticles = otherArticles
            .filter((article) => !articlesWithMatchingTags.includes(article))
            .slice(0, 3 - articlesWithMatchingTags.length);

          setRelatedArticles(
            [...articlesWithMatchingTags, ...recentArticles].slice(0, 3)
          );
        }
      } catch (error) {
        console.error("Error fetching related articles:", error);
        setRelatedArticles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchRelatedArticles();
  }, [currentArticleId, tags]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="gaming-card overflow-hidden">
            <div className="h-40 bg-ap-dark-lighter animate-pulse"></div>
            <div className="p-4">
              <div className="h-4 w-1/2 bg-ap-dark-lighter animate-pulse rounded-lg mb-2"></div>
              <div className="h-6 w-full bg-ap-dark-lighter animate-pulse rounded-lg mb-3"></div>
              <div className="h-4 w-1/3 bg-ap-dark-lighter animate-pulse rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedArticles.map((article, index) => (
        <motion.div
          key={article.id}
          className="gaming-card overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="relative h-40 overflow-hidden">
            <Image
              src={
                article.featuredImage ||
                "/placeholder.svg?height=300&width=500&text=AP+Gaming+News"
              }
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
          <div className="p-4">
            <div className="flex items-center text-sm text-gray-400 mb-2">
              <Calendar className="h-3 w-3 mr-1" />
              {formatDate(article.publishedAt)}
            </div>
            <h3 className="text-md font-bold mb-2 text-white group-hover:text-ap-pink transition-colors duration-300 line-clamp-2">
              {article.title}
            </h3>
            <Link
              href={`/news/${article.id}`}
              className="text-ap-pink hover:text-ap-pink-light text-sm font-medium inline-flex items-center"
            >
              Read Article
              <svg
                className="w-3 h-3 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
