"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

export function FeaturedNews() {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="gaming-card overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="National Championship Victory"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-ap-pink/20 rounded-full px-3 py-1 text-xs text-ap-pink">
                  Tournament
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  May 31st, 2024
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                AP Gaming Wins National Championship in Rocket League
              </h2>
              <p className="text-gray-300 mb-6">
                Our Rocket League team has secured the National Collegiate
                Championship with a perfect 21-0 record throughout the
                tournament. This marks the first national title in the program's
                history and establishes AP Gaming as a powerhouse in collegiate
                esports.
              </p>
              <Link
                href="/news/ap-gaming-wins-national-championship"
                className="inline-block bg-ap-pink hover:bg-ap-pink/90 text-white px-6 py-3 rounded-md transition-all duration-300"
              >
                Read Full Story
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
