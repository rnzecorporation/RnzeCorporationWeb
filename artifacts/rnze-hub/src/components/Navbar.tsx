import { useState } from "react";
import Logo from "./Logo";
import { Search, Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", id: "home" },
  { label: "APPS", id: "apps" },
  { label: "CHANGELOG", id: "changelog" },
  { label: "SECURITY", id: "security" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-[#E8EDF2]">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-8 py-4">
        <button onClick={() => scrollTo("home")} data-testid="nav-logo">
          <Logo variant="light" size="md" />
        </button>
        <div className="flex items-center gap-5">
          <button
            aria-label="Search"
            data-testid="nav-search"
            className="transition-all duration-300 ease-in-out hover:opacity-60"
          >
            <Search size={22} color="#002A54" strokeWidth={1.8} />
          </button>
          <button
            aria-label="Menu"
            data-testid="nav-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="transition-all duration-300 ease-in-out hover:opacity-60"
          >
            {mobileOpen ? (
              <X size={22} color="#002A54" strokeWidth={1.8} />
            ) : (
              <Menu size={22} color="#002A54" strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="bg-white border-t border-[#E8EDF2] px-8 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              data-testid={`nav-link-${link.id}`}
              className="text-left text-sm font-bold tracking-widest text-[#002A54] uppercase hover:opacity-60 transition-all duration-300 ease-in-out"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
