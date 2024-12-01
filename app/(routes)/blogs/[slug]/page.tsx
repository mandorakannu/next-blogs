import type { Metadata } from "next";
import { PortableText } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { UNIQUE_POST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function UniqueBlog({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch(UNIQUE_POST_QUERY, { slug });

  return (
    <>
      <div className="prose mx-auto">
        <h1 className="text-4xl font-bold mt-8">{post!.title}</h1>
        <Image
          src={urlFor(post!.mainImage!).url()!}
          alt={post!.mainImage!.alt!}
          width={800}
          height={600}
          priority
          className="rounded-lg mt-8 border"
        />
        <PortableText value={post!.body!} />
      </div>
    </>
  );
}

// Generate metadata for the Every Blog.

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  // fetch data
  const data = await client.fetch(UNIQUE_POST_QUERY, { slug });

  return {
    title: data!.title + " | Kannu Mandora",
    description: data!.metaText,
    openGraph: {
      title: data!.title!,
      description: data!.metaText!,
      type: "article",
      images: [
        {
          url: urlFor(data!.mainImage!).url()!,
          width: 800,
          height: 600,
          alt: data!.mainImage ? data!.mainImage.alt : "ALT Text",
        },
      ],
      publishedTime: data!.publishedAt!,
      countryName: "India",
      locale: "en_IN",
      alternateLocale: "en_US",
      authors: ["https://mandorakannu.xyz"],
      siteName: "Journal | Kannu Mandora | Tech Enthusiast",
    },
    robots: "index, follow",
  };
}
