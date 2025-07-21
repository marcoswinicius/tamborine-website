"use client";

import { useTranslations } from "next-intl";
import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";
import animationData from "../../../public/animations/rising-graph-loader.json";

const Display = () => {
    const t = useTranslations("display");
    
    const { ref, inView } = useInView({
        threshold: 0.3, // Animação inicia quando 30% da div estiver visível
        triggerOnce: true, // Executa apenas uma vez
    });
    
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
                <div 
                    ref={ref}
                    className="w-full bg-[var(--color-solid)] rounded-4xl h-[500px] relative overflow-hidden"
                    style={{
                        backgroundImage: "url('/images/displayBackground.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="absolute inset-0 z-10">
                        {inView && (
                            <Lottie
                                animationData={animationData}
                                loop={false}
                                autoplay={true}
                                style={{ 
                                    width: '100%', 
                                    height: '100%'
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Display;