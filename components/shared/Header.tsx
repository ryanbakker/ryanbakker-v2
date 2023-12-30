import { SignedIn, UserButton } from "@clerk/nextjs";
import Logo from "./Logo";
import NavItems from "./NavItems";
import { Button } from "../ui/button";
import Link from "next/link";
import { ThemeToggler } from "../ThemeToggler";

function Header() {
  return (
    <header className="flex flex-row justify-between wrapper items-center z-50">
      <Logo />

      <nav className="flex items-center">
        <NavItems />

        <SignedIn>
          <div className="flex space-x-3 items-center mr-3">
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
      </nav>
    </header>
  );
}

export default Header;
