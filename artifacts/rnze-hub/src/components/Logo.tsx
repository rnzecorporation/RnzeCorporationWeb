interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

const Logo = ({ size = "md", variant = "dark" }: LogoProps) => {
  const textColor = variant === "light" ? "#002A54" : "#FFFFFF";

  const sizeMap = {
    sm: { icon: 26, text: "text-base" },
    md: { icon: 34, text: "text-xl" },
    lg: { icon: 46, text: "text-3xl" },
  };

  const { icon, text } = sizeMap[size];

  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/rnze-logo.png"
        alt="RnzeCorporation logo"
        width={icon}
        height={icon}
        style={{
          width: icon,
          height: icon,
          objectFit: "contain",
          filter: variant === "dark" ? "brightness(0) invert(1)" : "none",
        }}
      />
      <span
        className={`font-space-grotesk font-bold tracking-tight ${text}`}
        style={{ color: textColor }}
      >
        RnzeCorporation
      </span>
    </div>
  );
};

export default Logo;
