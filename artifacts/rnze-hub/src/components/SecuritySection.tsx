import { Shield, Layers, Lock, Cpu, Globe, Zap } from "lucide-react";

const features = [
  {
    id: 1,
    Icon: Shield,
    title: "DDoS Protection",
    description:
      "Multi-layer DDoS mitigation protecting against attacks up to 100 Tbps via Cloudflare's global network.",
  },
  {
    id: 2,
    Icon: Layers,
    title: "Web Application Firewall",
    description:
      "OWASP Top 10 protection, custom WAF rules, and intelligent bot filtering powered by Cloudflare WAF.",
  },
  {
    id: 3,
    Icon: Lock,
    title: "SSL/TLS Encryption",
    description:
      "Full end-to-end encryption with automatic certificate renewal. All downloads served over HTTPS with HSTS.",
  },
  {
    id: 4,
    Icon: Cpu,
    title: "Bot Management",
    description:
      "Intelligent bot scoring and JavaScript Challenge to block malicious crawlers while allowing legitimate users.",
  },
  {
    id: 5,
    Icon: Globe,
    title: "Global CDN",
    description:
      "270+ Cloudflare edge locations ensuring sub-50ms response times worldwide for fast, reliable downloads.",
  },
  {
    id: 6,
    Icon: Zap,
    title: "Zero-Day Response",
    description:
      "24/7 security monitoring with automatic threat intelligence updates and instant response protocols.",
  },
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-xs tracking-widest uppercase text-[#6B7A8D] font-medium mb-2">
            Infrastructure
          </p>
          <h2 className="font-space-grotesk font-black text-3xl md:text-4xl uppercase tracking-widest text-[#002A54]">
            Security &amp; Infrastructure
          </h2>
          <div className="h-[3px] w-16 mt-4" style={{ backgroundColor: "#002A54" }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {features.map(({ id, Icon, title, description }) => (
            <div
              key={id}
              className="border border-[#E8EDF2] rounded-lg p-6 hover:border-[#002A54]/30 hover:shadow-md transition-all duration-300 ease-in-out"
              data-testid={`security-card-${id}`}
            >
              <div className="mb-4">
                <Icon size={28} color="#002A54" strokeWidth={1.6} />
              </div>
              <h3 className="font-bold text-[#002A54] text-sm uppercase tracking-wide mb-2">
                {title}
              </h3>
              <p className="text-[#6B7A8D] text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div
          className="rounded-lg p-6 md:p-8 text-white"
          style={{ backgroundColor: "#003366" }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-shrink-0">
              <Shield size={32} color="#FFFFFF" strokeWidth={1.4} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-1">
                Verified Build Pipeline
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                All applications distributed through this hub are scanned by our automated security pipeline before release. Each build is cryptographically verified with SHA-256 checksums and signed with our code signing certificate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
