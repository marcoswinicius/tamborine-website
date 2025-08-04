"use client";

import { motion } from 'framer-motion';
import { Shield, Zap, Globe2, CreditCard, Smartphone, Lock } from 'lucide-react';
import BackgroundSquares from '@/app/components/ui/BackgroundSquares';
import CTA from '@/app/components/CTA';
import Link from 'next/link';

export default function GatewayDePagamentoPage() {
  const features = [
    {
      icon: Shield,
      title: "Segurança Máxima",
      description: "Tecnologia de criptografia avançada e conformidade com PCI-DSS Level 1 para proteção total dos dados."
    },
    {
      icon: Zap,
      title: "Processamento Instantâneo",
      description: "Transações aprovadas em milésimo de segundos com disponibilidade 24/7."
    },
    {
      icon: Globe2,
      title: "Alcance Global",
      description: "Aceite pagamentos de clientes do mundo todo com suporte a 150+ moedas e métodos de pagamento locais."
    },
    {
      icon: CreditCard,
      title: "Múltiplos Métodos",
      description: "Processe qualquer cartão em uma única integração."
    },
    {
      icon: Smartphone,
      title: "Suporte a Wallets",
      description: "Interface responsiva e otimizada para dispositivos móveis garantindo melhor experiência do usuário."
    },
    {
      icon: Lock,
      title: "Antifraude Inteligente",
      description: "Sistema de machine learning que identifica e bloqueia tentativas de fraude em tempo real."
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
              Gateway Completo
            </span>
            <span className="text-white">Todos os métodos de pagamento</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl  title-gradient-hero mb-6 max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Gateway de <span className="no-gradient">Pagamento</span> Definitivo
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gradient-hero max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Aceite pagamentos de qualquer lugar do mundo com o gateway mais completo do mercado. 
            Segurança máxima, integração simples e suporte a todos os métodos de pagamento populares.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href='/contato'>
              <button className="button px-8 py-4 text-lg font-medium">
                Começar Agora
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
              Tecnologia de <span className="no-gradient">pagamento</span> que converte.
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Nosso gateway oferece todos os recursos necessários para maximizar suas conversões 
              e proporcionar a melhor experiência de pagamento para seus clientes.
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

      {/* Payment Methods Section */}

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
              Métodos de <span className="no-gradient">Pagamento</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Ofereça a seus clientes a flexibilidade de escolher como pagar. 
              Suportamos os métodos mais populares do Brasil e do mundo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paymentMethods.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{category.category}</h3>
                <div className="space-y-2">
                  {category.methods.map((method, methodIndex) => (
                    <div key={methodIndex} className="text-white/80 text-sm">
                      {method}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> 
      
      */}

      {/* Gateway Visualization Section */}

      {/* 
      
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
                Experiência de <span className="no-gradient">Checkout</span> Perfeita
              </h2>
              <p className="text-lg text-gradient-hero mb-8">
                Nosso checkout foi desenvolvido para converter mais vendas, com interface intuitiva, 
                carregamento rápido e processo simplificado que seus clientes vão adorar.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-dark-green)]"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Checkout Transparente</h4>
                    <p className="text-white/80">Cliente finaliza a compra sem sair do seu site, mantendo a experiência da marca.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-dark-green)]"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Checkout Redirecionado</h4>
                    <p className="text-white/80">Página de pagamento hospedada e certificada para máxima segurança.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-dark-green)]"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">One Click Payment</h4>
                    <p className="text-white/80">Pagamento com um clique para clientes recorrentes usando tokenização segura.</p>
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
                    src="/icon/gateway.svg"
                    alt="Gateway de Pagamento"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> 
      
      */}

      {/* Benefits Section */}
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
              Resultados <span className="no-gradient">Comprovados</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Empresas que utilizam nosso gateway experienciam melhorias significativas 
              em suas métricas de conversão e vendas.
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
      */}

      {/* Integration Process Section */}

    
      {/* 
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
              Integração <span className="no-gradient">Simplificada</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Configure seu gateway de pagamento em poucos passos e comece a vender hoje mesmo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-[var(--color-primary)]/20 rounded-2xl p-6 mb-4">
                  <div className="text-3xl  text-[var(--color-primary)] mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/80 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> 
      */}

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
              Performance <span className="no-gradient">Excepcional</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "0,5ms", label: "Tempo de aprovação" },
              { number: "99.9%", label: "Uptime garantido" },
              { number: "150+", label: "Moedas suportadas" },
              { number: "24/7", label: "Suporte técnico" }
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