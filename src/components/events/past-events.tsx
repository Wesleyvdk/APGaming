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
};

export function PastEvents() {
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

        // Filter for past events
        const now = new Date();
        const pastEvents = data.events
          .filter((event: any) => new Date(event.date) < now)
          .map((event: any) => ({
            id: event.id,
            title: event.title,
            description: event.description || "",
            date: event.date,
            time: event.time || "All Day",
            location: event.location || "Online",
            type: event.type || "Event",
            game: event.game || "Multiple Games",
          }));

        setEvents(pastEvents);
      } catch (err) {
        console.error("Error fetching past events:", err);
        setError("Failed to load past events. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  // If no past events, don't render the section
  if (!loading && events.length === 0 && !error) {
    return null;
  }

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
            Past Events
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Check out our previous tournaments and events.
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
        ) : (
          <div className="space-y-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="gaming-card overflow-hidden opacity-80 hover:opacity-100 transition-opacity"
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
                      <Button
                        className="w-full sm:w-auto bg-ap-dark-lighter hover:bg-ap-dark-light text-white border border-ap-pink/30"
                        onClick={() =>
                          window.open(`/events/${event.id}`, "_blank")
                        }
                      >
                        View Results
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
