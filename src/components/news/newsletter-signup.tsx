"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function NewsletterSignup() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="gaming-card p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 gradient-text">
            Stay Updated
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to receive the latest news, event
            announcements, and team updates directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md bg-ap-dark-lighter border border-ap-pink/30 text-white focus:outline-none focus:border-ap-pink"
            />
            <Button className="bg-ap-pink hover:bg-ap-pink/90 text-white whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
