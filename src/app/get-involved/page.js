import Header from '../components/Header';
import DonationCTA from '../components/DonationCTA';
import Footer from '../components/Footer';

export const metadata = {
  title: "Get Involved - God's Gifts Charity",
  description: "Join us in making a difference. Donate, volunteer, or partner with us to transform lives.",
};

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#9b87f5] to-[#7c3aed] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your support transforms lives. Choose how you'd like to make a difference today.
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Volunteer */}
            <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#9b87f5] to-[#7c3aed] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Share your time, skills, and passion with communities in need. Whether locally or internationally, your contribution matters.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#9b87f5] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">On-site volunteering</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#9b87f5] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Remote opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#9b87f5] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Skills-based projects</span>
                </li>
              </ul>
              <a
                href="mailto:volunteer@godsgiftscharity.org"
                className="inline-flex items-center text-[#9b87f5] font-semibold hover:text-[#7c3aed] transition-colors"
              >
                Apply to Volunteer
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Fundraise */}
            <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#9b87f5] to-[#7c3aed] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fundraise</h3>
              <p className="text-gray-600 mb-6">
                Start your own fundraising campaign. Host an event, challenge yourself, or rally your community to support our cause.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#9b87f5] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Personal campaigns</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#9b87f5] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Community events</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#9b87f5] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Corporate matching</span>
                </li>
              </ul>
              <a
                href="mailto:fundraising@godsgiftscharity.org"
                className="inline-flex items-center text-[#9b87f5] font-semibold hover:text-[#7c3aed] transition-colors"
              >
                Start Fundraising
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Partner */}
            <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#9b87f5] to-[#7c3aed] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Partnership</h3>
              <p className="text-gray-600 mb-6">
                Align your business with our mission. We offer customized partnership opportunities that create value for your organization and the communities we serve.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#9b87f5] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">CSR partnerships</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#9b87f5] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Employee engagement</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#9b87f5] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">In-kind donations</span>
                </li>
              </ul>
              <a
                href="mailto:partnerships@godsgiftscharity.org"
                className="inline-flex items-center text-[#9b87f5] font-semibold hover:text-[#7c3aed] transition-colors"
              >
                Explore Partnerships
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <DonationCTA />

      <Footer />
    </div>
  );
}
