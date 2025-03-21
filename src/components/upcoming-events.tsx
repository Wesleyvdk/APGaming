"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "Regional Championship Qualifier",
    date: "March 15, 2025",
    location: "University Arena",
    game: "League of Legends",
    prize: "$5,000",
  },
  {
    id: 2,
    title: "Invitational Tournament",
    date: "April 2, 2025",
    location: "Online",
    game: "Valorant",
    prize: "$2,500",
  },
  {
    id: 3,
    title: "Friendly Match vs State University",
    date: "April 18, 2025",
    location: "University Arena",
    game: "Rocket League",
    prize: "Bragging Rights",
  },
];

export function UpcomingEvents() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Upcoming Events
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Mark your calendars for these exciting tournaments and matches. Come
            support our teams!
          </motion.p>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-ap-dark-lighter rounded-lg overflow-hidden border border-ap-pink/20 hover:border-ap-pink/50 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="bg-ap-pink/10 rounded-lg p-4 text-center min-w-24">
                  <Calendar className="h-6 w-6 mx-auto mb-2 text-ap-pink" />
                  <div className="text-sm text-gray-400">
                    {event.date.split(",")[0]}
                  </div>
                  <div className="text-lg font-bold text-white">
                    {event.date.split(",")[1]}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                    {event.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-ap-pink" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 mr-1 text-ap-pink" />
                      Prize: {event.prize}
                    </div>
                  </div>
                  <div className="inline-block bg-ap-pink/20 rounded-full px-3 py-1 text-xs text-ap-pink">
                    {event.game}
                  </div>
                </div>

                <Button className="bg-ap-pink hover:bg-ap-pink/90 text-white whitespace-nowrap">
                  Register Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-ap-pink text-ap-pink hover:bg-ap-pink/10"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}
