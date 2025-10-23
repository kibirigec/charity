'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function HomeIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-[#f5f5f7] overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9b87f5]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c4b5fd]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Empowering Communities Through 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7c3aed]"> Compassion</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              At God's Gifts Charity, we believe that every person deserves access to basic needs, 
              quality education, and opportunities to thrive. Through our global initiatives, we are 
              transforming lives and building sustainable futures for communities in need.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] text-white rounded-[0.625rem] font-semibold shadow-lg shadow-[#9b87f5]/30 hover:shadow-xl hover:shadow-[#9b87f5]/40 hover:scale-105 transition-all duration-300"
            >
              Learn About Our Mission
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right Column - Stats */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] mb-2">
                  50K+
                </div>
                <div className="text-gray-700 font-semibold">Lives Impacted</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] mb-2">
                  25+
                </div>
                <div className="text-gray-700 font-semibold">Countries</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] mb-2">
                  150+
                </div>
                <div className="text-gray-700 font-semibold">Active Projects</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] mb-2">
                  2K+
                </div>
                <div className="text-gray-700 font-semibold">Volunteers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
