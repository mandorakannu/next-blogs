import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { CATEGORIES_BASED_BLOG_QUERY } from "@/sanity/lib/queries";
import { dateConverter } from "@functions/dateConverter";
import { SlugSorter } from "@/assets/functions/slugSorter";
import { sanityFetch } from "@/sanity/lib/live";
import { ImageUI } from "@shared_ui/Image.shared";

export const FeaturedPost = async () => {
  const { data: post } = await sanityFetch({
    query: CATEGORIES_BASED_BLOG_QUERY,
    params: {
      categoryId: SlugSorter("personal"),
    },
  });
  const { title, mainImage, author, publishedAt, metaText, categories, slug } =
    post![0];

  const date = dateConverter(publishedAt as string);

  return (
    <>
      <section className="flex flex-row max-sm:flex-col items-center justify-center max-sm:mx-10 sm:mx-20 py-2 mb-10">
        <Link href={`/blogs/${slug?.current}`} className="overflow-hidden">
          <ImageUI
            src={urlFor(mainImage!.asset!._ref).url() as string}
            alt={mainImage!.alt!}
            twClasses="hover:scale-105 max-sm:h-20 rounded-sm max-sm:h-[200px] h-[30rem] w-[150rem] my-2"
            isZoomed={true}
          />
        </Link>
        <div className="flex flex-col justify-center items-center max-sm:px-2 md:px-6">
          <Link
            href={`/category/${categories![0]?.toLowerCase()}`}
            className="my-6 text-gray-500 hover:text-primary-500 dark:text-gray-300 underline underline-offset-2"
          >
            {categories![0]}
          </Link>
          <Link
            href={`/blogs/${slug?.current}`}
            className="text-4xl mb-6 uppercase hover:underline underline-offset-2 font-bold text-center"
          >
            {title}
          </Link>
          <p className="text-gray-500 dark:text-gray-300 text-center line-clamp-3">
            {metaText}
          </p>
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
        </div>
      </section>
    </>
  );
};
