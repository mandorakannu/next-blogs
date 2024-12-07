"use client";

import { CircularProgress } from "@nextui-org/react";

export function Loader({ size = "sm" }: { size?: "sm" | "md" | "lg" }) {
  return <CircularProgress aria-label="Loading..." size={size} />;
}
