"use client";
import { SocialMedia } from "./SocialMedia";
import { Oswald } from "next/font/google";
import { NavigatorDrawer } from "@/components/shared/Nav/NavigatorDrawer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

const font = Oswald({
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hamburgerColor, setHamburgerColor] = useState<"bg-black" | "bg-white">(
    "bg-black"
  );
  const pathname = usePathname();
  const { width } = useWindowSize();

  useEffect(() => {
    const headerElement = document.querySelector("#hamburger");
    const classAddFxn = () => {
      if (headerElement) {
        if (window.scrollY > 0 && width! < 640) {
          setHamburgerColor("bg-white");
          headerElement.classList.add("text-white", "bg-rose-500", "shadow-md");
        } else {
          setHamburgerColor("bg-black");
          headerElement.classList.remove(
            "text-white",
            "bg-rose-500",
            "shadow-md"
          );
        }
      }
    };
    window.addEventListener("scroll", classAddFxn);
    return () => window.removeEventListener("scroll", classAddFxn);
  }, [width]);

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
            id="hamburger"
            className="flex flex-col justify-center items-center gap-1 group max-sm:fixed max-sm:top-6 right-6 p-3 rounded-sm z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`w-8 h-1 ${hamburgerColor} group-hover:bg-primary-400 delay-75 transition-colors cursor-pointer`}
            ></div>
            <div
              className={`w-8 h-1 ${hamburgerColor} group-hover:bg-primary-400 delay-75 transition-colors cursor-pointer`}
            ></div>
            <div
              className={`w-8 h-1 ${hamburgerColor} group-hover:bg-primary-400 delay-75 transition-colors cursor-pointer`}
            ></div>
          </div>
          <NavigatorDrawer
            handleFxn={() => setIsOpen(!isOpen)}
            isOpen={isOpen}
          />
          {/* <div className="max-sm:hidden">
                    <HeaderModal />
                </div> */}
        </div>
      )}
    </>
  );
};
