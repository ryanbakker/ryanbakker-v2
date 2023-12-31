import { SignedIn, UserButton } from "@clerk/nextjs";
import Logo from "./Logo";
import NavItems from "./NavItems";
import { Button } from "../ui/button";
import Link from "next/link";
import { ThemeToggler } from "../ThemeToggler";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="bg-indigo-950 md:bg-transparent">
      <div className="wrapper flex flex-row justify-between items-center z-50">
        <Logo />

        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
