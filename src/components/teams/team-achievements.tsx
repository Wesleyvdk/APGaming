"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "National Collegiate Championship",
    game: "League of Legends",
    placement: "1st Place",
    year: "2024",
    description:
      "Dominated the competition with a perfect 12-0 record throughout the tournament.",
  },
  {
    title: "Regional Invitational",
    game: "Valorant",
    placement: "2nd Place",
    year: "2023",
    description:
      "Fought through a tough bracket to reach the finals in our first year competing.",
  },
  {
    title: "University Cup",
    game: "Rocket League",
    placement: "1st Place",
    year: "2023",
    description:
      "Defeated 32 other university teams to claim the championship title.",
  },
  {
    title: "Winter Showcase",
    game: "League of Legends",
    placement: "Semi-Finalist",
    year: "2023",
    description:
      "Reached the semi-finals of this prestigious invitational tournament.",
  },
];

export function TeamAchievements() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Team Achievements
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our teams have a proven track record of success in collegiate
            esports competitions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="gaming-card p-6 flex gap-4"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-ap-pink/20 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-ap-pink" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">
                    {achievement.title}
                  </h3>
                  <span className="text-ap-pink font-bold">
                    {achievement.year}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white font-medium">
                    {achievement.placement}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{achievement.game}</span>
                </div>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
