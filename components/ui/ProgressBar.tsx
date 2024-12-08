"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const NextProgressBar = () => (
  <ProgressBar
    height="4px"
    color="#6366f1"
    options={{ showSpinner: false }}
    shallowRouting
  />
);
