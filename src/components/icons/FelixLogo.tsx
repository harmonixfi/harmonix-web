import { cn } from "@/lib/utils";
import { Typography } from "../ui/typography";
import { IconProps } from "./types";

export default function FelixLogo({ className }: IconProps) {
  return (
    <Typography
      variant={"body"}
      className={cn("text-white bg-[#352219] font-inter", className)}
    >
      FELIX
    </Typography>
  );
}
