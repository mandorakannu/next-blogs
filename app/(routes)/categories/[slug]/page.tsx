import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { Slug, SlugSorter } from "@/assets/functions/slugSorter";
import { CATEGORIES_BASED_BLOG_QUERY } from "@/sanity/lib/queries";

export default async function CategoriesBlogs({ params }: Props) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: CATEGORIES_BASED_BLOG_QUERY,
    params: { categoryId: SlugSorter(slug) },
  });
  return (
    <>
      <section className="flex flex-row flex-wrap justify-around items-center">
        {post!.map((post) => (
          <Link
            href={`/blogs/${post!.slug!.current}`}
            key={post._id}
            className="max-w-sm rounded overflow-hidden shadow-lg my-2 text-center hover:shadow-2xl transition duration-500 ease-in-out"
          >
            <Image
              src={urlFor(post.mainImage!).url()!}
              alt={post.mainImage!.alt!}
              width={250}
              height={250}
              className="mx-auto w-full"
            />
            <div className="px-6 py-4">
              <p className="font-bold text-xl mb-2">{post.title}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

// Generate metadata for the Every Blog.

type Props = {
  params: Promise<{ slug: Slug }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  return {
    title: `${slug.toUpperCase()} Categories - Journal | Kannu Mandora`,
    description: `${slug.toUpperCase()} Categories Section of Journal | Kannu Mandora`,
    openGraph: {
      title: `${slug} Categories - Journal | Kannu Mandora`,
      description: `${slug.toUpperCase()} Categories Section of Journal | Kannu Mandora`,
      type: "article",
      images: [
        {
          url: "/images/categories.jpg",
          width: 800,
          height: 600,
          alt: "Categories",
        },
      ],
      countryName: "India",
      locale: "en_IN",
      alternateLocale: "en_US",
      authors: ["https://mandorakannu.xyz"],
      siteName: "Journal | Kannu Mandora | Tech Enthusiast",
    },
    robots: "index, follow",
    twitter: {
      card: "summary_large_image",
      site: "@mandorakannu",
      creator: "@mandorakannu",
      title: `${slug} Categories - Journal | Kannu Mandora`,
      description: `${slug.toUpperCase()} Categories Section of Journal | Kannu Mandora`,
      images: [
        {
          url: "/images/categories.jpg",
          width: 800,
          height: 600,
          alt: "Categories",
        },
      ],
    },
    authors: [{ name: "Kannu Mandora", url: "https://mandorakannu.xyz" }],
    creator: "Kannu Mandora",
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: `${slug} Categories - Journal | Kannu Mandora`,
      startupImage: {
        url: "/images/categories.jpg",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
    },
    referrer: "origin",
    classification: "blog",
    metadataBase: new URL("https://mandorakannu.xyz"),
  };
}
