"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const schedule = [
  {
    team: "League of Legends",
    event: "Spring Championship Qualifier",
    opponent: "State University",
    date: "March 28, 2025",
    time: "7:00 PM",
    location: "Online",
  },
  {
    team: "Valorant",
    event: "Regional Tournament",
    opponent: "Tech Institute",
    date: "April 5, 2025",
    time: "6:30 PM",
    location: "University Arena",
  },
  {
    team: "Rocket League",
    event: "Collegiate Cup",
    opponent: "Multiple Teams",
    date: "April 12-13, 2025",
    time: "All Day",
    location: "Online",
  },
];

export function TeamSchedule() {
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
            Upcoming Matches
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Check out our upcoming matches and tournaments. Come support our
            teams!
          </motion.p>
        </div>

        <div className="space-y-6">
          {schedule.map((match, index) => (
            <motion.div
              key={index}
              className="gaming-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="bg-ap-pink/10 rounded-lg p-4 text-center min-w-24">
                  <Calendar className="h-6 w-6 mx-auto mb-2 text-ap-pink" />
                  <div className="text-sm text-gray-400">
                    {match.date.split(",")[0]}
                  </div>
                  <div className="text-lg font-bold text-white">
                    {match.time}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="inline-block bg-ap-pink/20 rounded-full px-3 py-1 text-xs text-ap-pink mb-2">
                    {match.team}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                    {match.event}
                  </h3>
                  <div className="text-lg text-gray-300 mb-2">
                    vs. {match.opponent}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="h-4 w-4 mr-1 text-ap-pink" />
                    {match.location}
                  </div>
                </div>

                <div className="md:self-center">
                  <button className="bg-ap-pink hover:bg-ap-pink/90 text-white px-4 py-2 rounded-md transition-all duration-300">
                    Watch Live
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
