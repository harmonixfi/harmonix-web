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

import { LogoIcon } from '../icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Profile', 'Dashboard', 'Activity', 'Analytics', 'Help & Feedback', 'Log Out'];

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
          <LogoIcon className="w-12 h-12" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-12 p-2 bg-white rounded-full" justify="center">
        <Dropdown className="h-full" classNames={{ content: 'min-w-32' }}>
          <NavbarItem className="h-full">
            <DropdownTrigger>
              <Button
                disableRipple
                className="h-full px-4 py-2 bg-transparent text-base rounded-full"
                variant="light"
                endContent={<ChevronDownIcon className="w-5 h-5" />}
              >
                About
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="about"
            itemClasses={{
              base: 'text-center',
            }}
          >
            <DropdownItem key="faq">FAQ</DropdownItem>
            <DropdownItem key="blog">Blog</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="h-full" classNames={{ content: 'min-w-32' }}>
          <NavbarItem className="h-full">
            <DropdownTrigger>
              <Button
                disableRipple
                className="h-full px-4 py-2 bg-transparent text-base rounded-full"
                variant="light"
                endContent={<ChevronDownIcon className="w-5 h-5" />}
              >
                Community
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Community"
            itemClasses={{
              base: 'text-center',
            }}
          >
            <DropdownItem key="github">Github</DropdownItem>
            <DropdownItem key="telegram">Telegram</DropdownItem>
            <DropdownItem key="twitter">Twitter</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="#" className="px-4 py-2">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="px-4 py-2">
            Treasury
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="primary" href="#" variant="ghost" className="rounded-full border">
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
                <Link color="foreground" href="#" className="px-4">
                  Blog
                </Link>
              </div>
            </AccordionItem>
            <AccordionItem key="community" aria-label="Community" title="Community">
              <div className="flex flex-col gap-4">
                <Link color="foreground" href="#" className="px-4">
                  Github
                </Link>
                <Link color="foreground" href="#" className="px-4">
                  Telegram
                </Link>
                <Link color="foreground" href="#" className="px-4">
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
