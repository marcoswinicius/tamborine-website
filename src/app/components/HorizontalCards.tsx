'use client';

import Image from 'next/image';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import TeamExpanses from '@/app/components/ui/TeamExpanses';
import CreditCard from '@/app/components/ui/CreditCard'
import hrSvgUrl from "../../../public/images/hr-management.svg";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: React.FC<React.SVGProps<SVGSVGElement>> | React.ReactNode;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, children }) => {
  return (
    <div className="max-w-[555px] w-full h-[320px] md:h-[350px] bg-[#4D6142]/30 rounded-lg flex flex-col justify-between shadow-lg flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      {imageUrl ? (
        <div className="mb-3 md:mb-4 flex items-center justify-center w-full h-32 md:h-40 lg:h-48 overflow-hidden">
          <div className="w-full h-full scale-[0.85] md:scale-90 lg:scale-100 transform transition-transform">
            {typeof imageUrl === 'function' ? React.createElement(imageUrl) : imageUrl}
          </div>
        </div>
      ) : children ? (
        <div className="mb-3 pt-8 md:pt-12 lg:pt-16 flex items-center justify-center w-full overflow-hidden">
          <div className="w-full h-full scale-[0.85] md:scale-90 lg:scale-100 transform transition-transform">
            {children}
          </div>
        </div>
      ) : null}
      <div className='pl-4 md:pl-6 lg:pl-8 pb-5 md:pb-7'>
        <h3 className="text-lg md:text-xl font-medium mb-2 text-[#F0F0F0]">{title}</h3>
        <p className="text-neutral text-sm md:text-base mb-4 line-clamp-3 title-gradient-custom">{description}</p>
      </div>
      {!children && children}
    </div>
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
  // Referência para a seção que contém os cards
  const sectionRef = useRef<HTMLDivElement>(null);
  // Referência para o container dos cards
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Estados para controlar o comportamento do componente
  const [translateX, setTranslateX] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [cardWidth, setCardWidth] = useState(555);
  const [cardGap, setCardGap] = useState(26);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Usar IntersectionObserver para detectar quando o componente está visível
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Dados internos dos cards
  const defaultCards: CardProps[] = [
    {
      title: "Track your team's expenses",
      description: "See what your team spends the most on",
      children: <TeamExpanses />
    },
    {
      title: "One card for all your needs",
      description: "Get both virtual and physical versions",
      children: <CreditCard />
    },
    {
      title: "Simple transaction overview",
      description: "Track your spending with ease",
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

  // Atualizar dimensões baseado no tamanho da tela
  const updateDimensions = useCallback(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    // Atualizar o tamanho do card e gap baseado no tamanho da tela
    if (mobile) {
      setCardWidth(280);
      setCardGap(16); // 4rem em mobile
    } else {
      setCardWidth(555);
      setCardGap(26); // 26px em desktop
    }

    // Calcular o máximo de translate que deve ser aplicado
    calculateMaxTranslate();
  }, []);

  // Calcular o valor máximo de translateX (para o último card ficar visível)
  const calculateMaxTranslate = useCallback(() => {
    if (!cardsContainerRef.current || isMobile) return;

    const containerWidth = cardsContainerRef.current.parentElement?.offsetWidth || 0;
    const totalCardsWidth = cardsToRender.length * (cardWidth + cardGap) - cardGap;

    // Definir o máximo para que o último card fique visível
    const maxValue = Math.max(0, totalCardsWidth - containerWidth);
    setMaxTranslate(maxValue);

    // Configuração inicial: o terceiro card deve estar parcialmente visível
    if (cardsToRender.length > 2 && !isMobile) {
      const initialTranslate = -(2 * cardWidth + cardGap) + (containerWidth * 0.5);
      setTranslateX(initialTranslate);
    }
  }, [cardWidth, cardGap, cardsToRender.length, isMobile]);

  // Handler para o scroll da página
  const handleScroll = useCallback(() => {
    if (isMobile || !sectionRef.current || !inView) return;

    // Calcular posição relativa do componente na viewport
    const rect = sectionRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Progresso do scroll através do componente (0 a 1)
    let progress = 0;

    // Se o componente acabou de entrar na viewport pelo topo
    if (rect.top < viewportHeight && rect.bottom > 0) {
      // Calcula o progresso com base na posição do componente
      progress = Math.min(1, Math.max(0, 1 - (rect.top / (viewportHeight - rect.height * 0.5))));
    } else if (rect.top <= 0 && rect.bottom >= 0) {
      // Componente está parcialmente visível na viewport
      progress = Math.min(1, Math.max(0, rect.bottom / (viewportHeight + rect.height)));
    }

    setScrollProgress(progress);

    // Aplica o progresso do scroll ao translateX
    if (!isDragging && maxTranslate > 0) {
      const newTranslateX = -(maxTranslate * progress);
      setTranslateX(newTranslateX);
    }
  }, [inView, isDragging, isMobile, maxTranslate]);

  // Atualizar translateX quando o scroll progress muda
  useEffect(() => {
    if (isMobile) return;

    // Calcular o translateX com base no progresso do scroll
    const newTranslateX = maxTranslate * scrollProgress * -1;

    // Aplicar limites
    if (!isDragging) {
      setTranslateX(Math.max(-maxTranslate, Math.min(0, newTranslateX)));
    }
  }, [scrollProgress, maxTranslate, isDragging, isMobile]);

  // Efeito para configurar e limpar o listener de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Atualizar dimensões quando o tamanho da tela mudar
  useEffect(() => {
    updateDimensions();
    calculateMaxTranslate();

    const handleResize = () => {
      updateDimensions();
      calculateMaxTranslate();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateDimensions, calculateMaxTranslate]);

  // Recalcular quando inView mudar
  useEffect(() => {
    if (inView) {
      calculateMaxTranslate();
      handleScroll();
    }
  }, [inView, calculateMaxTranslate, handleScroll]);

  // Handlers para arrastar cards manualmente
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isMobile) return; // Permitir comportamento nativo em mobile

    setIsDragging(true);

    const clientX = 'touches' in e
      ? (e as React.TouchEvent).touches[0].clientX
      : (e as React.MouseEvent).clientX;

    setStartX(clientX);
    setScrollLeft(translateX);

    // Prevenir comportamento padrão apenas para mouse
    if ('clientX' in e) {
      e.preventDefault();
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || isMobile) return;

    const clientX = 'touches' in e
      ? (e as React.TouchEvent).touches[0].clientX
      : (e as React.MouseEvent).clientX;

    const x = clientX;
    const walk = (startX - x) * 1.5; // Fator de sensibilidade do arrasto

    // Calcular o novo translateX com limites
    const newTranslateX = Math.max(-maxTranslate, Math.min(0, scrollLeft - walk));
    setTranslateX(newTranslateX);

    // Calcular o progresso do scroll baseado no novo translateX
    if (maxTranslate > 0) {
      setScrollProgress(Math.abs(newTranslateX) / maxTranslate);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Função para calcular a opacidade baseada na posição do card
  const getCardOpacity = (index: number) => {
    if (isMobile) return 1;

    // Cards no início e o último card têm opacidade máxima
    if (index < 2 || index === cardsToRender.length - 1) return 1;

    // Cards intermediários têm opacidade reduzida gradualmente
    const position = index / (cardsToRender.length - 1);
    return Math.max(0.4, 1 - position * 0.6);
  };

  return (
    <div
      ref={(node) => {
        // Combinar refs
        sectionRef.current = node;
        if (inViewRef) {
          inViewRef(node);
        }
      }}
      className="w-full py-10 md:py-40 overflow-hidden relative bg-horizontal"
    >
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && <h2 className="text-2xl md:text-3xl font-bold title-gradient-custom mb-3">{title}</h2>}
          {subtitle && <p className="text-sm md:text-base text-gradient-custom max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}

      <div className="max-w-full mx-auto relative">
        {/* Gradiente de fade para indicar conteúdo oculto */}
        {!isMobile && (
          <div
            className="absolute right-0 top-0 h-full w-1/4 z-10 pointer-events-none"

          />
        )}

        <div
          ref={cardsContainerRef}
          className={`
            flex gap-4 md:gap-[26px] overflow-x-auto md:overflow-visible px-4 md:px-0 scrollbar-hide
            ${isMobile ? 'scroll-pl-4' : 'md:pl-[152px] md:pr-10'}
            ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
          `}
          style={{
            transform: isMobile ? 'none' : `translateX(${translateX}px)`,
            transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseDown={(e) => handleDragStart(e)}
          onMouseMove={(e) => handleDragMove(e)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e)}
          onTouchMove={(e) => handleDragMove(e)}
          onTouchEnd={handleDragEnd}
        >
          {cardsToRender.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            >
              <div style={{ opacity: getCardOpacity(index) }}>
                {card.children}
              </div>
            </Card>
          ))}
        </div>

        {/* Indicador de scroll para desktop */}
        {!isMobile && (
          <div className="hidden md:flex absolute bottom-[-20px] left-[152px] gap-2">
            {cardsToRender.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-8 rounded-full transition-all ${Math.floor(scrollProgress * (cardsToRender.length - 1)) >= index
                  ? 'bg-[#A7E97F]'
                  : 'bg-[#4A5459]'
                  }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Estilos para esconder a barra de rolagem e configurar scroll snap */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @media (max-width: 768px) {
          .scrollbar-hide {
            scroll-snap-type: x mandatory;
            scroll-padding-left: 1rem;
          }
          
          .scroll-pl-4 > div {
            scroll-snap-align: start;
          }
        }
      `}</style>
    </div>
  );
};

export default HorizontalCards;