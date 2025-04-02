"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Player } from "@/types/api";
import {
  GamepadIcon as GameController,
  Flag,
  Trophy,
  Star,
  Globe,
  Twitter,
  Twitch,
  Users,
  BarChart3,
} from "lucide-react";

interface PlayerDetailProps {
  player: Player;
}

export function PlayerDetail({ player }: PlayerDetailProps) {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <motion.div
              className="md:w-1/3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-64 h-64 md:w-full md:h-96 mx-auto">
                <div className="absolute -inset-4 bg-ap-pink/20 rounded-3xl blur-xl"></div>
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=${player.inGameName}`}
                  alt={player.inGameName}
                  fill
                  className="object-cover rounded-lg relative z-10"
                />
              </div>
            </motion.div>

            <motion.div
              className="md:w-2/3 text-center md:text-left"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block bg-ap-pink/20 rounded-full px-4 py-2 text-sm text-ap-pink mb-4">
                {player.role}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2 gradient-text">
                {player.inGameName}
              </h1>
              <h2 className="text-2xl text-white mb-6">
                {player.firstName} {player.lastName}
              </h2>

              <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
                {player.country && (
                  <div className="flex items-center bg-ap-dark-lighter rounded-full px-4 py-2">
                    <Flag className="h-4 w-4 mr-2 text-ap-pink" />
                    <span>{player.country}</span>
                  </div>
                )}

                {player.rank && (
                  <div className="flex items-center bg-ap-dark-lighter rounded-full px-4 py-2">
                    <Star className="h-4 w-4 mr-2 text-ap-pink" />
                    <span>Rank: {player.rank}</span>
                  </div>
                )}
              </div>

              {player.teams && player.teams.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-white">Teams</h3>
                  <div className="flex flex-wrap gap-3">
                    {player.teams.map((team) => (
                      <Link
                        key={team.id}
                        href={`/teams/${team.id}`}
                        className="flex items-center bg-ap-dark-lighter hover:bg-ap-dark-light rounded-full px-4 py-2 transition-colors"
                      >
                        <GameController className="h-4 w-4 mr-2 text-ap-pink" />
                        <span>
                          {team.name} ({team.game.name})
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {player.socialLinks &&
                Object.keys(player.socialLinks).length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-white">
                      Social Media
                    </h3>
                    <div className="flex gap-3 justify-center md:justify-start">
                      {Object.entries(player.socialLinks).map(
                        ([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-ap-dark-lighter flex items-center justify-center hover:bg-ap-pink/20 transition-colors"
                            aria-label={platform}
                          >
                            {platform === "twitter" && (
                              <Twitter className="h-5 w-5 text-ap-pink" />
                            )}
                            {platform === "twitch" && (
                              <Twitch className="h-5 w-5 text-ap-pink" />
                            )}
                            {platform !== "twitter" &&
                              platform !== "twitch" && (
                                <Globe className="h-5 w-5 text-ap-pink" />
                              )}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                )}

              {player.trackerLinks &&
                Object.keys(player.trackerLinks).length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">
                      Game Stats
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {Object.entries(player.trackerLinks).map(
                        ([game, url]) => (
                          <a
                            key={game}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-ap-dark-lighter hover:bg-ap-dark-light rounded-full px-4 py-2 transition-colors"
                          >
                            <BarChart3 className="h-4 w-4 mr-2 text-ap-pink" />
                            <span>{game} Stats</span>
                          </a>
                        )
                      )}
                    </div>
                  </div>
                )}
            </motion.div>
          </div>
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
              Player Achievements
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
              We're currently tracking achievements for {player.inGameName}.
              Check back soon to see their tournament results and
              accomplishments.
            </p>
          </motion.div>
        </div>
      </section>

      {player.teams && player.teams.length > 0 && (
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
                Teammates
              </motion.h2>
              <motion.p
                className="text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Meet the players who compete alongside {player.inGameName}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {player.teams.map((team, index) => (
                <motion.div
                  key={team.id}
                  className="gaming-card overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                      <span>
                        {team.playerCount || team.players?.length || 0} Players
                      </span>
                    </div>
                    <Link
                      href={`/teams/${team.id}`}
                      className="inline-block w-full bg-ap-dark-lighter hover:bg-ap-dark-light text-white border border-ap-pink/30 py-2 px-4 rounded-md text-center transition-all duration-300"
                    >
                      View Team
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
