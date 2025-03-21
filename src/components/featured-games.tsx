"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const games = [
  {
    id: 1,
    name: "League of Legends",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Our flagship team competes in collegiate tournaments nationwide.",
  },
  {
    id: 2,
    name: "Valorant",
    image: "/placeholder.svg?height=300&width=300",
    description: "Rising stars in tactical FPS competition.",
  },
  {
    id: 3,
    name: "Rocket League",
    image: "/placeholder.svg?height=300&width=300",
    description: "High-octane vehicular soccer at its finest.",
  },
  {
    id: 4,
    name: "Overwatch",
    image: "/placeholder.svg?height=300&width=300",
    description: "Team-based action with strategic depth.",
  },
];

export function FeaturedGames() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Featured Games
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We compete at the highest levels across multiple titles. Our teams
            are dedicated to excellence in these competitive games.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              className="bg-ap-dark-lighter rounded-lg overflow-hidden border border-ap-pink/20 hover:border-ap-pink/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ap-dark-lighter to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-ap-pink transition-colors duration-300">
                  {game.name}
                </h3>
                <p className="text-gray-400">{game.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
