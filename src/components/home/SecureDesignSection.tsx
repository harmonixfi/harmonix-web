import { Typography } from "@/components/ui/typography";
import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import BcioLogo from "../icons/BcioLogo";
import BaiLogo from "../icons/BalLogo";
import { ScrollReveal } from "../common/ScrollReveal";
import { HARMONIX_CONFIG_LINK } from "@/constants/common";

const secureCards = [
  {
    title: "Security Audits",
    description: "By independent firms",
    cta: {
      title: "Read more",
      href: HARMONIX_CONFIG_LINK.docs,
    },
    badge: null,
    iconCount: [
      {
        title: "Bai",
        icon: BaiLogo,
      },
      {
        title: "Bcio",
        icon: BcioLogo,
      },
    ],
  },
  {
    title: "SDK & API",
    description: "Integrate with Harmonix vaults",
    cta: {
      title: "Read Docs",
      href: HARMONIX_CONFIG_LINK.docs,
    },
    badge: "Coming soon",
    iconCount: [],
  },
  {
    title: "Standard Vault Framework",
    description: "Composability with ERC(4626/7540/7575)",
    cta: {
      title: "View on Github",
      href: HARMONIX_CONFIG_LINK.github,
    },
    badge: null,
    iconCount: [],
  },
] as const;

export default function SecureDesignSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:py-36">
        <ScrollReveal direction="up" duration={600} delay={100} className="">
          <Typography
            align={"center"}
            variant={"h1"}
            className="leading-10 lg:leading-18"
          >
            Open by default.
            <br />
            <span className="bg-title-gradient bg-clip-text text-transparent">
              Secure by design.
            </span>
          </Typography>
          <Typography
            align={"center"}
            variant={"body"}
            className="mt-4 text-muted-foreground"
          >
            Transparent financial infrastructure. See it for yourself.
          </Typography>
        </ScrollReveal>

        <ScrollReveal
          direction="up"
          duration={600}
          delay={100}
          className="mt-12 rounded-3xl bg-muted-100 relative h-105"
        >
          <ScrollReveal
            direction="up"
            duration={600}
            delay={100}
            className="absolute inset-x-0 bottom-0 mx-auto max-w-4xl bg-white pt-3 px-3 rounded-t-2xl"
          >
            <div className="overflow-hidden rounded-t-xl bg-[#14181B]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <Typography variant="small" className="text-white/80">
                  HarmonixVault.sol
                </Typography>
                <Link
                  href={HARMONIX_CONFIG_LINK.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-white"
                >
                  Github <ExternalLink className="size-3.5" />
                </Link>
              </div>

              <div className="px-5 py-5">
                <pre className="overflow-x-auto text-xs leading-6 text-white/70">
                  <code>
                    {`// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.21;

import { ERC4626 } from "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract HarmonixVault is ERC4626 {
  function deposit(uint256 assets, address receiver) public override returns (uint256) {
    // ...
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </ScrollReveal>
        </ScrollReveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {secureCards.map((card, i) => (
            <ScrollReveal
              direction="up"
              duration={600}
              delay={100 * (i + 1)}
              threshold={0.2}
              key={card.title}
              className="relative rounded-3xl bg-muted-100 p-6"
            >
              {card.badge ? (
                <span className="absolute right-6 top-6 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-white">
                  {card.badge}
                </span>
              ) : null}

              <div className="flex items-start justify-between gap-6">
                <div className="space-y-1">
                  <Typography
                    variant="h6"
                    className="border-none pb-0 text-primary"
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="bodySmall"
                    className="text-muted-foreground"
                  >
                    {card.description}
                  </Typography>
                </div>

                {card.iconCount && (
                  <div className="flex items-center -space-x-2">
                    {card.iconCount?.map((item) => (
                      <item.icon
                        key={`avatar-${item.title}`}
                        className="size-8 rounded-full"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4">
                <Link href={card.cta.href} target="_blank">
                  <Button
                    variant="outline"
                    className="rounded-full cursor-pointer"
                  >
                    {card.cta.title}
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
