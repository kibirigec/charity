'use client';

import { useEffect, useRef, useState } from 'react';

export default function DonationCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
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

  const donationAmounts = [25, 50, 100, 250, 500];

  const handleDonateClick = () => {
    const amount = customAmount || selectedAmount;
    alert(`Thank you for your generous donation of $${amount}! In a real implementation, this would redirect to a secure payment processor.`);
  };

  return (
    <section
      id="donate"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#f5f5f7] to-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #9b87f5 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] px-8 sm:px-12 py-12 text-center text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Make a Difference Today
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Your donation provides hope, resources, and opportunities to those who need it most. 
              Every gift, no matter the size, creates lasting change.
            </p>
          </div>

          {/* Donation Form */}
          <div className="px-8 sm:px-12 py-12">
            {/* Preset Amounts */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Choose an amount:
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`py-4 rounded-xl font-semibold transition-all duration-300 ${
                      selectedAmount === amount && !customAmount
                        ? 'bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] text-white shadow-lg shadow-[#9b87f5]/30 scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Or enter a custom amount:
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 text-xl border-2 border-gray-200 rounded-xl focus:border-[#9b87f5] focus:outline-none transition-colors duration-300"
                />
              </div>
            </div>

            {/* Impact Description */}
            <div className="bg-gradient-to-r from-[#f5f5f7] to-[#c4b5fd]/10 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 text-[#9b87f5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Your Impact
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">•</span>
                  <span><strong>$25</strong> provides school supplies for 5 children</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">•</span>
                  <span><strong>$50</strong> feeds a family for a week</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">•</span>
                  <span><strong>$100</strong> supports medical care for 10 people</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">•</span>
                  <span><strong>$250+</strong> funds community development projects</span>
                </li>
              </ul>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonateClick}
              className="w-full py-5 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] text-white text-xl font-bold rounded-xl shadow-2xl shadow-[#9b87f5]/40 hover:shadow-[#9b87f5]/60 hover:scale-[1.02] transition-all duration-300"
            >
              Donate ${customAmount || selectedAmount} Now
            </button>

            {/* Security Note */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 flex items-center justify-center">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure, encrypted donation processing • 100% tax-deductible
              </p>
            </div>
          </div>
        </div>

        {/* Additional Ways to Help */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Help</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#9b87f5] to-[#7c3aed] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Volunteer</h4>
              <p className="text-gray-600 text-sm">Share your time and skills</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#9b87f5] to-[#7c3aed] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Share</h4>
              <p className="text-gray-600 text-sm">Spread the word online</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#9b87f5] to-[#7c3aed] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Partner</h4>
              <p className="text-gray-600 text-sm">Corporate partnerships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
