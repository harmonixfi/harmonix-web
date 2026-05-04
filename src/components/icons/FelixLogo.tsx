import { IconProps } from "./types";

export default function FelixLogo({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <circle cx="32" cy="32" r="32" fill="#2D2118" />
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        fontSize="22"
        fontWeight="800"
        fill="#ECE7D5"
        letterSpacing="-0.5"
      >
        Felix
      </text>
    </svg>
  );
}
