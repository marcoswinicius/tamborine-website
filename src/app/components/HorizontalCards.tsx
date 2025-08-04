'use client';

import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import TeamExpanses from '@/app/components/ui/TeamExpanses';
import CreditCard from '@/app/components/ui/CreditCard'
import hrSvgUrl from "../../../public/images/hr-management.svg";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: React.FC<React.SVGProps<SVGSVGElement>> | React.ReactNode;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps & { index: number; scrollProgress: number }> = ({ 
  title, 
  description, 
  imageUrl, 
  children, 
  index, 
  scrollProgress 
}) => {
  // Calcular transformações baseado no progresso e índice
  const opacity = Math.max(0.4, 1 - Math.abs(scrollProgress - index * 0.3) * 2);
  const scale = 0.9 + (1 - Math.abs(scrollProgress - index * 0.3)) * 0.1;

  return (
    <motion.div 
      className="min-w-[320px] md:min-w-[555px] w-[320px] md:w-[555px] h-[300px] md:h-[350px] bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col justify-between shadow-lg border border-white/10 hover:border-[var(--color-primary)]/30 transition-all duration-500"
      style={{ 
        opacity,
        scale,
        transition: 'all 0.3s ease-out'
      }}
      whileHover={{ 
        scale: scale * 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {imageUrl ? (
        <div className="mb-3 md:mb-4 flex items-center justify-center w-full h-32 md:h-40 lg:h-48 overflow-hidden rounded-t-2xl">
          <div className="w-full h-full scale-[0.85] md:scale-90 lg:scale-100 transform transition-transform">
            {typeof imageUrl === 'function' ? React.createElement(imageUrl) : imageUrl}
          </div>
        </div>
      ) : children ? (
        <div className="mb-3 pt-8 md:pt-12 lg:pt-16 flex items-center justify-center w-full overflow-hidden">
          <div className="flex items-center justify-center w-full h-full scale-[0.85] md:scale-90 lg:scale-100 transform transition-transform">
            {children}
          </div>
        </div>
      ) : null}
      
      <div className='px-6 pb-6'>
        <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-white/80 text-sm md:text-base leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

interface HorizontalCardsProps {
  cards?: CardProps[];
  title?: string;
  subtitle?: string;
}

const HorizontalCards: React.FC<HorizontalCardsProps> = ({
  cards,
  title,
  subtitle
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Hook do Framer Motion para scroll - sempre executado
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transformar o progresso do scroll em movimento horizontal - sempre executado
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -600]
  );

  // Detectar mobile - sempre executado primeiro
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Atualizar o progress baseado no scroll - sempre executado
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollProgress(latest);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // Dados internos dos cards
  const defaultCards: CardProps[] = [
    {
      title: "Máxima gestão de dados",
      description: "Acompanhe todos os dados de transações e autorizações em tempo real pelo TOS",
      children: <TeamExpanses />
    },
    {
      title: "Emita seu cartão de forma rápida e escalável",
      description: "Obtenha versões virtuais e físicas com personalização completa, limites flexíveis e controle total de gastos.",
      children: <CreditCard />
    },
    {
      title: "Visão simples das transações",
      description: "Acompanhe seus gastos com facilidade através de dashboard intuitivo e relatórios automatizados personalizáveis.",
      imageUrl: (
        <Image 
          src={hrSvgUrl} 
          alt="HR Management" 
          width={150} 
          height={150} 
          className="w-full h-full object-contain"
        />
      )
    },
  ];

  // Usar os cards passados por props ou os defaultCards
  const cardsToRender = cards || defaultCards;

  return (
    <section 
      ref={containerRef}
      className="w-full py-16 md:py-24 overflow-hidden bg-horizontal"
    >
      {(title || subtitle) && (
        <motion.div 
          className="container mx-auto px-4 md:px-6 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {title && (
            <h2 className="text-3xl md:text-5xl  title-gradient-hero mb-6">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}

      <div className="relative">
        {/* Desktop: Scroll horizontal animado */}
        {!isMobile && (
          <motion.div
            className="flex gap-8 pl-[10%]"
            style={{ x }}
          >
            {cardsToRender.map((card: CardProps, index: number) => (
              <Card
                key={index}
                index={index}
                scrollProgress={scrollProgress}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
              >
                {card.children}
              </Card>
            ))}
          </motion.div>
        )}

        {/* Mobile: Scroll horizontal nativo */}
        {isMobile && (
          <div className="overflow-x-auto px-4 scrollbar-hide">
            <div className="flex gap-4 pb-4">
              {cardsToRender.map((card: CardProps, index: number) => (
                <Card
                  key={index}
                  index={index}
                  scrollProgress={0}
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                >
                  {card.children}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Indicadores de progresso para desktop */}
        {!isMobile && (
          <motion.div 
            className="flex justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {cardsToRender.map((_: CardProps, index: number) => {
              const isActive = Math.floor(scrollProgress * cardsToRender.length) >= index;
              return (
                <div
                  key={index}
                  className={`h-1 w-8 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-[var(--color-primary)]' : 'bg-white/30'
                  }`}
                />
              );
            })}
          </motion.div>
        )}
      </div>

      {/* Estilos para esconder scrollbar no mobile */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-snap-type: x mandatory;
        }
        
        .scrollbar-hide > div > div {
          scroll-snap-align: start;
        }
      `}</style>
    </section>
  );
};

export default HorizontalCards;