"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  TrendingUp,
  Globe,
  Users,
  Rocket,
  Trophy,
} from "lucide-react";

const shortTermGoals = [
  {
    icon: <Trophy className="h-6 w-6 text-ap-pink" />,
    title: "Defend National Title",
    description:
      "Successfully defend our League of Legends national championship title in the upcoming season.",
  },
  {
    icon: <Users className="h-6 w-6 text-ap-pink" />,
    title: "Expand Team Roster",
    description:
      "Add competitive teams for two additional game titles to broaden our competitive presence.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-ap-pink" />,
    title: "Improve Training Programs",
    description:
      "Enhance our coaching staff and implement structured training programs for all teams.",
  },
];

const longTermGoals = [
  {
    icon: <Globe className="h-6 w-6 text-ap-pink" />,
    title: "International Competition",
    description:
      "Represent our university in international collegiate tournaments by 2027.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-ap-pink" />,
    title: "Esports Scholarship Program",
    description:
      "Establish a dedicated scholarship program for talented esports athletes by 2026.",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-ap-pink" />,
    title: "State-of-the-Art Facility",
    description:
      "Build a cutting-edge esports arena on campus with spectator seating by 2028.",
  },
];

export function AboutGoals() {
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
            Our Future Goals
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AP Gaming has ambitious plans for the future. Here's what we're
            working towards in the coming years.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="gaming-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Short-Term Goals (1-2 Years)
              </h3>
              <div className="space-y-6">
                {shortTermGoals.map((goal, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">{goal.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 text-white">
                        {goal.title}
                      </h4>
                      <p className="text-gray-300">{goal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="gaming-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Long-Term Vision (3-5 Years)
              </h3>
              <div className="space-y-6">
                {longTermGoals.map((goal, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">{goal.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 text-white">
                        {goal.title}
                      </h4>
                      <p className="text-gray-300">{goal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Ultimate Goal</h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Our ultimate vision is to establish AP Gaming as the premier
            collegiate esports program in the country, known for developing
            talented players, fostering a vibrant gaming community, and setting
            the standard for excellence in collegiate esports.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
