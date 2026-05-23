import React from "react";
import * as LucideIcons from "lucide-react";

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
    gradient: string;
    iconName: string;
  };
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  // Dynamically get the icon component from lucide-react
  // Type assertion needed because we're accessing by string key
  const IconComponent = (LucideIcons as any)[app.iconName] || LucideIcons.Box;

  return (
    <div 
      className="group relative h-[420px] rounded-2xl overflow-hidden glass border border-white/10 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(99,179,237,0.3)]"
      data-testid={`app-card-${app.id}`}
    >
      {/* Top half: Gradient Background + Icon */}
      <div className={`h-[55%] w-full bg-gradient-to-br ${app.gradient} relative overflow-hidden flex items-center justify-center transition-all duration-500 ease-in-out group-hover:h-[45%]`}>
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-0"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CgkJPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPgoJPC9zdmc+')] opacity-30"></div>
        <IconComponent className="w-16 h-16 text-white drop-shadow-xl transform transition-transform duration-500 group-hover:scale-110" />
      </div>

      {/* Bottom half: Content */}
      <div className="absolute bottom-0 w-full h-[45%] bg-[#0a1122]/95 backdrop-blur-xl p-6 transition-all duration-500 ease-in-out group-hover:h-[55%] flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white line-clamp-1">{app.name}</h3>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/10 text-slate-300">
              {app.category}
            </span>
          </div>
          
          <div className="text-xs text-sky-400 font-medium mb-3">v{app.version}</div>
          
          <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed transition-all duration-300 group-hover:text-slate-300">
            {app.description}
          </p>
        </div>

        {/* Hidden reveal section on hover */}
        <div className="flex items-center justify-between opacity-0 translate-y-4 transition-all duration-300 ease-in-out delay-100 group-hover:opacity-100 group-hover:translate-y-0 mt-4 border-t border-white/5 pt-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <LucideIcons.Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span className="text-xs font-bold text-white">{app.rating.toFixed(1)}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-600"></div>
            <span className="text-xs text-slate-400">{app.size}</span>
          </div>
          
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black hover:bg-sky-100 transition-colors">
            <LucideIcons.Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
