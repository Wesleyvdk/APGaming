"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getPublicEvents } from "@/lib/api";

// Define the Event interface based on what your API returns
interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  type?: string;
  game?: string;
  imageUrl?: string;
  isPublic: boolean;
}

export function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        const { events: fetchedEvents } = await getPublicEvents();

        // Filter for upcoming events
        const now = new Date();
        const upcomingEvents = fetchedEvents
          .filter((event: Event) => new Date(event.date) >= now)
          .map((event: Event) => ({
            ...event,
            // Add default values for optional fields
            type: event.type || "Event",
            game: event.game || "Multiple Games",
            location: event.location || "Online",
          }));

        setEvents(upcomingEvents);
      } catch (err) {
        console.error("Failed to fetch events:", err);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Format time for display
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

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
          <div className="text-center py-20">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-ap-pink border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-gray-400">Loading events...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-400">{error}</p>
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400">
              No upcoming events at the moment. Check back soon!
            </p>
          </div>
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
                          {formatDate(event.date)}
                        </div>
                        <div className="text-lg font-bold text-white mt-1">
                          {formatTime(event.date)}
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
                          {formatTime(event.date)}
                        </div>
                      </div>

                      <p className="text-gray-300">{event.description}</p>
                    </div>

                    <div className="lg:w-1/4 flex flex-col justify-center items-center lg:items-end gap-4">
                      <Link href={`/events/${event.id}`}>
                        <Button className="w-full sm:w-auto bg-ap-pink hover:bg-ap-pink/90 text-white">
                          Register Now
                        </Button>
                      </Link>

                      <Button
                        variant="outline"
                        className="w-full sm:w-auto border-ap-pink/50 text-ap-pink hover:bg-ap-pink/10"
                        onClick={() => {
                          // Add to calendar functionality
                          const eventDate = new Date(event.date);
                          const endDate = new Date(eventDate);
                          endDate.setHours(endDate.getHours() + 3); // Assume 3 hours duration

                          const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                            event.title
                          )}&dates=${eventDate
                            .toISOString()
                            .replace(/-|:|\.\d+/g, "")}/${endDate
                            .toISOString()
                            .replace(
                              /-|:|\.\d+/g,
                              ""
                            )}&details=${encodeURIComponent(
                            event.description
                          )}&location=${encodeURIComponent(
                            event.location || "Online"
                          )}`;

                          window.open(calendarUrl, "_blank");
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
