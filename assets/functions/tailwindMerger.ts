import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const twMerger = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
