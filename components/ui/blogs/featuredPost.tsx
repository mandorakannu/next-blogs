import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { UNIQUE_POST_QUERY } from "@/sanity/lib/queries";

export const FeaturedPost = async () => {
  const post = await client.fetch(UNIQUE_POST_QUERY, {
    slug: process.env.FEATURED_POST,
  });
  const { title, mainImage, author, publishedAt, metaText, categories } = post!;

  const options = {
    month: "long" as
      | "long"
      | "numeric"
      | "2-digit"
      | "short"
      | "narrow"
      | undefined,
  };
  const date =
    new Date(publishedAt!).toLocaleDateString("en-US", options) +
    " " +
    new Date(publishedAt!).getDate() +
    ", " +
    new Date(publishedAt!).getFullYear();

  return (
    <>
      <section className="flex flex-col items-center justify-center max-sm:mx-10 sm:mx-20 py-2 mb-10">
        <Link href="/featured-post" className="overflow-hidden">
          <Image
            src={urlFor(mainImage!.asset!._ref).url() as string}
            alt={mainImage!.alt!}
            width={1500}
            height={500}
            className="hover:scale-105"
          />
        </Link>
        <Link
          href="/news"
          className="my-6 text-gray-500 hover:text-primary-500"
        >
          {categories![0]!.title!}
        </Link>
        <Link
          href="/featured-post"
          className="text-4xl mb-6 uppercase hover:underline underline-offset-2 font-bold text-center"
        >
          {title}
        </Link>
        <p className="text-gray-500 text-center line-clamp-3">{metaText}</p>
        <p className="text-gray-500 my-4 text-sm font-semibold">
          By{" "}
          <Link
            href="/mandorakannu"
            className="text-black hover:text-primary-700 uppercase"
          >
            {author?.name}
          </Link>{" "}
          {date}
        </p>
      </section>
    </>
  );
};
