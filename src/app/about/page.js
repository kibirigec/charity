import Header from '../components/Header';
import Mission from '../components/Mission';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export const metadata = {
  title: "About Us - God's Gifts Charity",
  description: "Learn about our mission, values, and the impact we are making in communities around the world.",
};

export default function AboutPage() {
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
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover our story, mission, and the passionate team driving positive change across the globe.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7c3aed]">Story</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Founded in 2010, God's Gifts Charity began with a simple mission: to bring hope and opportunity 
                to those who need it most. What started as a small local initiative has grown into a global 
                movement, touching lives in over 25 countries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Our journey has been guided by the belief that every person deserves access to basic needs, 
                quality education, and the chance to build a better future. Through the generosity of our 
                supporters and the dedication of our volunteers, we've been able to make this vision a reality 
                for thousands of families.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to expand our reach, developing innovative programs that address the root 
                causes of poverty and inequality. Together with our partners and communities, we are building 
                a world where everyone has the opportunity to thrive.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop"
                alt="Our team working with communities"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <Mission />

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7c3aed]">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600">We lead with empathy and understanding in all our interactions.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">We maintain the highest standards of honesty and transparency.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
              <p className="text-gray-600">We measure our success by the lives we transform.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">We work together with communities to create lasting change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      <Footer />
    </div>
  );
}
