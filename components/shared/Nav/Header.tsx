import { HeaderModal } from "@ui/Header.Modal"
import { SocialMedia } from "./SocialMedia"


export const Header = () => {

    return (
        <>
            <div className="flex flex-row justify-evenly items-center my-6">
                <SocialMedia iconSize={15} classProps="gap-2 max-sm:hidden" />
                <h1 className="max-sm:text-4xl text-3xl uppercase font-serif cursor-default">Journal</h1>
                <div className="max-sm:hidden">
                    <HeaderModal />
                </div>
            </div>
        </>
    )
}