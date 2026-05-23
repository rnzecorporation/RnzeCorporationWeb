import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ChangelogSection from "@/components/ChangelogSection";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-[#333D4B] overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ChangelogSection />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
