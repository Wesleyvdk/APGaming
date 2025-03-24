"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2021 - 2022",
    title: "AP Gaming First appearance",
    description:
      "AP Gaming first appeared by a group of students who joined the Belgian Student League in Rocket League to have fun.",
  },
  {
    year: "2022 - 2023",
    title: "First Competitive Team",
    description:
      "Formed our first competitive team focusing on Rocket League with our founding members ehz and Spider.",
  },
  {
    year: "2023 - 2024",
    title: "Officially established AP Gaming",
    description:
      "Officially established AP Gaming as a recognized student organization at our university and Belgian Student League.",
  },
  {
    year: "2023 - 2024",
    title: "First League Victory",
    description:
      "Won our first League in BSL with a spectactular 21-0 record, beating the previous 21-1 record.",
  },
  {
    year: "2024 - 2025",
    title: "Expanded to League of Legends",
    description:
      "Added a competitive League Of Legends team to our roster, expanding our presence in BSL.",
  },
];

export function AboutTimeline() {
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
            Our Journey
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From our founding to national champions, explore the key milestones
            in AP Gaming's history.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-ap-pink/20 z-0"></div>

          <div className="relative z-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="mb-12 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Timeline content */}
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <div className="gaming-card p-6">
                      <div className="inline-block bg-ap-pink/20 rounded-full px-3 py-1 text-xs text-ap-pink mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-ap-pink border-4 border-ap-dark"></div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="w-5/12"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
