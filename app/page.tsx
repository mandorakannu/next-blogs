import { CategoriesBasedBlog } from "@/components/ui/blogs/CategoriesBasedBlog";
import { TrendingNews } from "@ui/blogs/Trending";
import { FeaturedPost } from "@ui/blogs/featuredPost";

export default async function Home() {
  return (
    <>
      <FeaturedPost />
      <TrendingNews />
      <CategoriesBasedBlog slug="health" flexProps="flex-row" twClasses="border-t-2 border-primary-600" />
      <CategoriesBasedBlog slug="tech" flexProps="flex-row-reverse" />
      <CategoriesBasedBlog slug="fashion" flexProps="flex-row" twClasses="border-b-0" />
    </>
  );
}
