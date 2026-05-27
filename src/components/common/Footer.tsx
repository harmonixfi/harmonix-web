"use client";

import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import HarmonixLogoWithoutBackground from "../icons/HarmonixLogoWithoutBackground";
import HarmonixText from "../icons/HarmonixText";
import { BookOpenIcon } from "lucide-react";
import { HARMONIX_CONFIG_LINK } from "@/constants/common";
import TwitterIcon from "../icons/TwitterIcon";
import TelegramIcon from "../icons/TelegramIcon";
import DiscordIcon from "../icons/DiscordIcon";
import GithubIcon from "../icons/GithubIcon";

const URL_PARAGRAPH = process.env.NEXT_PUBLIC_PARAGRAPH_URL_PAGE ?? "";

const footerColumns = [
  {
    heading: "Resources",
    column: [
      { title: "Documents", link: HARMONIX_CONFIG_LINK.docs },
      { title: "Blog", link: URL_PARAGRAPH },
      { title: "Risks & Audits", link: HARMONIX_CONFIG_LINK.docs },
      { title: "API reference", link: HARMONIX_CONFIG_LINK.docs },
    ],
  },
  {
    heading: "Products",
    column: [
      {
        title: "haUSD Vault",
        link: `${HARMONIX_CONFIG_LINK.launchApp}/vaults/hip3-usdc-vault`,
      },
      {
        title: "haHYPE Vault",
        link: `${HARMONIX_CONFIG_LINK.launchApp}/vaults/hyperevm-delta-neutral-hype-v3`,
      },
      {
        title: "Basis Trade",
        link: `${HARMONIX_CONFIG_LINK.launchApp}/vaults/hype-delta-neutral-v1`,
      },
      {
        title: "Dashboard",
        link: `${HARMONIX_CONFIG_LINK.launchApp}/dashboards`,
      },
    ],
  },
  {
    heading: "Legal",
    column: [
      { title: "Terms of Use", link: HARMONIX_CONFIG_LINK.docs },
      { title: "Privacy Policy", link: HARMONIX_CONFIG_LINK.docs },
    ],
  },
] as const;

const socialMedia = [
  {
    icon: TwitterIcon,
    link: HARMONIX_CONFIG_LINK.twitter,
    label: "Twitter",
  },
  {
    icon: TelegramIcon,
    link: HARMONIX_CONFIG_LINK.telegram,
    label: "Telegram",
  },
  {
    icon: DiscordIcon,
    link: HARMONIX_CONFIG_LINK.discord,
    label: "Discord",
  },
  {
    icon: GithubIcon,
    link: HARMONIX_CONFIG_LINK.github,
    label: "Github",
  },
  { icon: BookOpenIcon, link: HARMONIX_CONFIG_LINK.docs, label: "Docs" },
];
const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:pt-24 lg:pb-12">
        <div className="grid gap-10 lg:gap-4 lg:grid-cols-5">
          <div className="col-span-2">
            <Typography
              variant="h2"
              className="border-none font-medium pb-0 text-4xl leading-tight"
            >
              Yield
              <br />
              infrastructure
              <br />
              built natively on
              <br />
              Hyperliquid.
            </Typography>
          </div>

          <div className="col-span-3 grid grid-cols-2 gap-8 lg:gap-12 sm:grid-cols-3">
            {footerColumns.map((group) => (
              <div key={group.heading} className="space-y-3">
                <Typography variant="body">{group.heading}</Typography>
                <div className="space-y-2">
                  {group.column.map((item) => (
                    <Link
                      key={item.title}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 lg:mt-20 flex items-end gap-6 lg:gap-13 pointer-events-none select-none">
          <HarmonixLogoWithoutBackground
            className="w-25 lg:w-71"
            fillColor="fill-foreground/10"
          />
          <HarmonixText textColor="fill-foreground/10" className="w-full" />
        </div>

        <div className="mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-4 lg:gap-6 border-t border-muted-foreground pt-4 lg:pt-8">
          <Typography
            variant="bodySmall"
            className="text-muted-foreground text-center lg:text-left"
          >
            @ Harmonix Finance. All rights reserved. 2026
          </Typography>

          <div className="flex items-center justify-center gap-4">
            {socialMedia.map((v, i) => (
              <Link
                key={`index-${i}-${v.label}`}
                href={v.link}
                aria-label={v.label}
                className="inline-flex items-center justify-center cursor-pointer"
              >
                <v.icon className="size-5" />
              </Link>
            ))}
          </div>

          <Typography
            variant="bodySmall"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-center cursor-pointer lg:text-right text-muted-foreground transition-colors hover:text-foreground animate-bounce"
          >
            Back to top
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
