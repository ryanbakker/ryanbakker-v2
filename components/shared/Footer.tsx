import React from "react";
import Logo from "./Logo";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <footer className="md:h-24 flex items-center border-t border-gray-200 dark:border-gray-700 pb-8 md:pb-0">
      <div className="wrapper flex flex-col gap-5 md:flex-row items-center justify-between">
        <Logo />

        <FooterNav />
      </div>
    </footer>
  );
}

export default Footer;
