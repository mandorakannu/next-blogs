import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@shared_ui/providers/ClerkProvider";
import { NextUIProvider } from "@shared_ui/providers/NextUiProvider";
import { Karla } from "next/font/google";
import { Hamburger } from "@ui/Hambar.Modal";
import { Header } from "@shared_ui/Nav/Header";
import { ScrollToTop } from "@ui/ScrollToTop";
import { Footer } from "@shared_ui/Footer";

const font = Karla({
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin", "latin-ext"],
});
export const metadata: Metadata = {
  title: "Kannu Mandora Blogs | Tech Enthusiast",
  description:
    "Kannu Mandora's personal blog about tech, programming, and more. Kannu is a Full Stack Developer and tech enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
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
    </ClerkProvider>
  );
}
