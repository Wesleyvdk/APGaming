"use client";

import { motion } from "framer-motion";
import { Target, Users, Trophy, Lightbulb } from "lucide-react";

const values = [
  {
    icon: <Target className="h-8 w-8 text-ap-pink" />,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from competitive play to community engagement.",
  },
  {
    icon: <Users className="h-8 w-8 text-ap-pink" />,
    title: "Inclusivity",
    description:
      "We believe in creating a welcoming environment for gamers of all backgrounds and skill levels.",
  },
  {
    icon: <Trophy className="h-8 w-8 text-ap-pink" />,
    title: "Competition",
    description:
      "We embrace healthy competition as a means to improve and achieve our full potential.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-ap-pink" />,
    title: "Innovation",
    description:
      "We constantly seek new strategies, technologies, and approaches to stay ahead in esports.",
  },
];

export function AboutMission() {
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
            Our Mission & Values
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AP Gaming is dedicated to fostering competitive excellence while
            building a vibrant and inclusive gaming community at our university.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="gaming-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-ap-pink/10 flex items-center justify-center">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {value.title}
              </h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
