import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@shared_ui/providers/ClerkProvider";
import { NextUIProvider } from "@shared_ui/providers/NextUiProvider";
import { Karla } from "next/font/google";
import { Hamburger } from "@ui/Hambar.Modal";
import { Header } from "@shared_ui/Nav/Header";
import { ScrollToTop } from "@ui/ScrollToTop";
import { Footer } from "@shared_ui/Footer";
import { ChakraProvider } from "@shared_ui/providers/ChakraProvider";

const font = Karla({
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin", "latin-ext"],
});
export const metadata: Metadata = {
  title: "Journal | Kannu Mandora | Tech Enthusiast",
  description:
    "Explore insightful and engaging content on Mandorakannu's blog, where we cover a variety of topics including technology, lifestyle, and personal growth. Dive in to discover well-researched articles, expert opinions, and a community of curious minds.",
  keywords: [
    "Kannu",
    "Kannu Mandora",
    "Mandora",
    "Web Developer",
    "Full Stack",
    "MERN Stack",
    "Stack",
    "Full Stack Developer",
    "Mandora Kannu",
    "tech blogger",
    "blogging",
    "technology",
    "lifestyle",
    "personal growth",
    "well-researched articles",
    "expert opinions",
    "community",
    "curious minds",
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
  twitter: {
    card: "summary_large_image",
    title: "Journal | Kannu Mandora | Tech Enthusiast",
    description:
      "Explore insightful and engaging content on Mandorakannu's blog, where we cover a variety of topics including technology, lifestyle, and personal growth. Dive in to discover well-researched articles, expert opinions, and a community of curious minds.",
    siteId: "@mandorakannu",
    creator: "@KannuMandora",
    creatorId: "1467726470533754880",
    images: ["https://content.mandorakannu.xyz/images/author.jpg"],
  },
  verification: {
    google: "_RMbn1Udckop0qHdoAu_PoiGFWqwB19CecNEqZfHxAE",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["mandorakannu@gmail.com"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ChakraProvider>
        <html lang="en">
          <body className={font.className}>
            <NextUIProvider>
              <Header />
              <Hamburger />
              <ScrollToTop />
              {children}
              <Footer />
            </NextUIProvider>
          </body>
        </html>
      </ChakraProvider>
    </ClerkProvider>
  );
}
