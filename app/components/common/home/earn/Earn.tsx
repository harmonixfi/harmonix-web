import EarnItem from "./partials/EarnItem";
import { Button } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { EXTERNAL_LINKS } from "~/constants/url";

export default function Earn() {
  return (
    <div className={"lg:px-60 sm:px-3 py-[120px] bg-white text-primary"}>
      <div className={"text-[32px] lg:text-[64px] space-y-6 mb-16 text-center px-8"}>
        <h1 className={"font-medium"}>Title</h1>
        <h1 className={"text-2xl font-normal"}>
          Dolor sit morbi nunc. Consequat in sit at iaculis. Turpis nibh
          pellentesque turpis ac interdum ut.
        </h1>
      </div>
      <div className={"lg:flex lg:justify-between lg:items-center px-8"}>
        <div className={"my-24 lg:pl-16 space-y-6 lg:mr-6 sm:mx-2"}>
          <div className={"space-y-4"}>
            <h1 className={"text-5xl font-medium uppercase"}>EARN</h1>
            <p>
              Earn attractive yields with vaults leveraging hedge fund
              strategies effective in all market conditions.
            </p>
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
          <div className={"text-5xl cursor-pointer opacity-60"}>STAKE</div>
          <div className={"text-5xl cursor-pointer opacity-60"}>SWAP</div>
        </div>
        <EarnItem />
      </div>
    </div>
  );
}
