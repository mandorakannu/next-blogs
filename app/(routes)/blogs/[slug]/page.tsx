import type { Metadata } from "next";
import { PortableText } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { UNIQUE_POST_QUERY } from "@/sanity/lib/queries";

export default async function UniqueBlog({
  params,
}: Props) {
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
  const { slug } = await params;

  // fetch data
  const data = await client.fetch(UNIQUE_POST_QUERY, { slug });

  return {
    title: data!.title,
    description: data!.metaText,
  };
}