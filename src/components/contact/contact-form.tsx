"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

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
            Send Us a Message
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Fill out the form below and we'll get back to you as soon as
            possible.
          </motion.p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="gaming-card p-8">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-ap-pink/20 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-ap-pink" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Message Sent!
                </h3>
                <p className="text-gray-300 mb-6">
                  Thank you for reaching out. We'll get back to you as soon as
                  possible.
                </p>
                <Button
                  className="bg-ap-pink hover:bg-ap-pink/90 text-white"
                  onClick={() => setFormSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-md bg-ap-dark-lighter border border-ap-pink/30 text-white focus:outline-none focus:border-ap-pink"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-md bg-ap-dark-lighter border border-ap-pink/30 text-white focus:outline-none focus:border-ap-pink"
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white font-medium mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-md bg-ap-dark-lighter border border-ap-pink/30 text-white focus:outline-none focus:border-ap-pink"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sponsorship">Sponsorship Opportunity</option>
                    <option value="recruitment">Team Recruitment</option>
                    <option value="event">Event Information</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-md bg-ap-dark-lighter border border-ap-pink/30 text-white focus:outline-none focus:border-ap-pink"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="h-4 w-4 text-ap-pink border-ap-pink/30 rounded focus:ring-ap-pink"
                  />
                  <label
                    htmlFor="consent"
                    className="ml-2 block text-sm text-gray-300"
                  >
                    I agree to the processing of my personal data in accordance
                    with the privacy policy.
                  </label>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-ap-pink hover:bg-ap-pink/90 text-white px-8 py-3"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
