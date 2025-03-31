"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { registerForEvent } from "@/lib/api";

type EventSignupFormProps = {
  eventId: string;
  eventTitle: string;
};

export function EventSignupForm({ eventId, eventTitle }: EventSignupFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [wantsReminder, setWantsReminder] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      setError("Please fill in all required fields");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const result = await registerForEvent(eventId, {
        name,
        email,
        wantsReminder,
      });

      if (!result.success) {
        throw new Error(result.error || "Failed to register for event");
      }

      setSuccess(true);
      // Reset form
      setName("");
      setEmail("");
      setWantsReminder(true);
    } catch (err) {
      console.error("Error registering for event:", err);
      setError(
        err instanceof Error ? err.message : "Failed to register for event"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="gaming-card p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 gradient-text">
        Register for {eventTitle}
      </h2>

      {success ? (
        <div className="bg-ap-dark-lighter p-6 rounded-lg border border-ap-pink/20 text-center">
          <div className="text-ap-pink text-5xl mb-4">✓</div>
          <h3 className="text-xl font-bold mb-2 text-white">
            Registration Successful!
          </h3>
          <p className="text-gray-300 mb-6">
            Thank you for registering for {eventTitle}.{" "}
            {wantsReminder &&
              "We'll send you a reminder on the day of the event."}
          </p>
          <Button
            className="bg-ap-pink hover:bg-ap-pink/90 text-white"
            onClick={() => setSuccess(false)}
          >
            Register Another Person
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-900/30 border border-red-500/50 text-red-200 p-4 rounded-md mb-4">
              {error}
            </div>
          )}

          <div>
            <label className="block text-gray-300 mb-1 text-sm">
              Full Name <span className="text-ap-pink">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-ap-dark border border-ap-pink/30 text-white focus:outline-none focus:border-ap-pink"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1 text-sm">
              Student Email <span className="text-ap-pink">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-ap-dark border border-ap-pink/30 text-white focus:outline-none focus:border-ap-pink"
              placeholder="Enter your student email"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="reminder"
              checked={wantsReminder}
              onChange={(e) => setWantsReminder(e.target.checked)}
              className="h-4 w-4 rounded border-ap-pink/30 bg-ap-dark text-ap-pink focus:ring-ap-pink"
            />
            <label
              htmlFor="reminder"
              className="ml-2 block text-sm text-gray-300"
            >
              Send me a reminder on the day of the event
            </label>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-ap-pink hover:bg-ap-pink/90 text-white flex items-center justify-center"
          >
            {loading ? (
              <>
                <span className="animate-spin h-4 w-4 mr-2 border-t-2 border-b-2 border-white rounded-full"></span>
                Registering...
              </>
            ) : (
              "Register Now"
            )}
          </Button>
        </form>
      )}
    </motion.div>
  );
}
