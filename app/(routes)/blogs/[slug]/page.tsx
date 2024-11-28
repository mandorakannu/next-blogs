import type { Metadata } from "next";
import { PortableText } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { UNIQUE_POST_QUERY } from "@/sanity/lib/queries";

export default async function UniqueBlog({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await client.fetch(UNIQUE_POST_QUERY, { slug });

  return (
    <>
      <div className="prose mx-auto">
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
  const slug = (await params).slug;

  // fetch data
  const product = await client.fetch(UNIQUE_POST_QUERY, { slug });

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: product!.title,
    description: product!.metaText,
  };
}
