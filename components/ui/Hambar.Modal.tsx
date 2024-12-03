"use client";
import { usePathname } from "next/navigation";
import { Link } from "@nextui-org/react";

export const Hamburger = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname.includes("/studio") ? null : (
        <div
          id="hambar"
          className="flex sm:justify-evenly max-sm:justify-center items-center gap-8 sm:border-y-2 sm:border-gray-700 max-sm:border-b-2 max-sm:border-gray-700 py-3 max-sm:mx-10 sm:mx-20 mb-10 sticky top-5 z-50 text-white max-sm:hidden bg-gray-700"
        >
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
              href="/blogs"
              key="Blogs"
              className="hover:underline underline-offset-2"
            >
              Blogs
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
        </div>
      )}
    </>
  );
};
