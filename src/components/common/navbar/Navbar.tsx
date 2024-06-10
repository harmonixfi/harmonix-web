'use client';

import { useState } from 'react';

import {
  Accordion,
  AccordionItem,
  Button,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUiNavbar,
} from '@nextui-org/react';

import { GithubIcon, LogoWithTextIcon, TelegramIcon, TwitterIcon } from '../../icons';
import NavbarDropdown from './NavbarDropdown';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUiNavbar
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
          <LogoWithTextIcon className="w-auto h-10 sm:h-12 " />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-6 p-2 bg-white rounded-full" justify="center">
        <NavbarDropdown
          title="About"
          items={[
            { text: 'FAQ', link: '#' },
            { text: 'Blog', link: 'https://mirror.xyz/0xBc76Ef781235ed6d9e58e566dD07fdB32b6bEF04' },
            {
              text: 'Audit',
              link: 'https://github.com/harmonixfi/core-smart-contract/tree/main/audits',
            },
          ]}
        />
        <NavbarDropdown
          title="Community"
          items={[
            { icon: GithubIcon, text: 'Github', link: 'https://github.com/harmonixfi' },
            { icon: TelegramIcon, text: 'Telegram', link: 'https://t.me/harmonix_chat' },
            { icon: TwitterIcon, text: 'Twitter', link: 'https://twitter.com/harmonixfi' },
          ]}
        />
        <NavbarItem className="h-full">
          <Link
            color="foreground"
            href="https://app.harmonix.fi/dashboards"
            isExternal
            className="h-full px-4 py-2 rounded-full hover:bg-secondary hover:opacity-100"
          >
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem className="h-full">
          <Link
            color="foreground"
            href="https://harmonix-finance.gitbook.io/harmonix-docs"
            isExternal
            className="h-full px-4 py-2 rounded-full hover:bg-secondary hover:opacity-100"
          >
            Docs
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="https://app.harmonix.fi"
            isExternal
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
                  href="https://mirror.xyz/0xBc76Ef781235ed6d9e58e566dD07fdB32b6bEF04"
                  isExternal
                  className="px-4"
                >
                  Blog
                </Link>
                <Link
                  color="foreground"
                  href="https://github.com/harmonixfi/core-smart-contract/tree/main/audits"
                  isExternal
                  className="px-4"
                >
                  Audit
                </Link>
              </div>
            </AccordionItem>
            <AccordionItem key="community" aria-label="Community" title="Community">
              <div className="flex flex-col gap-4">
                <Link
                  color="foreground"
                  href="https://github.com/harmonixfi"
                  isExternal
                  className="flex items-center gap-2 px-4"
                >
                  <GithubIcon className="w-5 h-5" />
                  Github
                </Link>
                <Link
                  color="foreground"
                  href="https://t.me/harmonix_chat"
                  isExternal
                  className="flex items-center gap-2 px-4"
                >
                  <TelegramIcon className="w-5 h-5" />
                  Telegram
                </Link>
                <Link
                  color="foreground"
                  href="https://twitter.com/harmonixfi"
                  isExternal
                  className="flex items-center gap-2 px-4"
                >
                  <TwitterIcon className="w-5 h-5" />
                  Twitter
                </Link>
              </div>
            </AccordionItem>
          </Accordion>
        </NavbarMenuItem>
        <NavbarMenuItem className="mt-1 mb-4">
          <Link
            color="foreground"
            href="https://app.harmonix.fi/dashboards"
            className="text-lg px-2"
          >
            Dashboard
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            href="https://harmonix-finance.gitbook.io/harmonix-docs"
            isExternal
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
