"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";
import { Team } from "@/types/api";

interface TeamCardProps {
  team: Team;
}

export function TeamCard({ team }: TeamCardProps) {
  return (
    <motion.div
      className="gaming-card overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={`/placeholder.svg?height=300&width=500&text=${team.game.name}`}
          alt={team.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-4 left-4 bg-ap-pink/80 rounded-full px-3 py-1 text-xs text-white">
          {team.game.name}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-ap-pink transition-colors duration-300">
          {team.name}
        </h3>
        <div className="flex items-center text-gray-400 mb-4">
          <Users className="h-4 w-4 mr-2 text-ap-pink" />
          <span>{team.playerCount || 0} Players</span>
        </div>
        <Link
          href={`/teams/${team.id}`}
          className="inline-block w-full bg-ap-dark-lighter hover:bg-ap-dark-light text-white border border-ap-pink/30 py-2 px-4 rounded-md text-center transition-all duration-300"
        >
          View Team
        </Link>
      </div>
    </motion.div>
  );
}
