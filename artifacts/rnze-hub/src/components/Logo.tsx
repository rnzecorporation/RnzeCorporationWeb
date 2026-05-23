interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

const Logo = ({ size = "md", variant = "dark" }: LogoProps) => {
  const color = variant === "light" ? "#002A54" : "#FFFFFF";

  const sizeMap = {
    sm: { icon: 26, text: "text-base" },
    md: { icon: 34, text: "text-xl" },
    lg: { icon: 46, text: "text-3xl" },
  };

  const { icon, text } = sizeMap[size];

  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="4.5" />

        {/* Wave layer 1 - largest outer wave */}
        <path
          d="M 18 62 Q 28 48 38 55 Q 48 62 58 48 Q 68 34 82 42"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Wave layer 2 - middle wave */}
        <path
          d="M 22 72 Q 32 58 42 65 Q 52 72 62 58 Q 72 44 82 54"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />

        {/* Wave layer 3 - smallest top wave */}
        <path
          d="M 16 52 Q 26 38 36 45 Q 46 52 56 38 Q 66 24 80 32"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </svg>
      <span
        className={`font-space-grotesk font-bold tracking-tight ${text}`}
        style={{ color }}
      >
        RnzeCorporation
      </span>
    </div>
  );
};

export default Logo;
