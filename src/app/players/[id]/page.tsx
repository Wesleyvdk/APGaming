import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PlayerDetail } from "@/components/players/player-detail";
import { PlayerDetailLoading } from "@/components/players/player-detail-loading";
import { getPlayerById } from "@/lib/api";
import { notFound } from "next/navigation";

interface PlayerPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PlayerPageProps) {
  try {
    const paramProps = await params;
    const player = await getPlayerById(paramProps.id);
    return {
      title: `${player.inGameName} | AP Gaming`,
      description: `Learn about ${player.inGameName} (${player.firstName} ${player.lastName}), a player at AP Gaming.`,
    };
  } catch (error) {
    return {
      title: "Player | AP Gaming",
      description: "Learn about our esports players at AP Gaming.",
    };
  }
}

export default async function PlayerPage({ params }: PlayerPageProps) {
  const paramProps = await params;
  return (
    <>
      {/* Fixed background overlays */}
      <div className="grid-overlay"></div>
      <div className="vignette-overlay"></div>

      <main className="min-h-screen">
        <Navbar />
        <Suspense fallback={<PlayerDetailLoading />}>
          <PlayerDetailWrapper id={paramProps.id} />
        </Suspense>
        <Footer />
      </main>
    </>
  );
}

async function PlayerDetailWrapper({ id }: { id: string }) {
  try {
    const player = await getPlayerById(id);
    return <PlayerDetail player={player} />;
  } catch (error) {
    notFound();
  }
}
