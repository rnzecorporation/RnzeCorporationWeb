import React from "react";
import { Shield, Layers, Lock, Cpu, Globe, Zap } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Shield,
    title: "DDoS Protection",
    description: "Multi-layer DDoS mitigation protecting against attacks up to 100 Tbps via Cloudflare's global network of 270+ edge locations.",
    accentColor: "text-sky-400",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
  },
  {
    id: 2,
    icon: Layers,
    title: "Web Application Firewall",
    description: "OWASP Top 10 protection, custom WAF rules, and intelligent bot filtering powered by Cloudflare WAF engine.",
    accentColor: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
  },
  {
    id: 3,
    icon: Lock,
    title: "SSL/TLS Encryption",
    description: "Full end-to-end encryption with automatic certificate renewal. All downloads served over HTTPS with HSTS enforced.",
    accentColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    id: 4,
    icon: Cpu,
    title: "Bot Management",
    description: "Intelligent bot scoring and JavaScript Challenge to block malicious crawlers while allowing legitimate users through.",
    accentColor: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
  {
    id: 5,
    icon: Globe,
    title: "Global CDN",
    description: "270+ Cloudflare edge locations ensuring sub-50ms response times worldwide for fast, reliable application downloads.",
    accentColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
  },
  {
    id: 6,
    icon: Zap,
    title: "Zero-Day Response",
    description: "24/7 security monitoring with automatic threat intelligence updates and instant response protocols for emerging threats.",
    accentColor: "text-rose-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20",
  },
];

const SecuritySection: React.FC = () => {
  return (
    <section id="security" className="py-24 relative">
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-violet-600/8 rounded-full blur-[140px] pointer-events-none transform translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/8 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 w-fit backdrop-blur-md mb-6">
            <Shield className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-sm font-medium text-sky-300">Enterprise Grade</span>
          </div>
          <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold text-white mb-4">
            Security &amp; Infrastructure
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-violet-500 rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl text-lg">
            Every application in our hub is protected by multiple layers of enterprise security. Your downloads are safe, fast, and verified.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="glass rounded-2xl p-6 border border-white/10 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-white/20 group"
                data-testid={`security-card-${feature.id}`}
              >
                <div className={`inline-flex p-3 rounded-xl ${feature.bgColor} border ${feature.borderColor} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-6 h-6 ${feature.accentColor}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="glass rounded-2xl p-6 md:p-8 border border-sky-500/20 bg-sky-500/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-sky-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-shrink-0 p-3 rounded-xl bg-sky-500/20 border border-sky-500/30">
              <Shield className="w-8 h-8 text-sky-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">Verified Build Pipeline</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                All applications distributed through this hub are scanned by our automated security pipeline before release.
                Each build is cryptographically verified with SHA-256 checksums and signed with our code signing certificate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
