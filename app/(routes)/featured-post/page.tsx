import React from "react";
import { UNIQUE_POST_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function FeaturedPost() {
  const post = await client.fetch(UNIQUE_POST_QUERY, {
    slug: process.env.FEATURED_POST || "how-i-became-a-blogger",
  });
  const { title, mainImage, author, publishedAt, body, categories, metaText } =
    post!;
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <Image
        src={urlFor(mainImage!.asset!._ref).url() as string}
        alt={mainImage!.alt!}
        className="my-6"
        width={800}
        height={500}
      />
      <div className="prose mx-auto">
        <PortableText value={body!} />
      </div>
      {/* author panel */}
    </div>
  );
}
