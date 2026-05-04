// apps/fe/components/navbar/index.tsx
"use client";

// import { Menu } from "lucide-react";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import { Typography } from "../ui/typography";
import { Button } from "../ui/button";

import HarmonixText from "../icons/HarmonixText";
import HarmonixLogoWithoutBackground from "../icons/HarmonixLogoWithoutBackground";
import { HARMONIX_CONFIG_LINK } from "@/constants/common";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "../ui/drawer";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // const pathname = usePathname();

  // const navigation = [
  //   {
  //     name: "Home",
  //     href: "/",
  //     isDisabled: false,
  //   },
  // ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Chỉ áp dụng cho desktop (màn hình >= 768px)
      if (window.innerWidth >= 768) {
        setIsScrolled(scrollPosition > 50);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      // Reset trạng thái khi thay đổi kích thước màn hình
      if (window.innerWidth < 768) {
        setIsScrolled(false);
      } else {
        handleScroll();
      }
    };

    // Thêm event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Kiểm tra trạng thái ban đầu
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`
      sticky z-50 transition-all duration-300 ease-in-out
      ${isScrolled ? "lg:top-0" : "lg:top-8"}
    `}
    >
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:py-4 lg:px-6 rounded-none lg:rounded-full bg-background">
        <nav className="grid grid-cols-2 items-center">
          <Link href="/" className="flex items-center space-x-3 col-span-1">
            <HarmonixLogoWithoutBackground className="size-12 lg:size-8" />
            <HarmonixText className="hidden md:block w-28 h-6" />
          </Link>

          {/* Desktop Navigation */}
          {/* <div
            className={`hidden md:flex items-center justify-center md:gap-10 lg:gap-16 col-span-1`}
          >
            <div>
              {navigation.map((item) => {
                if (item.isDisabled) {
                  return (
                    <Typography
                      key={item.name}
                      variant="bodySmall"
                      textColor={"default"}
                      className={`text-muted-foreground`}
                    >
                      {item.name}
                    </Typography>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors`}
                  >
                    <Typography
                      variant="bodySmall"
                      textColor={"default"}
                      className={`hover:text-foreground dark:hover:text-accent ${pathname === item.href ? "text-foreground  dark:text-accent" : "text-muted-foreground"}`}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                );
              })}
            </div>
          </div> */}

          <div className="flex justify-end gap-2 col-span-1">
            <Link
              href={HARMONIX_CONFIG_LINK.launchApp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={"rounded-full text-base p-6 cursor-pointer"}>
                Launch App
              </Button>
            </Link>

            {/* Mobile Menu */}
            {/* <Drawer direction={"left"}>
              <DrawerTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-7 w-7" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]">
                <DrawerHeader>
                  <DrawerTitle>Menu</DrawerTitle>
                </DrawerHeader>
                <nav className="flex flex-col space-y-4 px-4">
                  {navigation.map((item) => {
                    if (item.isDisabled) {
                      return (
                        <Typography
                          key={item.name}
                          variant="bodyLarge"
                          textColor={"default"}
                          className={`text-muted-foreground`}
                        >
                          {item.name}
                        </Typography>
                      );
                    }
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`text-base font-medium transition-colors`}
                      >
                        <Typography
                          variant="bodyLarge"
                          textColor={"default"}
                          className={`hover:text-foreground dark:hover:text-accent ${pathname === item.href ? "text-foreground  dark:text-accent" : "text-muted-foreground"}`}
                        >
                          {item.name}
                        </Typography>
                      </Link>
                    );
                  })}
                </nav>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer> */}
          </div>
        </nav>
      </div>
    </header>
  );
}
