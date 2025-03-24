"use client";

import { motion } from "framer-motion";

export function TeamHero() {
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
            Our Teams
          </motion.h1>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AP Gaming fields competitive teams across multiple titles. Our
            players are dedicated to excellence and represent our university at
            the highest levels of collegiate esports.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {["League of Legends", "Valorant", "Rocket League"].map(
              (game, index) => (
                <div key={game} className="gaming-card p-6 text-center">
                  <div className="text-ap-pink text-xl font-bold mb-2">
                    {game}
                  </div>
                  <p className="text-gray-400 text-sm">Division I Team</p>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
