import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Journal | Kannu Mandora",
    short_name: "Journal",
    description:
      "Explore insightful and engaging content on Mandorakannu's blog, where we cover a variety of topics including technology, lifestyle, and personal growth. Dive in to discover well-researched articles, expert opinions, and a community of curious minds.",
    theme_color: "#000000",
    background_color: "#ffffff",
    icons: [
      {
        src: "/images/reporter.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    categories: ["technology", "lifestyle", "personal growth"],
    screenshots: [
      {
        src: "/images/screenshot-mobile.png",
        sizes: "375x812",
        type: "image/png",
        label: "Mobile",
        platform: "android",
      },
      {
        src: "/images/screenshot-desktop.png",
        sizes: "1440x900",
        type: "image/png",
        label: "Desktop",
        platform: "windows",
      },
    ],
    dir: "ltr",
    scope: "/",
    lang: "en",
    launch_handler: {
      client_mode: "auto",
    },
    display_override: ["standalone"],
    prefer_related_applications: false,
    id: "https://content.mandorakannu.xyz/",
  };
}
