import React from "react";
import { Check, Calendar } from "lucide-react";

const changelogEntries = [
  {
    id: 1,
    version: "v3.0.1",
    date: "May 2026",
    app: "RnzeShield Pro",
    changes: [
      "Critical security patches",
      "30% performance improvement",
      "New threat intelligence feeds"
    ]
  },
  {
    id: 2,
    version: "v2.4.0",
    date: "April 2026",
    app: "RnzeSync",
    changes: [
      "New real-time sync engine",
      "3x faster sync speeds",
      "Conflict resolution improved"
    ]
  },
  {
    id: 3,
    version: "v1.9.2",
    date: "March 2026",
    app: "RnzeVault",
    changes: [
      "AES-256 encryption added",
      "Zero-knowledge architecture",
      "Improved storage UI"
    ]
  },
  {
    id: 4,
    version: "v2.1.0",
    date: "February 2026",
    app: "RnzeMonitor",
    changes: [
      "Dashboard redesign",
      "15 new metric types",
      "Alert system overhaul"
    ]
  },
  {
    id: 5,
    version: "v1.5.3",
    date: "January 2026",
    app: "RnzeConnect",
    changes: [
      "WireGuard protocol support",
      "50% faster connections",
      "New server locations"
    ]
  }
];

const ChangelogSection: React.FC = () => {
  return (
    <section id="changelog" className="py-24 bg-[#080d1a] border-y border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold text-white mb-4">
            Release History
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-violet-500 rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg">
            Continuous improvement and updates across our entire software suite.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
          {changelogEntries.map((entry, index) => (
            <div key={entry.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(99,179,237,0.8)] transition-transform duration-300 group-hover:scale-150"></div>
              
              <div className="glass p-6 rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-sky-500/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-sky-500/20 to-violet-500/20 border border-sky-500/30 text-sky-300 font-bold text-sm">
                      {entry.version}
                    </span>
                    <h3 className="text-xl font-bold text-white">{entry.app}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-400 text-sm bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <Calendar className="w-4 h-4" />
                    {entry.date}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {entry.changes.map((change, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <div className="mt-0.5 bg-sky-500/20 rounded p-0.5">
                        <Check className="w-3.5 h-3.5 text-sky-400" />
                      </div>
                      <span className="text-sm md:text-base leading-relaxed">{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChangelogSection;
