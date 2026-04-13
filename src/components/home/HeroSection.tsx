import { Typography } from "@/components/ui/typography";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="mt-36 space-y-10 mx-auto pb-10 px-4 max-w-7xl">
      <Typography align={"center"} variant={"h1"} className="">
        The future of{" "}
        <span className="bg-title-gradient bg-clip-text text-transparent">
          yield
        </span>{" "}
        is here
      </Typography>
      <Typography
        align={"center"}
        variant={"bodyLarge"}
        className="text-muted-foreground"
      >
        Earn 7% APY with delta neutral yield bearing stablecoins.
        <br />
        Secure, automated, institutional-grade.
      </Typography>
      <div className="flex gap-3 justify-center">
        <Button className={"rounded-full text-base p-6 cursor-pointer"}>
          Launch App
        </Button>
        <Button
          className={"rounded-full text-base p-6 cursor-pointer"}
          variant={"outline"}
        >
          Learn More
        </Button>
      </div>
      <div className="bg-white rounded-t-[4rem] w-full relative h-160">
        <div className="absolute top-10 left-10 flex gap-2">
          <div className="w-5 h-5 rounded-full bg-gray-400"></div>
          <div className="w-5 h-5 rounded-full bg-gray-400"></div>
          <div className="w-5 h-5 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
}
