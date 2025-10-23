'use client';

import { useEffect, useRef, useState } from 'react';

export default function Testimonials() {
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

  const testimonials = [
    {
      quote: "God's Gifts Charity transformed our community. They didn't just provide resources—they empowered us to build a sustainable future for our children.",
      author: "Maria Santos",
      role: "Community Leader, Philippines",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    },
    {
      quote: "The education program gave my daughter opportunities I never had. Today, she's in university studying medicine. This charity changes lives.",
      author: "James Okonkwo",
      role: "Parent, Nigeria",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    {
      quote: "As a volunteer, I've witnessed firsthand the incredible impact of every donation. The work is transparent, efficient, and truly life-changing.",
      author: "Sarah Chen",
      role: "Volunteer Coordinator",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-[#f5f5f7] overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c4b5fd]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#9b87f5]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7c3aed]">Hope</span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Hear from the people whose lives have been touched by your generosity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-[#9b87f5]/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-[#9b87f5] to-[#7c3aed] p-0.5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Quote */}
        <div
          className={`mt-16 bg-gradient-to-br from-[#9b87f5] to-[#7c3aed] rounded-3xl p-12 text-center text-white shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <p className="text-2xl sm:text-3xl font-light italic mb-6 leading-relaxed">
            "Alone we can do so little; together we can do so much."
          </p>
          <p className="text-lg opacity-90">— Helen Keller</p>
        </div>
      </div>
    </section>
  );
}
