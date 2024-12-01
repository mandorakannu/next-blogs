import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_POSTS_QUERY } from "@/sanity/lib/queries";
import { dateConverter } from "@functions/dateConverter";

export default async function AllBlogs() {
  const {data: blogs} = await sanityFetch({query: ALL_POSTS_QUERY});
  return (
    <>
        {blogs.map((blog) => (
          <div key={blog._id} className="md:w-1/4 p-4">
            <Link href={`blogs/${blog.slug?.current}`} className="group">
              <Image
                src={urlFor(blog.mainImage!).url()}
                alt={blog.mainImage!.alt!}
                className="w-full h-48 object-cover rounded-lg"
                width={300}
                height={200}
              />
              <h2 className="text-lg font-semibold mt-4 group-hover:text-primary-700">{blog.title}</h2>
              <p className="text-sm text-gray-500">{dateConverter(blog.publishedAt as string)}</p>
            </Link>
              <Link href="/mandorakannu" className="text-sm text-gray-500 hover:text-primary-600 font-bold">{blog!.author!.name}</Link>
          </div>
        ))}
    </>
  );
}
