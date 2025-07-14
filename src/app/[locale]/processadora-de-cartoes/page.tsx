"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CreditCard, Shield, Zap, Globe, BarChart3, Clock } from 'lucide-react';
import BackgroundSquares from '@/app/components/ui/BackgroundSquares';
import CTA from '@/app/components/CTA';

export default function ProcessadoraDeCartoesPage() {
  const features = [
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Tecnologia de ponta com criptografia de última geração e conformidade com PCI-DSS para máxima proteção de dados."
    },
    {
      icon: Zap,
      title: "Processamento Instantâneo",
      description: "Transações processadas em milissegundos com 99,99% de disponibilidade para garantir a melhor experiência do usuário."
    },
    {
      icon: Globe,
      title: "Cobertura Global",
      description: "Aceite pagamentos de qualquer lugar do mundo com suporte a múltiplas moedas e bandeiras de cartão."
    },
    {
      icon: BarChart3,
      title: "Analytics Avançado",
      description: "Dashboard em tempo real com relatórios detalhados e insights para otimizar suas operações financeiras."
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Equipe especializada disponível a qualquer momento para garantir que suas operações nunca parem."
    },
    {
      icon: CreditCard,
      title: "Múltiplas Bandeiras",
      description: "Suporte completo para Visa, Mastercard, Elo, American Express e outras bandeiras nacionais e internacionais."
    }
  ];

  const benefits = [
    {
      title: "Redução de Custos",
      description: "Diminua significativamente as taxas de processamento com nossa tecnologia otimizada e parcerias estratégicas.",
      metric: "Até 40% de economia"
    },
    {
      title: "Aumento da Conversão",
      description: "Melhore a taxa de aprovação de transações com nosso sistema inteligente de roteamento e análise de risco.",
      metric: "95% de aprovação"
    },
    {
      title: "Integração Rápida",
      description: "APIs bem documentadas e SDKs prontos para uso em principais linguagens de programação.",
      metric: "Integração em 48h"
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
              Processamento Avançado
            </span>
            <span className="text-white">Tecnologia de ponta para pagamentos</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold title-gradient-hero mb-6 max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Processadora de <span className="no-gradient">Cartões</span> de Alta Performance
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gradient-hero max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Processe pagamentos com cartões de crédito e débito utilizando a tecnologia mais avançada do mercado. 
            Segurança máxima, velocidade incomparável e confiabilidade comprovada.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="button px-8 py-4 text-lg font-medium">
              Teste Grátis por 30 dias
            </button>
            <button className="px-8 py-4 text-lg font-medium border border-[var(--color-primary)] rounded-full text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors">
              Falar com Especialista
            </button>
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
            <h2 className="text-3xl md:text-5xl font-bold title-gradient-hero mb-6">
              Recursos que <span className="no-gradient">Revolucionam</span> Pagamentos
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Nossa plataforma oferece todos os recursos necessários para processar pagamentos 
              de forma segura, rápida e eficiente.
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
            <h2 className="text-3xl md:text-5xl font-bold title-gradient-hero mb-6">
              Benefícios <span className="no-gradient">Comprovados</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Empresas que escolhem nossa processadora de cartões experimentam resultados excepcionais.
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
                  <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">
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
              <h2 className="text-3xl md:text-5xl font-bold title-gradient-hero mb-6">
                Tecnologia de <span className="no-gradient">Última Geração</span>
              </h2>
              <p className="text-lg text-gradient-hero mb-8">
                Nossa infraestrutura foi desenvolvida para suportar o volume de transações das maiores empresas 
                do mundo, garantindo performance e estabilidade incomparáveis.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-dark-green)]"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Arquitetura em Nuvem</h4>
                    <p className="text-white/80">Infraestrutura distribuída em múltiplas regiões para máxima disponibilidade.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-dark-green)]"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Machine Learning</h4>
                    <p className="text-white/80">Algoritmos inteligentes para detecção de fraudes e otimização de aprovações.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-dark-green)]"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">APIs RESTful</h4>
                    <p className="text-white/80">Integração simples e documentação completa para desenvolvedores.</p>
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
                    src="/icon/card-process.svg"
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
            <h2 className="text-3xl md:text-5xl font-bold title-gradient-hero mb-6">
              Números que <span className="no-gradient">Impressionam</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "1M+", label: "Transações por dia" },
              { number: "99.99%", label: "Uptime garantido" },
              { number: "150ms", label: "Tempo de resposta" },
              { number: "500+", label: "Empresas confiam" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-2">
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