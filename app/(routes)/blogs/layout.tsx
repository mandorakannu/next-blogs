import { SanityLive } from "@/sanity/lib/live";

export default function AllBlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-wrap justify-start items-center max-sm:flex-col max-sm:mx-6 mx-16">
      {children}
      <SanityLive />
    </section>
  );
}
