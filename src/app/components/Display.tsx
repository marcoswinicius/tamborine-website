"use client";

import { useTranslations } from "next-intl";

const Display = () => {
    const t = useTranslations("display");
    
    return (
        <div className="flex flex-col items-center w-full justify-center space-y-12 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
                    <span className="no-gradient text-[var(--color-primary)]">{t("title")}</span>
                    <span className="title-gradient-hero">
                    {' '}{t("subtitle")}
                    </span>
                </h2>
            </div>
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
                <div className="w-full bg-[var(--color-solid)] rounded-4xl h-[500px]">
                
                </div>
                   
            </div>
        </div>
    );
}

export default Display;