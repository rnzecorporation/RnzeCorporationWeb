interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

const Logo = ({ size = "md", variant = "dark" }: LogoProps) => {
  const color = variant === "light" ? "#002A54" : "#FFFFFF";

  const sizeMap = {
    sm: { icon: 30, text: "text-[15px]" },
    md: { icon: 40, text: "text-[19px]" },
    lg: { icon: 52, text: "text-[24px]" },
  };

  const { icon, text } = sizeMap[size];

  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/rnze-logo.png"
        alt="RnzeCorporation icon"
        style={{
          width: icon,
          height: icon,
          objectFit: "contain",
          flexShrink: 0,
          filter: variant === "dark" ? "brightness(0) invert(1)" : "none",
        }}
      />
      <span
        className={`${text} leading-none tracking-tight`}
        style={{ color, fontFamily: "'Inter', sans-serif" }}
      >
        <span style={{ fontWeight: 300 }}>Rnze</span>
        <span style={{ fontWeight: 500 }}>Corporation</span>
      </span>
    </div>
  );
};

export default Logo;
