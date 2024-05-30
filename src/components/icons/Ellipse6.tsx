import { IconProps } from '@/@types/common';

const Ellipse6 = ({ className }: IconProps) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 43" fill="none">
      <g filter="url(#filter0_f_132_8577)">
        <circle cx="21.5" cy="21.5" r="17.5" fill="url(#paint0_linear_132_8577)" />
      </g>
      <defs>
        <filter
          id="filter0_f_132_8577"
          x="0.568627"
          y="0.568627"
          width="41.8627"
          height="41.8627"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="1.71569" result="effect1_foregroundBlur_132_8577" />
        </filter>
        <linearGradient
          id="paint0_linear_132_8577"
          x1="21.5"
          y1="4"
          x2="21.5"
          y2="39"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#193534" />
          <stop offset="1" stopColor="#499B98" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Ellipse6;
