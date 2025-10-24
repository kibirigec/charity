import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "God's Gifts",
  description: "A people-centered nonprofit building dignity, opportunity, and resilience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${inter.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        {/* legacy header retained below for reference; remove if not needed */}
        <header className="hidden absolute left-0 right-0 top-0 z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-4 md:py-5">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded bg-white/90 text-black grid place-items-center font-bold">NG</div>
              <span className="text-white text-lg font-semibold tracking-tight">God's Gifts</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/90">
              <div className="relative group">
                <a href="/about" className="hover:text-white transition inline-flex items-center">About</a>
                <div className="absolute left-0 mt-3 hidden group-hover:block">
                  <div className="min-w-[240px] overflow-hidden rounded-lg border border-white/20 bg-white/95 p-2 text-gray-900 shadow-lg backdrop-blur">
                    <a href="/about" className="block rounded px-3 py-2 text-sm hover:bg-gray-50">About God's Gifts Foundation</a>
                    <a href="/people-behind" className="block rounded px-3 py-2 text-sm hover:bg-gray-50">People Behind</a>
                  </div>
                </div>
              </div>
              <a href="/programs" className="hover:text-white transition">Programs</a>
              <a href="/impact" className="hover:text-white transition">Impact</a>
              <a href="/partners" className="hover:text-white transition">Partners</a>
              <a href="/contact" className="hover:text-white transition">Contact</a>
              <a href="/donate" className="inline-flex items-center rounded-full border border-white/80 px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition">Donate</a>
            </nav>
          </div>
        </header>
        <div className="site-content transition-transform duration-300 ease-out will-change-transform">
          {children}
          <footer id="contact" className="border-t border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded bg-[var(--lavender)] text-white grid place-items-center font-bold">NG</div>
                  <span className="text-gray-900 font-semibold">God's Gifts</span>
                </div>
                <p className="mt-3 text-sm text-gray-600 max-w-xs">People-centered programs that restore dignity and unlock opportunity.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Programs</h4>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li><a href="/programs" className="hover:text-gray-900">Education</a></li>
                  <li><a href="/programs" className="hover:text-gray-900">Health</a></li>
                  <li><a href="/programs" className="hover:text-gray-900">Economic resilience</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Organization</h4>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li><a href="/about" className="hover:text-gray-900">About</a></li>
                  <li><a href="/impact" className="hover:text-gray-900">Impact</a></li>
                  <li><a href="/partners" className="hover:text-gray-900">Partners</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Get involved</h4>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li><a href="/donate" className="hover:text-gray-900">Donate</a></li>
                  <li><a href="/get-involved" className="hover:text-gray-900">Volunteer</a></li>
                  <li><a href="/get-involved" className="hover:text-gray-900">Partner</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-500 md:flex-row">
              <p>© {new Date().getFullYear()} God's Gifts. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-gray-700">Privacy</a>
                <a href="#" className="hover:text-gray-700">Terms</a>
                <a href="/contact" className="hover:text-gray-700">Contact</a>
              </div>
            </div>
          </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
