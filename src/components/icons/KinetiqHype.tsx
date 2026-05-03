import { IconProps } from "./types";

const KinetiqHype = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 541 541"
      className={className}
    >
      <circle
        cx="270.5"
        cy="270.5"
        r="262.5"
        fill="url(#a)"
        stroke="url(#b)"
        strokeWidth="16"
      />
      <path
        fill="url(#c)"
        d="M436.07 269.312c.302 27.204-5.387 53.199-16.564 78.035-15.96 35.366-54.223 64.283-89.165 33.502-28.496-25.089-33.783-76.021-76.476-83.477-56.49-6.851-57.849 58.69-94.754 66.096-41.133 8.363-54.777-60.857-54.173-92.293s8.962-75.617 44.708-75.617c41.134 0 43.903 62.317 96.113 58.942 51.706-3.526 52.612-68.363 86.395-96.122 29.151-23.98 63.437-6.398 80.605 22.469 15.91 26.701 22.909 58.036 23.26 88.465z"
      />
      <circle
        cx="270.5"
        cy="270.5"
        r="232.508"
        stroke="url(#d)"
        strokeOpacity=".8"
        strokeWidth="12"
      />
      <path
        fill="url(#e)"
        d="M0 0h541v541H0z"
        clipPath="url(#f)"
        opacity=".45"
        style={{ mixBlendMode: "overlay" }}
      />
      <defs>
        <linearGradient
          id="a"
          x1="541"
          x2="0"
          y1="0"
          y2="541"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9F9F9F" />
          <stop offset=".423" stopColor="#131313" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="270.5"
          x2="270.5"
          y1="147.128"
          y2="393.872"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6EE4FF" />
          <stop offset="1" stopColor="#246F8F" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="270.5"
          x2="270.5"
          y1="15.698"
          y2="525.301"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#35ABD9" />
          <stop offset="1" stopColor="#2D7E99" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="270.5"
          x2="270.5"
          y1="43.992"
          y2="497.008"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C9C9C9" />
          <stop offset="1" stopColor="#646464" />
        </linearGradient>
        <clipPath id="f">
          <rect width="541" height="541" fill="#fff" rx="270.5" />
        </clipPath>
        <pattern
          id="e"
          width=".148"
          height=".148"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#g" transform="scale(.00148)" />
        </pattern>
      </defs>
    </svg>
  );
};

export default KinetiqHype;
