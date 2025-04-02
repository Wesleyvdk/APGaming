import { getAllTeams } from "@/lib/api";
import { TeamCard } from "./team-card";

export async function TeamList() {
  const teams = await getAllTeams();

  console.log(teams);

  return (
    <section className="py-20 section-highlight relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
            Our Teams
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet the talented teams who represent AP Gaming in competitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
}
