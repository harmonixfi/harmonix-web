'use client';

import { useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/16/solid';
import {
  Accordion,
  AccordionItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUiNavbar,
} from '@nextui-org/react';

import { GithubIcon, LogoIcon, LogoWithTextIcon, TelegramIcon, TwitterIcon } from '../icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUiNavbar
      shouldHideOnScroll
      classNames={{
        base: 'w-full sm:w-5/6 lg:w-4/5 mx-auto bg-transparent',
        wrapper: 'px-4 sm:px-0',
      }}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <LogoIcon className="w-auto h-12 xl:hidden" />
          <LogoWithTextIcon className="w-auto h-12 hidden xl:block" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-12 p-2 bg-white rounded-full" justify="center">
        <Dropdown className="h-full" classNames={{ content: 'min-w-32' }}>
          <NavbarItem className="h-full">
            <DropdownTrigger>
              <Button
                disableRipple
                className="h-full px-4 py-2 text-base border-none rounded-full !opacity-100 hover:bg-secondary"
                variant="bordered"
                endContent={<ChevronDownIcon className="w-5 h-5" />}
              >
                About
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="about"
            color="secondary"
            itemClasses={{
              base: 'text-center !text-black',
            }}
          >
            <DropdownItem key="faq">FAQ</DropdownItem>
            <DropdownItem key="blog">
              <Link
                href="https://mirror.xyz/0xa1e8a739166876845B7dEdc177989024bAB0D810"
                target="_blank"
              >
                Blog
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="h-full" classNames={{ content: 'min-w-36' }}>
          <NavbarItem className="h-full">
            <DropdownTrigger>
              <Button
                disableRipple
                className="h-full px-4 py-2 text-base text-black border-none rounded-full !opacity-100 hover:bg-secondary"
                variant="bordered"
                endContent={<ChevronDownIcon className="w-5 h-5" />}
              >
                Community
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Community"
            color="secondary"
            itemClasses={{
              title: 'flex items-center gap-3 !text-black',
            }}
          >
            <DropdownItem key="github" href="https://github.com/rock-onyx" target="_blank">
              <GithubIcon className="w-6 h-6" />
              Github
            </DropdownItem>
            <DropdownItem key="telegram" href="http://t.me/rockonyx001" target="_blank">
              <TelegramIcon className="w-6 h-6" />
              Telegram
            </DropdownItem>
            <DropdownItem key="twitter" href="https://twitter.com/harmonixfi" target="_blank">
              <TwitterIcon className="w-6 h-6" />
              Twitter
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem className="h-full">
          <Link
            color="foreground"
            href="https://app.harmonix.fi/dashboard"
            className="h-full px-4 py-2 rounded-full hover:bg-secondary hover:opacity-100"
          >
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem className="h-full">
          <Link
            color="foreground"
            href="#"
            className="h-full px-4 py-2 rounded-full hover:bg-secondary hover:opacity-100"
          >
            Treasury
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="https://app.harmonix.fi"
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

      <NavbarMenu className="bg-transparent pt-12 space-y-2">
        <NavbarMenuItem>
          <Accordion
            showDivider={false}
            itemClasses={{
              base: 'py-2',
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
                  href="https://mirror.xyz/0xa1e8a739166876845B7dEdc177989024bAB0D810"
                  target="_blank"
                  className="px-4"
                >
                  Blog
                </Link>
              </div>
            </AccordionItem>
            <AccordionItem key="community" aria-label="Community" title="Community">
              <div className="flex flex-col gap-4">
                <Link
                  color="foreground"
                  href="https://github.com/rock-onyx"
                  target="_blank"
                  className="flex items-center gap-2 px-4"
                >
                  <GithubIcon className="w-5 h-5" />
                  Github
                </Link>
                <Link
                  color="foreground"
                  href="http://t.me/rockonyx001"
                  target="_blank"
                  className="flex items-center gap-2 px-4"
                >
                  <TelegramIcon className="w-5 h-5" />
                  Telegram
                </Link>
                <Link
                  color="foreground"
                  href="https://twitter.com/harmonixfi"
                  target="_blank"
                  className="flex items-center gap-2 px-4"
                >
                  <TwitterIcon className="w-5 h-5" />
                  Twitter
                </Link>
              </div>
            </AccordionItem>
          </Accordion>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#" className="text-lg px-2">
            Dashboard
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#" className="text-lg px-2">
            Treasury
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUiNavbar>
  );
};

export default Navbar;
