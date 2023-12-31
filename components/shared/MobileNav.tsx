"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { headerLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ThemeToggler } from "../ThemeToggler";
import { SignedIn, UserButton } from "@clerk/nextjs";

function MobileNav() {
  const pathname = usePathname();
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
        <SheetTrigger className="flex flex-col gap-1.5 items-end">
          <div className="dark:bg-white bg-indigo-600 w-[27px] h-[3px] rounded-xl" />
          <div className="dark:bg-white bg-indigo-600 w-[30px] h-[3px] rounded-xl" />
          <span className="dark:bg-white bg-indigo-600 w-[22px] h-[3px] rounded-xl" />
        </SheetTrigger>
        <SheetContent className="border-l bg-gradient-to-tr from-indigo-900  to-slate-800 flex flex-col w-full gap-10 items-center">
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
                  <Link
                    href={link.route}
                    className={`w-full text-indigo-600 bg-indigo-50 py-3 text-center rounded-md text-lg ${
                      isActive && "bg-indigo-700 text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <SheetFooter>
            <SheetClose>
              <Button className="bg-slate-100 text-slate-800 hover:bg-slate-300">
                Close Menu
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
