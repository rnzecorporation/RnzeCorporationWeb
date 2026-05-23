import Logo from "./Logo";
import { Shield, Twitter, Facebook, Youtube, Instagram } from "lucide-react";

const navLinks = [
  { label: "HOME", id: "home" },
  { label: "APPS", id: "apps" },
  { label: "CHANGELOG", id: "changelog" },
  { label: "SECURITY", id: "security" },
];

const socialLinks = [
  {
    id: "twitter",
    label: "X (Twitter)",
    href: "https://x.com/RnzeCorporation",
    icon: <Twitter size={20} strokeWidth={1.8} />,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/1EVdMjvgR4/",
    icon: <Facebook size={20} strokeWidth={1.8} />,
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://youtube.com/@rnzecorporation?si=Ms1BjCLt8BM1DYRp",
    icon: <Youtube size={20} strokeWidth={1.8} />,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/rnzecorporation?igsh=emR5ZDh4eWZqMXg2",
    icon: <Instagram size={20} strokeWidth={1.8} />,
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://tiktok.com/@rnzecorp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
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

        {/* Social Media Section */}
        <div className="flex flex-col items-center gap-5 w-full">
          <p className="text-white font-bold text-xs uppercase tracking-widest">
            Follow RnzeCorporation
          </p>
          <div className="flex items-center justify-center gap-7">
            {socialLinks.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                data-testid={`footer-social-${s.id}`}
                className="text-white transition-all duration-200 ease-in-out hover:scale-110 hover:opacity-80"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full border-t border-white/10 pt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2" data-testid="cloudflare-badge">
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
