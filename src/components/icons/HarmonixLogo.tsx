import { IconProps } from "./types";

const HarmonixLogo = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        width="46"
        height="46"
        rx="13.1266"
        className="fill-foreground dark:fill-accent"
      />
      <path
        d="M19.3193 20.833C16.9792 24.9001 16.0466 28.7467 18.75 30.3076C21.4536 31.8684 24.3187 29.1375 26.6709 25.0771L27.874 25.7715C23.8246 32.7851 18.4032 37.2357 12.3877 33.7627C6.37224 30.2896 7.51613 23.3692 11.5654 16.3555L19.3193 20.833ZM18.1162 20.1367C22.1656 13.1231 27.5871 8.67173 33.6025 12.1445C39.6181 15.6176 38.4741 22.539 34.4248 29.5527L26.6709 25.0752C29.0111 21.0081 29.9426 17.1625 27.2393 15.6016C24.5358 14.0414 21.6714 16.771 19.3193 20.8311L18.1162 20.1367Z"
        className="fill-accent dark:fill-accent-foreground"
      />
    </svg>
  );
};

export default HarmonixLogo;
