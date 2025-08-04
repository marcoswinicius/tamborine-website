"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code, Database, Settings, Plug, Terminal, BookOpen, Layers, Monitor, Link } from 'lucide-react';
import BackgroundSquares from '@/app/components/ui/BackgroundSquares';
import CTA from '@/app/components/CTA';

export default function ApiETosPage() {
  const features = [
    {
      icon: Code,
      title: "APIs RESTful",
      description: "Endpoints bem estruturados e documentados para integração rápida e eficiente com sua aplicação."
    },
    {
      icon: Database,
      title: "Gestão de Dados",
      description: "Armazenamento seguro e organizado de todas as informações transacionais e operacionais."
    },
    {
      icon: Settings,
      title: "Configuração Flexível",
      description: "Personalize regras de negócio, limites e parâmetros operacionais através de interface intuitiva."
    },
    {
      icon: Plug,
      title: "Integração Simples",
      description: "APIs REST padronizadas com documentação completa para integração direta em qualquer linguagem."
    },
    {
      icon: Terminal,
      title: "Webhook Support",
      description: "Receba notificações em tempo real sobre eventos importantes em suas transações."
    },
    {
      icon: BookOpen,
      title: "Documentação Completa",
      description: "Guias passo a passo, exemplos de código e referência completa da API."
    }
  ];

  const tosFeatures = [
    {
      icon: Monitor,
      title: "Dashboard Executivo",
      description: "Visão consolidada de todas as operações com métricas em tempo real e indicadores de performance.",
      metric: "100+ Métricas"
    },
    {
      icon: Layers,
      title: "Gestão Hierárquica",
      description: "Controle multi-nível de usuários com permissões granulares e auditoria completa.",
      metric: "Níveis Ilimitados"
    },
    {
      icon: Settings,
      title: "Automação Inteligente",
      description: "Workflows automatizados para aprovações, notificações e processos operacionais.",
      metric: "90% Automação"
    }
  ];

  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/api/v1/transactions",
      description: "Criar nova transação de pagamento"
    },
    {
      method: "GET",
      endpoint: "/api/v1/transactions/{id}",
      description: "Consultar status de transação"
    },
    {
      method: "POST",
      endpoint: "/api/v1/cards",
      description: "Emitir novo cartão"
    },
    {
      method: "GET",
      endpoint: "/api/v1/analytics/dashboard",
      description: "Obter dados do dashboard"
    },
    {
      method: "POST",
      endpoint: "/api/v1/webhooks",
      description: "Configurar notificações webhook"
    }
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
              APIs + TOS
            </span>
            <span className="text-white">Integração e Gestão Unificada</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl  title-gradient-hero mb-6 max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            APIs e <span className="no-gradient">Tamborine</span> Operation System
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gradient-hero max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Conecte sua aplicação ao ecossistema Tamborine através de APIs robustas e gerencie todas as operações 
            com nosso sistema proprietário TOS - a plataforma mais completa para administração financeira.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="https://docs.tamborine.app/#section/Autenticacao" target='_blank' className="button px-8 py-4 text-lg font-medium">
              Documentação da API
            </Link>

            <button className="px-8 py-4 text-lg font-medium border border-[var(--color-primary)] rounded-full text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors">
              Demo do TOS
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* API Features Section */}
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
              APIs <span className="no-gradient">Poderosas</span> e Flexíveis
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Integre rapidamente os serviços Tamborine em sua aplicação com nossas APIs bem documentadas, 
              seguras e fáceis de implementar.
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

      {/* API Endpoints Section */}
      <section className="py-20 bg-horizontal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl  title-gradient-hero mb-6">
                Endpoints <span className="no-gradient">Principais</span>
              </h2>
              <p className="text-lg text-gradient-hero mb-8">
                Nossa API REST segue os padrões da indústria com autenticação JWT, rate limiting 
                e documentação OpenAPI completa.
              </p>
              
              <div className="space-y-4">
                {apiEndpoints.map((endpoint, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-[var(--color-primary)] font-mono text-sm">
                        {endpoint.endpoint}
                      </code>
                    </div>
                    <p className="text-white/80 text-sm">{endpoint.description}</p>
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
                    src="/icon/api.svg"
                    alt="API Integration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TOS Section */}
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
              Tamborine <span className="no-gradient">Operation System</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              O TOS é nossa plataforma proprietária que centraliza toda a gestão operacional, 
              oferecendo controle total sobre suas operações financeiras.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {tosFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-[var(--color-primary)]/20 rounded-2xl p-8 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-[var(--color-primary)]/30 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-[var(--color-primary)]" />
                  </div>
                  <div className="text-2xl  text-[var(--color-primary)] mb-2">
                    {feature.metric}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* TOS Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Relatórios Customizáveis",
              "Auditoria Completa",
              "Controle de Acesso",
              "Notificações Inteligentes",
              "Backup Automático",
              "Análise Preditiva",
              "Compliance Automático",
              "Integração Bancária"
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-medium">{feature}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process Section */}
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
              Processo de <span className="no-gradient">Integração</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Implementar nossa solução é simples e rápido. Siga estes passos para estar operacional em pouco tempo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Cadastro e API Keys",
                description: "Crie sua conta e obtenha as chaves de acesso para ambiente de desenvolvimento."
              },
              {
                step: "02",
                title: "Implementação",
                description: "Use nossos SDKs ou integre diretamente via REST API seguindo nossa documentação."
              },
              {
                step: "03",
                title: "Testes",
                description: "Realize testes completos em nosso ambiente sandbox com dados simulados."
              },
              {
                step: "04",
                title: "Produção",
                description: "Migre para ambiente de produção e comece a processar transações reais."
              }
            ].map((step, index) => (
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

      {/* Code Example Section */}
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
                Implementação <span className="no-gradient">Simples</span>
              </h2>
              <p className="text-lg text-gradient-hero mb-8">
                Com apenas algumas linhas de código, você pode integrar todos os nossos serviços 
                e começar a processar pagamentos imediatamente.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-dark-green)]"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">SDKs Oficiais</h4>
                    <p className="text-white/80">Disponível para Node.js, Python, PHP, Java e C#.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-dark-green)]"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Exemplos Práticos</h4>
                    <p className="text-white/80">Repositório GitHub com exemplos de implementação completos.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-dark-green)]"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Suporte Técnico</h4>
                    <p className="text-white/80">Equipe de desenvolvedores prontos para ajudar na integração.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-[var(--color-dark-green)] rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-white/60 ml-2 text-sm">Node.js Example</span>
              </div>
              <pre className="text-[var(--color-primary)] text-sm overflow-x-auto">
{`// Exemplo usando fetch API diretamente
const response = await fetch('https://api.tamborine.com/v1/transactions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-api-key'
  },
  body: JSON.stringify({
    amount: 1000, // R$ 10,00
    currency: 'BRL',
    card: {
      number: '4111111111111111',
      expiryMonth: '12',
      expiryYear: '2025',
      cvv: '123'
    },
    customer: {
      name: 'João Silva',
      email: 'joao@email.com'
    }
  })
});

const transaction = await response.json();
console.log('Transação criada:', transaction.id);`}
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}