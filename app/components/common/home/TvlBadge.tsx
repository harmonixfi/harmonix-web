import { Link } from "@remix-run/react";
import { UsdcIcon, UsdtIcon } from "~/components/icons";
import { EXTERNAL_LINKS } from "~/constants/url";

type TvlBadgeProps = {
  tvl: number;
};

const TvlBadge = (props: TvlBadgeProps) => {
  const { tvl } = props;

  return (
    <Link
      to={EXTERNAL_LINKS.App}
      target="_blank"
      rel="noreferrer"
      className="absolute bottom-4 sm:bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 min-w-56"
    >
      <div className="flex items-center gap-4 bg-primary rounded-full px-2 py-1.5 sm:px-4 sm:py-2.5 shadow-md">
        <div className="flex items-center gap-2">
          <UsdtIcon className="w-10 h-10 sm:w-14 sm:h-14" />
          <UsdcIcon className="w-10 h-10 sm:w-14 sm:h-14" />
        </div>
        <div>
          <p className="text-sm sm:text-base text-off-white">Harmonix TVL</p>
          <p className="text-xl sm:text-3xl font-bold text-secondary">
            {tvl.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TvlBadge;
