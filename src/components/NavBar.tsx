"use client";

import { appRouteConfig } from "@/config/app-route-config";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Image from 'next/image';

export const NavBar = () => {
  const pathName = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header className="flex items-center justify-center h-20 py-6">
      <div className="flex flex-1 gap-6 md:gap-10">
        <Link href="/" className="items-center flex-1 hidden space-x-2 md:flex">
          <span className="hidden text-xl font-extrabold text-gray-800 sm:inline-block">
            V
          </span>
        </Link>
        {
          <nav className="hidden gap-6 md:flex">
            {appRouteConfig.map((route, index) => (
              <Link
                className={`flex text-lg font-medium text-center ${ route.href === pathName ? 'text-gray-800' : 'text-gray-500' } transition-colors hover:text-gray-800`}
                href={route.href}
                key={index}
              >
                {route.title}
              </Link>
            ))}
          </nav>
        }
        <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <span className="inline-block text-xl font-extrabold text-gray-800">
            { showMobileMenu ? 'X' :  'V' }
          </span>
      </button>
      </div>
    </header>
  );
};
