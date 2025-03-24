"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Twitter, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "ehz",
    role: "Founder & Director",
    image: "/placeholder.svg?height=400&width=400",
    bio: "ehz founded AP Gaming in 2021 with a vision to create a competitive esports program at the university.",
  },
  {
    name: "Spider",
    role: "Co-Founder",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Spider brings esports experience to AP Gaming, having previously played in semi-professional teams in Rocket League.",
  },
  {
    name: "SvenC.",
    role: "Co-Founder",
    image: "/placeholder.svg?height=400&width=400",
    bio: "As a researcher in video game experiences and lecturer at AP University of Applied Sciences & Arts, Sven joined AP Gaming as co-founder to bridge academic expertise with competitive gaming.",
  },
  {
    name: "Laura H.",
    role: "Co-Founder",
    image: "/placeholder.svg?height=400&width=400",
    bio: "As a lecturer and key expert in the 'Better Esports Analytics for Teams' project at AP University, Laura collaborated with PM Sven to establish AP Gaming, bringing her academic expertise to the foundation.",
  },
];

export function AboutTeam() {
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
            Leadership Team
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Meet the dedicated individuals who lead AP Gaming and drive our
            success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="gaming-card overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-ap-pink transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-ap-pink font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-ap-dark-lighter flex items-center justify-center hover:bg-ap-pink/20 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-ap-pink" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-ap-dark-lighter flex items-center justify-center hover:bg-ap-pink/20 transition-colors"
                  >
                    <Twitter className="h-4 w-4 text-ap-pink" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-ap-dark-lighter flex items-center justify-center hover:bg-ap-pink/20 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-ap-pink" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
