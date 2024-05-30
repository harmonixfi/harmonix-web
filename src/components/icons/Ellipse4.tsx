import { IconProps } from '@/@types/common';

const Ellipse4 = ({ className }: IconProps) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97 97" fill="none">
      <g filter="url(#filter0_f_132_8589)">
        <circle cx="48.5" cy="48.5" r="38.5" fill="url(#paint0_linear_132_8589)" />
      </g>
      <g style={{ mixBlendMode: 'soft-light' }}>
        <path
          d="M45.3437 52.9659C45.1648 52.9038 44.1381 52.6289 41.9204 51.8597C40.1677 51.2518 38.9283 50.7814 38.5116 50.5963C31.8159 47.9493 27.187 45.0044 27.6896 43.5552C28.1922 42.1061 33.6862 42.6722 40.5473 44.7271L38.9263 49.4007C39.343 49.5858 40.6055 50.1049 42.3583 50.7128C44.4687 51.4448 45.5311 51.7321 45.7583 51.7703L47.3793 47.0967C54.0393 49.7313 58.7039 52.6886 58.2013 54.1377C57.7112 55.5507 52.2173 54.9846 45.3437 52.9659ZM47.5552 46.5895L49.0003 42.4231L58.4435 45.6983L60.655 39.322L34.9008 30.3895L32.6892 36.7659L42.1324 40.0411L40.6874 44.2075C32.8712 41.9025 26.5845 41.4267 25.9437 43.2744C25.3028 45.1221 30.5698 48.6535 38.0989 51.6708L33.4496 65.0756L40.2817 67.4452L44.9309 54.0403C52.7703 56.394 59.057 56.8698 59.6978 55.0221C60.3387 53.1744 55.1201 49.6191 47.5552 46.5895Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_132_8589"
          x="0"
          y="0"
          width="97"
          height="97"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_132_8589" />
        </filter>
        <linearGradient
          id="paint0_linear_132_8589"
          x1="-11.8922"
          y1="40.1961"
          x2="108.892"
          y2="87"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ACE730" />
          <stop offset="1" stopColor="#09025A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Ellipse4;
