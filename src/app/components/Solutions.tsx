"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/menuItems';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';


const TIMER_DURATION = 10000; // 5 seconds per tab

const Solutions = () => {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const products = menuItems.find(item => item.id === "products")?.subItems || [];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the lg breakpoint in Tailwind
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isPaused && !isMobile) {
      timerRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % products.length);
      }, TIMER_DURATION);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused, products.length, isMobile]);

  const MobileAccordion = () => (
    <div className="lg:hidden space-y-2 px-4">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          className="border-b border-white/10 last:border-b-0"
          initial={false}
        >
          <button
            className="w-full p-4 flex items-center justify-between"
            onClick={() => setActiveTab(activeTab === index ? -1 : index)}
          >
            <div className="flex items-center gap-3">
              {product.icon && <product.icon size={20} />}
              <span className="text-lg font-medium">{t(product.titleKey)}</span>
            </div>
            <motion.div
              animate={{ rotate: activeTab === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>
          <AnimatePresence>
            {activeTab === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 pt-0">
                  {/* Image Section */}
                  <div className="mb-6">
                    <div className="rounded-xl overflow-hidden bg-[var(--color-dark-green)] p-3">
                      <div className="relative aspect-[7/3]">
                        <Image
                          src={product.image || `/images/solutions/${product.id}.jpg`}
                          alt={t(product.titleKey)}
                          fill
                          className="object-cover rounded-xl"
                          priority
                        />
                      </div>
                    </div>
                  </div>

                  <p className="text-white/80 mb-4">{t(product.descriptionKey || '')}</p>
                  <Link
                    href={product.href}
                    className="text-[var(--color-primary)] hover:underline inline-flex items-center"
                  >
                    Saiba mais <ChevronDown className="w-4 h-4 rotate-[-90deg] ml-1" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );

  const DesktopTabs = () => (
    <div className="hidden lg:flex flex-col lg:flex-row gap-14 2xl:gap-28">
      {/* Image Section - Fixed to the left */}
      <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:left-0 max-w-[50%] 2xl:max-w-[40%]">
        <motion.div
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] pr-20 py-24 bg-solid rounded-tr-3xl rounded-br-3xl"
            >
              <div className="relative rounded-tr-3xl rounded-br-3xl p-[2px] bg-gradient-to-r from-[var(--color-solid)] via-[var(--color-primary)] to-[var(--color-solid)]">
                <div className="bg-[var(--color-solid)] rounded-tr-3xl rounded-br-3xl overflow-hidden">
                  <Image
                    src={products[activeTab].image || `/images/solutions/${products[activeTab].id}.jpg`}
                    alt={t(products[activeTab].titleKey)}
                    width={528}
                    height={628}
                    className="rounded-tr-3xl rounded-br-3xl"
                    priority
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Tabs Section - Adapts to screen size */}
      <div className="w-full lg:w-1/2 lg:pl-8 lg:pr-4 max-w-[563.19px] space-y-6 lg:space-y-32">
        <div className='flex flex-col gap-4'>
          <p className='text-gradient-hero text-base md:text-lg lg:text-xl'>
            Descubra a plataforma mais moderna e escalável para serviços financeiros. <br /><br />Tamborine: agilidade e personalização em soluções de pagamento
          </p>
          <Link href={"/contact"}>
            <span className='underline'>Quero descobrir mais</span>
          </Link>
        </div>
        <div className="flex flex-col divide-y divide-white/10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={`relative p-6 cursor-pointer transition-all duration-300 min-h-28 flex items-center  ${activeTab === index
                  ? 'bg-[var(--color-solid)] shadow-lg'
                  : 'bg-transparent hover:bg-white/5'
                }`}
              onClick={() => {
                setActiveTab(index);
                setIsPaused(true);
              }}
            >
              <div className="flex items-start gap-4">
                {product.icon && <product.icon size={24} />}
                <div>
                  <h3 className={`text-xl font-medium ${activeTab === index ? 'text-white' : 'text-[var(--color-neutral)]'
                    }`}>
                    {t(product.titleKey)}
                  </h3>
                  <AnimatePresence>
                    {activeTab === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="mt-2 text-white/80">{t(product.descriptionKey || '')}</p>
                        <Link
                          href={product.href}
                          className="mt-4 inline-flex items-center text-[var(--color-primary)] hover:underline"
                        >
                          Saiba mais <ChevronDown className="w-4 h-4 rotate-[-90deg] ml-1" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              {activeTab === index && !isPaused && (
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-[var(--color-primary)]"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: TIMER_DURATION / 1000, ease: 'linear' }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-solutions">
      <h2 className="title-gradient-hero text-4xl md:text-5xl lg:text-7xl mb-28 leading-tight lg:leading-[89px] tracking-[-0.02em] text-center max-w-[1200px] mx-auto px-4">
        {t('solutions.title')}
      </h2>

      {isMobile ? <MobileAccordion /> : <DesktopTabs />}
    </section>
  );
};

export default Solutions;