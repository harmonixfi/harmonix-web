import { SubtractIcon } from "~/components/icons";

const MainBanner = () => {
  return (
    <div className="relative top-[-99px]">
      <div className={"absolute left-1/2 -translate-x-1/2"}>
        <SubtractIcon
          className={"w-[370px] h-[500px] lg:w-[1097px] lg:h-[898px]"}
        />
      </div>
      <div className={"absolute left-[51%] -translate-x-[51%]"}>
        <SubtractIcon
          className={"w-[370px] h-[500px] lg:w-[1097px] lg:h-[898px]"}
        />
      </div>
    </div>
  );
};

export default MainBanner;
