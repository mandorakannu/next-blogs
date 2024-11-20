import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kannu Mandora Blogs | Tech Enthusiast",
  description: "Kannu Mandora's personal blog about tech, programming, and more. Kannu is a Full Stack Developer and tech enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
