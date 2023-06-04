"use client";

import { appRouteConfig } from "@/config/app-route-config";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Image from "next/image";
import { MobileNav } from "./MobileNav";

export const NavBar = () => {
  const pathName = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathName]);

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
                className={`flex text-lg font-medium text-center ${
                  route.href === pathName ? "text-gray-800" : "text-gray-500"
                } transition-colors hover:text-gray-800`}
                href={route.href}
                key={index}
              >
                {route.title}
              </Link>
            ))}
          </nav>
        }
        <div className="flex items-center justify-between flex-1 space-x-2 md:hidden">
          <span className="inline-block text-xl font-extrabold text-gray-800">
            V
          </span>
          <button
            className="flex items-center space-x-2 text-gray-800 md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={25}
              width={25}
              viewBox="0 0 24 24"
              id="menu"
            >
              <g data-name="Layer 2">
                <g data-name="menu">
                  <rect
                    width="18"
                    height="2"
                    x="3"
                    y="11"
                    rx=".95"
                    ry=".95"
                  ></rect>
                  <rect
                    width="18"
                    height="2"
                    x="3"
                    y="16"
                    rx=".95"
                    ry=".95"
                  ></rect>
                  <rect
                    width="18"
                    height="2"
                    x="3"
                    y="6"
                    rx=".95"
                    ry=".95"
                  ></rect>
                </g>
              </g>
            </svg>
          </button>
          {showMobileMenu ? <MobileNav /> : null}
        </div>
      </div>
    </header>
  );
};
