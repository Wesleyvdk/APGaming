"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I join one of your competitive teams?",
    answer:
      "We hold tryouts at the beginning of each semester. Follow us on social media or sign up for our newsletter to be notified when tryouts are announced. You can also email recruitment@apgaming.edu for more information.",
  },
  {
    question: "Do you offer coaching or training for non-team members?",
    answer:
      "Yes! We host regular workshops and training sessions that are open to all university students. Check our Events page for upcoming sessions.",
  },
  {
    question: "How can my company sponsor AP Gaming?",
    answer:
      "We offer various sponsorship packages for businesses of all sizes. Please email sponsors@apgaming.edu for our sponsorship prospectus and to discuss partnership opportunities.",
  },
  {
    question: "Can I use the gaming facility if I'm not on a team?",
    answer:
      "Our facility is open to all university students during regular hours. Team practice sessions have priority, but there are designated open play times throughout the week.",
  },
  {
    question: "Do you host tournaments for casual players?",
    answer:
      "Yes, we organize monthly community tournaments that are open to all skill levels. These are great opportunities to have fun and meet other gamers on campus.",
  },
];

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find answers to common questions about AP Gaming.
          </motion.p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <div key={index} className="gaming-card overflow-hidden">
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-medium text-white">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-ap-pink transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-300">
            Still have questions?{" "}
            <a
              href="mailto:info@apgaming.edu"
              className="text-ap-pink hover:underline"
            >
              Contact us
            </a>{" "}
            and we'll be happy to help!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
