import { cn } from "@/lib/utils";
import { IconProps } from "./types";

const HarmonixLogoWithoutBackground = ({
  className,
  fillColor,
}: IconProps & { fillColor?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.45304 6.60703C5.88448 9.32395 5.26012 11.8934 7.07218 12.9361C8.88409 13.9783 10.8044 12.155 12.3808 9.44297L13.1855 9.90586V9.90683C10.4714 14.5919 6.83742 17.5646 2.80558 15.2447C-1.22595 12.9246 -0.459115 8.30184 2.2548 3.61679V3.61582L7.45304 6.60703ZM6.65422 6.14316C9.3683 1.45813 13.0023 -1.51459 17.0341 0.805271C21.066 3.12529 20.2998 7.74803 17.5859 12.4332L17.5849 12.4342L12.3896 9.44394C13.9581 6.72711 14.5823 4.15759 12.7704 3.11484C10.9584 2.0726 9.0383 3.89677 7.46183 6.60898L6.65422 6.14414V6.14316Z"
        fill="currentColor"
        className={cn("fill-foreground dark:fill-accent", fillColor)}
      />
    </svg>
  );
};

export default HarmonixLogoWithoutBackground;
