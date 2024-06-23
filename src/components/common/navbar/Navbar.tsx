'use client';

import { useState } from 'react';

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
} from '@nextui-org/react';
import Link from 'next/link';

import { EXTERNAL_LINKS } from '@/constants/url';

import { DiscordIcon, GithubIcon, LogoWithTextIcon, TelegramIcon, TwitterIcon } from '../../icons';
import NavbarDropdown from './NavbarDropdown';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <NextUiNavbar
      isMenuOpen={isMenuOpen}
      shouldHideOnScroll
      classNames={{
        base: 'w-full sm:px-12 lg:px-24 bg-white lg:bg-transparent',
        wrapper: 'px-4 sm:px-0',
      }}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" onClick={handleCloseMenu}>
            <LogoWithTextIcon className="w-auto h-10 sm:h-12 " />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-6 p-2 bg-white rounded-full" justify="center">
        <NavbarDropdown
          title="About"
          items={[
            { text: 'FAQ', link: '#' },
            { text: 'Blog', link: EXTERNAL_LINKS.Blog, isExternal: true },
            { text: 'Team', link: '/team' },
            {
              text: 'Audit',
              link: EXTERNAL_LINKS.Audit,
              isExternal: true,
            },
          ]}
        />
        <NavbarDropdown
          title="Community"
          items={[
            { icon: GithubIcon, text: 'Github', link: EXTERNAL_LINKS.Github, isExternal: true },
            {
              icon: TelegramIcon,
              text: 'Telegram',
              link: EXTERNAL_LINKS.Telegram,
              isExternal: true,
            },
            { icon: TwitterIcon, text: 'Twitter', link: EXTERNAL_LINKS.Twitter, isExternal: true },
            { icon: DiscordIcon, text: 'Discord', link: EXTERNAL_LINKS.Discord, isExternal: true },
          ]}
        />
        <NavbarItem className="h-full">
          <NextUiLink
            color="foreground"
            href={EXTERNAL_LINKS.Dashboard}
            target="_blank"
            className="h-full px-4 py-2 rounded-full hover:bg-secondary hover:opacity-100"
          >
            Dashboard
          </NextUiLink>
        </NavbarItem>
        <NavbarItem className="h-full">
          <NextUiLink
            color="foreground"
            href={EXTERNAL_LINKS.Docs}
            target="_blank"
            className="h-full px-4 py-2 rounded-full hover:bg-secondary hover:opacity-100"
          >
            Docs
          </NextUiLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href={EXTERNAL_LINKS.App}
            target="_blank"
            size="lg"
            className="bg-transparent border border-primary rounded-full text-black hover:bg-secondary hover:border-secondary"
          >
            Launch App
          </Button>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden"
        />
      </NavbarContent>

      <NavbarMenu className="bg-white pt-12">
        <NavbarMenuItem>
          <Accordion
            showDivider={false}
            itemClasses={{
              base: 'py-3',
              trigger: 'p-0',
              titleWrapper: 'flex-none',
              indicator: '-rotate-90 text-black data-[open=true]:rotate-90',
            }}
          >
            <AccordionItem key="about" aria-label="About" title="About">
              <div className="flex flex-col gap-4">
                <Link color="foreground" href="#" className="px-4">
                  FAQ
                </Link>
                <Link
                  color="foreground"
                  href={EXTERNAL_LINKS.Blog}
                  target="_blank"
                  className="px-4"
                >
                  Blog
                </Link>
                <Link color="foreground" href="/team" className="px-4" onClick={handleCloseMenu}>
                  Team
                </Link>
                <Link
                  color="foreground"
                  href={EXTERNAL_LINKS.Audit}
                  target="_blank"
                  className="px-4"
                >
                  Audit
                </Link>
              </div>
            </AccordionItem>
            <AccordionItem key="community" aria-label="Community" title="Community">
              <div className="flex flex-col gap-4">
                <NextUiLink
                  color="foreground"
                  href={EXTERNAL_LINKS.Github}
                  target="_blank"
                  className="flex items-center gap-2 px-4"
                >
                  <GithubIcon className="w-5 h-5" />
                  Github
                </NextUiLink>
                <NextUiLink
                  color="foreground"
                  href={EXTERNAL_LINKS.Telegram}
                  target="_blank"
                  className="flex items-center gap-2 px-4"
                >
                  <TelegramIcon className="w-5 h-5" />
                  Telegram
                </NextUiLink>
                <NextUiLink
                  color="foreground"
                  href={EXTERNAL_LINKS.Twitter}
                  target="_blank"
                  className="flex items-center gap-2 px-4"
                >
                  <TwitterIcon className="w-5 h-5" />
                  Twitter
                </NextUiLink>
                <NextUiLink
                  color="foreground"
                  href={EXTERNAL_LINKS.Discord}
                  target="_blank"
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
            href={EXTERNAL_LINKS.Dashboard}
            target="_blank"
            className="text-lg px-2"
          >
            Dashboard
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            href={EXTERNAL_LINKS.Docs}
            target="_blank"
            className="text-lg px-2"
          >
            Docs
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUiNavbar>
  );
};

export default Navbar;
