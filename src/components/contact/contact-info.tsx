"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Users,
  Trophy,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6 text-ap-pink" />,
    title: "General Inquiries",
    description: "For general questions about AP Gaming",
    contact: "info@ap-gaming.org",
    action: "Email Us",
    link: "mailto:info@ap-gaming.org",
  },
  {
    icon: <Trophy className="h-6 w-6 text-ap-pink" />,
    title: "Sponsorships",
    description: "Interested in partnering with AP Gaming?",
    contact: "sponsors@ap-gaming.org",
    action: "Become a Sponsor",
    link: "mailto:sponsors@ap-gaming.org",
  },
  {
    icon: <Users className="h-6 w-6 text-ap-pink" />,
    title: "Recruitment",
    description: "Want to join our competitive teams?\n",
    contact: "join the discord",
    action: "Join the Discord",
    link: "https://discord.gg/epPREvrJSE",
  },
  {
    icon: <Headphones className="h-6 w-6 text-ap-pink" />,
    title: "Technical Support",
    description: "Need help with our website or services?",
    contact: "support@ap-gaming.org",
    action: "Get Support",
    link: "mailto:support@ap-gaming.org",
  },
];

export function ContactInfo() {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="gaming-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-ap-pink/10 flex items-center justify-center mr-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{method.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{method.description}</p>
              <p className="text-ap-pink font-medium mb-4">{method.contact}</p>
              <Button
                className="w-full bg-ap-dark-lighter hover:bg-ap-dark-light text-white border border-ap-pink/30"
                onClick={() => window.open(method.link, "_blank")}
              >
                {method.action}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
