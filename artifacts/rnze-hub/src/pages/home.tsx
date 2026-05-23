import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AppGrid from "@/components/AppGrid";
import ChangelogSection from "@/components/ChangelogSection";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050a14] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AppGrid />
        <ChangelogSection />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
