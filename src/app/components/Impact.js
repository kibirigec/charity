'use client';

import { useEffect, useRef, useState } from 'react';

export default function Impact() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    people: 0,
    countries: 0,
    projects: 0,
    volunteers: 0,
  });
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

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

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      
      const targets = {
        people: 50000,
        countries: 25,
        projects: 150,
        volunteers: 2000,
      };

      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters({
          people: Math.floor(targets.people * progress),
          countries: Math.floor(targets.countries * progress),
          projects: Math.floor(targets.projects * progress),
          volunteers: Math.floor(targets.volunteers * progress),
        });

        if (currentStep >= steps) {
          setCounters(targets);
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#f5f5f7] to-white overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7c3aed]">Impact</span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Together, we've achieved incredible milestones. But our work is far from over—every 
            contribution brings us closer to a world where everyone has what they need to thrive.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Stat 1 */}
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] mb-3">
                {counters.people.toLocaleString()}+
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Lives Impacted</div>
              <div className="text-sm text-gray-600">People reached worldwide</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] mb-3">
                {counters.countries}+
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Countries</div>
              <div className="text-sm text-gray-600">Global presence</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.7s' }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] mb-3">
                {counters.projects}+
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Active Projects</div>
              <div className="text-sm text-gray-600">Making real change</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.9s' }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] mb-3">
                {counters.volunteers.toLocaleString()}+
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Volunteers</div>
              <div className="text-sm text-gray-600">Dedicated supporters</div>
            </div>
          </div>
        </div>

        {/* Impact Stories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Impact Story 1 */}
          <div
            className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '1.1s' }}
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032&auto=format&fit=crop"
                alt="Education program"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Education Initiative</h3>
              <p className="text-gray-200">
                Providing quality education to 10,000+ children in underserved communities.
              </p>
            </div>
          </div>

          {/* Impact Story 2 */}
          <div
            className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '1.3s' }}
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop"
                alt="Healthcare program"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Healthcare Access</h3>
              <p className="text-gray-200">
                Delivering essential medical care and supplies to remote regions worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
