import { Shield, RefreshCw, Lock, KeyRound } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 md:px-8 text-center"
      style={{ backgroundColor: "#003366" }}
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-white/40 text-xs tracking-widest uppercase font-medium mb-4">
          Who We Are
        </p>
        <h2 className="font-space-grotesk font-black text-3xl md:text-5xl uppercase tracking-wider text-white mb-6">
          About RnzeCorporation
        </h2>
        <div className="h-[3px] w-16 bg-white mx-auto mb-10"></div>

        <div
          className="max-w-xs mx-auto rounded-2xl mb-10 h-44 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
        >
          <div className="grid grid-cols-2 gap-6">
            {[Shield, RefreshCw, Lock, KeyRound].map((Icon, i) => (
              <div key={i} className="flex items-center justify-center">
                <Icon size={28} color="rgba(255,255,255,0.7)" strokeWidth={1.4} />
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/75 text-base leading-relaxed mb-6">
          RnzeCorporation is a dedicated software publisher committed to building tools that empower professionals and teams worldwide. Our applications are engineered with a focus on security, performance, and seamless user experience.
        </p>
        <p className="text-white/50 text-sm leading-relaxed">
          Every product we release undergoes rigorous quality assurance and security auditing. We believe that great software should be both powerful and accessible, which is why all our applications are available for download directly from this hub.
        </p>

        <div className="mt-10">
          <button
            data-testid="about-view-apps-btn"
            className="border-2 border-white text-white font-bold tracking-widest uppercase text-sm px-8 py-3 hover:bg-white hover:text-[#003366] transition-all duration-300 ease-in-out"
            onClick={() => document.getElementById("apps")?.scrollIntoView({ behavior: "smooth" })}
          >
            View All Applications
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
