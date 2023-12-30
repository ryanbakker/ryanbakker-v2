"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
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
              isActive && " border-b-2 border-indigo-500"
            } flex items-center justify-center whitespace-nowrap py-0.5 px-0  text-black dark:text-white`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavItems;
