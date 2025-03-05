import RewardPercent from "~/components/icons/RewardPercent";
import Verichain from "~/components/icons/Verichain";

export default function RewardSection2() {
  return (
    <div
      className={"lg:px-60 sm:px-3 py-[120px] bg-white text-primary space-y-16"}
    >
      <div
        className={
          "text-[32px] lg:text-[64px] space-y-6 mb-16 text-center px-8"
        }
      >
        <h1 className={"font-medium"}>Reward</h1>
        <h1 className={"text-2xl font-normal"}>
          Dolor sit morbi nunc. Consequat in sit at iaculis. Turpis nibh
          pellentesque turpis ac interdum ut.
        </h1>
      </div>
      <div className={"grid grid-rows-2 lg:grid-cols-2 gap-5 px-8 lg:px-0"}>
        <div
          className={
            "px-8 lg:px-20 py-[46px] bg-bg-grey rounded-[24px] text-2xl space-y-6 text-center"
          }
        >
          <div>Stablecoin APY</div>
          <div className={"flex justify-center"}>
            <RewardPercent />
          </div>
        </div>
        <div
          className={
            "px-8 py-[46px] bg-bg-grey rounded-[24px] text-2xl space-y-6 text-center"
          }
        >
          <div>Audited by</div>
          <div className={"flex justify-center"}>
            <Verichain className={"w-[223px] h-[70px]"} />
          </div>
        </div>
      </div>
    </div>
  );
}
