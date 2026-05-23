import React, { useState } from "react";
import Logo from "./Logo";
import { Github, Twitter, Shield, Mail, ArrowRight } from "lucide-react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-[#030812] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col gap-5">
            <Logo size="md" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Professional software solutions built for modern teams. Secure, reliable, and beautifully crafted.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                data-testid="footer-github-link"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300 ease-in-out"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                data-testid="footer-twitter-link"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300 ease-in-out"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                data-testid="footer-mail-link"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300 ease-in-out"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Home", id: "home" },
                { label: "Applications", id: "apps" },
                { label: "Changelog", id: "changelog" },
                { label: "Security", id: "security" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-slate-400 hover:text-white text-sm transition-all duration-300 ease-in-out hover:translate-x-1 w-fit"
                  data-testid={`footer-link-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
              <a href="#" className="text-left text-slate-400 hover:text-white text-sm transition-all duration-300 ease-in-out hover:translate-x-1 w-fit">
                Privacy Policy
              </a>
              <a href="#" className="text-left text-slate-400 hover:text-white text-sm transition-all duration-300 ease-in-out hover:translate-x-1 w-fit">
                Terms of Service
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Stay Updated</h4>
            <p className="text-slate-400 text-sm">
              Get notified when new applications or updates are released.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3 mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500/50 focus:bg-white/8 transition-all duration-300"
                data-testid="footer-email-input"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-400 hover:to-violet-500 text-white text-sm font-semibold transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(99,179,237,0.3)]"
                data-testid="footer-subscribe-btn"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; 2026 RnzeCorporation. All rights reserved.
          </p>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-300" data-testid="cloudflare-badge">
            <Shield className="w-4 h-4 text-orange-400" />
            <span className="font-medium">Protected by Cloudflare</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
