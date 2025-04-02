"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";
import { getAllNewsArticles, getNewsTags } from "@/lib/api";
import type { NewsArticle, Tag } from "@/types/api";
import { formatDate } from "@/lib/utils";
import { Search } from "@/components/ui/search";
import { Pagination } from "@/components/ui/pagination";

export function NewsGrid() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const articlesPerPage = 6;

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [articlesData, tagsData] = await Promise.all([
          getAllNewsArticles(),
          getNewsTags(),
        ]);

        setArticles(articlesData);
        setTags(tagsData);

        // Calculate total pages
        setTotalPages(Math.ceil(articlesData.length / articlesPerPage));
      } catch (err) {
        console.error("Error fetching news data:", err);
        setError("Failed to load news articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTag, searchQuery]);

  // Update total pages when filters change
  useEffect(() => {
    const filtered = getFilteredArticles();
    setTotalPages(Math.ceil(filtered.length / articlesPerPage));
  }, [articles, selectedTag, searchQuery, articlesPerPage]);

  // Filter articles based on tag and search query
  const getFilteredArticles = () => {
    let filtered = articles;

    // Filter by tag if selected
    if (selectedTag) {
      filtered = filtered.filter((article) =>
        article.tags.some((tag) => tag.id === selectedTag)
      );
    }

    // Filter by search query if present
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(lowerQuery) ||
          (article.content &&
            article.content.toLowerCase().includes(lowerQuery)) ||
          article.author.username.toLowerCase().includes(lowerQuery) ||
          article.tags.some((tag) =>
            tag.name.toLowerCase().includes(lowerQuery)
          )
      );
    }

    // Skip the first article if we have more than one (it's shown in FeaturedNews)
    if (articles.length > 1 && !selectedTag && !searchQuery) {
      filtered = filtered.slice(1);
    }

    return filtered;
  };

  // Get current page articles
  const getCurrentPageArticles = () => {
    const filtered = getFilteredArticles();
    const startIndex = (currentPage - 1) * articlesPerPage;
    return filtered.slice(startIndex, startIndex + articlesPerPage);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of the section
    document
      .getElementById("news-grid")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  if (error) {
    return (
      <section
        className="py-20 section-highlight relative overflow-hidden"
        id="news-grid"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="gaming-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Something went wrong
              </h2>
              <p className="text-gray-300 mb-6">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-ap-pink hover:bg-ap-pink/90 text-white px-6 py-3 rounded-md transition-all duration-300"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const displayedArticles = getCurrentPageArticles();
  const filteredArticlesCount = getFilteredArticles().length;

  return (
    <section
      className="py-20 section-highlight relative overflow-hidden"
      id="news-grid"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Recent News & Updates
          </motion.h2>

          <Search
            placeholder="Search news articles..."
            onSearch={handleSearch}
            className="max-w-md mx-auto mb-8"
          />
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedTag === null
                  ? "bg-ap-pink text-white"
                  : "bg-ap-dark-lighter text-gray-300 hover:bg-ap-dark-light"
              }`}
              onClick={() => setSelectedTag(null)}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag.id}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedTag === tag.id
                    ? "bg-ap-pink text-white"
                    : "bg-ap-dark-lighter text-gray-300 hover:bg-ap-dark-light"
                }`}
                onClick={() => setSelectedTag(tag.id)}
              >
                {tag.name} {tag.articleCount > 0 && `(${tag.articleCount})`}
              </button>
            ))}
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="gaming-card overflow-hidden">
                <div className="h-48 bg-ap-dark-lighter animate-pulse"></div>
                <div className="p-6">
                  <div className="h-5 w-3/4 bg-ap-dark-lighter animate-pulse rounded-lg mb-3"></div>
                  <div className="h-7 w-full bg-ap-dark-lighter animate-pulse rounded-lg mb-3"></div>
                  <div className="h-4 w-1/2 bg-ap-dark-lighter animate-pulse rounded-lg mb-4"></div>
                  <div className="h-20 w-full bg-ap-dark-lighter animate-pulse rounded-lg mb-4"></div>
                  <div className="h-6 w-1/3 bg-ap-dark-lighter animate-pulse rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        ) : displayedArticles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  className="gaming-card overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={
                        article.featuredImage ||
                        "/placeholder.svg?height=400&width=600&text=AP+Gaming+News"
                      }
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    {article.tags && article.tags.length > 0 && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-ap-pink/90 rounded-full px-3 py-1 text-xs text-white">
                          {article.tags[0].name}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(article.publishedAt)}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author.username}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-ap-pink transition-colors duration-300">
                      {article.title}
                    </h3>
                    <Link
                      href={`/news/${article.id}`}
                      className="text-ap-pink hover:text-ap-pink-light font-medium inline-flex items-center"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
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

            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-300">
              No articles found
              {selectedTag
                ? " for the selected tag"
                : searchQuery
                ? " matching your search"
                : ""}
              .
            </p>
          </div>
        )}

        {!loading && filteredArticlesCount > 0 && (
          <div className="text-center mt-6 text-gray-400 text-sm">
            Showing {displayedArticles.length} of {filteredArticlesCount}{" "}
            articles
          </div>
        )}
      </div>
    </section>
  );
}
