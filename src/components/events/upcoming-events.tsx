"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPublicEvents } from "@/lib/api";

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  type?: string;
  game?: string;
  registration?: boolean;
};

export function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        const data = await getPublicEvents();

        if (!data.events) {
          throw new Error("Failed to fetch events");
        }

        const now = new Date();
        const upcomingEvents = data.events
          .filter((event: any) => new Date(event.startDate) >= now)
          .map((event: any) => ({
            id: event.id,
            title: event.title,
            description: event.description || "",
            date: event.startDate,
            time: event.endDate
              ? `${new Date(event.startDate).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })} - ${new Date(event.endDate).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`
              : "All Day",
            location: event.location || "Online",
            type: event.type || "Event",
            game: event.game || "Multiple Games",
            registration: true,
          }));

        setEvents(upcomingEvents);
      } catch (err) {
        console.error("Error fetching upcoming events:", err);
        setError("Failed to load upcoming events. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

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

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ap-pink"></div>
          </div>
        ) : error ? (
          <motion.div
            className="gaming-card p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-red-400">{error}</p>
            <Button
              className="mt-4 bg-ap-pink hover:bg-ap-pink/90 text-white"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </motion.div>
        ) : events.length === 0 ? (
          <motion.div
            className="gaming-card p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-300">
              No upcoming events at the moment. Check back soon!
            </p>
          </motion.div>
        ) : (
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
                        <div className="text-sm text-gray-400">
                          {new Date(event.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
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
                        <Button
                          className="w-full sm:w-auto bg-ap-pink hover:bg-ap-pink/90 text-white"
                          onClick={() =>
                            (window.location.href = `/events/${event.id}`)
                          }
                        >
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
                        onClick={() => {
                          const eventDate = new Date(event.date);
                          const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                            event.title
                          )}&dates=${eventDate
                            .toISOString()
                            .replace(/-|:|\.\d+/g, "")
                            .slice(0, 8)}T${eventDate
                            .toISOString()
                            .replace(/-|:|\.\d+/g, "")
                            .slice(9, 15)}Z/${eventDate
                            .toISOString()
                            .replace(/-|:|\.\d+/g, "")
                            .slice(0, 8)}T${eventDate
                            .toISOString()
                            .replace(/-|:|\.\d+/g, "")
                            .slice(9, 15)}Z&details=${encodeURIComponent(
                            event.description
                          )}&location=${encodeURIComponent(
                            event.location || ""
                          )}&sf=true&output=xml`;
                          window.open(url, "_blank");
                        }}
                      >
                        Add to Calendar
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
