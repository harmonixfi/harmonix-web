import { IconProps } from "~/@types/common";

const HyperliquidLogo = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="11" fill="#072723" />
      <g clipPath="url(#clip0_101_10)">
        <mask
          id="mask0_101_10"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="3"
          y="5"
          width="90"
          height="15"
        >
          <path d="M92.7737 5H3V19.056H92.7737V5Z" fill="white" />
        </mask>
        <g mask="url(#mask0_101_10)">
          <path
            d="M18.9666 10.8871C18.9812 12.1981 18.7068 13.4507 18.1679 14.6475C17.3984 16.3517 15.5534 17.7452 13.8685 16.2619C12.4945 15.0529 12.2396 12.5986 10.181 12.2393C7.45717 11.9092 7.39163 15.0675 5.61217 15.4244C3.62879 15.8274 2.9709 12.4918 3.00004 10.9769C3.02917 9.46209 3.43215 7.33305 5.15578 7.33305C7.13915 7.33305 7.27267 10.336 9.79014 10.1734C12.2833 10.0035 12.327 6.87908 13.9559 5.54146C15.3615 4.3859 17.0148 5.23315 17.8426 6.62418C18.6097 7.91083 18.9472 9.42082 18.9641 10.8871H18.9666Z"
            fill="#50D2C1"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_101_10">
          <rect
            width="16"
            height="14"
            fill="white"
            transform="translate(3 4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HyperliquidLogo;
