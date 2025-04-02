"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, TagIcon, ArrowLeft, Share2 } from "lucide-react";
import type { NewsArticle } from "@/types/api";
import { formatDate } from "@/lib/utils";
import { RelatedArticles } from "./related-articles";

interface NewsArticleDetailProps {
  article: NewsArticle;
}

export function NewsArticleDetail({ article }: NewsArticleDetailProps) {
  const shareArticle = () => {
    if (navigator.share) {
      navigator
        .share({
          title: article.title,
          text: `Check out this article from AP Gaming: ${article.title}`,
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing", error));
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("Link copied to clipboard!"))
        .catch((error) => console.log("Error copying to clipboard", error));
    }
  };

  return (
    <>
      <section className="pt-32 pb-10 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/news"
              className="inline-flex items-center text-gray-400 hover:text-ap-pink mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <div
                  key={tag.id}
                  className="bg-ap-pink/20 rounded-full px-3 py-1 text-xs text-ap-pink flex items-center"
                >
                  <TagIcon className="h-3 w-3 mr-1" />
                  {tag.name}
                </div>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
              <div className="flex items-center">
                {article.author.profilePicture ? (
                  <Image
                    src={article.author.profilePicture || "/placeholder.svg"}
                    alt={article.author.username}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-ap-dark-lighter mr-3"></div>
                )}
                <span className="text-white">{article.author.username}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(article.publishedAt)}
                </div>

                <button
                  onClick={shareArticle}
                  className="flex items-center text-gray-400 hover:text-ap-pink transition-colors"
                  aria-label="Share article"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="gaming-card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {article.featuredImage && (
              <div className="relative h-96 w-full">
                <Image
                  src={article.featuredImage || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-8 md:p-12">
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content || "" }}
              />
            </div>

            {article.mediaItems && article.mediaItems.length > 0 && (
              <div className="p-8 md:p-12 pt-0">
                <h3 className="text-xl font-bold mb-6 text-white">
                  Media Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {article.mediaItems.map((media, index) => (
                    <div
                      key={index}
                      className="relative h-40 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={media.url || "/placeholder.svg"}
                        alt={media.alt || `Media ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {article.tags.length > 0 && (
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-4 gradient-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Related Articles
              </motion.h2>
            </div>

            <RelatedArticles
              currentArticleId={article.id}
              tags={article.tags.map((tag) => tag.id)}
            />
          </div>
        </section>
      )}
    </>
  );
}
