'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const WhyTamborine: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [5, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 1, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 md:py-32 bg-gradient-to-b from-[#202B30] to-[#20302C]"
    >
      <div className="absolute inset-0 bg-[url('/images/bg-starts.svg')] bg-center bg-no-repeat opacity-20 mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Text Content - Left Side on Desktop */}
          <div className="order-2 md:order-1 flex">
            <div>

            </div>
            <div className="hidden md:flex flex-col items-center mr-8">
              +   {/* Linha vertical com gradiente e animação */}
              +   <div className="w-[2px] h-32 bg-gradient-to-b from-[#A7E97F] to-transparent rounded animate-pulse"></div>
              +   {/* Ponto decorativo no fim da linha */}
              +   <div className="w-2 h-2 bg-[#A7E97F] rounded-full mt-2 animate-ping"></div>
              + </div>
            <motion.div
              style={{ opacity, y: textY }}
              className="space-y-6"
            >
              <h2 className="text-xl md:text-2xl font-medium text-[#A7E97F] tracking-wider">
                POR QUE TAMBORINE
              </h2>

              <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium title-gradient-custom">
                Nossa abordagem única oferece uma nova perspectiva para o setor de tecnologia financeira.
              </h3>

              <p className="text-lg md:text-xl text-gradient-custom">
                Saiba mais sobre como a Tamborine está transformando a indústria de serviços financeiros com inovação e soluções escaláveis.
              </p>

              <div className="pt-4">
                <button className="button py-3 px-8 text-base md:text-lg font-medium hover:shadow-lg transition-all duration-300">
                  Conheça nossas soluções
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6 pt-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#A7E97F]/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#A7E97F" strokeWidth="1.5" />
                      <path d="M15 9L11 13L9 11" stroke="#A7E97F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[#F0F0F0]">Tecnologia avançada</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#A7E97F]/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#A7E97F" strokeWidth="1.5" />
                      <path d="M15 9L11 13L9 11" stroke="#A7E97F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[#F0F0F0]">Soluções escaláveis</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#A7E97F]/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#A7E97F" strokeWidth="1.5" />
                      <path d="M15 9L11 13L9 11" stroke="#A7E97F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[#F0F0F0]">Segurança garantida</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image - Right Side on Desktop */}
          <div className="order-1 md:order-2" ref={imageRef}>
            <motion.div
              className="relative mx-auto w-full max-w-md md:max-w-none"
              style={{
                scale: isMobile ? 1 : imageScale,
                rotate: isMobile ? 0 : imageRotate,
                opacity
              }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#202B30]/80 via-transparent to-transparent z-10"></div>
                <Image
                  src="/images/card.avif"
                  alt="Tamborine Card"
                  className=""
                  priority
                  width={332}
                  height={496}
                />


                {/* Card Highlight */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="p-6 backdrop-blur-md bg-white/5 rounded-xl border border-white/10 shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#A7E97F] rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 9H21M7 15H9M13 15H15M7 5H17C19.2091 5 21 6.79086 21 9V15C21 17.2091 19.2091 19 17 19H7C4.79086 19 3 17.2091 3 15V9C3 6.79086 4.79086 5 7 5Z" stroke="#202B30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="text-white">
                        <div className="text-sm font-semibold">Tamborine Card</div>
                        <div className="text-xs text-white/70">Inovação em pagamentos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#A7E97F]/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#A7E97F]/5 rounded-full filter blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default WhyTamborine;