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
import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="flex flex-col justify-between gap-1.5 items-end">
          <div className="bg-white w-[27px] h-[3px] rounded-xl" />
          <div className="bg-white w-[30px] h-[3px] rounded-xl" />
          <span className="bg-white w-[22px] h-[3px] rounded-xl" />
        </SheetTrigger>
        <SheetContent className="border-l bg-gradient-to-tr from-indigo-900  to-slate-800 flex flex-col w-full gap-10 items-center">
          <SheetHeader>
            <SheetTitle className="uppercase text-3xl">Ryan Bakker</SheetTitle>
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
              <Button>Close Menu</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
