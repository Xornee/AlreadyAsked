import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

function GlobalSearch() {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          width={20}
          height={20}
          alt="search"
        />
        <Input
          type="text"
          placeholder="search globally"
          value=""
          className="background-light800_darkgradient paragraph-regular no-focus placeholder border-none shadow-none outline-none"
          readOnly
        />
      </div>
    </div>
  );
}

export default GlobalSearch;
