import Alplaticks from "../../../../assets/images/alphaticks.png";
import Nansen from "../../../../assets/images/nansen.png";
import ValiDAO from "../../../../assets/images/valiDAO.png";
import { VectorIcon } from "~/components/icons";

export default function StakeItem() {
  return (
    <div
      className={
        "rounded-3xl bg-bg-grey p-4 lg:px-10 lg:py-[97px] text-primary"
      }
    >
      <div className={"grid grid-cols-2 gap-2"}>
        <div className={"px-3 py-6 lg:py-6 lg:px-10 bg-white rounded-3xl"}>
          <p className={"font-medium text-center text-[15px] text-main-green"}>
            Staking Balance
          </p>
          <div className={"relative text-center mt-1"}>
            <h1
              className={
                "font-normal text-3xl lg:text-[40px] text-sub-title text-left lg:text-center pl-6 lg:pl-0"
              }
            >
              4.39
            </h1>
            <p
              className={
                "uppercase text-green absolute top-[4px] -right-[1px] lg:top-[10px] lg:-right-[12px] text-sm lg:text-base"
              }
            >
              hype
            </p>
          </div>
        </div>
        <div className={"px-3 py-6 lg:py-6 lg:px-10 bg-white rounded-3xl"}>
          <p className={"font-medium text-center text-[15px] text-main-green"}>
            Total Staked
          </p>
          <div className={"relative text-center mt-1"}>
            <h1
              className={
                "font-normal text-3xl lg:text-[40px] text-sub-title text-left lg:text-center pl-6 lg:pl-0"
              }
            >
              4.39
            </h1>
            <p
              className={
                "uppercase text-green absolute top-[4px] -right-[1px] lg:top-[10px] lg:-right-[12px] text-sm lg:text-base"
              }
            >
              hype
            </p>
          </div>
        </div>
      </div>
      <div className={"grid grid-cols-1 lg:grid-cols-3 gap-2 mt-2 text-center"}>
        <div className={"py-6 px-4 bg-white rounded-3xl space-x-2"}>
          <div className={"flex justify-center"}>
            <img src={ValiDAO} alt="" />
          </div>
          <p>ValiDAO</p>
          <p className={"text-lg font-bold"}>5,292</p>
        </div>
        <div className={"py-6 px-4 bg-white rounded-3xl space-x-2"}>
          <div className={"flex justify-center"}>
            <img src={Alplaticks} alt="" />
          </div>
          <p>Alphaticks</p>
          <p className={"text-lg font-bold"}>5,015</p>
        </div>
        <div className={"py-6 px-4 bg-white rounded-3xl space-x-2"}>
          <div className={"flex justify-center items-center h-[40px]"}>
            <img src={Nansen} alt="" />
            <VectorIcon />
          </div>
          <p>Nansen x Hypurr</p>
          <p className={"text-lg font-bold"}>42,373</p>
        </div>
      </div>
    </div>
  );
}
