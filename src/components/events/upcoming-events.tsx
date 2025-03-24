"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "Spring Championship Qualifier",
    type: "Tournament",
    game: "League of Legends",
    date: "March 28, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "University Arena",
    description:
      "The first round of qualifiers for the Spring Championship. Our team will face State University in a best-of-three series.",
    registration: true,
  },
  {
    id: 2,
    title: "Valorant Invitational",
    type: "Tournament",
    game: "Valorant",
    date: "April 5-6, 2025",
    time: "All Day",
    location: "Online",
    description:
      "A two-day invitational tournament featuring the top 8 collegiate Valorant teams in the region.",
    registration: false,
  },
  {
    id: 3,
    title: "Community Game Night",
    type: "Community",
    game: "Multiple Games",
    date: "April 12, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Student Center",
    description:
      "Join us for a casual game night open to all students. Play with and against our esports athletes!",
    registration: true,
  },
  {
    id: 4,
    title: "Rocket League Collegiate Cup",
    type: "Tournament",
    game: "Rocket League",
    date: "April 19-20, 2025",
    time: "12:00 PM - 6:00 PM",
    location: "Online",
    description:
      "Our Rocket League team competes in the prestigious Collegiate Cup against 15 other universities.",
    registration: false,
  },
];

export function UpcomingEvents() {
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
            Upcoming Events
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Mark your calendars for these exciting tournaments and events. Come
            support our teams!
          </motion.p>
        </div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="gaming-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/4">
                    <div className="bg-ap-pink/10 rounded-lg p-4 text-center">
                      <Calendar className="h-6 w-6 mx-auto mb-2 text-ap-pink" />
                      <div className="text-sm text-gray-400">{event.date}</div>
                      <div className="text-lg font-bold text-white mt-1">
                        {event.time}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <div className="bg-ap-pink/20 rounded-full px-3 py-1 text-xs text-ap-pink">
                        {event.type}
                      </div>
                      <div className="bg-ap-dark-lighter rounded-full px-3 py-1 text-xs text-gray-300">
                        {event.game}
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                      {event.title}
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-ap-pink" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-ap-pink" />
                        {event.time}
                      </div>
                    </div>

                    <p className="text-gray-300">{event.description}</p>
                  </div>

                  <div className="lg:w-1/4 flex flex-col justify-center items-center lg:items-end gap-4">
                    {event.registration ? (
                      <Button className="w-full sm:w-auto bg-ap-pink hover:bg-ap-pink/90 text-white">
                        Register Now
                      </Button>
                    ) : (
                      <Button className="w-full sm:w-auto bg-ap-dark-lighter hover:bg-ap-dark-light text-white border border-ap-pink/30">
                        Watch Live
                      </Button>
                    )}

                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-ap-pink/50 text-ap-pink hover:bg-ap-pink/10"
                    >
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
