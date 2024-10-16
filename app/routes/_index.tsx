import { Link } from "@remix-run/react";
import TeamHighlights from "@/components/TeamHighlights";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-red-700 to-red-900 text-white p-4">
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

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to AP Gaming</h1>
            <p className="text-xl mb-8">
              Dominating the Belgian Student League, one game at a time.
            </p>
            <Link
              to="/teams"
              className="bg-white text-red-800 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition duration-300"
            >
              Meet Our Team
            </Link>
          </div>
        </section>

        <TeamHighlights />

        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Latest News</h2>
            {/* Add news items here */}
          </div>
        </section>
      </main>

      <footer className="bg-red-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 AP Gaming. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
