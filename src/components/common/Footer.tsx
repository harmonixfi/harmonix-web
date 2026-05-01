import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import HarmonixLogoWithoutBackground from "../icons/HarmonixLogoWithoutBackground";
import HarmonixText from "../icons/HarmonixText";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const footerColumns = [
  {
    heading: "Resources",
    column: [
      { title: "Documents", link: "#" },
      { title: "Blog", link: "#" },
      { title: "Risks & Audits", link: "#" },
      { title: "API reference", link: "#" },
    ],
  },
  {
    heading: "Products",
    column: [
      { title: "haUSD Vault", link: "#" },
      { title: "haHYPE Vault", link: "#" },
      { title: "Basis Trade", link: "#" },
      { title: "Dashboard", link: "#" },
    ],
  },
  {
    heading: "Legal",
    column: [
      { title: "Terms of Use", link: "#" },
      { title: "Risks & Audits", link: "#" },
      { title: "Privacy Policy", link: "#" },
    ],
  },
] as const;

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-12">
        <div className="grid gap-4 lg:grid-cols-5">
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

          <div className="col-span-3 grid grid-cols-2 gap-12 sm:grid-cols-3">
            {footerColumns.map((group) => (
              <div key={group.heading} className="space-y-3">
                <Typography variant="body">{group.heading}</Typography>
                <div className="space-y-2">
                  {group.column.map((item) => (
                    <Link
                      key={item.title}
                      href={item.link}
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

        <div className="mt-20 flex items-end gap-13 pointer-events-none select-none">
          <HarmonixLogoWithoutBackground
            className="w-71"
            fillColor="fill-foreground/10"
          />
          <HarmonixText textColor="fill-foreground/10" className="w-full" />
        </div>

        <div className="mt-10 grid grid-cols-3 gap-6 border-t border-muted-foreground pt-8">
          <Typography variant="bodySmall" className="text-muted-foreground">
            @ Harmonix Finance. All rights reserved. 2026
          </Typography>

          <div className="flex items-center justify-center gap-4">
            {[
              { label: "Facebook", Icon: FacebookIcon },
              { label: "Instagram", Icon: InstagramIcon },
              { label: "X", Icon: TwitterIcon },
              { label: "Youtube", Icon: YoutubeIcon },
              { label: "WhatsApp", Icon: WhatsAppIcon },
            ].map(({ label, Icon }) => (
              <Link
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex items-center justify-center cursor-pointer"
              >
                <Icon className="size-5" />
              </Link>
            ))}
          </div>

          <Link
            href="#"
            className="text-sm text-right text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
