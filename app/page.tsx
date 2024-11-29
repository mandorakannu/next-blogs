import { CategoriesBasedBlog } from "@/components/ui/blogs/CategoriesBasedBlog";
import { TrendingNews } from "@ui/blogs/Trending";
import { FeaturedPost } from "@ui/blogs/featuredPost";

export default async function Home() {
  return (
    <>
      <FeaturedPost />
      <TrendingNews />
      <CategoriesBasedBlog slug="health" flexProps="flex-row" />
      <CategoriesBasedBlog slug="tech" flexProps="flex-row-reverse" />
    </>
  );
}
