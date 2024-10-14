import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const highlights = [
  {
    year: 2021,
    title: "Team Founded",
    description: "start of the first ever AP team within BSL",
  },
  {
    year: 2022,
    title: "First unofficial team",
    description:
      "AP Gaming is born as an unofficial team within BSL with it's Rocket League roster and ended top 5",
  },
  {
    year: 2023,
    title: "National Recognition",
    description:
      "AP Gaming is now recognized as an official community within the Belgian Student League and the Rocket League team wins the BSL League",
  },
  {
    year: 2024,
    title: "Future Goals",
    description: "Aiming for more teams and a bigger community",
  },
];

export default function TeamHighlights() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300" />
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.year}
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-16 ${
                index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
              }`}
            >
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? "right-0" : "left-0"
                } w-4 h-4 bg-purple-600 rounded-full transform -translate-y-1/2 ${
                  index % 2 === 0 ? "-translate-x-1/2" : "translate-x-1/2"
                }`}
              />
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">{highlight.year}</h3>
                <h4 className="text-xl font-semibold mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
