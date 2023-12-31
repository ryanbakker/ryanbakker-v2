import FooterNav from "./FooterNav";
import Link from "next/link";

function Footer() {
  return (
    <footer className="md:h-24 flex items-center border-t border-gray-200 dark:border-gray-700 pb-8 md:pb-0">
      <div className="wrapper flex flex-col gap-5 md:flex-row items-center justify-between">
        <div className="flex flex-col items-center gap-0.5">
          <Link
            href="/"
            className="text-2xl font-semibold uppercase text-indigo-950 dark:text-indigo-100"
          >
            Ryan Bakker
          </Link>
          <p className="text-xs text-slate-400 font-extralight">
            All Rights Reserved 2023
          </p>
        </div>

        <FooterNav />
      </div>
    </footer>
  );
}

export default Footer;
