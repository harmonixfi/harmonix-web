import { VerichainIcon } from "~/components/icons";

export default function Verichain() {
  return (
    <div className={"flex justify-center text-primary"}>
      <div
        className={
          "p-6 bg-linear bg-gradient-linear w-[343px] rounded-3xl flex items-center"
        }
      >
        <div className={"space-x-2"}>
          <span className={"uppercase text-base"}>APR</span>
          <span className={"text-2xl font-semibold"}>22.71%</span>
        </div>
        <div className={"w-[1px] h-[25px] mx-6 bg-black"}></div>
        <div className={"flex items-center gap-[10px]"}>
          <div>Audit</div>
          <VerichainIcon />
        </div>
      </div>
    </div>
  );
}
