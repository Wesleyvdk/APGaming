"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Valorant Team Advances to Regional Finals",
    excerpt:
      "After a hard-fought semifinal match, our Valorant squad has secured their spot in the regional finals.",
    category: "Tournament",
    date: "March 10, 2025",
    author: "Coach Williams",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "New Gaming Facility Opening Next Month",
    excerpt:
      "AP Gaming is proud to announce the opening of our state-of-the-art training facility on campus.",
    category: "Announcement",
    date: "March 5, 2025",
    author: "AP Gaming Staff",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Rocket League Team Welcomes New Member",
    excerpt:
      "We're excited to welcome Aerial to our Rocket League roster as our new defensive specialist.",
    category: "Team Update",
    date: "February 28, 2025",
    author: "Team Manager",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Summer Bootcamp Registration Now Open",
    excerpt:
      "Registration is now open for our annual summer bootcamp for aspiring competitive gamers.",
    category: "Event",
    date: "February 20, 2025",
    author: "AP Gaming Staff",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "AP Gaming Partners with Tech Sponsor",
    excerpt:
      "We're thrilled to announce our new partnership with a leading gaming hardware manufacturer.",
    category: "Sponsorship",
    date: "February 15, 2025",
    author: "Marketing Director",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Tryouts for Fall Season Begin Next Week",
    excerpt:
      "AP Gaming will be holding open tryouts for all teams starting next week. Here's how to participate.",
    category: "Announcement",
    date: "February 10, 2025",
    author: "Recruitment Team",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export function NewsGrid() {
  return (
    <section className="py-20 section-highlight relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Recent News & Updates
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="gaming-card overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-ap-pink/90 rounded-full px-3 py-1 text-xs text-white">
                    {item.category}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {item.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-ap-pink transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4">{item.excerpt}</p>
                <Link
                  href={`/news/${item.id}`}
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

        <div className="flex justify-center mt-12">
          <button className="bg-ap-dark-lighter hover:bg-ap-dark-light border border-ap-pink/30 text-white px-6 py-3 rounded-md transition-all duration-300">
            Load More News
          </button>
        </div>
      </div>
    </section>
  );
}
