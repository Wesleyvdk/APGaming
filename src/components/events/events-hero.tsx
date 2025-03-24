"use client";

import { motion } from "framer-motion";

export function EventsHero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Events & Tournaments
          </motion.h1>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Check out our upcoming matches, tournaments, and community events.
            Come support our teams or participate in open events!
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className="bg-ap-pink hover:bg-ap-pink/90 text-white px-6 py-3 rounded-md transition-all duration-300">
              View Schedule
            </button>
            <button className="border border-ap-pink text-ap-pink hover:bg-ap-pink/10 px-6 py-3 rounded-md transition-all duration-300">
              Register for Events
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
