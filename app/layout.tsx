import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@shared_ui/providers/NextUiProvider";
import { Karla } from "next/font/google";
import { Header } from "@shared_ui/Nav/Header";
import { ScrollToTop } from "@ui/ScrollToTop";
import { Footer } from "@shared_ui/Footer";
import { ChakraProvider } from "@shared_ui/providers/ChakraProvider";
import { Analytics } from "@vercel/analytics/next";
import { NextProgressBar } from "@ui/ProgressBar";

const font = Karla({
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin", "latin-ext"],
});
export const metadata: Metadata = {
  title: "Journal | Kannu Mandora | Blogger",
  description:
    "Discover blogs on web development, coding tips, and MERN stack tutorials. Stay updated with the latest trends to enhance your full-stack development skills!",
  keywords: [
    "journal",
    "blog",
    "technology",
    "lifestyle",
    "personal growth",
    "Kannu Mandora",
    "content",
    "articles",
    "news",
    "web dev",
    "MERN stack",
    "React",
    "Node.js",
    "frontend",
    "backend",
    "full-stack",
    "coding",
    "JavaScript",
    "MongoDB",
    "Express",
    "tutorials",
    "projects",
    "developer",
    "upskilling",
    "tech",
    "programming",
    "career tips",
    "blogging",
  ],
  authors: [{ name: "Kannu Mandora" }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https:/blog.mandorakannu.xyz",
    title: "Journal | Kannu Mandora | Blogger",
    description:
      "Discover blogs on web development, coding tips, and MERN stack tutorials. Stay updated with the latest trends to enhance your full-stack development skills!",
    images: [
      {
        url: "https:/blog.mandorakannu.xyz/images/typewritter.jpg",
        width: 800,
        height: 600,
        alt: "Journal | Kannu Mandora | Blogger",
      },
    ],
    siteName: "Journal | Kannu Mandora | Blogger",
    countryName: "India",
    locale: "en_IN",
  },
  twitter: {
    creatorId: "@mandorakannu",
    card: "summary_large_image",
    title: "Journal | Kannu Mandora | Blogger",
    creator: "Kannu Mandora",
    description:
      "Discover blogs on web development, coding tips, and MERN stack tutorials. Stay updated with the latest trends to enhance your full-stack development skills!",
    images: {
      url: "https:/blog.mandorakannu.xyz/images/typewritter.jpg",
      alt: "Journal | Kannu Mandora | Blogger",
    },
  },
  verification: {
    google: "RMbn1Udckop0qHdoAu_PoiGFWqwB19CecNEqZfHxAE",
    yahoo: "74bbe6e379214911a1f7682e4d6e244e",
    other: {
      name: "msvalidate.01",
      content: "A9304B9F6C8E024FBD2FA36990903E5C",
    },
  },
  icons: [
    {
      href: "/favicon.ico",
      rel: "icon",
      type: "image/x-icon",
      url: "/favicon.ico",
    },
  ],
  metadataBase: new URL(`https:/blog.mandorakannu.xyz`),
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ChakraProvider>
      <html lang="en" className="dark:bg-slate-800 dark:text-white">
        <body className={font.className}>
          <NextUIProvider>
            <Header />
            <ScrollToTop />
            {children}
            <Footer />
          </NextUIProvider>
          <Analytics />
          <NextProgressBar />
        </body>
      </html>
    </ChakraProvider>
  );
}
