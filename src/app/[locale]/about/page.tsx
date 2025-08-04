"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Target, Eye, Zap, Shield, Lightbulb, Heart } from 'lucide-react';
import BackgroundSquares from '@/app/components/ui/BackgroundSquares';
import CTA from '@/app/components/CTA';

export default function About() {
  const milestones = [
    {
      year: "2019",
      title: "Fundação Tamborine",
      description: "Iniciamos nossa trajetória com o propósito de inovar o setor financeiro."
    },
    {
      year: "2021",
      title: "Contrato com bancos",
      description: "Somos a processadora do maior banco de Minas Gerais."
    },
    {
      year: "2023",
      title: "Emissão de cartões",
      description: "Criamos a belbank, nosso braço dedicado à emissão de cartões."
    },
    {
      year: "2025",
      title: "Expansão",
      description: "Abertura de escritório em São Paulo e início da atuação na América Latina (Uruguai)."
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Desenvolvemos soluções que antecipam as necessidades do mercado financeiro, sempre na vanguarda da tecnologia."
    },
    {
      icon: Zap,
      title: "Escalabilidade", 
      description: "Criamos plataformas que crescem junto com nossos clientes, desde startups até grandes corporações."
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Garantimos a proteção dos dados e transações com os mais altos padrões de segurança da indústria."
    },
    {
      icon: Heart,
      title: "Foco no Cliente",
      description: "Oferecemos soluções personalizadas que atendem às necessidades específicas de cada parceiro."
    }
  ];



  const products = [
    {
      title: "Emissão de Cartões",
      description: "Cartões de crédito, débito, múltiplos, pré-pagos e de benefícios com controles flexíveis e segurança avançada."
    },
    {
      title: "Processamento de Transações",
      description: "Plataforma multibandeira com sistemas antifraude, padrões ISO-8583 e EMV, e contingência multi-cloud."
    },
    {
      title: "APIs para Integração",
      description: "APIs robustas para integração com sistemas de backoffice, facilitando gestão e automação."
    },
    {
      title: "Tamborine Operation System",
      description: "Sistema operacional com interface intuitiva para simplificar a gestão de serviços financeiros."
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
              Desde 2019
            </span>
            <span className="text-white">Transformando o setor financeiro</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl  title-gradient-hero mb-6 max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sobre a <span className="no-gradient">Tamborine</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gradient-hero max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Somos uma empresa de tecnologia inovadora que revoluciona o setor financeiro através de 
            soluções avançadas para emissão de cartões e processamento de pagamentos desde 2019.
          </motion.p>
        </motion.div>
      </section>

      {/* Who We Are Section */}
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
                Quem <span className="no-gradient">Somos</span>
              </h2>
              <p className="text-lg text-gradient-hero mb-6">
                A Tamborine é uma empresa de tecnologia inovadora, fundada em 2019, com a missão de 
                transformar o setor financeiro por meio de soluções avançadas para emissão de cartões 
                e processamento de pagamentos.
              </p>
              <p className="text-lg text-gradient-hero mb-8">
                Nossa plataforma moderna, segura e escalável conecta ideias à inovação financeira, 
                permitindo que instituições financeiras ofereçam serviços de pagamento eficientes e 
                personalizados. Desde o nosso início, buscamos revolucionar a indústria com tecnologia 
                de ponta e expertise financeira.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Nossa Equipe</h4>
                  <p className="text-white/80">Profissionais especializados em tecnologia financeira</p>
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
                    src="/images/team-expanses.svg"
                    alt="Equipe Tamborine"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
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
              Missão e <span className="no-gradient">Visão</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Nossa Missão</h3>
              <p className="text-white/80 text-lg">
                Revolucionar o setor financeiro, desenvolvendo soluções que permitam às instituições 
                financeiras oferecer serviços de pagamento eficientes, seguros e personalizados. 
                Combinamos tecnologia de ponta com expertise financeira para criar plataformas que 
                atendam às necessidades de nossos clientes e seus usuários finais.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Nossa Visão</h3>
              <p className="text-white/80 text-lg">
                Ser reconhecida globalmente como a empresa líder em inovação financeira, 
                transformando continuamente o setor através de soluções escaláveis que 
                acompanhem as demandas do mercado e proporcionem experiências excepcionais 
                para nossos clientes e seus usuários.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Nossa <span className="no-gradient">História</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Uma jornada de inovação e crescimento constante no setor de tecnologia financeira.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="text-center h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-[var(--color-primary)]/20 rounded-2xl p-6 mb-4 flex flex-col justify-between min-h-[220px] h-full">
                  <div>
                    <div className="text-3xl  text-[var(--color-primary)] mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{milestone.title}</h3>
                  </div>
                  <p className="text-white/80 text-sm mt-2">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Nossos <span className="no-gradient">Valores</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Os princípios que guiam nossa atuação e definem nossa cultura organizacional.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/80 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
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
              Produtos e <span className="no-gradient">Serviços</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Oferecemos uma ampla gama de soluções para atender às necessidades do setor financeiro.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                <p className="text-white/80">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
{/*       
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
              Nossas <span className="no-gradient">Conquistas</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Números que refletem nosso compromisso com a excelência e inovação.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-[var(--color-primary)]/20 rounded-2xl p-6 mb-4">
                  <div className="text-3xl md:text-4xl  text-[var(--color-primary)] mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">{achievement.label}</div>
                  <p className="text-white/80 text-sm">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> 
      
      */}

      <CTA />
    </main>
  );
}