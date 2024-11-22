import { client } from "@/sanity/lib/client";
import { UNIQUE_POST_QUERYResult } from "@/sanity/types";
import { UNIQUE_POST_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export const FeaturedPost = async () => {
    const result = (await client.fetch(UNIQUE_POST_QUERY, {
        slug: "how-i-became-a-blogger",
    })) as UNIQUE_POST_QUERYResult;
    const {
        title,
        mainImage: {
            alt,
            asset: { _ref },
        },
        author,
        publishedAt,
        body,
        categories,
    } = result;
    const content: string = body[0].children[0].text;
    const options = { month: "long" as "long" | "numeric" | "2-digit" | "short" | "narrow" | undefined };
    const valentines = new Date(publishedAt);
    const publishDate = valentines.toLocaleDateString("en-US", options) + " " + valentines.getDate() + ", " + valentines.getFullYear();
    ;
    return (
        <>
            <section className="flex flex-col items-center justify-center max-sm:mx-10 sm:mx-20 py-2 mb-10">

                <Link
                    href="/featured-post"
                    className="overflow-hidden "
                >
                    <Image
                        src={urlFor(_ref).url()}
                        alt={alt}
                        width={1500}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                        className="hover:scale-105"
                    />
                </Link>
                <Link href="/news" className="my-6 text-gray-500 hover:text-primary-500">{categories[0].title}</Link>
                <Link href="" className="text-4xl mb-6 uppercase hover:underline underline-offset-2 font-bold text-center">{title}</Link>
                <p className="text-gray-500 max-sm:text-start sm:text-center">{content.length > 300 ? content.slice(0, 500) + "..." : content}</p>
                <p className="text-gray-500 my-4 text-sm font-semibold">By <Link href="/mandorakannu" className="text-black hover:text-primary-700 uppercase">Kannu Mandora</Link> {publishDate}</p>
            </section>
        </>
    );
};
