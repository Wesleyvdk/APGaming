"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const teams = {
  "League of Legends": [
    {
      name: "Narli",
      role: "Team Captain - Mid",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Kiri",
      role: "Jungle",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Vamp",
      role: "Top",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Jebra",
      role: "Support",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Water",
      role: "ADC",
      image: "/placeholder.svg?height=400&width=400",
    },
  ],
  Valorant: [
    {
      name: "Shade",
      role: "Team Captain - IGL",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Blitz",
      role: "Entry Fragger",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Echo",
      role: "Controller",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Phantom",
      role: "Sentinel",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Nova",
      role: "Initiator",
      image: "/placeholder.svg?height=400&width=400",
    },
  ],
  "Rocket League": [
    {
      name: "Boost",
      role: "Team Captain",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Drift",
      role: "Offensive Specialist",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Aerial",
      role: "Defensive Specialist",
      image: "/placeholder.svg?height=400&width=400",
    },
  ],
};

export function TeamRoster() {
  return (
    <section className="py-20 section-highlight relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
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
            Meet the talented players who represent AP Gaming in competitions.
          </motion.p>
        </div>

        <Tabs defaultValue="League of Legends" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {Object.keys(teams).map((game) => (
              <TabsTrigger
                key={game}
                value={game}
                className="data-[state=active]:bg-ap-pink/20 data-[state=active]:text-ap-pink"
              >
                {game}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(teams).map(([game, players]) => (
            <TabsContent key={game} value={game}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {players.map((player, index) => (
                  <motion.div
                    key={player.name}
                    className="gaming-card group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={player.image || "/placeholder.svg"}
                        alt={player.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1 text-white group-hover:text-ap-pink transition-colors duration-300">
                        {player.name}
                      </h3>
                      <p className="text-ap-pink font-medium mb-4">
                        {player.role}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full border-ap-pink/50 text-ap-pink hover:bg-ap-pink/10"
                      >
                        View Profile
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
