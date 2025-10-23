import Header from '../components/Header';
import Impact from '../components/Impact';
import Footer from '../components/Footer';

export const metadata = {
  title: "Programs - God's Gifts Charity",
  description: "Explore our education, healthcare, and community development programs making a difference worldwide.",
};

export default function ProgramsPage() {
  const programs = [
    {
      title: 'Education for All',
      description: 'Providing quality education and learning resources',
      longDescription: 'Our education initiative ensures that children and adults in underserved communities have access to quality learning opportunities. We build schools, provide scholarships, supply educational materials, and train teachers to create sustainable educational ecosystems.',
      impact: ['10,000+ students supported annually', '50+ schools built or renovated', '500+ teachers trained'],
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032&auto=format&fit=crop',
    },
    {
      title: 'Healthcare Access',
      description: 'Delivering essential medical care and supplies',
      longDescription: 'We partner with local healthcare providers to deliver medical care, medications, and health education to remote and underserved regions. Our mobile clinics bring healthcare directly to communities that need it most.',
      impact: ['25,000+ patients treated yearly', '15 mobile clinics operational', 'Vaccination campaigns reaching 100+ villages'],
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Clean Water Initiative',
      description: 'Providing access to safe, clean drinking water',
      longDescription: 'Access to clean water is a basic human right. We drill wells, install water purification systems, and teach communities about water conservation and hygiene practices to ensure sustainable access to this vital resource.',
      impact: ['100+ wells drilled', '50,000+ people with clean water access', '200+ water filtration systems installed'],
      image: 'https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Economic Empowerment',
      description: 'Supporting sustainable livelihoods',
      longDescription: 'We provide job training, micro-loans, and business development support to help individuals and families build sustainable livelihoods. Our programs focus on skills development and entrepreneurship.',
      impact: ['2,000+ businesses started', '$500K+ in micro-loans distributed', '5,000+ people trained in vocational skills'],
      image: 'https://images.unsplash.com/photo-1497171156029-51dfc973e5f9?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Emergency Relief',
      description: 'Rapid response to disasters and crises',
      longDescription: 'When disaster strikes, we are there. Our emergency relief teams provide immediate assistance including food, shelter, medical care, and supplies to communities affected by natural disasters or humanitarian crises.',
      impact: ['50+ emergency responses', '100,000+ people aided in crises', '24/7 rapid response capability'],
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Child Sponsorship',
      description: 'Investing in the future, one child at a time',
      longDescription: 'Our child sponsorship program provides comprehensive support including education, healthcare, nutrition, and mentorship. Sponsors build meaningful relationships with children while transforming their futures.',
      impact: ['3,000+ children sponsored', '95% graduation rate', 'Lifelong mentorship connections'],
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
    },
  ];

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
            Our Programs
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive initiatives designed to create lasting impact in communities worldwide.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {program.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {program.longDescription}
                  </p>
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-3">Impact Highlights:</h3>
                    <ul className="space-y-2">
                      {program.impact.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-6 h-6 text-[#9b87f5] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <Impact />

      <Footer />
    </div>
  );
}
