import { IconProps } from '@/@types/common';

const Ellipse7 = ({ className }: IconProps) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" fill="none">
      <g filter="url(#filter0_f_168_6003)">
        <circle
          cx="20.7586"
          cy="20.7586"
          r="10.4582"
          transform="rotate(-7.65783 20.7586 20.7586)"
          fill="url(#paint0_linear_168_6003)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_168_6003"
          x="0.299316"
          y="0.299103"
          width="40.9189"
          height="40.9189"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_168_6003" />
        </filter>
        <linearGradient
          id="paint0_linear_168_6003"
          x1="15.0813"
          y1="10.3003"
          x2="23.4633"
          y2="34.2821"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9EA2C1" />
          <stop offset="0.59375" stopColor="#296764" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Ellipse7;
