"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CreditCard, Shield, Zap, Globe, BarChart3, Clock } from 'lucide-react';
import BackgroundSquares from '@/app/components/ui/BackgroundSquares';
import CTA from '@/app/components/CTA';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function ProcessadoraDeCartoesPage() {
  const t = useTranslations('cardProcessorPage');
  const features = [
    {
      icon: Shield,
      title: t('features.items.security.title'),
      description: t('features.items.security.description')
    },
    {
      icon: Zap,
      title: t('features.items.processing.title'),
      description: t('features.items.processing.description')
    },
    {
      icon: Globe,
      title: t('features.items.global.title'),
      description: t('features.items.global.description')
    },
    {
      icon: BarChart3,
      title: t('features.items.analytics.title'),
      description: t('features.items.analytics.description')
    },
    {
      icon: Clock,
      title: t('features.items.support.title'),
      description: t('features.items.support.description')
    },
    {
      icon: CreditCard,
      title: t('features.items.cards.title'),
      description: t('features.items.cards.description')
    }
  ];

  const benefits = [
    {
      title: t('benefits.items.costs.title'),
      description: t('benefits.items.costs.description'),
      metric: t('benefits.items.costs.metric')
    },
    {
      title: t('benefits.items.conversion.title'),
      description: t('benefits.items.conversion.description'),
      metric: t('benefits.items.conversion.metric')
    },
    {
      title: t('benefits.items.integration.title'),
      description: t('benefits.items.integration.description'),
      metric: t('benefits.items.integration.metric')
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full overflow-hidden" style={{ height: 'calc(100vh - 88px)', maxHeight: '900px' }}>
        <BackgroundSquares className='absolute inset-0 opacity-80' />
        <motion.div 
          className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="bg-white/20 px-4 py-2 rounded-full text-sm border border-[var(--color-primary)] border-opacity-40 mb-6 flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="bg-[var(--color-primary)] text-[var(--color-dark-green)] font-medium px-3 py-1 rounded-full text-xs">
              {t('hero.badge.highlight')}
            </span>
            <span className="text-white">{t('hero.badge.description')}</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl  title-gradient-hero mb-6 max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gradient-hero max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact">
              <button className="button px-8 py-4 text-lg font-medium">
                {t('hero.cta')}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-solutions">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl  title-gradient-hero mb-6">
              {t('features.title')}
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-horizontal">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl  title-gradient-hero mb-6">
              {t('benefits.title')}
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              {t('benefits.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-[var(--color-primary)]/20 rounded-2xl p-8 mb-6">
                  <div className="text-3xl  text-[var(--color-primary)] mb-2">
                    {benefit.metric}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-solutions">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl  title-gradient-hero mb-6">
                {t('technology.title')}
              </h2>
              <p className="text-lg text-gradient-hero mb-8">
                {t('technology.subtitle')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-dark-green)]"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{t('technology.features.cloud.title')}</h4>
                    <p className="text-white/80">{t('technology.features.cloud.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-dark-green)]"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{t('technology.features.ml.title')}</h4>
                    <p className="text-white/80">{t('technology.features.ml.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-dark-green)]"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{t('technology.features.apis.title')}</h4>
                    <p className="text-white/80">{t('technology.features.apis.description')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[var(--color-primary)]/20 to-transparent rounded-2xl p-8">
                <div className="relative aspect-square max-w-md mx-auto">
                  <Image
                    src="/images/solutions/cardProcessor.png"
                    alt="Processamento de Cartões"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-horizontal">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl  title-gradient-hero mb-6">
              {t('stats.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "1M+", label: t('stats.items.transactions') },
              { number: "99.99%", label: t('stats.items.uptime') },
              { number: "150ms", label: t('stats.items.responseTime') },
              { number: "500+", label: t('stats.items.companies') }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl  text-[var(--color-primary)] mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}