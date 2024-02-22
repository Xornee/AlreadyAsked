import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Theme from "./Theme";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <nav className="flex-between background-light900_dark300 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex item-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="AlreadyAsked"
        />
        <p className="h2-font font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Already<span className="text-primary-500">Asked</span>
        </p>
      </Link>
      Globalseach
      <div className="flex-between gap-5">
        <Theme />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
      </div>
      <MobileNav />
    </nav>
  );
}

export default Navbar;
