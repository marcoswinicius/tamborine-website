"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CreditCard, Shield, Zap, Settings, Globe, Users, Smartphone, Wallet } from 'lucide-react';
import BackgroundSquares from '@/app/components/ui/BackgroundSquares';
import CTA from '@/app/components/CTA';

export default function BinSponsorEmissaoCartoesPage() {
  const cardTypes = [
    {
      icon: CreditCard,
      title: "Cartões de Crédito",
      description: "Emita cartões de crédito com limites flexíveis e funcionalidades avançadas para seus clientes."
    },
    {
      icon: Wallet,
      title: "Cartões de Débito",
      description: "Cartões de débito conectados diretamente às contas dos usuários com transações em tempo real."
    },
    {
      icon: Smartphone,
      title: "Cartões Pré-pagos",
      description: "Soluções de cartões pré-pagos ideais para controle de gastos e programas de benefícios."
    },
    {
      icon: Users,
      title: "Cartões Múltiplos",
      description: "Cartões que funcionam como crédito e débito, oferecendo máxima flexibilidade aos usuários."
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "BIN Próprio Certificado",
      description: "Tenha seu próprio BIN (Bank Identification Number) certificado pelas principais bandeiras internacionais."
    },
    {
      icon: Zap,
      title: "Emissão Instantânea",
      description: "Emita cartões virtuais instantaneamente e cartões físicos com produção e entrega expressa."
    },
    {
      icon: Settings,
      title: "Personalização Total",
      description: "Customize design, funcionalidades, limites e regras de negócio conforme sua necessidade."
    },
    {
      icon: Globe,
      title: "Aceitação Global",
      description: "Cartões aceitos mundialmente através das redes Visa, Mastercard e outras bandeiras parceiras."
    },
    {
      icon: CreditCard,
      title: "Gestão Completa",
      description: "Plataforma completa para gerenciar todo o ciclo de vida dos cartões emitidos."
    },
    {
      icon: Smartphone,
      title: "Carteira Digital",
      description: "Integração nativa com Apple Pay, Google Pay e Samsung Pay para pagamentos contactless."
    }
  ];

  const benefits = [
    {
      title: "Receita Adicional",
      description: "Gere receita através de anuidades, taxas de intercâmbio e serviços premium dos cartões.",
      metric: "Nova fonte de receita"
    },
    {
      title: "Controle Total",
      description: "Tenha controle completo sobre políticas, limites, aprovações e funcionalidades dos cartões.",
      metric: "100% personalizado"
    },
    {
      title: "Lançamento Rápido",
      description: "Do planejamento ao lançamento em tempo recorde com nossa plataforma white-label.",
      metric: "Go-to-market em 90 dias"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultoria e Planejamento",
      description: "Análise do seu negócio e definição da melhor estratégia para seu programa de cartões."
    },
    {
      step: "02",
      title: "Certificação BIN",
      description: "Processo de obtenção e certificação do seu BIN junto às bandeiras internacionais."
    },
    {
      step: "03",
      title: "Desenvolvimento e Design",
      description: "Criação do design dos cartões e desenvolvimento das funcionalidades específicas."
    },
    {
      step: "04",
      title: "Homologação e Testes",
      description: "Testes completos de funcionalidade, segurança e integração antes do lançamento."
    },
    {
      step: "05",
      title: "Produção e Lançamento",
      description: "Início da produção dos cartões físicos e ativação do programa para seus clientes."
    }
  ];

  const managementFeatures = [
    "Bloqueio e desbloqueio em tempo real",
    "Alteração de limites dinâmica",
    "Controle de categorias de gastos",
    "Notificações push personalizadas",
    "Relatórios detalhados de uso",
    "Sistema antifraude avançado",
    "Programa de cashback/rewards",
    "Gestão de cartões virtuais temporários"
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full overflow-hidden bg-hero" style={{ height: 'calc(100vh - 88px)', maxHeight: '900px' }}>
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
              BIN Sponsor
            </span>
            <span className="text-white">Solução completa para emissão</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold title-gradient-hero mb-6 max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            BIN Sponsor e <span className="no-gradient">Emissão</span> de Cartões
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gradient-hero max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Lance seu próprio programa de cartões com BIN certificado e emissão completa. 
            Solução white-label para cartões de crédito, débito, pré-pagos e múltiplos com tecnologia de ponta.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="button px-8 py-4 text-lg font-medium">
              Solicitar Proposta
            </button>
            <button className="px-8 py-4 text-lg font-medium border border-[var(--color-primary)] rounded-full text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors">
              Conhecer Soluções
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Card Types Section */}
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
              Tipos de <span className="no-gradient">Cartões</span> Disponíveis
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Oferecemos soluções completas para todos os tipos de cartões, 
              desde crédito tradicional até soluções inovadoras de cartões múltiplos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardTypes.map((cardType, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center mx-auto mb-4">
                  <cardType.icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{cardType.title}</h3>
                <p className="text-white/80 text-sm">{cardType.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Recursos <span className="no-gradient">Avançados</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Nossa plataforma oferece todos os recursos necessários para operar um programa 
              de cartões completo e competitivo no mercado.
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

      {/* Card Visualization Section */}
      <section className="py-20 bg-solutions">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[var(--color-primary)]/20 to-transparent rounded-2xl p-8">
                <div className="relative aspect-square max-w-md mx-auto">
                  <Image
                    src="/icon/card.svg"
                    alt="Cartão Tamborine"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold title-gradient-hero mb-6">
                Design <span className="no-gradient">Personalizado</span>
              </h2>
              <p className="text-lg text-gradient-hero mb-8">
                Crie cartões únicos que reflitam a identidade da sua marca. 
                Personalize cores, logotipos, texturas e até mesmo materiais especiais.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-dark-green)]"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Cartões Físicos Premium</h4>
                    <p className="text-white/80">Materiais de alta qualidade incluindo metal, madeira e plástico biodegradável.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-dark-green)]"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Cartões Virtuais Dinâmicos</h4>
                    <p className="text-white/80">Cartões virtuais com números temporários para maior segurança online.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-dark-green)]"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Tecnologia Contactless</h4>
                    <p className="text-white/80">NFC integrado para pagamentos por aproximação e compatibilidade total com carteiras digitais.</p>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Vantagens <span className="no-gradient">Competitivas</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Tenha seu próprio programa de cartões e capitalize sobre as oportunidades 
              do mercado financeiro em crescimento.
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
                  <div className="text-2xl font-bold text-[var(--color-primary)] mb-2">
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

      {/* Process Section */}
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
              Processo de <span className="no-gradient">Implementação</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Um processo estruturado e eficiente para levar seu programa de cartões 
              do conceito ao mercado no menor tempo possível.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-[var(--color-primary)]/20 rounded-2xl p-4 mb-4">
                  <div className="text-2xl font-bold text-[var(--color-primary)] mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/80 text-xs">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Features Section */}
      <section className="py-20 bg-horizontal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold title-gradient-hero mb-6">
                Gestão <span className="no-gradient">Completa</span>
              </h2>
              <p className="text-lg text-gradient-hero mb-8">
                Plataforma completa para gerenciar todos os aspectos do seu programa de cartões, 
                desde a emissão até o atendimento ao cliente.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {managementFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] flex-shrink-0"></div>
                    <span className="text-white/90 text-sm">{feature}</span>
                  </motion.div>
                ))}
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
                    src="/icon/bin.svg"
                    alt="BIN Sponsor"
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
              Números que <span className="no-gradient">Comprovam</span> Nossa Excelência
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50M+", label: "Cartões emitidos" },
              { number: "99.8%", label: "Uptime da plataforma" },
              { number: "90 dias", label: "Time to market" },
              { number: "24/7", label: "Suporte especializado" }
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