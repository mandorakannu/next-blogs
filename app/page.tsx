import { Hamburger } from "@ui/Hambar.Modal";
import { Header } from "@shared_ui/Nav/Header";
import { ScrollToTop } from "@ui/ScrollToTop";
import { FeaturedPost } from "@ui/blogs/featuredPost";
import { Footer } from "@shared_ui/Footer";

export default async function Home() {
  return (
    <>
      <Header />
      <Hamburger />
      <ScrollToTop />
      <FeaturedPost />
      <Footer />
    </>
  )
}