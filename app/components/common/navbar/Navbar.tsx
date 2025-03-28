import {
  DiscordIcon,
  GithubIcon,
  LogoWithTextIcon,
  TelegramIcon,
  TwitterIcon,
} from "../../icons";
import NavbarDropdown from "./NavbarDropdown";
import {
  Accordion,
  AccordionItem,
  Button,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link as NextUiLink,
  Navbar as NextUiNavbar,
} from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { EXTERNAL_LINKS } from "~/constants/url";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={"px-0 lg:px-8 xl:px-8 2xl:px-60"}>
      <NextUiNavbar
        isMenuOpen={isMenuOpen}
        shouldHideOnScroll
        classNames={{
          base: "w-full sm:px-12 sm:py-0 lg:px-6 lg:py-1 bg-white lg:rounded-3xl",
          wrapper: "px-4 sm:px-0",
        }}
        maxWidth="full"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarBrand>
            <Link to="/" onClick={handleCloseMenu}>
              <LogoWithTextIcon className="w-auto h-10 sm:h-12" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden lg:flex gap-6 p-2 bg-white rounded-full"
          justify="center"
        >
          <NavbarDropdown
            title="About"
            items={[
              { text: "FAQ", link: "/#faq" },
              { text: "Blog", link: EXTERNAL_LINKS.Blog, isExternal: true },
              { text: "About Us", link: "/about-us" },
              {
                text: "Audit",
                link: EXTERNAL_LINKS.Audit,
                isExternal: true,
              },
            ]}
          />
          <NavbarDropdown
            title="Community"
            items={[
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
            ]}
          />
          <NavbarItem className="h-full">
            <NextUiLink
              color="foreground"
              href={EXTERNAL_LINKS.Dashboard}
              target="_blank"
              rel="noreferrer"
              className="h-full px-4 py-2 rounded-full hover:bg-light-yellow hover:opacity-100"
            >
              Dashboard
            </NextUiLink>
          </NavbarItem>
          <NavbarItem className="h-full">
            <NextUiLink
              color="foreground"
              href={EXTERNAL_LINKS.Docs}
              target="_blank"
              rel="noreferrer"
              className="h-full px-4 py-2 rounded-full hover:bg-light-yellow hover:opacity-100"
            >
              Docs
            </NextUiLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              to={EXTERNAL_LINKS.App}
              target="_blank"
              rel="noreferrer"
              size="lg"
              className="bg-transparent border border-primary rounded-full text-dark-green hover:bg-light-yellow hover:border-secondary"
            >
              Launch App
            </Button>
          </NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />
        </NavbarContent>

        <NavbarMenu className="bg-white pt-12">
          <NavbarMenuItem>
            <Accordion
              showDivider={false}
              itemClasses={{
                base: "py-3",
                trigger: "p-0",
                titleWrapper: "flex-none",
                indicator:
                  "-rotate-90 text-dark-green data-[open=true]:rotate-90",
              }}
            >
              <AccordionItem key="about" aria-label="About" title="About">
                <div className="flex flex-col gap-4">
                  <Link color="foreground" to="/#faq" className="px-4">
                    FAQ
                  </Link>
                  <Link
                    color="foreground"
                    to={EXTERNAL_LINKS.Blog}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4"
                  >
                    Blog
                  </Link>
                  <Link
                    color="foreground"
                    to="/about-us"
                    className="px-4"
                    onClick={handleCloseMenu}
                  >
                    About Us
                  </Link>
                  <Link
                    color="foreground"
                    to={EXTERNAL_LINKS.Audit}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4"
                  >
                    Audit
                  </Link>
                </div>
              </AccordionItem>
              <AccordionItem
                key="community"
                aria-label="Community"
                title="Community"
              >
                <div className="flex flex-col gap-4">
                  <NextUiLink
                    color="foreground"
                    href={EXTERNAL_LINKS.Github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4"
                  >
                    <GithubIcon className="w-5 h-5" />
                    Github
                  </NextUiLink>
                  <NextUiLink
                    color="foreground"
                    href={EXTERNAL_LINKS.Telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4"
                  >
                    <TelegramIcon className="w-5 h-5" />
                    Telegram
                  </NextUiLink>
                  <NextUiLink
                    color="foreground"
                    href={EXTERNAL_LINKS.Twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4"
                  >
                    <TwitterIcon className="w-5 h-5" />
                    Twitter
                  </NextUiLink>
                  <NextUiLink
                    color="foreground"
                    href={EXTERNAL_LINKS.Discord}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4"
                  >
                    <DiscordIcon className="w-5 h-5" />
                    Discord
                  </NextUiLink>
                </div>
              </AccordionItem>
            </Accordion>
          </NavbarMenuItem>
          <NavbarMenuItem className="mt-1 mb-4">
            <Link
              color="foreground"
              to={EXTERNAL_LINKS.Dashboard}
              target="_blank"
              rel="noreferrer"
              className="text-lg px-2"
            >
              Dashboard
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="foreground"
              to={EXTERNAL_LINKS.Docs}
              target="_blank"
              rel="noreferrer"
              className="text-lg px-2"
            >
              Docs
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </NextUiNavbar>
    </div>
  );
};

export default Navbar;
