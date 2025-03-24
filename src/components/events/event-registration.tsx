"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function EventRegistration() {
  return (
    <section className="py-20 section-highlight relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="gaming-card p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Host Your Own Event
              </h2>
              <p className="text-gray-300 mb-6">
                Are you interested in organizing an esports event at our
                university? AP Gaming provides support for student-led
                tournaments, viewing parties, and other gaming events.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Access to our gaming facilities",
                  "Technical support and equipment",
                  "Promotion through our channels",
                  "Assistance with registration and logistics",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-ap-pink mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-ap-pink hover:bg-ap-pink/90 text-white">
                Submit Event Proposal
              </Button>
            </div>

            <div className="bg-ap-dark-lighter p-6 rounded-lg border border-ap-pink/20">
              <h3 className="text-xl font-bold mb-4 text-white">
                Event Request Form
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-1 text-sm">
                    Event Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md bg-ap-dark border border-ap-pink/30 text-white focus:outline-none focus:border-ap-pink"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1 text-sm">
                    Event Type
                  </label>
                  <select className="w-full px-4 py-2 rounded-md bg-ap-dark border border-ap-pink/30 text-white focus:outline-none focus:border-ap-pink">
                    <option>Tournament</option>
                    <option>Viewing Party</option>
                    <option>Community Event</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-1 text-sm">
                    Proposed Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 rounded-md bg-ap-dark border border-ap-pink/30 text-white focus:outline-none focus:border-ap-pink"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1 text-sm">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-ap-dark border border-ap-pink/30 text-white focus:outline-none focus:border-ap-pink"
                  ></textarea>
                </div>
                <Button className="w-full bg-ap-pink hover:bg-ap-pink/90 text-white">
                  Submit Request
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
