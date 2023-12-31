"use client";

import Link from "next/link";
import { headerLinks } from "@/constants";
import { usePathname } from "next/navigation";

function NavItems() {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex flex-row items-center space-x-10 mr-8">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive && ""
            } flex items-center justify-center whitespace-nowrap py-0.5 px-0  text-black dark:text-white relative hover:text-indigo-600 hover:brightness-150 transition-all`}
          >
            <Link href={link.route}>{link.label}</Link>
            {isActive && (
              <div className="absolute bottom-0 h-[1.5px] rounded-lg w-full bg-gradient-to-r from-indigo-400 to-indigo-700" />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default NavItems;
