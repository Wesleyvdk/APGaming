"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock calendar data
const calendarData = {
  month: "April",
  year: 2025,
  days: Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    events:
      i === 4 || i === 5
        ? ["Valorant Invitational"]
        : i === 11
        ? ["Community Game Night"]
        : i === 18 || i === 19
        ? ["Rocket League Collegiate Cup"]
        : i === 27
        ? ["League of Legends Scrimmage"]
        : [],
  })),
};

export function EventCalendar() {
  const [currentMonth, setCurrentMonth] = useState(calendarData);

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
          <div className="flex justify-between items-center mb-6">
            <button className="p-2 rounded-full bg-ap-dark-lighter hover:bg-ap-dark-light">
              <ChevronLeft className="h-5 w-5 text-ap-pink" />
            </button>
            <h3 className="text-2xl font-bold text-white">
              {currentMonth.month} {currentMonth.year}
            </h3>
            <button className="p-2 rounded-full bg-ap-dark-lighter hover:bg-ap-dark-light">
              <ChevronRight className="h-5 w-5 text-ap-pink" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="p-2 text-gray-400 font-medium">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {/* Empty cells for days before the 1st of the month */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={`empty-${i}`} className="p-2 min-h-[80px]"></div>
            ))}

            {currentMonth.days.map((day) => (
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
                  <div key={i} className="text-xs text-ap-pink truncate">
                    {event}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
