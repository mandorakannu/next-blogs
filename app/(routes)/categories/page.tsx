import { sanityFetch } from "@/sanity/lib/live";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import React from "react";

export default async function Categories() {
  const { data: categories } = await sanityFetch({ query: CATEGORIES_QUERY });
  return (
    <section>
      <div className="grid max-sm:grid-cols-1 grid-cols-3 place-items-center py-10 px-5">
        {categories.map((category) => (
          <Link
            href={`/categories/${category!.slug!.current}`}
            key={category._id}
            className="max-w-sm overflow-hidden shadow-lg my-2 hover:shadow-2xl h-64 group rounded-xl"
          >
            <div className="px-6 py-4">
              <p className="font-bold text-xl mb-2 group-hover:text-primary-500">
                {category.title}
              </p>
              <p className="text-gray-500">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
