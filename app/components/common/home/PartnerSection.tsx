import PartnerItem from "./PartnerItem";
import {
  GoldLinkIcon,
  KelpIcon,
  KyberNetworkIcon,
  NodeKitIcon,
  PendleIcon,
  HyperLiquidIcon,
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
            icon={<KelpIcon className="w-auto h-12 sm:h-16" />}
          />
          <PartnerItem
            className="col-span-5"
            icon={<KyberNetworkIcon className="w-auto h-16 sm:h-20 lg:h-24" />}
          />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem
            className="col-span-5"
            icon={<NodeKitIcon className="w-auto h-14 sm:h-16 lg:h-20" />}
          />
          <PartnerItem
            className="col-span-5"
            icon={<HyperLiquidIcon className={"w-auto h-6 sm:h-8 lg:h-12"} />}
          />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem
            className="col-span-5"
            icon={<PendleIcon className="w-auto h-20 sm:h-24" />}
          />
          <PartnerItem
            className="col-span-5"
            icon={<GoldLinkIcon className={"w-auto h-8 sm:h-10 lg:h-14"} />}
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
          <PartnerItem icon={<KyberNetworkIcon className="w-auto h-16" />} />
          <PartnerItem icon={<NodeKitIcon className="w-auto h-16" />} />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem
            icon={<HyperLiquidIcon className="w-auto h-8 2xl:h-10" />}
          />
          <PartnerItem icon={<PendleIcon className="w-auto h-16" />} />
          <PartnerItem
            icon={<GoldLinkIcon className="w-auto h-8 2xl:h-10" />}
          />
          {[...Array(6)].map((_, index) => {
            return <PartnerItem key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
