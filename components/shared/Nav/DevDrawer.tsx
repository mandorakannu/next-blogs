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
import { Image } from "@nextui-org/react";
import { SocialMedia } from "./SocialMedia";
import Link from "next/link";
import {useWindowSize} from "@uidotdev/usehooks"

export const DevDrawer = ({
  isOpen,
  handleFxn,
}: {
  isOpen: boolean;
  handleFxn: () => any;
}) => {
  const {width} =  useWindowSize();
  return (
    <DrawerRoot
      key={"end"}
      placement={width! > 768 ? "end" : "bottom"}
      open={isOpen}
      onOpenChange={handleFxn}
    >
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-xl">JOURNAL</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Image alt="Image of Author Kannu Mandora" src="/images/author.jpg" />
          <Link
            href={process.env.NEXT_PUBLIC_PORTFOLIO!}
            className="text-3xl uppercase text-primary-500 outline-none"
          >
            Kannu Mandora
          </Link>
          <h1 className="text-xl uppercase">Author</h1>
          <p>
            I am a full-stack developer with a passion for learning and
            teaching. I am currently working on a project that will help
            developers learn how to build full-stack applications with Next.js,
            Chakra UI. I am also working on a project that will help developers
            learn how to build full-stack applications with Next.js, Chakra UI.
          </p>
          <SocialMedia iconSize={20} classProps="pt-5 gap-6" />
        </DrawerBody>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};
