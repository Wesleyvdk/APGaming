"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AboutSponsors() {
  return (
    <section className="py-20 section-highlight relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Sponsors & Partners
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We're proud to partner with these organizations who support our
            mission and help us achieve our goals.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[1, 2, 3, 4].map((sponsor) => (
            <div
              key={sponsor}
              className="bg-ap-dark-lighter rounded-lg p-6 flex items-center justify-center h-32"
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=80&width=160&text=Sponsor+${sponsor}`}
                  alt={`Sponsor ${sponsor}`}
                  width={160}
                  height={80}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="gaming-card p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">
            Interested in Partnering with AP Gaming?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            We're always looking for new partners who share our passion for
            esports and want to support the next generation of competitive
            gamers. Reach out to learn about sponsorship opportunities.
          </p>
          <Button className="bg-ap-pink hover:bg-ap-pink/90 text-white px-8 py-6 text-lg">
            Become a Sponsor
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
