import PartnerItem from "./PartnerItem";
import {
  GoldLink2Icon,
  HyperLiquidIcon2,
  KelpIcon,
  KyberNetwork2Icon,
  NodeKit2Icon,
  Pendle2Icon,
} from "~/components/icons";

export default function PartnerSection() {
  return (
    <div
      className={
        "xl:px-32 2xl:px-32 pt-[120px] pb-6 bg-white text-primary px-0 md:px-8 lg:px-8"
      }
    >
      <div className={"text-[32px] lg:text-[64px] text-center"}>
        <h1 className={"font-medium"}>Partner</h1>
      </div>
      <div className={"block xl:hidden 2xl:hidden"}>
        <div
          className={
            "bg-bg-grey grid grid-cols-8 grid-rows-5 gap-1 relative after:content-[''] after:absolute after:w-full after:h-full after:inset-0 after:border-x-[30px] after:border-y-[40px] lg:after:border-x-[100px] lg:after:border-y-[75px] after:border-solid after:border-white after:blur-[10px]"
          }
        >
          <PartnerItem/>
          <PartnerItem className={'col-span-3'}/>
          <PartnerItem className={'col-span-3'}/>
          <PartnerItem/>
          <PartnerItem/>
          <PartnerItem
            className={"col-span-3"}
            icon={<KelpIcon />}
          />
          <PartnerItem
            className={"col-span-3"}
            icon={
              <KyberNetwork2Icon
                
              />
            }
          />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem
            className={"col-span-3"}
            icon={
              <NodeKit2Icon  />
            }
          />
          <PartnerItem
            className={"col-span-3"}
            icon={
              <HyperLiquidIcon2
              className={"w-36 md:w-28 lg:w-48 lg:h-20"}
              />
            }
          />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem
            className={"col-span-3"}
            icon={
              <Pendle2Icon  />
            }
          />
          <PartnerItem
            className={"col-span-3"}
            icon={
              <GoldLink2Icon className={"w-36 md:w-28 lg:w-48 lg:h-20"} />
            }
          />
          <PartnerItem/>
          <PartnerItem/>
          <PartnerItem className={'col-span-3'}/>
          <PartnerItem className={'col-span-3'}/>
          <PartnerItem/>
        </div>
      </div>
      <div className={"hidden xl:block 2xl:block"}>
        <div
          className={
            "bg-bg-grey grid grid-cols-5 grid-rows-3 gap-1 relative after:content-[''] after:absolute after:w-full after:h-full after:inset-0 after:border-[50px] lg:after:border-x-[100px] lg:after:border-y-[75px] after:border-solid after:border-white after:blur-[10px]"
          }
        >
          {[...Array(6)].map((_, index) => {
            return <PartnerItem key={index} />;
          })}
          <PartnerItem icon={<KelpIcon />} />
          <PartnerItem icon={<KyberNetwork2Icon />} />
          <PartnerItem icon={<NodeKit2Icon />} />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem icon={<HyperLiquidIcon2 />} />
          <PartnerItem icon={<Pendle2Icon />} />
          <PartnerItem icon={<GoldLink2Icon />} />
          {[...Array(6)].map((_, index) => {
            return <PartnerItem key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
