import React from "react";

export const PRLogo: React.FC<{ className?: string; light?: boolean }> = ({
  className = "w-10 h-10",
  light = false,
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* P Stem & Loop */}
      <path
        d="M8 8H24C28.4183 8 32 11.5817 32 16C32 20.4183 28.4183 24 24 24H16V40H8V8Z"
        fill={light ? "#FFFFFF" : "#000000"}
      />
      <path
        d="M16 14H24C25.1046 14 26 14.8954 26 16C26 17.1046 25.1046 18 24 18H16V14Z"
        fill={light ? "#000000" : "#D9D9D9"}
      />
      {/* R Leg with sharp geometric cut */}
      <path
        d="M24 24L36 40H27L18 27L24 24Z"
        fill={light ? "#FFFFFF" : "#000000"}
      />
      {/* Geometric accent line */}
      <path
        d="M34 8L42 16L38 20L30 12L34 8Z"
        fill={light ? "#FFFFFF" : "#000000"}
      />
    </svg>
  );
};
