"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    id: 1,
    name: "Narli",
    role: "Team Captain - Mid",
    game: "Rocket League",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Kiri",
    role: "Jungle",
    game: "League of Legends",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Vamp",
    role: "Top",
    game: "League of Legends",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "Jebra",
    role: "Support",
    game: "League of Legends",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 5,
    name: "Water",
    role: "ADC",
    game: "League of Legends",
    image: "/placeholder.svg?height=400&width=400",
  },
];

export function TeamShowcase() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our talented roster of players and coaches are dedicated to
            excellence in competitive gaming.
          </motion.p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={member.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <motion.div
                  key={member.id}
                  className="bg-ap-dark-lighter rounded-lg overflow-hidden border border-ap-pink/20 group"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-ap-dark-lighter to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-white group-hover:text-ap-pink transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-ap-pink font-medium mb-2">
                      {member.role}
                    </p>
                    <div className="inline-block bg-ap-pink/20 rounded-full px-3 py-1 text-xs text-ap-pink mb-4">
                      {member.game}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-ap-pink/50 text-ap-pink hover:bg-ap-pink/10"
                    >
                      View Profile
                    </Button>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="hidden md:flex bg-ap-pink/10 hover:bg-ap-pink/20 border-ap-pink/30 left-2 z-10" />
            <CarouselNext className="hidden md:flex bg-ap-pink/10 hover:bg-ap-pink/20 border-ap-pink/30 right-2 z-10" />
          </div>
        </Carousel>

        <div className="text-center mt-10">
          <Button className="bg-ap-pink hover:bg-ap-pink/90 text-white">
            View All Team Members
          </Button>
        </div>
      </div>
    </section>
  );
}
