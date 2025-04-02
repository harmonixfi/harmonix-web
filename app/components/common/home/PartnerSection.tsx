import PartnerItem from "./PartnerItem";
import {
  KelpIcon,
  KyberNetworkIcon,
  PendleIcon,
  HyperLiquidIcon,
  FelixIcon,
  WormholeIcon,
  AsxnIcon,
  PythNetworkIcon,
  AlphaTicksIcon,
  ValidaoIcon,
  PendleWithTextIcon,
} from "~/components/icons";

export default function PartnerSection() {
  return (
    <div
      className={"pt-[120px] pb-6 bg-white text-primary px-0 md:px-8 2xl:px-24"}
    >
      <div className={"text-5xl sm:text-6xl text-center"}>
        <h1 className={"font-medium"}>Partner</h1>
      </div>
      <div className={"block xl:hidden 2xl:hidden"}>
        <div
          className={
            "bg-bg-grey grid grid-cols-12 grid-rows-5 gap-2 rounded-full relative after:content-[''] after:absolute after:w-full after:h-full after:inset-0 after:border-x-[30px] after:border-y-[40px] lg:after:border-x-[10px] lg:after:border-y-[40px] after:border-solid after:border-white after:rounded-full after:blur-[10px]"
          }
        >
          <PartnerItem />
          <PartnerItem className="col-span-5" />
          <PartnerItem className="col-span-5" />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem
            className="col-span-5"
            icon={<KelpIcon className="w-auto h-10 sm:h-16" />}
          />
          <PartnerItem
            className="col-span-5"
            icon={<KyberNetworkIcon className="w-auto h-14 sm:h-20 lg:h-24" />}
          />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem
            className="col-span-5"
            icon={
              <div className="flex items-center gap-3">
                <FelixIcon className="w-auto h-12 sm:h-16" />
                <span className="text-primary text-3xl sm:text-5xl font-light font-poppins translate-y-1 sm:translate-y-2">
                  Felix
                </span>
              </div>
            }
          />
          <PartnerItem
            className="col-span-5"
            icon={<HyperLiquidIcon className={"w-auto h-6 sm:h-10 lg:h-12"} />}
          />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem
            className="col-span-5"
            icon={<PendleIcon className="w-auto h-16 sm:h-20 lg:h-24" />}
          />
          <PartnerItem
            className="col-span-5"
            icon={<WormholeIcon className={"w-auto h-3 sm:h-6 lg:h-8"} />}
          />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem
            className="col-span-5"
            icon={<PythNetworkIcon className="w-auto h-10 sm:h-16 lg:h-20" />}
          />
          <PartnerItem
            className="col-span-5"
            icon={<ValidaoIcon className={"w-auto h-6 sm:h-12 lg:h-14"} />}
          />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem
            className="col-span-5"
            icon={<AsxnIcon className="w-auto h-10 sm:h-16 lg:h-20" />}
          />
          <PartnerItem
            className="col-span-5"
            icon={<AlphaTicksIcon className={"w-auto h-8 sm:h-12 lg:h-14"} />}
          />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem className="col-span-5" />
          <PartnerItem className="col-span-5" />
          <PartnerItem />
        </div>
      </div>
      <div className={"hidden xl:block"}>
        <div
          className={
            "bg-bg-grey grid grid-cols-5 grid-rows-3 gap-1.5 rounded-full relative after:content-[''] after:absolute after:w-full after:h-full after:inset-0 after:border-[50px] lg:after:border-x-[100px] lg:after:border-y-[75px] after:border-solid after:border-white after:rounded-full after:blur-md"
          }
        >
          {[...Array(6)].map((_, index) => {
            return <PartnerItem key={index} />;
          })}
          <PartnerItem icon={<KelpIcon className="w-auto h-14 2xl:h-16" />} />
          <PartnerItem
            icon={<KyberNetworkIcon className="w-auto h-16 2xl:h-20" />}
          />
          <PartnerItem
            icon={
              <div className="flex items-center gap-3">
                <FelixIcon className="w-auto h-16" />
                <span className="text-primary text-4xl font-light font-poppins translate-y-2">
                  Felix
                </span>
              </div>
            }
          />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem
            icon={<HyperLiquidIcon className="w-auto h-8 2xl:h-10" />}
          />
          <PartnerItem
            icon={<PendleWithTextIcon className="w-auto h-20 2xl:h-24" />}
          />
          <PartnerItem icon={<WormholeIcon className="w-auto h-5 2xl:h-6" />} />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem
            icon={<PythNetworkIcon className="w-auto h-10 2xl:h-12" />}
          />
          <PartnerItem
            icon={<ValidaoIcon className="w-auto h-10 2xl:h-12" />}
          />
          <PartnerItem icon={<AsxnIcon className="w-auto h-10 2xl:h-12" />} />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem
            icon={<AlphaTicksIcon className="w-auto h-10 2xl:h-12" />}
          />
          {[...Array(7)].map((_, index) => {
            return <PartnerItem key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
