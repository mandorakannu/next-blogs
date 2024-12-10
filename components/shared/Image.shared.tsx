"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import { Image as NextUIImage } from "@nextui-org/react";
import { twMerger } from "@/assets/functions/tailwindMerger";

export const ImageUI = ({
  src,
  alt,
  twClasses,
  width,
  height,
  isZoomed = true,
}: {
  src: string;
  alt: string;
  twClasses?: string;
  width?: number;
  height?: number;
  isZoomed?: boolean;
}) => {
  const { width: windowWidth } = useWindowSize();
  return (
    <NextUIImage
      isZoomed={isZoomed}
      src={src}
      alt={alt}
      className={twMerger(twClasses)}
      width={width}
      height={height}
      radius={windowWidth! > 640 ? "lg" : "none"}
    />
  );
};
