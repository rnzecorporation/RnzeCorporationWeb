import { Shield, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full min-h-[85vh] flex flex-col items-center justify-between pt-32 pb-12 px-8 md:px-16"
      style={{ backgroundColor: "#003366" }}
    >
      <div className="flex flex-col items-center justify-center flex-1 text-center gap-6 w-full max-w-2xl mx-auto">
        <span className="text-white/50 text-xs uppercase tracking-widest font-medium">
          Featured Application
        </span>

        <div className="my-4">
          <Shield size={88} color="#FFFFFF" strokeWidth={1.2} />
        </div>

        <div className="flex flex-col gap-3">
          <h1
            className="font-space-grotesk font-black text-4xl md:text-6xl uppercase tracking-wide text-white leading-tight"
          >
            RnzeShield Pro
          </h1>
          <p className="text-white/60 text-sm uppercase tracking-widest font-medium">
            Enterprise Security Suite
          </p>
        </div>

        <p className="text-white/75 text-base max-w-lg leading-relaxed mt-2">
          Real-time threat detection and advanced firewall protection for modern teams and enterprises. Trusted by thousands of professionals worldwide.
        </p>

        <div className="flex items-center gap-6 mt-4">
          <button
            data-testid="hero-download-btn"
            className="flex items-center gap-2 border-2 border-white text-white px-7 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#003366] transition-all duration-300 ease-in-out"
          >
            <Download size={16} />
            Download Now
          </button>
          <button
            data-testid="hero-learn-more-btn"
            className="text-white/60 text-sm font-medium tracking-widest uppercase hover:text-white transition-all duration-300 ease-in-out"
            onClick={() => document.getElementById("apps")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn More
          </button>
        </div>

        <div className="flex items-center gap-6 mt-4">
          {["Windows", "macOS", "Linux"].map((platform) => (
            <span key={platform} className="text-white/40 text-xs uppercase tracking-widest">
              {platform}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center gap-3">
        <div className="w-8 h-[2px] bg-white/20"></div>
        <span className="text-white/30 text-xs uppercase tracking-widest">v3.0.1 &nbsp;·&nbsp; 48.2 MB</span>
        <div className="w-8 h-[2px] bg-white/20"></div>
      </div>
    </section>
  );
};

export default HeroSection;
