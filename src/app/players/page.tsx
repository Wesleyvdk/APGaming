import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PlayerHero } from "@/components/players/player-hero";
import { PlayerList } from "@/components/players/player-list";
import { PlayerLoading } from "@/components/players/player-loading";

export const metadata = {
  title: "Players | AP Gaming",
  description: "Meet the talented players of AP Gaming esports teams.",
};

export default function PlayersPage() {
  return (
    <>
      {/* Fixed background overlays */}
      <div className="grid-overlay"></div>
      <div className="vignette-overlay"></div>

      <main className="min-h-screen">
        <Navbar />
        <PlayerHero />
        <Suspense fallback={<PlayerLoading />}>
          <PlayerList />
        </Suspense>
        <Footer />
      </main>
    </>
  );
}
