import { Download, Star } from "lucide-react";
import * as LucideIcons from "lucide-react";

const solidColors: Record<number, string> = {
  1: "#002A54",
  2: "#003366",
  3: "#004080",
  4: "#001A38",
  5: "#002A54",
  6: "#003366",
};

interface AppCardProps {
  app: {
    id: number;
    name: string;
    category: string;
    version: string;
    size: string;
    rating: number;
    downloads: string;
    description: string;
    iconName: string;
  };
}

const AppCard = ({ app }: AppCardProps) => {
  const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>>)[app.iconName] || LucideIcons.Box;
  const bg = solidColors[app.id] ?? "#002A54";

  return (
    <div
      className="group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
      style={{ backgroundColor: bg, aspectRatio: "2/3" }}
      data-testid={`app-card-${app.id}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4">
        <IconComponent size={52} color="#FFFFFF" strokeWidth={1.2} />
        <span className="text-white/30 text-[10px] uppercase tracking-widest font-medium">
          {app.category}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4" style={{ backgroundColor: "rgba(0,0,0,0.35)" }}>
        <p className="text-white font-bold text-sm uppercase tracking-wide leading-tight mb-0.5">
          {app.name}
        </p>
        <p className="text-white/50 text-xs">v{app.version}</p>

        <div className="flex items-center justify-between mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center gap-1">
            <Star size={11} fill="#FFD700" color="#FFD700" />
            <span className="text-white/70 text-xs">{app.rating.toFixed(1)}</span>
            <span className="text-white/30 text-xs ml-1">{app.size}</span>
          </div>
          <button
            data-testid={`app-download-${app.id}`}
            className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:border-white transition-all duration-300 ease-in-out group/btn"
          >
            <Download size={13} className="text-white group-hover/btn:text-[#002A54] transition-colors duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
