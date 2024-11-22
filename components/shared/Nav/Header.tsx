import { HeaderModal } from "@ui/Header.Modal"
import { SocialMedia } from "./SocialMedia"
import { Oswald } from "next/font/google"

const font = Oswald({
    display: "swap",
    weight: ["200", "300", "400", "500", "600", "700"],
    subsets: ["latin", "latin-ext"],
})

export const Header = () => {

    return (
        <>
            <div className="flex flex-row justify-evenly items-center my-6">
                <SocialMedia iconSize={15} classProps="gap-2 max-sm:hidden" />
                <h1 className={`max-sm:text-4xl text-3xl uppercase cursor-default ${font.className} tracking-widest`}>Journal</h1>
                <div className="max-sm:hidden">
                    <HeaderModal />
                </div>
            </div>
        </>
    )
}