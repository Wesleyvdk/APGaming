import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitch, X, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ap-dark-lighter border-t border-ap-pink/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/ap-logo.png"
                alt="AP Gaming"
                width={60}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              AP Gaming is the premier esports organization at our university,
              competing at the highest levels across multiple titles.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-ap-pink transition-colors"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ap-pink transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ap-pink transition-colors"
              >
                <Twitch className="h-5 w-5" />
                <span className="sr-only">Twitch</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ap-pink transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ap-pink transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-ap-pink transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  className="text-gray-400 hover:text-ap-pink transition-colors"
                >
                  Teams
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-400 hover:text-ap-pink transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-400 hover:text-ap-pink transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-ap-pink transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-ap-pink transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Games</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/games/league-of-legends"
                  className="text-gray-400 hover:text-ap-pink transition-colors"
                >
                  League of Legends
                </Link>
              </li>
              <li>
                <Link
                  href="/games/valorant"
                  className="text-gray-400 hover:text-ap-pink transition-colors"
                >
                  Valorant
                </Link>
              </li>
              <li>
                <Link
                  href="/games/rocket-league"
                  className="text-gray-400 hover:text-ap-pink transition-colors"
                >
                  Rocket League
                </Link>
              </li>
              <li>
                <Link
                  href="/games/overwatch"
                  className="text-gray-400 hover:text-ap-pink transition-colors"
                >
                  Overwatch
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>AP Gaming</p>
              <p>Ellermanstraat 33</p>
              <p>Antwerpen, 2060</p>
              <p className="mt-4">
                <a
                  href="mailto:contact@ap-gaming.org"
                  className="hover:text-ap-pink transition-colors"
                >
                  contact@ap-gaming.org
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-ap-pink/20 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} AP Gaming. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
