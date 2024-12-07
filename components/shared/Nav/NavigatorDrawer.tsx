"use client";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from "@ui/chakra_ui/drawer";
import { SocialMedia } from "./SocialMedia";
import Link from "next/link";
import { useWindowSize } from "@uidotdev/usehooks";
import { DrawerFooter } from "@chakra-ui/react";

export const NavigatorDrawer = ({
  isOpen,
  handleFxn,
}: {
  isOpen: boolean;
  handleFxn: () => any;
}) => {
  const { width } = useWindowSize();
  return (
    <DrawerRoot
      key={"end"}
      placement={width! > 768 ? "end" : "bottom"}
      open={isOpen}
      onOpenChange={handleFxn}
    >
      <DrawerBackdrop />
      <DrawerContent className="dark:bg-slate-800 dark:text-white">
        <DrawerHeader>
          <DrawerTitle className="text-xl">JOURNAL</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
            <div className="flex flex-col justify-center items-center gap-4">
              <Link
                href="/"
                className="text-xl uppercase text-black text-end dark:text-white dark:hover:text-gray-300 dark:hover:bg-zinc-800 hover:text-primary-700 hover:bg-gray-100 transition-all delay-75 border-l-2 border-l-transparent hover:border-primary-600 px-6 py-3 w-full outline-2 outline-primary-700 hover:before:content-['👻'] focus:before:content-['👻'] relative before:absolute before:left-0 before:px-3"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-xl uppercase text-black text-end dark:text-white dark:hover:text-gray-300 dark:hover:bg-zinc-800 hover:text-primary-700 hover:bg-gray-100 transition-all delay-75 border-l-2 border-l-transparent hover:border-primary-600 px-6 py-3 w-full outline-2 outline-primary-700 hover:before:content-['❤️'] focus:before:content-['❤️'] relative before:absolute before:left-0 before:px-3"
              >
                About
              </Link>
              <Link
                href="/blogs"
                className="text-xl uppercase text-black text-end dark:text-white dark:hover:text-gray-300 dark:hover:bg-zinc-800 hover:text-primary-700 hover:bg-gray-100 transition-all delay-75 border-l-2 border-l-transparent hover:border-primary-600 px-6 py-3 w-full outline-2 outline-primary-700 hover:before:content-['📑'] focus:before:content-['📑'] relative before:absolute before:left-0 before:px-3"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="text-xl uppercase text-black text-end dark:text-white dark:hover:text-gray-300 dark:hover:bg-zinc-800 hover:text-primary-700 hover:bg-gray-100 transition-all delay-75 border-l-2 border-l-transparent hover:border-primary-600 px-6 py-3 w-full outline-2 outline-primary-700 hover:before:content-['🔢'] focus:before:content-['🔢'] relative before:absolute before:left-0 before:px-3"
              >
                Contact
              </Link>
              <Link
                href="/features"
                className="text-xl uppercase text-black text-end dark:text-white dark:hover:text-gray-300 dark:hover:bg-zinc-800 hover:text-primary-700 hover:bg-gray-100 transition-all delay-75 border-l-2 border-l-transparent hover:border-primary-600 px-6 py-3 w-full outline-2 outline-primary-700 hover:before:content-['🥰'] focus:before:content-['🥰'] relative before:absolute before:left-0 before:px-3"
              >
                Features
              </Link>
              <Link
                href="/categories"
                className="text-xl uppercase text-black text-end dark:text-white dark:hover:text-gray-300 dark:hover:bg-zinc-800 hover:text-primary-700 hover:bg-gray-100 transition-all delay-75 border-l-2 border-l-transparent hover:border-primary-600 px-6 py-3 w-full outline-2 outline-primary-700 hover:before:content-['📅'] focus:before:content-['📅'] relative before:absolute before:left-0 before:px-3"
              >
                Categories
              </Link>
            </div>
        </DrawerBody>
        <DrawerFooter>
          <SocialMedia iconSize={20} classProps="pt-5 gap-6" />
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};
