import { ShieldifyIcon, VerichainIcon } from "~/components/icons";

type MetaBadgeProps = {
  apy: number;
};

export default function MetaBadge(props: MetaBadgeProps) {
  const { apy } = props;

  if (apy <= 0) return null;

  return (
    <div className={"flex justify-center text-primary"}>
      <div
        className={"px-6 py-4 bg-linear bg-white rounded-3xl flex items-center"}
      >
        <div className={"flex items-baseline gap-2"}>
          <span className={"uppercase text-base"}>APY</span>
          <span className={"text-xl sm:text-2xl font-semibold"}>
            {apy.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}
            %
          </span>
        </div>
        <div className={"w-[1px] h-6 mx-6 bg-black"}></div>
        <div className={"flex items-center gap-2.5"}>
          <div>Audit</div>
          <VerichainIcon className="w-auto h-7 sm:h-9" />
          <ShieldifyIcon className="w-28 md:w-36" />
        </div>
      </div>
    </div>
  );
}
