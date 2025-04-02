import { getAllPlayers } from "@/lib/api";
import { PlayerCard } from "./player-card";

export async function PlayerList() {
  const players = await getAllPlayers();

  return (
    <section className="py-20 section-highlight relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
            Player Roster
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our talented roster of players competing at the highest levels of
            collegiate esports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </section>
  );
}
