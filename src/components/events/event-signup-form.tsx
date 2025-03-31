"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { registerForEvent } from "@/lib/api";

interface EventSignupFormProps {
  eventId: string;
  eventTitle: string;
}

export function EventSignupForm({ eventId, eventTitle }: EventSignupFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [wantsReminder, setWantsReminder] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    success?: boolean;
    message?: string;
    error?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await registerForEvent(eventId, {
        name,
        email,
        wantsReminder,
      });

      if (response.success) {
        setResult({
          success: true,
          message: "You have successfully registered for this event!",
        });
        // Reset form
        setName("");
        setEmail("");
        setWantsReminder(true);
      } else {
        setResult({
          success: false,
          error: response.error || "Failed to register for event",
        });
      }
    } catch (error) {
      setResult({
        success: false,
        error: "An unexpected error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="bg-ap-dark-lighter p-6 rounded-lg border border-ap-pink/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-4 text-white">
        Register for {eventTitle}
      </h3>

      {result?.success ? (
        <div className="bg-green-900/30 border border-green-800 rounded-md p-4 mb-6">
          <p className="text-green-400">{result.message}</p>
          <Button
            className="mt-4 bg-ap-pink hover:bg-ap-pink/90 text-white"
            onClick={() => setResult(null)}
          >
            Register Another Person
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1 text-sm">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-ap-dark border border-ap-pink/30 text-white focus:outline-none focus:border-ap-pink"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1 text-sm">
              Student Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-ap-dark border border-ap-pink/30 text-white focus:outline-none focus:border-ap-pink"
              disabled={isSubmitting}
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="wantsReminder"
              checked={wantsReminder}
              onChange={(e) => setWantsReminder(e.target.checked)}
              className="h-4 w-4 text-ap-pink focus:ring-ap-pink border-gray-700 rounded"
              disabled={isSubmitting}
            />
            <label
              htmlFor="wantsReminder"
              className="ml-2 block text-sm text-gray-300"
            >
              Send me a reminder on the day of the event
            </label>
          </div>

          {result?.error && (
            <div className="bg-red-900/30 border border-red-800 rounded-md p-4">
              <p className="text-red-400">{result.error}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-ap-pink hover:bg-ap-pink/90 text-white"
          >
            {isSubmitting ? "Registering..." : "Register Now"}
          </Button>
        </form>
      )}
    </motion.div>
  );
}
