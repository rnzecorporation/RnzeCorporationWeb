import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ size = "md" }) => {
  const sizeMap = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const textSizeMap = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  };

  return (
    <div className="flex items-center gap-3">
      <svg
        className={`${sizeMap[size]}`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="48" stroke="#FFFFFF" strokeWidth="4" />
        <path
          d="M 30 70 C 40 50, 45 40, 50 30 C 55 40, 60 50, 70 70"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 20 60 C 35 45, 45 40, 50 35 C 55 40, 65 45, 80 60"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={`font-space-grotesk font-bold text-white tracking-tight ${textSizeMap[size]}`}>
        RnzeCorporation
      </span>
    </div>
  );
};

export default Logo;
