import EarnItem from "./partials/EarnItem";
import StakeItem from "./partials/StakeItem";
import SwapItem from "./partials/SwapItem";
import { Button } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { useCallback, useState } from "react";
import { Vault } from "~/@types/common";
import { EXTERNAL_LINKS } from "~/constants/url";

const data = [
  {
    title: Vault.EARN,
    description:
      "Earn attractive yields with vaults leveraging hedge fund strategies effective in all market conditions.",
    type: Vault.EARN,
  },
  {
    title: Vault.STAKE,
    description:
      "Earn attractive yields with vaults leveraging hedge fund strategies effective in all market conditions.",
    type: Vault.STAKE,
  },
  {
    title: Vault.SWAP,
    description:
      "Earn attractive yields with vaults leveraging hedge fund strategies effective in all market conditions.",
    type: Vault.SWAP,
  },
];

export default function Earn() {
  const [vault, setVault] = useState<Vault>(Vault.EARN);

  const renderUI = useCallback(() => {
    switch (vault) {
      case Vault.EARN:
        return <EarnItem />;
      case Vault.STAKE:
        return <StakeItem />;
      case Vault.SWAP:
        return <SwapItem />;
      default:
        return <EarnItem />;
    }
  }, [vault]);

  return (
    <div className={"lg:px-60 sm:px-3 py-[120px] bg-white text-primary"}>
      <div
        className={
          "text-[32px] lg:text-[64px] space-y-6 mb-16 text-center px-8"
        }
      >
        <h1 className={"font-medium"}>Title</h1>
        <h1 className={"text-2xl font-normal"}>
          Dolor sit morbi nunc. Consequat in sit at iaculis. Turpis nibh
          pellentesque turpis ac interdum ut.
        </h1>
      </div>
      <div
        className={"lg:flex lg:justify-between lg:items-center px-8 lg:px-0"}
      >
        <div className={"lg:w-2/5 my-24 lg:pl-16 space-y-6 sm:mx-2"}>
          {data.map((item, index) => {
            if (item.type === vault) {
              return (
                <div className={"space-y-4"}>
                  <h1 className={"text-5xl font-medium uppercase"}>
                    {item.title}
                  </h1>
                  <p className={"pr-4"}>{item.description}</p>
                  <Button
                    as={Link}
                    color="primary"
                    size="lg"
                    className="rounded-full bg-secondary text-primary shadow-sm"
                    to={EXTERNAL_LINKS.App}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Launch App
                  </Button>
                </div>
              );
            }
            return (
              <div
                className={"text-5xl cursor-pointer opacity-60"}
                onClick={() => setVault(item.type)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className={"lg:w-3/5"}>{renderUI()}</div>
      </div>
    </div>
  );
}
