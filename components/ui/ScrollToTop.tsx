"use client";

import { useState, useEffect } from "react";
import { CircularProgress } from "@nextui-org/react";
export const ScrollToTop = () => {

    const [value, setValue] = useState<number>(0);
    useEffect(() => {
        const handleScroll = (): void => {
            const scrollY = Math.floor(window.scrollY);
            const height = Math.floor(window.document.body.offsetHeight - window.innerHeight);
            setValue(Math.round(scrollY / (height!) * 100));
        }
        window.addEventListener("scroll", () => {
            handleScroll();
        });
    }, []);


    return (
        <>
            <CircularProgress
                label=""
                size="lg"
                value={value}
                color="secondary"
                formatOptions={{ style: "percent" }}
                showValueLabel={true}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="items-center justify-center fixed bottom-4 right-4 z-50 cursor-pointer bg-white rounded-full shadow-lg"
            />
        </>
    )
};