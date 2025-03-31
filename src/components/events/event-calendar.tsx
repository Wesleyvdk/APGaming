"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
} from "lucide-react";
import { getPublicEvents } from "@/lib/api";
import { Button } from "../ui/button";

type CalendarEvent = {
  day: number;
  events: string[];
  eventIds: string[];
};

type CalendarMonth = {
  month: string;
  year: number;
  days: CalendarEvent[];
  firstDayOfMonth: number;
  daysInMonth: number;
};

export function EventCalendar() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarData, setCalendarData] = useState<CalendarMonth | null>(null);

  // Function to generate calendar data for a given month
  const generateCalendarData = (date: Date, events: any[]) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const monthName = firstDay.toLocaleString("default", { month: "long" });
    const firstDayOfMonth = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const daysInMonth = lastDay.getDate();

    // Initialize days array
    const days: CalendarEvent[] = Array.from(
      { length: daysInMonth },
      (_, i) => ({
        day: i + 1,
        events: [],
        eventIds: [],
      })
    );

    // Add events to the calendar
    events.forEach((event) => {
      const eventDate = new Date(event.startDate); // Use `startDate` here
      if (eventDate.getMonth() === month && eventDate.getFullYear() === year) {
        const day = eventDate.getDate();
        days[day - 1].events.push(event.title);
        days[day - 1].eventIds.push(event.id);
      }
    });

    return {
      month: monthName,
      year,
      days,
      firstDayOfMonth,
      daysInMonth,
    };
  };

  // Function to navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  // Function to navigate to next month
  const goToNextMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  // Fetch events and generate calendar data
  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        const data = await getPublicEvents();
        if (!data.events) {
          throw new Error("Failed to fetch events");
        }

        const calendar = generateCalendarData(currentDate, data.events);
        setCalendarData(calendar);
      } catch (err) {
        console.error("Error fetching events for calendar:", err);
        setError("Failed to load calendar. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, [currentDate]);

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
            Event Calendar
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            View all upcoming events and matches on our calendar.
          </motion.p>
        </div>

        <motion.div
          className="gaming-card p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ap-pink"></div>
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <p className="text-red-400 mb-4">{error}</p>
              <button
                className="px-4 py-2 bg-ap-pink rounded-md text-white"
                onClick={() => window.location.reload()}
              >
                Try Again
              </button>
            </div>
          ) : calendarData ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <button
                  className="p-2 rounded-full bg-ap-dark-lighter hover:bg-ap-dark-light"
                  onClick={goToPreviousMonth}
                >
                  <ChevronLeft className="h-5 w-5 text-ap-pink" />
                </button>
                <h3 className="text-2xl font-bold text-white">
                  {calendarData.month} {calendarData.year}
                </h3>
                <button
                  className="p-2 rounded-full bg-ap-dark-lighter hover:bg-ap-dark-light"
                  onClick={goToNextMonth}
                >
                  <ChevronRight className="h-5 w-5 text-ap-pink" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2 text-center">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div key={day} className="p-2 text-gray-400 font-medium">
                      {day}
                    </div>
                  )
                )}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {/* Empty cells for days before the 1st of the month */}
                {Array.from({ length: calendarData.firstDayOfMonth }).map(
                  (_, i) => (
                    <div key={`empty-${i}`} className="p-2 min-h-[80px]"></div>
                  )
                )}

                {calendarData.days.map((day) => (
                  <div
                    key={day.day}
                    className={`p-2 border border-ap-dark-lighter rounded-md min-h-[80px] hover:border-ap-pink/30 transition-colors ${
                      day.events.length > 0 ? "bg-ap-dark-lighter" : ""
                    }`}
                  >
                    <div className="text-right mb-1">
                      <span
                        className={`inline-block rounded-full w-6 h-6 text-center ${
                          day.events.length > 0
                            ? "bg-ap-pink text-white"
                            : "text-gray-400"
                        }`}
                      >
                        {day.day}
                      </span>
                    </div>
                    {day.events.map((event, i) => (
                      <a
                        key={i}
                        href={`/events/${day.eventIds[i]}`}
                        className="block text-xs text-ap-pink truncate hover:underline"
                      >
                        {event}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  game: string;
  registration: boolean;
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

        // Filter for upcoming events using `startDate`
        const now = new Date();
        const upcomingEvents = data.events
          .filter((event: any) => new Date(event.startDate) >= now) // Use `startDate` here
          .map((event: any) => ({
            id: event.id,
            title: event.title,
            description: event.description || "",
            date: event.startDate, // Use `startDate` here
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
            registration: true, // Assume all events can be registered for
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
                          // Create calendar event
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
