'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/20 to-transparent"></div>
      </div>

      {/* Content - with proper top padding for fixed header */}
      <div className="relative z-10 w-full pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transforming Lives
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c4b5fd] to-[#9b87f5]">
                Through Compassion
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join us in our mission to bring hope, dignity, and opportunity to communities in need. 
              Every gift makes a lasting difference.
            </p>
          </div>

          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center items-center" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
            <Link
              href="/get-involved#donate"
              className="group relative px-10 py-4 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] text-white text-lg font-semibold rounded-[0.625rem] shadow-2xl shadow-[#9b87f5]/50 hover:shadow-[#9b87f5]/70 hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Donate Now</span>
              <div className="absolute inset-0 rounded-[0.625rem] bg-gradient-to-r from-[#c4b5fd] to-[#9b87f5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              href="/about"
              className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-[0.625rem] border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
