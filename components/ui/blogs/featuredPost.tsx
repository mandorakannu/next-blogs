import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { CATEGORIES_BASED_BLOG_QUERY } from "@/sanity/lib/queries";
import { dateConverter } from "@functions/dateConverter";
import { SlugSorter } from "@/assets/functions/slugSorter";

export const FeaturedPost = async () => {
  const post = await client.fetch(CATEGORIES_BASED_BLOG_QUERY, {
    categoryId: SlugSorter("personal"),
  });
  const { title, mainImage, author, publishedAt, metaText, categories,slug } =
    post![0];

  const date = dateConverter(publishedAt as string);

  return (
    <>
      <section className="flex flex-col items-center justify-center max-sm:mx-10 sm:mx-20 py-2 mb-10">
        <Link
          href={`/blogs/${slug?.current}`}
          className="overflow-hidden"
        >
          <Image
            src={urlFor(mainImage!.asset!._ref).url() as string}
            alt={mainImage!.alt!}
            width={1500}
            height={600}
            className="hover:scale-105 max-sm:h-auto h-[600px]"
          />
        </Link>
        <Link
          href={`/category/${categories![0]?.toLowerCase()}`}
          className="my-6 text-gray-500 hover:text-primary-500 dark:text-gray-300"
        >
          {categories![0]}
        </Link>
        <Link
          href={`/blogs/${slug?.current}`}
          className="text-4xl mb-6 uppercase hover:underline underline-offset-2 font-bold text-center"
        >
          {title}
        </Link>
        <p className="text-gray-500 dark:text-gray-300 text-center line-clamp-3">{metaText}</p>
        <p className="text-gray-500 dark:text-gray-300 my-4 text-sm font-semibold">
          By{" "}
          <Link
            href="/mandorakannu"
            className="text-black dark:text-gray-400 hover:text-primary-700 uppercase"
          >
            {author?.name}
          </Link>{" "}
          {date}
        </p>
      </section>
    </>
  );
};
