import { IconProps } from '@/@types/common';

const Ellipse4 = ({ className }: IconProps) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 53" fill="none">
      <g filter="url(#filter0_f_168_6001)">
        <circle
          cx="26.9894"
          cy="26.9894"
          r="16"
          transform="rotate(-7.65783 26.9894 26.9894)"
          fill="url(#paint0_linear_168_6001)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_168_6001"
          x="0.987549"
          y="0.987488"
          width="52.0037"
          height="52.0037"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_168_6001" />
        </filter>
        <linearGradient
          id="paint0_linear_168_6001"
          x1="18.3037"
          y1="10.9894"
          x2="31.1273"
          y2="47.679"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#193534" />
          <stop offset="0.59375" stopColor="#E2F6A1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Ellipse4;
