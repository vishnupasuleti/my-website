import * as React from "react";
import Link from "next/link";
import { appRouteConfig } from "@/config/app-route-config";

export function MobileNav() {
  return (
    <div
      className={
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto backgroun p-1 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
      }
    >
      <div className="relative z-20 grid gap-6 p-4 bg-white rounded-md shadow-md bg-popover">
        <nav className="grid grid-flow-row text-sm auto-rows-max">
          {appRouteConfig.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
              }
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
