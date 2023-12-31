"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { headerLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { ThemeToggler } from "../ThemeToggler";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { AtSign, Github, Linkedin } from "lucide-react";

function MobileNav() {
  const pathname = usePathname();

  function closeSheet() {}

  return (
    <nav className="md:hidden flex flex-row gap-5 items-center">
      <SignedIn>
        <div className="flex space-x-3 items-center">
          <Button
            size="sm"
            className="flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-md text-white bg-black dark:bg-white dark:text-black"
          >
            <Link href="/projects/create">Create Project</Link>
          </Button>
          <div className="border border-indigo-600 rounded-full p-1">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </SignedIn>
      <ThemeToggler />
      <Sheet>
        <SheetTrigger
          className="flex flex-col gap-1.5 items-end"
          aria-label="Menu"
        >
          <div className="dark:bg-white bg-indigo-600 w-[27px] h-[3px] rounded-xl" />
          <div className="dark:bg-white bg-indigo-600 w-[30px] h-[3px] rounded-xl" />
          <span className="dark:bg-white bg-indigo-600 w-[22px] h-[3px] rounded-xl" />
        </SheetTrigger>
        <SheetContent className="border-none flex flex-col w-full gap-10 items-center bg-gradient-to-tr from-indigo-800 via-slate-900 to-indigo-950">
          <SheetHeader>
            <SheetTitle className="uppercase text-3xl text-white">
              Ryan Bakker
            </SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col items-center gap-10 w-full">
            {headerLinks.map((link) => {
              const isActive = pathname === link.route;

              return (
                <li key={link.route} className="w-full flex">
                  <SheetClose asChild>
                    <Link
                      href={link.route}
                      className={`w-full text-indigo-600 bg-indigo-50 py-3 text-center rounded-md text-lg font-semibold ${
                        isActive && "bg-indigo-700 text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                </li>
              );
            })}
            <li className="flex flex-row gap-8 pt-4 text-white">
              <Link href="https://github.com/ryanbakker">
                <Github strokeWidth={2.5} size={30} aria-label="GitHub" />
              </Link>
              <Link href="mailto:ryanbakker@outlook.co.nz">
                <AtSign strokeWidth={2.5} size={30} aria-label="Email" />
              </Link>
              <Link href="https://www.linkedin.com/in/ryan-bakker/">
                <Linkedin strokeWidth={2.2} size={30} aria-label="LinkedIn" />
              </Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
