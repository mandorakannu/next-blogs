import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { POSTS_QUERY } from "@/sanity/lib/queries";
export const TrendingNews = async () => {
  const blogs = await client.fetch(
    POSTS_QUERY,
    {},
    { cache: "force-cache", next: { revalidate: 300 } }
  );
  return (
    <>
      <section className="py-10 max-sm:mx-10 sm:mx-20">
        <section className="flex flex-row justify-center items-center">
          <div className="w-full max-sm:hidden">
            <hr className=" outline-1 my-0.5" />
            <hr className=" outline-1 my-0.5" />
          </div>
          <div className="text-center w-full">
            <h2 className="text-3xl uppercase">Trending News</h2>
            <span>Popular Posts</span>
          </div>
          <div className="w-full max-sm:hidden">
            <hr className=" outline-1 my-0.5" />
            <hr className=" outline-1 my-0.5" />
          </div>
        </section>
        <hr className="my-5 sm:hidden" />
        {/* Cards */}
        <section className="flex max-sm:flex-col flex-row justify-center items-center gap-6 py-6">
          {blogs.map(({ _id, title, categories, slug }, index) => (
            index < 4 ? (
              <div
                key={_id}
                className="flex flex-row gap-3 justify-start items-center"
              >
                <p className="text-5xl text-primary-400">{index + 1 + "."}</p>
                <div className="flex flex-col gap-1 justify-center items-start">
                  <Link
                    href={`/categories/${categories![0].slug?.current}`}
                    className="text-gray-500 dark:text-gray-300 hover:text-red-500 uppercase text-sm"
                  >
                    {categories![0].title}
                  </Link>
                  <Link
                    href={`/blogs/${slug?.current}`}
                    className="hover:text-primary-500 font-bold"
                  >
                    {title}
                  </Link>
                </div>
              </div>
            ) : null
          ))}
        </section>
      </section>
    </>
  );
};
