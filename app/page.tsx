import { Hamburger } from "@ui/Hambar.Modal";
import { Header } from "@shared_ui/Nav/Header";
import { ScrollToTop } from "@ui/ScrollToTop";

export default async function Home() {
  return (
    <>
      <Header />
      <Hamburger />
      <ScrollToTop />
    </>
  )
}