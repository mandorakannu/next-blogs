import Link from "next/link";
import { SocialMedia } from "./Nav/SocialMedia";
export const Footer = () => {
  return (
    <>
      <footer className="relative w-full mb-20">
        <div className="w-full px-8 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-slate-200 md:flex-row md:justify-between">
            <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0">
              Copyright © {new Date().getFullYear()}
              <Link
                href={
                  process.env.NEXT_PUBLIC_PORTFOLIO ||
                  "https://mandorakannu.vercel.app/"
                }
                className="uppercase hover:text-primary-400 dark:text-gray-300"
              >
                {" "}
                Kannu Mandora
              </Link>
              . All Rights Reserved.
            </p>
            <div className="flex gap-4 text-slate-600 sm:justify-center">
              <SocialMedia iconSize={20} classProps="gap-10" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
