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
import { Analytics } from "@vercel/analytics/next";

const font = Karla({
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin", "latin-ext"],
});
export const metadata: Metadata = {
  title: "Journal | Kannu Mandora | Tech Enthusiast",
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
    url: "https://content.mandorakannu.xyz",
    title: "Journal | Kannu Mandora | Tech Enthusiast",
    description:
      "Discover blogs on web development, coding tips, and MERN stack tutorials. Stay updated with the latest trends to enhance your full-stack development skills!",
    images: [
      {
        url: "https://content.mandorakannu.xyz/images/typewritter.jpg",
        width: 800,
        height: 600,
        alt: "Journal | Kannu Mandora",
      },
    ],
    siteName: "Journal | Kannu Mandora | Tech Enthusiast",
    countryName: "India",
    locale: "en_IN",
  },
  twitter: {
    creatorId: "@mandorakannu",
    card: "summary_large_image",
    title: "Journal | Kannu Mandora | Tech Enthusiast",
    creator: "Kannu Mandora",
    description:
      "Discover blogs on web development, coding tips, and MERN stack tutorials. Stay updated with the latest trends to enhance your full-stack development skills!",
    images: {
      url: "https://content.mandorakannu.xyz/images/typewritter.jpg",
      alt: "Journal | Kannu Mandora",
    },
  },
  verification: {
    google: "RMbn1Udckop0qHdoAu_PoiGFWqwB19CecNEqZfHxAE",
    yahoo: "74bbe6e379214911a1f7682e4d6e244e",
  },
  icons: [
    {
      href: "/favicon.ico",
      rel: "icon",
      type: "image/x-icon",
      url: "/favicon.ico",
    },
  ],
  metadataBase: new URL(`https://content.mandorakannu.xyz`),
  alternates: {
    canonical: './',
}
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
            <Analytics />
          </body>
        </html>
      </ChakraProvider>
    </ClerkProvider>
  );
}
