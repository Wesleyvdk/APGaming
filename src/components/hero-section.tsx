"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20 pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="gradient-text">AP GAMING</span>
                <br />
                <span className="text-white">University Esports Team</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                Join the elite ranks of competitive gamers at our university. We
                compete at the highest level of the Belgian Student League
                across multiple titles.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-ap-pink hover:bg-ap-pink/90 text-white px-8 py-6 text-lg">
                  Join Our Team
                </Button>
                <Button
                  variant="outline"
                  className="border-ap-pink text-ap-pink hover:bg-ap-pink/10 px-8 py-6 text-lg"
                >
                  View Tournaments
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative animate-float"
            >
              <div className="absolute -inset-4 bg-ap-pink/20 rounded-3xl blur-xl"></div>
              <Image
                src="/images/ap-gaming-bg.png"
                alt="AP Gaming Logo"
                width={600}
                height={600}
                className="relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
