"use client";

import { Link } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { Open_Sans } from "next/font/google"
import { HeaderModal } from "./Header.Modal";

const font = Open_Sans({
    weight: ["300", "400", "500", "600", "700", "800"],
    display: "swap",
});

export const Hamburger = () => {

    return (
        <>
            <div className="flex sm:justify-evenly max-sm:justify-center items-center gap-8 sm:border-y-2 sm:border-gray-500 max-sm:border-b-2 max-sm:border-black py-6 max-sm:mx-10 sm:mx-20">
                <div className="flex flex-col justify-center items-center gap-1 group">
                    <div className="w-8 h-1 bg-black group-hover:bg-primary-400 delay-75 transition-colors cursor-pointer"></div>
                    <div className="w-8 h-1 bg-black group-hover:bg-primary-400 delay-75 transition-colors cursor-pointer"></div>
                    <div className="w-8 h-1 bg-black group-hover:bg-primary-400 delay-75 transition-colors cursor-pointer"></div>
                </div>
                <ul className={`flex flex-row justify-evenly items-center gap-8 uppercase font-medium max-sm:hidden ${font.className}`}>
                    <Link size="lg" href="/" key="Home" className="hover:underline underline-offset-2">Home</Link>
                    <Link size="lg" href="/about" key="About" className="hover:underline underline-offset-2">About</Link>
                    <Link size="lg" href="/features" key="Features" className="hover:underline underline-offset-2">Features</Link>
                    <Link size="lg" href="/categories" key="Categories" className="hover:underline underline-offset-2">Categories</Link>
                    <Link size="lg" href="/contact" key="Contact" className="hover:underline underline-offset-2">Contact</Link>
                </ul>
                <CiSearch className="text-3xl cursor-pointer" />
                <div className="sm:hidden"><HeaderModal/></div>
            </div>
        </>
    );
}
