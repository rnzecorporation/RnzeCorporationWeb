import Logo from "./Logo";
import { Shield } from "lucide-react";

const navLinks = [
  { label: "HOME", id: "home" },
  { label: "APPS", id: "apps" },
  { label: "CHANGELOG", id: "changelog" },
  { label: "SECURITY", id: "security" },
];

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-4 md:px-8 text-center" style={{ backgroundColor: "#003366" }}>
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
        <Logo variant="dark" size="md" />

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              data-testid={`footer-link-${link.id}`}
              className="text-white/60 text-xs uppercase tracking-widest font-medium hover:text-white transition-all duration-300 ease-in-out"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="w-full border-t border-white/10 pt-8 flex flex-col items-center gap-4">
          <div
            className="flex items-center gap-2"
            data-testid="cloudflare-badge"
          >
            <Shield size={14} color="rgba(255,255,255,0.45)" strokeWidth={1.6} />
            <span className="text-white/45 text-xs uppercase tracking-widest font-medium">
              Protected by Cloudflare
            </span>
          </div>
          <p className="text-white/25 text-xs uppercase tracking-widest">
            &copy; 2026 RnzeCorporation. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
