import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Effects from "./components/Effects";

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
        {children}
      </body>
    </html>
  );
}
