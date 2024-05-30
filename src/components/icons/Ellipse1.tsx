import { IconProps } from '@/@types/common';

const Ellipse1 = ({ className }: IconProps) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37" fill="none">
      <g filter="url(#filter0_f_168_6002)">
        <ellipse
          cx="8.40555"
          cy="7.86164"
          rx="8.40555"
          ry="7.86164"
          transform="matrix(0.992223 -0.12447 0.14264 0.989775 9 12.0521)"
          fill="url(#paint0_linear_168_6002)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_168_6002"
          x="0.0454102"
          y="0.934937"
          width="36.8323"
          height="35.7044"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_168_6002" />
        </filter>
        <linearGradient
          id="paint0_linear_168_6002"
          x1="3.84254"
          y1="6.92823e-08"
          x2="9.8172"
          y2="18.2767"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9EA2C1" />
          <stop offset="0.59375" stopColor="#296764" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Ellipse1;
