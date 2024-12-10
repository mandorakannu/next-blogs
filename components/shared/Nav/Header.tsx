"use client";
import { useState } from "react";
import { SocialMedia } from "./SocialMedia";
import { usePathname } from "next/navigation";
import { NavigatorDrawer } from "@/components/shared/Nav/NavigatorDrawer";

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {pathname.includes("/studio") ? null : (
        <div className="flex flex-row justify-evenly items-center sticky top-0 z-50 bg-white py-4  border-b-4 border-b-primary-500 shadow-md">
          <SocialMedia iconSize={15} classProps="gap-2 max-sm:hidden" />
          <h1
            className="max-sm:text-4xl text-3xl uppercase cursor-default font-bold  tracking-widest"
            onClick={() => window.location.reload()}
          >
            Journal
          </h1>
          <div
            id="hamburger"
            className="flex flex-col justify-center items-center gap-1 group p-3 rounded-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-8 h-1 bg-primary-500 group-hover:bg-primary-400 dark:bg-white dark:group-hover:bg-gray-500 delay-75 transition-colors cursor-pointer"></div>
            <div className="w-8 h-1 bg-primary-500 group-hover:bg-primary-400 dark:bg-white dark:group-hover:bg-gray-500 delay-75 transition-colors cursor-pointer"></div>
            <div className="w-8 h-1 bg-primary-500 group-hover:bg-primary-400 dark:bg-white dark:group-hover:bg-gray-500 delay-75 transition-colors cursor-pointer"></div>
          </div>
          <NavigatorDrawer
            handleFxn={() => setIsOpen(!isOpen)}
            isOpen={isOpen}
          />
        </div>
      )}
    </>
  );
};
