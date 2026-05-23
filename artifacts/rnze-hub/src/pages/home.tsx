import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AppGrid from "@/components/AppGrid";
import AboutSection from "@/components/AboutSection";
import ChangelogSection from "@/components/ChangelogSection";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-[#333D4B]">
      <Navbar />
      <main>
        <HeroSection />
        <AppGrid />
        <AboutSection />
        <ChangelogSection />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
