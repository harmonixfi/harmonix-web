import { IconProps } from "~/@types/common";

const HomeGrid = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 1600 648"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2">
        <path
          fill="url(#paint0_linear_168_5993)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_168_5993"
          x1="796"
          y1="576.527"
          x2="796"
          y2="71.5123"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#173132" />
          <stop offset="0.2675" stopColor="#7D946A" />
          <stop offset="1" stopColor="#F5F5F5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HomeGrid;