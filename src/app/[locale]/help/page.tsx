"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Book, MessageSquare, FileText, CreditCard, Code, Settings, ChevronDown, ChevronRight, Phone, Mail } from 'lucide-react';
import BackgroundSquares from '@/app/components/ui/BackgroundSquares';

export default function HelpCenterPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = [
    {
      icon: CreditCard,
      title: "Emissão de Cartões",
      description: "Tudo sobre criação, personalização e gestão de cartões",
      articles: 12,
      color: "blue"
    },
    {
      icon: Code,
      title: "APIs e Integração",
      description: "Documentação técnica e guias de implementação",
      articles: 8,
      color: "green"
    },
    {
      icon: Settings,
      title: "TOS - Operation System",
      description: "Como usar nossa plataforma de gestão",
      articles: 15,
      color: "purple"
    },
    {
      icon: FileText,
      title: "Documentação",
      description: "Manuais, guias e especificações técnicas",
      articles: 10,
      color: "orange"
    }
  ];

  const frequentQuestions = [
    {
      question: "Como criar minha primeira API key?",
      answer: "Para criar sua primeira API key, acesse o painel administrativo do TOS, vá em 'Configurações' > 'API Keys' e clique em 'Gerar Nova Chave'. Certifique-se de copiar e armazenar a chave em local seguro, pois ela não será exibida novamente."
    },
    {
      question: "Qual o tempo de aprovação para emissão de cartões?",
      answer: "O tempo de aprovação varia conforme o tipo de cartão: Cartões virtuais são aprovados instantaneamente, cartões físicos levam de 1-3 dias úteis para produção e 5-7 dias úteis para entrega via correios."
    },
    {
      question: "Como integrar o webhook de notificações?",
      answer: "Configure webhooks no painel TOS em 'Integrações' > 'Webhooks'. Informe a URL de destino e selecione os eventos que deseja receber. Teste a integração usando nosso ambiente sandbox antes de ativar em produção."
    },
    {
      question: "Quais são os limites de transação?",
      answer: "Os limites padrão são: R$ 5.000 por transação e R$ 50.000 por dia para cartões de crédito. Para cartões de débito: R$ 2.000 por transação e R$ 20.000 por dia. Limites personalizados podem ser configurados conforme necessário."
    },
    {
      question: "Como funciona o sistema antifraude?",
      answer: "Nosso sistema antifraude utiliza machine learning para analisar padrões de transação em tempo real. Ele considera localização, horário, valor e histórico do usuário para determinar o risco de cada transação automaticamente."
    },
    {
      question: "Como acessar relatórios de transações?",
      answer: "Acesse 'Dashboard' > 'Relatórios' no TOS. Você pode filtrar por período, tipo de transação, status e exportar dados em CSV ou PDF. Relatórios personalizados podem ser configurados para envio automático por email."
    }
  ];

  const quickActions = [
    {
      icon: Book,
      title: "Documentação da API",
      description: "Referência completa da nossa API REST",
      link: "/docs/api"
    },
    {
      icon: Code,
      title: "Guias de Integração",
      description: "Exemplos práticos de implementação",
      link: "/docs/integration"
    },
    {
      icon: Settings,
      title: "Configurar TOS",
      description: "Primeiros passos com nossa plataforma",
      link: "/docs/tos"
    },
    {
      icon: CreditCard,
      title: "Emitir Cartão",
      description: "Tutorial passo a passo",
      link: "/docs/cards"
    }
  ];

  const filteredFaqs = frequentQuestions.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden py-20">
        <BackgroundSquares className='absolute inset-0 opacity-80' />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="bg-white/20 px-4 py-2 rounded-full text-sm border border-[var(--color-primary)] border-opacity-40 mb-6 flex items-center gap-2 w-fit mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="bg-[var(--color-primary)] text-[var(--color-dark-green)] font-medium px-3 py-1 rounded-full text-xs">
                Central de Ajuda
              </span>
              <span className="text-white">Estamos aqui para ajudar</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl  title-gradient-hero mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Central de <span className="no-gradient">Ajuda</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-gradient-hero mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Encontre respostas, guias e suporte para aproveitar ao máximo as soluções Tamborine. 
              Nossa documentação completa está aqui para ajudar você.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              className="relative max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Pesquisar na central de ajuda..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-[var(--color-primary)] focus:outline-none transition-colors text-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
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
              Categorias de <span className="no-gradient">Ajuda</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Explore nossa base de conhecimento organizada por temas para encontrar rapidamente o que você precisa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[var(--color-primary)]/30 transition-colors cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)]/30 transition-colors">
                  <category.icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-white/80 mb-4 text-sm">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--color-primary)] text-sm font-medium">
                    {category.articles} artigos
                  </span>
                  <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-[var(--color-primary)] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
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
              Ações <span className="no-gradient">Rápidas</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Acesse rapidamente os recursos mais utilizados e comece a implementar suas soluções.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.a
                key={index}
                href={action.link}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[var(--color-primary)]/30 transition-colors group block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/20 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)]/30 transition-colors">
                  <action.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                <p className="text-white/80 text-sm">{action.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Perguntas <span className="no-gradient">Frequentes</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Respostas para as dúvidas mais comuns sobre nossas soluções e plataforma.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === index ? 'auto' : 0,
                    opacity: expandedFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {searchTerm && filteredFaqs.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white/80 text-lg">
                Nenhum resultado encontrado para &quot;{searchTerm}&quot;. 
                Tente outras palavras-chave ou entre em contato conosco.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
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
              Ainda Precisa de <span className="no-gradient">Ajuda?</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Nossa equipe de suporte está sempre pronta para ajudar você com qualquer dúvida ou problema.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">E-mail Suporte</h3>
              <p className="text-white/80 mb-4">Para dúvidas técnicas e administrativas</p>
              <a 
                href="mailto:suporte@tamborine.com.br"
                className="text-[var(--color-primary)] hover:underline font-medium"
              >
                suporte@tamborine.com.br
              </a>
              <p className="text-white/60 text-sm mt-2">Resposta em até 4 horas</p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Suporte Telefônico</h3>
              <p className="text-white/80 mb-4">Para questões urgentes e críticas</p>
              <a 
                href="tel:+551130001234"
                className="text-[var(--color-primary)] hover:underline font-medium"
              >
                (11) 3000-1234
              </a>
              <p className="text-white/60 text-sm mt-2">Seg a Sex, 9h às 18h</p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Chat ao Vivo</h3>
              <p className="text-white/80 mb-4">Para suporte instantâneo online</p>
              <button className="button px-6 py-2 text-sm font-medium">
                Iniciar Chat
              </button>
              <p className="text-white/60 text-sm mt-2">Disponível 24/7</p>
            </motion.div>
          </div>

          {/* Service Status */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <h4 className="text-lg font-semibold text-white">Status dos Serviços</h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-white/60">API</p>
                  <p className="text-green-400 font-medium">Operacional</p>
                </div>
                <div>
                  <p className="text-white/60">TOS</p>
                  <p className="text-green-400 font-medium">Operacional</p>
                </div>
                <div>
                  <p className="text-white/60">Emissão</p>
                  <p className="text-green-400 font-medium">Operacional</p>
                </div>
                <div>
                  <p className="text-white/60">Gateway</p>
                  <p className="text-green-400 font-medium">Operacional</p>
                </div>
              </div>
              <p className="text-white/60 text-xs mt-4">
                Última atualização: {new Date().toLocaleString('pt-BR')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}