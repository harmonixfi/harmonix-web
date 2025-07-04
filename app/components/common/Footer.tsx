import {
  BrandTextIcon,
  DiscordIcon,
  FlatLogoIcon,
  FooterLineIcon,
  GithubIcon,
  ShieldifyIcon,
  TelegramIcon,
  TwitterIcon,
} from "../icons";
import BackToTop from "./BackToTop";
import BlendBackground from "./BlendBackground";
// import Legal from "./Legal";
// import { Button } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { EXTERNAL_LINKS } from "~/constants/url";

const menuItems = [
  {
    text: "About",
    items: [
      { text: "Faq", link: "/#faq" },
      { text: "Blog", link: EXTERNAL_LINKS.Blog, isExternal: true },
      { text: "About Us", link: "/about-us" },
      { text: "Audit", link: "#audit-section", isExternal: false },
    ],
  },
  {
    text: "Community",
    items: [
      {
        icon: GithubIcon,
        text: "Github",
        link: EXTERNAL_LINKS.Github,
        isExternal: true,
      },
      {
        icon: TelegramIcon,
        text: "Telegram",
        link: EXTERNAL_LINKS.Telegram,
        isExternal: true,
      },
      {
        icon: TwitterIcon,
        text: "Twitter",
        link: EXTERNAL_LINKS.Twitter,
        isExternal: true,
      },
      {
        icon: DiscordIcon,
        text: "Discord",
        link: EXTERNAL_LINKS.Discord,
        isExternal: true,
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative blend-bg text-dark-green px-4 sm:px-12 lg:px-24 pt-12 space-y-16 overflow-hidden">
      <BlendBackground />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-6 mt-8 sm:mt-14">
        <div className="lg:col-span-5">
          <FlatLogoIcon className="w-auto h-16 mb-6 mx-auto sm:mx-0" />
          <h2 className="w-full 2xl:w-2/3  font-light text-2xl text-center sm:text-left">
            Minimize Risk, Maximize Yield
          </h2>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 z-20">
          {menuItems.map((menuItem, index) => (
            <div
              key={menuItem.text}
              className={`flex ${
                index === 0
                  ? "justify-center sm:justify-start xl:justify-end"
                  : "justify-center xl:justify-end"
              }`}
            >
              <div className="flex flex-col items-center sm:items-start gap-6">
                <p className="font-light text-xl">{menuItem.text}</p>
                <ul className="flex flex-col items-center sm:items-start gap-6">
                  {menuItem.items?.map((item) => (
                    <li key={item.text}>
                      <Link
                        to={item.link}
                        target={item.isExternal ? "_blank" : undefined}
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-light text-xl hover-underline-animation after:bg-dark-green"
                      >
                        {"icon" in item && <item.icon className="w-5 h-5" />}
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="flex justify-center sm:justify-end">
            <div className="space-y-6">
              <div>
                <Link
                  to={EXTERNAL_LINKS.Dashboard}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block font-light text-xl hover-underline-animation after:bg-secondary"
                >
                  Dashboard
                </Link>
              </div>
              <div>
                <Link
                  to={EXTERNAL_LINKS.Docs}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block font-light text-xl hover-underline-animation after:bg-secondary"
                >
                  Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BrandTextIcon className="w-full h-auto" />

      <p className="absolute bottom-0 lg:bottom-4 font-light text-sm">{`©${new Date().getFullYear()} Harmonix Finance`}</p>
      <div className={"absolute bottom-0 lg:bottom-4 right-0 lg:right-16 z-50"}>
        <BackToTop />
      </div>
      <FooterLineIcon className="absolute w-auto h-full bottom-0 right-0 z-10" />

      {/* <Legal />

      <Button
        size="sm"
        className="fixed bottom-8 left-4 sm:left-12 lg:left-24 rounded-sm shadow-sm bg-opacity-60 text-sm"
      >
        Not available in the U.S.
      </Button> */}
    </footer>
  );
};

export default Footer;
