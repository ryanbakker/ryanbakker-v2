import { headerLinks } from "@/constants";
import Link from "next/link";

function FooterNav() {
  return (
    <ul className="md:flex-between flex flex-row items-center space-x-2">
      {headerLinks.map((link) => {
        return (
          <li
            key={link.route}
            className="flex items-center justify-center whitespace-nowrap py-1.5 px-5 rounded-md text-black dark:text-white"
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default FooterNav;
