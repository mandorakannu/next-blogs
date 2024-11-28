import { TrendingNews } from "@ui/blogs/Trending";
import { FeaturedPost } from "@ui/blogs/featuredPost";

export default async function Home() {
  return (
    <>
      <FeaturedPost />
      <TrendingNews />
    </>
  );
}
