import { Check } from "lucide-react";

const changelogEntries = [
  {
    id: 1,
    version: "v3.0.1",
    date: "May 2026",
    app: "RnzeShield Pro",
    changes: [
      "Critical security patches applied",
      "30% overall performance improvement",
      "New threat intelligence feed integration",
    ],
  },
  {
    id: 2,
    version: "v2.4.0",
    date: "April 2026",
    app: "RnzeSync",
    changes: [
      "New real-time sync engine rewrite",
      "3x faster synchronization speeds",
      "Improved conflict resolution system",
    ],
  },
  {
    id: 3,
    version: "v1.9.2",
    date: "March 2026",
    app: "RnzeVault",
    changes: [
      "AES-256 encryption layer added",
      "Zero-knowledge architecture implemented",
      "Improved storage management UI",
    ],
  },
  {
    id: 4,
    version: "v2.1.0",
    date: "February 2026",
    app: "RnzeMonitor",
    changes: [
      "Full dashboard redesign",
      "15 new system metric types",
      "Alert and notification system overhaul",
    ],
  },
  {
    id: 5,
    version: "v1.5.3",
    date: "January 2026",
    app: "RnzeConnect",
    changes: [
      "WireGuard protocol support added",
      "50% faster connection speeds",
      "10 new server locations available",
    ],
  },
];

const ChangelogSection = () => {
  return (
    <section id="changelog" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-xs tracking-widest uppercase text-[#6B7A8D] font-medium mb-2">
            Release Notes
          </p>
          <h2 className="font-space-grotesk font-black text-3xl md:text-4xl uppercase tracking-widest text-[#002A54]">
            Changelog
          </h2>
          <div className="h-[3px] w-16 mt-4" style={{ backgroundColor: "#002A54" }}></div>
        </div>

        <div className="flex flex-col gap-4">
          {changelogEntries.map((entry) => (
            <div
              key={entry.id}
              className="rounded-lg p-6 border border-[#E8EDF2] hover:border-[#002A54]/20 transition-all duration-300 ease-in-out"
              data-testid={`changelog-entry-${entry.id}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded text-white"
                    style={{ backgroundColor: "#002A54" }}
                  >
                    {entry.version}
                  </span>
                  <span className="font-bold text-[#002A54] text-sm">{entry.app}</span>
                </div>
                <span className="text-[#6B7A8D] text-xs uppercase tracking-wide font-medium">
                  {entry.date}
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                {entry.changes.map((change, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#333D4B] text-sm">
                    <Check size={14} color="#002A54" className="mt-0.5 flex-shrink-0" />
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChangelogSection;
