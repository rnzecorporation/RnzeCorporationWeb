import React from "react";
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
    gradient: "from-sky-500 to-blue-700", 
    iconName: "Shield" 
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
    gradient: "from-violet-500 to-purple-700", 
    iconName: "RefreshCw" 
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
    gradient: "from-emerald-500 to-teal-700", 
    iconName: "Lock" 
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
    gradient: "from-orange-500 to-red-600", 
    iconName: "Activity" 
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
    gradient: "from-cyan-500 to-blue-600", 
    iconName: "Wifi" 
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
    gradient: "from-pink-500 to-rose-700", 
    iconName: "KeyRound" 
  }
];

const AppGrid: React.FC = () => {
  return (
    <section id="apps" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold text-white mb-4">
            Our Applications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-violet-500 rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl text-lg">
            Discover our suite of premium tools designed to enhance your digital experience, protect your data, and optimize your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppGrid;
