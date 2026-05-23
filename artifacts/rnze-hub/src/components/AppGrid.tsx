import AppCard from "./AppCard";

const apps = [
  {
    id: 1,
    name: "RnzeShield Pro",
    category: "Security",
    version: "3.0.1",
    size: "48.2 MB",
    rating: 5.0,
    downloads: "18.2k",
    description: "Enterprise-grade security suite with real-time threat detection and response.",
    iconName: "Shield",
  },
  {
    id: 2,
    name: "RnzeSync",
    category: "Productivity",
    version: "2.4.0",
    size: "32.1 MB",
    rating: 4.8,
    downloads: "12.5k",
    description: "Seamless file synchronization across all your devices instantly.",
    iconName: "RefreshCw",
  },
  {
    id: 3,
    name: "RnzeVault",
    category: "Storage",
    version: "1.9.2",
    size: "28.7 MB",
    rating: 4.9,
    downloads: "9.1k",
    description: "Encrypted cloud storage with military-grade AES-256 security.",
    iconName: "Lock",
  },
  {
    id: 4,
    name: "RnzeMonitor",
    category: "System",
    version: "2.1.0",
    size: "15.3 MB",
    rating: 4.7,
    downloads: "7.8k",
    description: "Advanced system monitoring and performance analytics dashboard.",
    iconName: "Activity",
  },
  {
    id: 5,
    name: "RnzeConnect",
    category: "Networking",
    version: "1.5.3",
    size: "22.4 MB",
    rating: 4.6,
    downloads: "5.4k",
    description: "Secure VPN and network management solution for teams.",
    iconName: "Wifi",
  },
  {
    id: 6,
    name: "RnzeCrypt",
    category: "Encryption",
    version: "2.0.0",
    size: "19.8 MB",
    rating: 4.9,
    downloads: "6.2k",
    description: "End-to-end encryption for files, messages, and sensitive data.",
    iconName: "KeyRound",
  },
];

const AppGrid = () => {
  return (
    <section id="apps" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-xs tracking-widest uppercase text-[#6B7A8D] font-medium mb-2">
            Our Applications
          </p>
          <h2 className="font-space-grotesk font-black text-3xl md:text-4xl uppercase tracking-widest text-[#002A54]">
            Applications
          </h2>
          <div className="h-[3px] w-16 mt-4" style={{ backgroundColor: "#002A54" }}></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppGrid;
