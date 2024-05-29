'use client';

import { ComponentType, useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/16/solid';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from '@nextui-org/react';

type NavbarDropdownProps = {
  title: string;
  items: {
    icon?: ComponentType<{ className?: string }>;
    text: string;
    link: string;
  }[];
};

const DELAY = 100;

const NavbarDropdown = (props: NavbarDropdownProps) => {
  const { title, items } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<any>(null);

  return (
    <Dropdown isOpen={isOpen} className="h-full" classNames={{ content: 'min-w-36 translate-y-2' }}>
      <NavbarItem className="h-full">
        <DropdownTrigger>
          <Button
            disableRipple
            className="h-full px-4 py-2 text-base text-black border-none rounded-full !opacity-100 hover:bg-secondary"
            variant="bordered"
            endContent={<ChevronDownIcon className="w-5 h-5" />}
            onMouseEnter={() => {
              clearTimeout(timeoutId);
              setIsOpen(true);
            }}
            onMouseLeave={() => {
              const id = setTimeout(() => setIsOpen(false), DELAY);
              setTimeoutId(id);
            }}
          >
            {title}
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label={title}
        color="secondary"
        itemClasses={{
          title: 'flex items-center gap-3 !text-black',
        }}
        onMouseEnter={() => {
          clearTimeout(timeoutId);
          setIsOpen(true);
        }}
        onMouseLeave={() => {
          setIsOpen(false);
        }}
      >
        {items.map((x) => (
          <DropdownItem key={x.text} href={x.link} target="_blank">
            {x.icon && <x.icon className="w-6 h-6" />}
            {x.text}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropdown;
