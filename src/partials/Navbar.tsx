import React from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  Sheet,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { Logo } from "@/components/logo";

export const Navbar = () => {
  const activeLink = "";

  const navLinks = [
    { text: "Partners", href: "#partners" },
    { text: "Features", href: "#features" },
    { text: "Compare", href: "#competitors" },
    { text: "Docs", href: "#" },
  ];

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-100 shadow-sm max-w-full"
      aria-label="Main Navigation"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="text-2xl font-bold text-gray-900 hover:text-[#F26B3A] 
              transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26B3A]/50"
            >
              <Logo />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationMenu className="flex-1">
              <NavigationMenuList className="flex gap-2">
                {navLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      aria-current={
                        activeLink === link.href ? "page" : undefined
                      }
                      className={`
                        ${navigationMenuTriggerStyle()}
                        font-semibold 
                        ${
                          activeLink === link.href
                            ? "text-[#F26B3A] after:w-full"
                            : "text-gray-700 hover:text-[#F26B3A]"
                        }
                        transition-colors relative
                        after:content-[''] after:absolute after:bottom-0
                        after:left-0 after:w-0 after:h-[2px]
                        after:bg-[#F26B3A] hover:after:w-full
                        after:transition-all after:duration-300
                        bg-transparent
                        rounded-lg px-4 py-2
                      `}
                    >
                      {link.text}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop Buttons */}
            <div className="flex items-center gap-3 ml-4">
              <Button
                className="px-5 rounded-lg
                  transition-transform hover:scale-105 duration-200
                  focus:outline-none focus:ring-2 focus:ring-[#F26B3A]/50"
              >
                Log in
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Open mobile menu"
                  className="border-gray-200 hover:border-[#F26B3A]
                    focus:outline-none focus:ring-2 focus:ring-[#F26B3A]/50"
                >
                  <MenuIcon className="h-5 w-5 text-gray-600" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85vw] max-w-md animate-slide-in-right"
              >
                <SheetHeader className="relative">
                  <SheetTitle className="text-left text-2xl font-bold">
                    Rooter
                  </SheetTitle>
                  <SheetClose
                    aria-label="Close mobile menu"
                    className="absolute top-0 right-0 focus:outline-none focus:ring-2 focus:ring-[#F26B3A]/50"
                  >
                    <XIcon className="h-6 w-6 text-gray-600 hover:text-[#F26B3A]" />
                  </SheetClose>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      aria-current={
                        activeLink === link.href ? "page" : undefined
                      }
                      className={`
                        text-gray-700 transition-colors
                        p-3 rounded-lg hover:bg-gray-50 font-medium
                        focus:outline-none focus:ring-2 focus:ring-[#F26B3A]/50
                        ${activeLink === link.href ? "text-[#F26B3A] bg-gray-50" : ""}
                      `}
                    >
                      {link.text}
                    </a>
                  ))}
                  <div className="flex flex-col gap-3 mt-6">
                    <Button
                      className="bg-[#F26B3A] hover:bg-[#E25B2A] transition-all
                        focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      Log in
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};
