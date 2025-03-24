"use client";

import { motion } from "framer-motion";

export function NewsHero() {
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
            Latest News
          </motion.h1>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Stay up to date with the latest announcements, tournament results,
            and team updates from AP Gaming.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
