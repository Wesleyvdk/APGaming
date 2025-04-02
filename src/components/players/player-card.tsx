"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GamepadIcon as GameController } from "lucide-react";
import { Player } from "@/types/api";

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <motion.div
      className="gaming-card overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={`/placeholder.svg?height=400&width=400&text=${player.inGameName}`}
          alt={player.inGameName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        {player.country && (
          <div className="absolute top-4 right-4 bg-ap-dark-lighter rounded-md px-2 py-1 text-xs text-white">
            {player.country}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-white group-hover:text-ap-pink transition-colors duration-300">
          {player.inGameName}
        </h3>
        {/*         <p className="text-gray-300 mb-1">
          {player.firstName} {player.lastName}
        </p> */}
        <p className="text-ap-pink font-medium mb-3">{player.role}</p>

        {player.teams && player.teams.length > 0 && (
          <div className="mb-4">
            <div className="text-sm text-gray-400 mb-2">Teams:</div>
            <div className="flex flex-wrap gap-2">
              {player.teams.map((team) => (
                <div
                  key={team.id}
                  className="flex items-center bg-ap-dark-lighter rounded-full px-3 py-1 text-xs"
                >
                  <GameController className="h-3 w-3 mr-1 text-ap-pink" />
                  <span>{team.game.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <Link
          href={`/players/${player.id}`}
          className="inline-block w-full bg-ap-dark-lighter hover:bg-ap-dark-light text-white border border-ap-pink/30 py-2 px-4 rounded-md text-center transition-all duration-300"
        >
          View Profile
        </Link>
      </div>
    </motion.div>
  );
}
