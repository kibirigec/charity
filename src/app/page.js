import Header from './components/Header';
import Hero from './components/Hero';
import HomeIntro from './components/HomeIntro';
import ImpactPreview from './components/ImpactPreview';
import FeaturedPrograms from './components/FeaturedPrograms';
import DonationCTA from './components/DonationCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HomeIntro />
      <ImpactPreview />
      <FeaturedPrograms />
      <DonationCTA />
      <Footer />
    </div>
  );
}
