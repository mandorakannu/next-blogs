import Link from "next/link";
import { CATEGORIES_BASED_BLOG_QUERY } from "@/sanity/lib/queries";
import { SlugSorter, Slug } from "@functions/slugSorter";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { twMerger } from "@/assets/functions/tailwindMerger";
import { sanityFetch } from "@/sanity/lib/live";

export const CategoriesBasedBlog = async ({
  slug = "health",
  flexProps,
  twClasses,
}: {
  slug: Slug;
  flexProps: "flex-row" | "flex-row-reverse";
  twClasses?: string;
}) => {
  const { data: blogs } = await sanityFetch({
    query: CATEGORIES_BASED_BLOG_QUERY,
    params: {
      categoryId: SlugSorter(slug),
    },
  });

  const firstBlogDetails = {
    firstBlogTitle: blogs[0].title,
    firstBlogImageUrl: urlFor(blogs[0].mainImage!.asset!._ref).url() as string,
    firstBlogSlugId: blogs[0]!.slug!.current as string,
    firstBlogAlt: blogs[0].mainImage?.alt as string,
    firstBlogCategory: blogs![0].categories
      ? (blogs![0].categories[0] as string)
      : "",
    author: blogs[0].author?.name,
  };
  const {
    firstBlogImageUrl,
    firstBlogTitle,
    firstBlogSlugId,
    firstBlogAlt,
    firstBlogCategory,
    author,
  } = firstBlogDetails;
  return (
    <>
      <section
        className={twMerger(
          "flex flex-row justify-around items-center max-sm:mx-10 sm:mx-20 py-10 border-b-2 border-primary-600",
          flexProps,
          twClasses
        )}
      >
        <div className="grid isolate group overflow-hidden place-items-center">
          <Image
            src={firstBlogImageUrl}
            alt={firstBlogAlt}
            width={500}
            height={300}
            className="-z-10 row-span-full col-span-full grayscale brightness-75 group-hover:scale-110 w-[500px] max-sm:h-[270px] h-[300px]"
          />
          <div className="flex flex-col justify-center items-center text-white text-center z-10 row-span-full col-span-full px-5">
            <Link
              href={`/categories/${firstBlogCategory}`}
              className="text-base sm:text-xl mb-5 rounded-full px-5 py-1 bg-black text-white group-hover:bg-primary-500"
            >
              {firstBlogCategory}
            </Link>
            <Link
              className="max-sm:text-xl text-lg text-center group-hover:underline underline-offset-2 font-bold line-clamp-3 w-3/4"
              href={`/blogs/${firstBlogSlugId}`}
            >
              {firstBlogTitle}
            </Link>
            <p className="pt-3">
              By{" "}
              <Link
                href="/mandorakannu"
                className="hover:text-primary-500 max-sm:text-sm"
              >
                {author}
              </Link>
            </p>
          </div>
        </div>
        <section className="max-sm:hidden flex flex-col justify-center items-start gap-10">
          {blogs.map(
            ({ _id, title, categories, slug, author }: any, index: number) =>
              index < 4 ? (
                <div
                  key={_id}
                  className="flex flex-row gap-3 justify-start items-center"
                >
                  <p className="text-5xl text-primary-400">{index + 1 + "."}</p>
                  <div className="flex flex-col gap-1 justify-center items-start">
                    <Link
                      href={`/categories/${categories![0].slug?.current}`}
                      className="text-gray-500 hover:text-red-500 uppercase text-sm"
                    >
                      {categories![0].title}
                    </Link>
                    <Link
                      href={`/blogs/${slug?.current}`}
                      className="hover:text-primary-500 font-bold"
                    >
                      {title}
                    </Link>
                    <p className="text-gray-500">
                      By{" "}
                      <Link
                        href="/mandorakannu"
                        className="hover:text-primary-500  dark:text-gray-400"
                      >
                        {author?.name}
                      </Link>
                    </p>
                  </div>
                </div>
              ) : null
          )}
        </section>
      </section>
    </>
  );
};
