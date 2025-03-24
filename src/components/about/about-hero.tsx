"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About AP Gaming
            </motion.h1>
            <motion.p
              className="text-gray-300 text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              AP Gaming is the premier esports organization at our university,
              founded in 2021 with a vision to create a competitive and
              inclusive gaming community on campus.
            </motion.p>
            <motion.p
              className="text-gray-300 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From humble beginnings with just a handful of passionate gamers,
              we've grown into a powerhouse organization with multiple
              competitive teams, a dedicated training facility, and a thriving
              community of players and fans.
            </motion.p>
          </div>
          <div className="lg:w-1/2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute -inset-4 bg-ap-pink/20 rounded-3xl blur-xl"></div>
              <Image
                src="/images/ap-gaming-bg.png"
                alt="AP Gaming Team"
                width={600}
                height={400}
                className="relative z-10 rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
