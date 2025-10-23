'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-[#9b87f5]' : 'text-white'
            }`}
          >
            God's Gifts
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors duration-300 hover:text-[#9b87f5] ${
                scrolled ? 'text-gray-700' : 'text-white'
              } ${isActive('/') ? 'font-semibold text-[#9b87f5]' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors duration-300 hover:text-[#9b87f5] ${
                scrolled ? 'text-gray-700' : 'text-white'
              } ${isActive('/about') ? 'font-semibold text-[#9b87f5]' : ''}`}
            >
              About
            </Link>
            <Link
              href="/programs"
              className={`transition-colors duration-300 hover:text-[#9b87f5] ${
                scrolled ? 'text-gray-700' : 'text-white'
              } ${isActive('/programs') ? 'font-semibold text-[#9b87f5]' : ''}`}
            >
              Programs
            </Link>
            <Link
              href="/get-involved"
              className={`transition-colors duration-300 hover:text-[#9b87f5] ${
                scrolled ? 'text-gray-700' : 'text-white'
              } ${isActive('/get-involved') ? 'font-semibold text-[#9b87f5]' : ''}`}
            >
              Get Involved
            </Link>
            <Link
              href="/contact"
              className={`transition-colors duration-300 hover:text-[#9b87f5] ${
                scrolled ? 'text-gray-700' : 'text-white'
              } ${isActive('/contact') ? 'font-semibold text-[#9b87f5]' : ''}`}
            >
              Contact
            </Link>
            <Link
              href="/get-involved#donate"
              className="px-6 py-2.5 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] text-white rounded-[0.625rem] font-medium shadow-lg shadow-[#9b87f5]/30 hover:shadow-xl hover:shadow-[#9b87f5]/40 hover:scale-105 transition-all duration-300"
            >
              Donate Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1.5 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 flex flex-col space-y-4 animate-fade-in-up">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-left py-2 transition-colors ${
                isActive('/') 
                  ? 'text-[#9b87f5] font-semibold' 
                  : 'text-gray-700 hover:text-[#9b87f5]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-left py-2 transition-colors ${
                isActive('/about') 
                  ? 'text-[#9b87f5] font-semibold' 
                  : 'text-gray-700 hover:text-[#9b87f5]'
              }`}
            >
              About
            </Link>
            <Link
              href="/programs"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-left py-2 transition-colors ${
                isActive('/programs') 
                  ? 'text-[#9b87f5] font-semibold' 
                  : 'text-gray-700 hover:text-[#9b87f5]'
              }`}
            >
              Programs
            </Link>
            <Link
              href="/get-involved"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-left py-2 transition-colors ${
                isActive('/get-involved') 
                  ? 'text-[#9b87f5] font-semibold' 
                  : 'text-gray-700 hover:text-[#9b87f5]'
              }`}
            >
              Get Involved
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-left py-2 transition-colors ${
                isActive('/contact') 
                  ? 'text-[#9b87f5] font-semibold' 
                  : 'text-gray-700 hover:text-[#9b87f5]'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/get-involved#donate"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] text-white rounded-[0.625rem] font-medium shadow-lg shadow-[#9b87f5]/30 hover:shadow-xl hover:shadow-[#9b87f5]/40 transition-all duration-300 text-center"
            >
              Donate Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
