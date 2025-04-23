'use client';

import { LogIn, Sparkle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('hero');
  
  return (
    <section className="bg-hero flex items-center justify-center w-full" style={{ height: 'calc(100vh - 88px)', maxHeight: '900px' }}>
      <motion.div 
        className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Visível apenas no mobile */}
        <motion.span 
          className="block sm:hidden text-primary font-medium text-sm mb-2 w-fit"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('newFeature')}
        </motion.span>

        {/* Container principal */}
        <motion.span 
          className="bg-white/20 px-3 text-white p-2 rounded-full text-sm border border-[var(--color-primary)] border-opacity-40 mb-6 flex flex-wrap items-center justify-center gap-2 sm:justify-start"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Visível apenas no desktop */}
          <motion.span 
            className="hidden sm:inline bg-[var(--color-primary)] text-[var(--color-dark-green)] font-medium px-[9px] py-[1px] rounded-full text-sm whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t('newFeature')}
          </motion.span>

          <motion.p 
            className="text-center sm:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {t('systemName')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <LogIn className="pr-1" size={16} />
          </motion.div>
        </motion.span>

        <motion.h1 
          className="title-gradient-hero text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight lg:leading-[89px] tracking-[-0.02em]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.span 
            className="block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {t('title.part1')}
          </motion.span>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {t('title.part2')}
          </motion.span>
        </motion.h1>

        <motion.p 
          className="text-gradient-hero text-base md:text-lg lg:text-xl max-w-3xl mb-8 lg:leading-[30px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          {t('description')}
        </motion.p>

        <motion.button 
          className="button text-solid cursor-pointer flex items-center gap-2 px-6 py-3 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ 
            y: -1,
            backgroundColor: 'var(--color-primary-faded)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.03 }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, delay: 1.2, repeat: 0 }}
          >
            <Sparkle size={20} />
          </motion.div>
          {t('cta')}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;