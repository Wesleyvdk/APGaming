import type { MetaFunction } from "@remix-run/node";

import { CardContent, Card } from "@/components/ui/card";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                <img
                  alt="University Esports"
                  className="inline-block h-6 w-6 align-middle"
                  height={24}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "24/24",
                    objectFit: "cover",
                  }}
                  width={24}
                />
                <span className="ml-2 align-middle">University Esports</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Dominate the Leaderboard
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Welcome to University Esports, where the best student gamers
                come together to compete and showcase their skills.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                to="#"
              >
                Meet the Teams
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                to="#"
              >
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        id="teams"
      >
        <div className="container px-4 md:px-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Esports Teams
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Meet the talented student athletes representing our university in
              various esports competitions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8">
            <div className="flex flex-col items-center space-y-2">
              <img
                alt="Team 1"
                className="rounded-full w-24 h-24 object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width={200}
              />
              <h3 className="text-lg font-semibold">League of Legends</h3>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                alt="Team 2"
                className="rounded-full w-24 h-24 object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width={200}
              />
              <h3 className="text-lg font-semibold">Valorant</h3>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                alt="Team 3"
                className="rounded-full w-24 h-24 object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width={200}
              />
              <h3 className="text-lg font-semibold">Overwatch</h3>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                alt="Team 4"
                className="rounded-full w-24 h-24 object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width={200}
              />
              <h3 className="text-lg font-semibold">Rocket League</h3>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                alt="Team 5"
                className="rounded-full w-24 h-24 object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width={200}
              />
              <h3 className="text-lg font-semibold">Super Smash Bros</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32" id="events">
        <div className="container px-4 md:px-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Upcoming Events
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Check out our upcoming tournaments and events where our teams will
              be competing.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-8">
            <Card>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">
                    University Esports Championship
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    May 15, 2024
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Join us for the biggest esports event of the year, where our
                    teams will compete against the best from other universities.
                  </p>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    to="#"
                  >
                    Learn More
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Esports Club Mixer</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    June 1, 2024
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Join us for a casual gathering of esports enthusiasts to
                    network, share strategies, and have some fun.
                  </p>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    to="#"
                  >
                    Learn More
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">
                    Esports Scholarship Gala
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    July 1, 2024
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Join us as we celebrate and award scholarships to our
                    talented student athletes.
                  </p>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    to="#"
                  >
                    Learn More
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
