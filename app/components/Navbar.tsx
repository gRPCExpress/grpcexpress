"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center w-full py-4 mb-2">
      <Link href="/" className="px-2 py-2 mx-4">
        <Image
          src="/grpcExpress_Logo.png"
          alt="gRPC Express"
          width={128}
          height={32}
        />
      </Link>
      <Link
        href="/quickstart"
        className="px-4 py-2 hover:bg-gray-100 rounded-lg mx-2 transition-colors text-lg"
      >
        Quickstart
      </Link>
      <Link
        href="/guides"
        className="px-4 py-2 hover:bg-gray-100 rounded-lg mx-2 transition-colors text-lg"
      >
        Documentations
      </Link>
      <Link
        href="https://github.com/oslabs-beta/gRPCExpress"
        className="px-4 py-2 hover:bg-gray-100 rounded-lg mx-2 transition-colors text-lg"
      >
        Github
      </Link>
    </nav>
  );
};

export default Navbar;
