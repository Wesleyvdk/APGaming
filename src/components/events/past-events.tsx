"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy } from "lucide-react";

const pastEvents = [
  {
    id: 1,
    title: "Winter Championship",
    game: "League of Legends",
    date: "February 2025",
    result: "Champions",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Regional Qualifier",
    game: "Valorant",
    date: "January 2025",
    result: "2nd Place",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "University Cup",
    game: "Rocket League",
    date: "December 2024",
    result: "Champions",
    image: "/placeholder.svg?height=300&width=500",
  },
];

export function PastEvents() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Past Events
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Relive our recent tournaments and events. Check out the highlights
            and results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="gaming-card overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <Trophy className="h-5 w-5 text-ap-pink mr-2" />
                  <span className="text-white font-bold">{event.result}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-ap-pink transition-colors duration-300">
                    {event.title}
                  </h3>
                  <span className="text-gray-400 text-sm">{event.date}</span>
                </div>
                <div className="inline-block bg-ap-pink/20 rounded-full px-3 py-1 text-xs text-ap-pink mb-4">
                  {event.game}
                </div>
                <button className="w-full bg-ap-dark-lighter hover:bg-ap-dark-light text-white border border-ap-pink/30 py-2 rounded-md transition-all duration-300">
                  View Highlights
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
