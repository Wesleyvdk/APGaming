import { Link } from "@remix-run/react";
import { Trophy, Users, Target } from "lucide-react";

const teams = [
  {
    name: "Rocket League",
    icon: Trophy,
    description:
      "Our Rocket League team has been dominating the Belgian Student League, securing the top spot in the latest season.",
    achievements: ["BSL Champions 2023", "Top 5 finish in BSL 2022"],
    players: ["Ehzgodd", "Peaky", "TBD"],
  },
  {
    name: "League of Legends",
    icon: Users,
    description: "Our League of Legends squad is a force to be reckoned with.",
    achievements: [],
    players: ["TBD", "TBD", "TBD", "TBD", "TBD"],
  },
  {
    name: "Valorant",
    icon: Target,
    description:
      "Our newest addition to AP Gaming, the Valorant team is quickly rising through the ranks and making a name for itself.",
    achievements: [],
    players: ["TBD", "TBD", "TBD", "TBD", "TBD"],
  },
];

export default function TeamsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-red-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            AP Gaming
          </Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/teams" className="hover:text-gray-300">
              Teams
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Teams</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team) => (
            <div
              key={team.name}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <team.icon className="w-8 h-8 text-purple-600 mr-2" />
                  <h2 className="text-2xl font-bold">{team.name}</h2>
                </div>
                <p className="text-gray-600 mb-4">{team.description}</p>
                <h3 className="font-semibold text-lg mb-2">Achievements:</h3>
                <ul className="list-disc list-inside mb-4">
                  {team.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-600">
                      {achievement}
                    </li>
                  ))}
                </ul>
                <h3 className="font-semibold text-lg mb-2">Current Roster:</h3>
                <ul className="list-disc list-inside">
                  {team.players.map((player, index) => (
                    <li key={index} className="text-gray-600">
                      {player}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-red-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 AP Gaming. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
