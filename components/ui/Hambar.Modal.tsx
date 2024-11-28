"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { HeaderModal } from "./Header.Modal";
import { Drawer } from "@shared_ui/Nav/Drawer";

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      {pathname.includes("/studio") ? null : (
        <div className="flex sm:justify-evenly max-sm:justify-center items-center gap-8 sm:border-y-2 sm:border-gray-500 max-sm:border-b-2 max-sm:border-black py-3 max-sm:mx-10 sm:mx-20 mb-10">
          <div
            className="flex flex-col justify-center items-center gap-1 group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-8 h-1 bg-black group-hover:bg-primary-400 delay-75 transition-colors cursor-pointer"></div>
            <div className="w-8 h-1 bg-black group-hover:bg-primary-400 delay-75 transition-colors cursor-pointer"></div>
            <div className="w-8 h-1 bg-black group-hover:bg-primary-400 delay-75 transition-colors cursor-pointer"></div>
          </div>
          <ul className="flex flex-row justify-evenly items-center gap-8 uppercase font-medium max-sm:hidden">
            <Link
              size="lg"
              href="/"
              key="Home"
              className="hover:underline underline-offset-2"
            >
              Home
            </Link>
            <Link
              size="lg"
              href="/about"
              key="About"
              className="hover:underline underline-offset-2"
            >
              About
            </Link>
            <Link
              size="lg"
              href="/features"
              key="Features"
              className="hover:underline underline-offset-2"
            >
              Features
            </Link>
            <Link
              size="lg"
              href="/categories"
              key="Categories"
              className="hover:underline underline-offset-2"
            >
              Categories
            </Link>
            <Link
              size="lg"
              href="/contact"
              key="Contact"
              className="hover:underline underline-offset-2"
            >
              Contact
            </Link>
          </ul>
          <CiSearch className="text-3xl cursor-pointer" />
          <div className="sm:hidden">
            <HeaderModal />
          </div>
          <Drawer isOpen={isOpen} handleFxn={() => setIsOpen(!isOpen)} />
        </div>
      )}
    </>
  );
};
