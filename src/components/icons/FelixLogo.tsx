import { cn } from "@/lib/utils";
import { Typography } from "../ui/typography";
import { IconProps } from "./types";

export default function FelixLogo({ className }: IconProps) {
  return (
    <Typography
      variant={"body"}
      className={cn(
        "text-[#EFEAD7] bg-[#352219] font-semibold font-inter flex items-center justify-center",
        className,
      )}
    >
      FELIX
    </Typography>
  );
}
