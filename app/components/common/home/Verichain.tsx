import { VerichainIcon } from "~/components/icons";

export default function Verichain() {
  return (
    <div className={"flex justify-center text-primary"}>
      <div
        className={"px-6 py-4 bg-linear bg-white rounded-3xl flex items-center"}
      >
        <div className={"flex items-baseline gap-2"}>
          <span className={"uppercase text-base"}>APR</span>
          <span className={"text-2xl font-semibold"}>22.71%</span>
        </div>
        <div className={"w-[1px] h-6 mx-6 bg-black"}></div>
        <div className={"flex items-center gap-2.5"}>
          <div>Audit</div>
          <VerichainIcon className="w-auto h-9" />
        </div>
      </div>
    </div>
  );
}
