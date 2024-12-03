export const revalidate = 60;

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_POSTS_QUERY } from "@/sanity/lib/queries";
import { dateConverter } from "@functions/dateConverter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Section | Journal",
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
    url: "https://blog.mandorakannu.xyz/blogs/",
    title: "Journal | Kannu Mandora | Blogger",
    description:
      "Discover blogs on web development, coding tips, and MERN stack tutorials. Stay updated with the latest trends to enhance your full-stack development skills!",
    images: [
      {
        url: "/images/typewritter.jpg",
        width: 800,
        height: 600,
        alt: "Blog Section | Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mandorakannu",
    creator: "@mandorakannu",
    title: "Journal | Kannu Mandora | Blogger",
    description:
      "Discover blogs on web development, coding tips, and MERN stack tutorials. Stay updated with the latest trends to enhance your full-stack development skills!",
    images: [
      {
        url: "/images/typewritter.jpg",
        width: 800,
        height: 600,
        alt: "Blog Section | Journal",
      },
    ],
  },
  appleWebApp: {
    capable: true,
  },
  publisher: "Kannu Mandora",
  generator: "Kannu Mandora",
  applicationName: "Journal | Kannu Mandora | Blogger",
  category: "All Blogs",
};

export default async function AllBlogs() {
  const { data: blogs } = await sanityFetch({ query: ALL_POSTS_QUERY });
  return (
    <>
      {blogs.map((blog) => (
        <div key={blog._id} className="md:w-1/4 p-4">
          <Link href={`blogs/${blog.slug?.current}`} className="group">
            <Image
              src={urlFor(blog.mainImage!).url()}
              alt={blog.mainImage!.alt!}
              className="w-full h-48 object-cover rounded-lg"
              width={300}
              height={200}
            />
            <h2 className="text-lg font-semibold mt-4 group-hover:text-primary-700">
              {blog.title}
            </h2>
            <p className="text-sm text-gray-500">
              {dateConverter(blog.publishedAt as string)}
            </p>
          </Link>
          <Link
            href="/mandorakannu"
            className="text-sm text-gray-500 hover:text-primary-600 font-bold"
          >
            {blog!.author!.name}
          </Link>
        </div>
      ))}
    </>
  );
}
export async function generateStaticParams() {
  const { data: blogs } = await sanityFetch({ query: ALL_POSTS_QUERY });
  const topPosts = blogs.slice(0, 20);

  return topPosts.map((blog) => ({
    slug: blog.slug,
  }));
}
