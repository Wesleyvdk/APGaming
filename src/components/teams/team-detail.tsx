"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Team } from "@/types/api";
import { GamepadIcon as GameController, Users, Trophy } from "lucide-react";

interface TeamDetailProps {
  team: Team;
}

export function TeamDetail({ team }: TeamDetailProps) {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-ap-pink/20 rounded-full px-4 py-2 text-sm text-ap-pink mb-4">
              {team.game.name}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              {team.name}
            </h1>
            <div className="flex items-center gap-2 text-gray-300 mb-8">
              <Users className="h-5 w-5 text-ap-pink" />
              <span>{team.players?.length || 0} Players</span>
              <span className="mx-2">•</span>
              <GameController className="h-5 w-5 text-ap-pink" />
              <span>{team.game.name}</span>
            </div>
          </motion.div>
        </div>
      </section>

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
              Team Roster
            </motion.h2>
            <motion.p
              className="text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Meet the talented players who represent {team.name} in
              competitions.
            </motion.p>
          </div>

          {team.players && team.players.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.players.map((player, index) => (
                <motion.div
                  key={player.id}
                  className="gaming-card overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    {/* <p className="text-gray-300 mb-1">
                      {player.firstName} {player.lastName}
                    </p> */}
                    <p className="text-ap-pink font-medium mb-4">
                      {player.role}
                    </p>
                    <Link
                      href={`/players/${player.id}`}
                      className="inline-block w-full bg-ap-dark-lighter hover:bg-ap-dark-light text-white border border-ap-pink/30 py-2 px-4 rounded-md text-center transition-all duration-300"
                    >
                      View Profile
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-300">No players found for this team.</p>
            </div>
          )}
        </div>
      </section>

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
              Team Achievements
            </motion.h2>
          </div>

          <motion.div
            className="gaming-card p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-ap-pink/10 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-ap-pink" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Coming Soon</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're currently tracking achievements for {team.name}. Check back
              soon to see their tournament results and accomplishments.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
