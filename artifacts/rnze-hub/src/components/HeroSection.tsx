import React from "react";
import { Download, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>
      
      {/* Aurora bands */}
      <div className="absolute top-1/2 left-0 w-full h-[200px] bg-gradient-to-r from-transparent via-sky-400/5 to-transparent blur-[60px] transform -skew-y-6 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 w-fit backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span className="text-sm font-medium text-sky-300">v3.0 Now Available</span>
            </div>
            
            <h1 className="font-space-grotesk font-black text-5xl md:text-6xl lg:text-7xl leading-tight text-white tracking-tight">
              Your Premium <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500">
                Software, Delivered.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              RnzeCorporation builds tools that professionals trust. Secure, fast, and beautifully crafted for the modern workflow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-400 hover:to-violet-500 text-white rounded-full font-semibold px-8 h-14 text-base border-0 shadow-[0_0_20px_rgba(99,179,237,0.4)] transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(99,179,237,0.6)] hover:-translate-y-1"
                data-testid="hero-download-btn"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full font-semibold px-8 h-14 text-base border-white/20 hover:bg-white/10 hover:border-white/30 text-white transition-all duration-300 ease-in-out backdrop-blur-sm bg-transparent"
                onClick={() => document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="hero-view-apps-btn"
              >
                View All Apps
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">12+</span>
                <span className="text-sm text-slate-400">Apps</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">50k+</span>
                <span className="text-sm text-slate-400">Downloads</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">99.9%</span>
                <span className="text-sm text-slate-400">Uptime</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Featured Card */}
          <div className="relative flex justify-center lg:justify-end perspective-1000">
            <div className="w-full max-w-md glass rounded-3xl overflow-hidden animate-float border border-white/10 shadow-2xl relative group">
              {/* Highlight sweep effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none transform -translate-x-full group-hover:translate-x-full"></div>
              
              <div className="h-48 bg-gradient-to-br from-sky-500 to-violet-700 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CgkJPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPgoJPC9zdmc+')] opacity-50 mix-blend-overlay"></div>
                <Shield className="w-20 h-20 text-white drop-shadow-lg z-10" />
              </div>
              
              <div className="p-8 bg-[#0a1122]/90 backdrop-blur-xl relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">RnzeShield Pro</h3>
                    <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                      v3.0.1
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-500/10 px-2 py-1 rounded-md border border-amber-500/20">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span className="text-sm font-bold text-amber-400">5.0</span>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Enterprise security suite with real-time threat detection, advanced firewall rules, and intelligent traffic routing.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-2 py-1 text-xs rounded bg-white/5 text-slate-300 border border-white/5">Windows</span>
                  <span className="px-2 py-1 text-xs rounded bg-white/5 text-slate-300 border border-white/5">macOS</span>
                  <span className="px-2 py-1 text-xs rounded bg-white/5 text-slate-300 border border-white/5">Linux</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <Button className="bg-white text-[#050a14] hover:bg-slate-200 rounded-full font-semibold px-6 shadow-lg transition-all duration-300">
                    Download Now
                  </Button>
                  <span className="text-sm text-slate-400 font-medium">48.2 MB</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
