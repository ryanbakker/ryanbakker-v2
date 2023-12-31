import Logo from "./Logo";
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
