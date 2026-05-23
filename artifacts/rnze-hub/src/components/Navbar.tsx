import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-[#050a14]/80 backdrop-blur-lg border-b border-white/10 py-3"
          : "bg-white/5 backdrop-blur-md border-b border-white/10 py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="cursor-pointer" onClick={() => scrollToSection("home")}>
          <Logo size="md" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm font-medium text-white/80 hover:text-white transition-all duration-300 ease-in-out"
            data-testid="nav-home"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("apps")}
            className="text-sm font-medium text-white/80 hover:text-white transition-all duration-300 ease-in-out"
            data-testid="nav-apps"
          >
            Apps
          </button>
          <button
            onClick={() => scrollToSection("changelog")}
            className="text-sm font-medium text-white/80 hover:text-white transition-all duration-300 ease-in-out"
            data-testid="nav-changelog"
          >
            Changelog
          </button>
          <button
            onClick={() => scrollToSection("security")}
            className="text-sm font-medium text-white/80 hover:text-white transition-all duration-300 ease-in-out"
            data-testid="nav-security"
          >
            Security
          </button>
        </div>

        <div className="hidden md:block">
          <Button
            className="bg-gradient-to-r from-sky-400 to-violet-600 hover:from-sky-300 hover:to-violet-500 text-white rounded-full font-semibold px-6 border-0 shadow-[0_0_15px_rgba(99,179,237,0.3)] transition-all duration-300 ease-in-out"
            data-testid="nav-cta"
          >
            Latest Release
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="nav-mobile-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050a14] border-b border-white/10 p-4 flex flex-col gap-4 shadow-xl">
          <button
            onClick={() => scrollToSection("home")}
            className="text-left text-lg font-medium text-white/80 hover:text-white p-2"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("apps")}
            className="text-left text-lg font-medium text-white/80 hover:text-white p-2"
          >
            Apps
          </button>
          <button
            onClick={() => scrollToSection("changelog")}
            className="text-left text-lg font-medium text-white/80 hover:text-white p-2"
          >
            Changelog
          </button>
          <button
            onClick={() => scrollToSection("security")}
            className="text-left text-lg font-medium text-white/80 hover:text-white p-2"
          >
            Security
          </button>
          <Button
            className="bg-gradient-to-r from-sky-400 to-violet-600 text-white rounded-full font-semibold w-full mt-2"
          >
            Latest Release
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
