import type { Metadata } from "next";
import { PortableText } from "next-sanity";
import { UNIQUE_POST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { CommentBox } from "@shared_ui/CommentBox";
import { AllComments } from "@shared_ui/AllComments";
import { sanityFetch } from "@/sanity/lib/live";

const fetchPost = async (slug: string) => {
  const { data: post } = await sanityFetch({
    query: UNIQUE_POST_QUERY,
    params: { slug },
  });
  return post;
};

export default async function UniqueBlog({ params }: Props) {
  const { slug } = await params;
  const post = await fetchPost(slug);

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
        <CommentBox postId={post!._id} />
        <AllComments comments={post!.comments} />
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
  const data = await fetchPost(slug);

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
    twitter: {
      card: "summary_large_image",
      site: "@mandorakannu",
      creator: "@mandorakannu",
      title: data!.title!,
      description: data!.metaText!,
      images: [
        {
          url: urlFor(data!.mainImage!).url()!,
          width: 800,
          height: 600,
          alt: data!.mainImage ? data!.mainImage.alt : "ALT Text",
        },
      ],
    },
    authors: [{ name: data!.author!.name! }],
    creator: data!.author!.name!,
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: data!.title!,
      startupImage: {
        url: urlFor(data!.mainImage!).url()!,
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
    },
    referrer: "origin",
    classification: "blog",
    metadataBase: new URL("https://mandorakannu.xyz"),
  };
}
