import { headerLinks } from "@/constants";
import Link from "next/link";

function FooterNav() {
  return (
    <ul className="md:flex-between flex flex-col md:flex-row items-center gap-5 md:gap-2">
      {headerLinks.map((link) => {
        return (
          <li
            key={link.route}
            className="flex items-center justify-center whitespace-nowrap py-1.5 px-20 md:px-5 rounded-md text-black/70 dark:text-white/70 w-full md:w-fit xs:text-lg hover:text-indigo-500 hover:brightness-125 transition-all"
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default FooterNav;
