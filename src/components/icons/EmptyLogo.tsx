import { IconProps } from "./types";

const EmptyLogo = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="90" cy="90" r="90" fill="#8A8F98" />
    <text
      x="90"
      y="92"
      fill="#FFFFFF"
      fontFamily="Arial, sans-serif"
      fontSize="60"
      fontWeight="900"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      Logo
    </text>
  </svg>
);

export default EmptyLogo;
