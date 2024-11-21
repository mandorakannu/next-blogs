import { HeaderModal } from "@ui/Header.Modal"
import { SocialMedia } from "./SocialMedia"


export const Header = () => {

    return (
        <>
            <div className="flex flex-row justify-evenly items-center my-6">
                <SocialMedia iconSize={15} classProps="gap-2" />
                <h1 className="text-3xl uppercase font-serif cursor-default">Journal</h1>
                <HeaderModal />
            </div>
        </>
    )
}