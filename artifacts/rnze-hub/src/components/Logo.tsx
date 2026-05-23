interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

const Logo = ({ size = "md", variant = "dark" }: LogoProps) => {
  const color = variant === "light" ? "#002A54" : "#FFFFFF";

  const sizeMap = {
    sm: { icon: 24, text: "text-base" },
    md: { icon: 32, text: "text-xl" },
    lg: { icon: 44, text: "text-3xl" },
  };

  const { icon, text } = sizeMap[size];

  return (
    <div className="flex items-center gap-3">
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="5" />
        <path
          d="M 28 68 C 38 50 44 38 50 28 C 56 38 62 50 72 68"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 18 58 C 32 44 43 38 50 34 C 57 38 68 44 82 58"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
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
