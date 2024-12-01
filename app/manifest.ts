import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Journal",
    short_name: "Journal | Kannu Mandora",
    description:
      "Explore insightful and engaging content on Mandorakannu's blog, where we cover a variety of topics including technology, lifestyle, and personal growth. Dive in to discover well-researched articles, expert opinions, and a community of curious minds.",
    theme_color: "#000000",
    background_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/x-icon",
      },
    ],
  };
}
