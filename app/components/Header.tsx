import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import { HiDownload } from "react-icons/hi";

import { LuSunMoon, LuMoonStar } from "react-icons/lu";
import { HiComputerDesktop } from "react-icons/hi2";

import { cn } from "@/utils";
import { ClassName, HeaderLink } from "@/types";
import { Container } from "@/components/Container";
import { Logo, type LogoProps } from "@/components/Logo";
import * as DropdownMenu from "@/components/DropdownMenu";
import { Button } from "./Button";

// const defaultLinks: Array<HeaderLink> = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "#about" },
//   { label: "Features", href: "#features" },
//   { label: "Reviews", href: "#reviews" },
//   { label: "FAQ", href: "#faq" },
//   { label: "Contact", href: "#contact" },
// ];

type HeaderProps = {
  /** `array of links to be rendered` */
  links?: HeaderLink[];

  /** `customize header without modifying the source code` */
  classes?: {
    /** `classes for <header>` */
    root?: string;
    /** `classes for <nav>` */
    nav?: string;

    /** `lasses for <a> inside <nav>` */
    navlink?: ClassName<{ active: boolean }>;

    /** `classes when <a> is active link` */
    activelink?: string;
  };

  /** `customize header logo` */
  logoProps?: LogoProps;

  /** `customize navbar toggle ( for md and down screens) button` */
  toggleBtnProps?: Omit<NavBarTogglerProps, "opened" | "onClick">;

  /** customize right side action buttons */
  ActionButtons?: () => React.ReactNode;
};

type NavBarTogglerProps = {
  opened: boolean;

  /** `handle <button> click event` */
  onClick: () => void;

  /** `customize navbar button` */
  classes?: {
    /** `classes for <button>` */
    root?: ClassName<{ opened: boolean }>;

    // /** `classes for icon inside <button>` */
    // icon?: ClassName<{ opened: boolean }>;
  };

  /** `customize icons` */
  Icon?: (args: { opened: boolean }) => JSX.Element;
};

function DefaultIcon({ opened }: { opened: boolean }) {
  return (
    <>
      <div
        aria-hidden="true"
        className={cn(
          "m-auto h-0.5 w-5 rounded bg-muted-foreground group-hover:bg-foreground transition duration-300",
          opened && "translate-y-1.5 rotate-45"
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "m-auto mt-2 h-0.5 w-5 rounded bg-muted-foreground group-hover:bg-foreground transition duration-300",
          opened && "-translate-y-1 -rotate-45"
        )}
      />
    </>
  );
}

function NavBarToggler({ opened, onClick, classes = {}, Icon = DefaultIcon }: NavBarTogglerProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group py-2 bg-transparent",
        typeof classes.root === "function" ? classes?.root?.({ opened }) : classes.root
      )}>
      <Icon opened={opened} />
    </button>
  );
}

const defaultLinks: Array<HeaderLink> = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#solutions", label: "Solutions" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact-us", label: "Contact us" },
];

const DefaultActionButtons = () => {
  return (
    <>
      <Link
        to="/"
        className="text-muted-foreground hover:text-primary inline-flex items-center justify-center font-semibold text-sm w-full max-lg:mb-3 lg:me-4">
        <HiDownload className="me-2" />
        <span>Proposal</span>
      </Link>
      <Button className="w-full" asChild>
        <Link to="#contact-us">Contact Us</Link>
      </Button>
    </>
  );
};

function ThemeSwatch() {
  const setTheme = (theme: "light" | "dark" | "system") => {
    document.documentElement.setAttribute("data-mode", theme);
  };

  return (
    <DropdownMenu.DropdownMenu>
      <DropdownMenu.DropdownMenuTrigger className="bg-transparent outline-none !mx-4">
        <LuSunMoon className="w-6 h-6" />
      </DropdownMenu.DropdownMenuTrigger>
      <DropdownMenu.DropdownMenuContent className="z-[100] bg-background rounded-lg" align="end">
        <DropdownMenu.DropdownMenuItem onClick={() => setTheme("light")}>
          <LuSunMoon className="w-5 h-5 me-3" />
          Light
        </DropdownMenu.DropdownMenuItem>

        <DropdownMenu.DropdownMenuItem onClick={() => setTheme("dark")}>
          <LuMoonStar className="w-5 h-5 me-3" />
          Dark
        </DropdownMenu.DropdownMenuItem>

        <DropdownMenu.DropdownMenuItem onClick={() => setTheme("system")}>
          <HiComputerDesktop className="w-5 h-5 me-3" />
          System
        </DropdownMenu.DropdownMenuItem>
      </DropdownMenu.DropdownMenuContent>
    </DropdownMenu.DropdownMenu>
  );
}

export function Header({
  classes = {},
  links = defaultLinks,
  logoProps,
  toggleBtnProps,
  ActionButtons = DefaultActionButtons,
}: HeaderProps) {
  const [opened, setOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const SCROLL_TOP_DISTANCE_THRESHOLD = 50;
      setScrolled(window.scrollY >= SCROLL_TOP_DISTANCE_THRESHOLD);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrolled]);

  return (
    <header
      className={cn(
        "z-50 fixed top-0 py-5 inset-x-0 overflow-hidden backdrop-blur-md transition-all duration-300",
        opened &&
          "bg-background/50 border-b shadow-md lg:border-none lg:shadow-none lg:bg-transparent",
        scrolled && "!bg-background/80 !border-b !shadow-md"
      )}>
      <Container classes={{ root: "flex flex-col lg:flex-row justify-between h-full rounded-lg" }}>
        {/* logo for bigger screens */}
        <Link to="/" aria-label="logo" className="flex items-center space-x-2 max-lg:hidden">
          <Logo {...logoProps} />
        </Link>

        <div className="inline-flex items-center w-full lg:w-auto lg:order-2">
          {/* logo for smaller screens */}
          <Link to="/" aria-label="logo" className="flex items-center space-x-2 lg:hidden">
            <Logo {...logoProps} />
          </Link>

          <div className="inline-flex items-center space-x-4 ml-auto">
            {/* </div> */}

            {/* show action buttons for larger screens on right side of nav*/}
            <div className="hidden lg:contents">
              <ActionButtons />
            </div>

            {/* theme swatcher */}
            {/* <button className="bg-transparent px-2">
            </button> */}

            <ThemeSwatch />

            {/* navbar toggle button */}
            <NavBarToggler
              {...toggleBtnProps}
              opened={opened}
              classes={{ root: "lg:hidden" }}
              onClick={() => setOpened((v) => !v)}
            />
          </div>
        </div>

        <div className={cn("h-0 overflow-hidden lg:contents", opened && "h-full pt-8")}>
          <nav className="rounded-xl lg:flex max-lg:shadow-md max-lg:border-2 max-lg:bg-background">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "py-2 px-4 font-semibold text-muted-foreground tracking-wide hover:text-primary block transition",
                  typeof classes.navlink === "function"
                    ? classes.navlink({ active: false })
                    : classes.navlink
                )}>
                {typeof link.label === "function" ? link.label() : link.label}
              </Link>
            ))}

            {/* show action buttons for smaller screens inside the nav*/}
            <div className="px-4 py-3 children:my-2 lg:hidden">
              <ActionButtons />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
