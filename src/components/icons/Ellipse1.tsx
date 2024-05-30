import { IconProps } from '@/@types/common';

const Ellipse1 = ({ className }: IconProps) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39" fill="none">
      <g filter="url(#filter0_f_132_8578)">
        <circle cx="19.5" cy="19.5" r="15.5" fill="url(#paint0_linear_132_8578)" />
      </g>
      <defs>
        <filter
          id="filter0_f_132_8578"
          x="0.630435"
          y="0.630435"
          width="37.7391"
          height="37.7391"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="1.68478" result="effect1_foregroundBlur_132_8578" />
        </filter>
        <linearGradient
          id="paint0_linear_132_8578"
          x1="19.5"
          y1="4"
          x2="19.5"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#193534" />
          <stop offset="1" stopColor="#499B98" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Ellipse1;
