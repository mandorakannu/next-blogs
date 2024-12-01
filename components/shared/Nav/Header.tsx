"use client";
import { SocialMedia } from "./SocialMedia";
import { Oswald } from "next/font/google";
import { Drawer } from "@shared_ui/Nav/Drawer";
import { usePathname } from "next/navigation";
import { useState } from "react";

const font = Oswald({
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      {pathname.includes("/studio") ? null : (
        <div className="flex flex-row justify-evenly items-center my-6">
          <SocialMedia iconSize={15} classProps="gap-2 max-sm:hidden" />
          <h1
            className={`max-sm:text-4xl text-3xl uppercase cursor-default ${font.className} tracking-widest`}
          >
            Journal
          </h1>
          <div
            className="flex flex-col justify-center items-center gap-1 group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-8 h-1 bg-black group-hover:bg-primary-400 delay-75 transition-colors cursor-pointer"></div>
            <div className="w-8 h-1 bg-black group-hover:bg-primary-400 delay-75 transition-colors cursor-pointer"></div>
            <div className="w-8 h-1 bg-black group-hover:bg-primary-400 delay-75 transition-colors cursor-pointer"></div>
          </div>
          <Drawer handleFxn={() => setIsOpen(!isOpen)} isOpen={isOpen} />
          {/* <div className="max-sm:hidden">
                    <HeaderModal />
                </div> */}
        </div>
      )}
    </>
  );
};
