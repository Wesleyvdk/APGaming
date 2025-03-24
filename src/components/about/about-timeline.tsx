"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2021",
    title: "AP Gaming Founded",
    description:
      "AP Gaming was established by a group of passionate students with a vision to create a competitive esports program at the university.",
  },
  {
    year: "2021",
    title: "First League of Legends Team",
    description:
      "Formed our first competitive team focusing on League of Legends with five founding members.",
  },
  {
    year: "2022",
    title: "First Tournament Victory",
    description:
      "Won our first regional tournament in League of Legends, putting AP Gaming on the collegiate esports map.",
  },
  {
    year: "2022",
    title: "Expanded to Valorant",
    description:
      "Added a competitive Valorant team to our roster, expanding our presence in tactical FPS games.",
  },
  {
    year: "2023",
    title: "Dedicated Gaming Facility",
    description:
      "Secured a dedicated training facility on campus with professional-grade equipment and practice spaces.",
  },
  {
    year: "2023",
    title: "Rocket League Team Added",
    description:
      "Expanded our program to include Rocket League, quickly becoming competitive in regional tournaments.",
  },
  {
    year: "2024",
    title: "National Championship Qualification",
    description:
      "Our League of Legends team qualified for the National Collegiate Championship for the first time.",
  },
  {
    year: "2024",
    title: "Major Sponsorship Deal",
    description:
      "Secured our first major sponsorship deal with a leading gaming hardware manufacturer.",
  },
  {
    year: "2025",
    title: "National Champions",
    description:
      "Won the National Collegiate Championship in League of Legends, cementing our status as a top-tier program.",
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
