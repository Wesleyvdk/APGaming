"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 transparent opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-ap-dark-lighter rounded-2xl overflow-hidden border border-ap-pink/30">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Ready to Join the Elite?
              </motion.h2>
              <motion.p
                className="text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                We're always looking for talented players to join our ranks.
                Whether you're a seasoned pro or an up-and-coming talent,
                there's a place for you on our team.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button className="bg-ap-pink hover:bg-ap-pink/90 text-white px-8 py-6 text-lg">
                  Apply Now
                </Button>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-0">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Gaming setup"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ap-dark-lighter to-transparent lg:bg-gradient-to-l"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
