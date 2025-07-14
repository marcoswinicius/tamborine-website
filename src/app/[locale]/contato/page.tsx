"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, Clock, MapPin, MessageSquare, Users, Headphones, Handshake, Shield, Send, Linkedin, Instagram } from 'lucide-react';
import BackgroundSquares from '@/app/components/ui/BackgroundSquares';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cnpj: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactOptions = [
    {
      icon: Users,
      title: "Quero ser cliente",
      description: "Descubra como nossas soluções podem impulsionar seu negócio",
      email: "contato@tamborine.com.br",
      color: "primary"
    },
    {
      icon: Headphones,
      title: "Suporte técnico",
      description: "Precisa de ajuda com nossa plataforma ou APIs?",
      email: "suporte@tamborine.com.br",
      color: "blue"
    },
    {
      icon: Handshake,
      title: "Parcerias comerciais",
      description: "Vamos construir o futuro dos pagamentos juntos",
      email: "parcerias@tamborine.com.br",
      color: "green"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        nome: '',
        email: '',
        cnpj: '',
        telefone: '',
        assunto: '',
        mensagem: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero Section with Form */}
      <section className="relative w-full overflow-hidden py-20">
        <BackgroundSquares className='absolute inset-0 opacity-80' />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Headline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="bg-white/20 px-4 py-2 rounded-full text-sm border border-[var(--color-primary)] border-opacity-40 mb-6 flex items-center gap-2 w-fit"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="bg-[var(--color-primary)] text-[var(--color-dark-green)] font-medium px-3 py-1 rounded-full text-xs">
                  Fale Conosco
                </span>
                <span className="text-white">Estamos aqui para ajudar</span>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold title-gradient-hero mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Entre em <span className="no-gradient">Contato</span>
              </motion.h1>

              <motion.p 
                className="text-lg md:text-xl text-gradient-hero mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Na Tamborine, estamos prontos para ajudar você a transformar o futuro dos serviços financeiros. 
                Entre em contato com nossa equipe para dúvidas, parcerias ou suporte técnico.
              </motion.p>

              {/* Contact Info Cards */}
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[var(--color-primary)]" />
                    <div>
                      <p className="text-white font-medium text-sm">E-mail</p>
                      <p className="text-white/80 text-xs">contato@tamborine.com.br</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                    <div>
                      <p className="text-white font-medium text-sm">Telefone</p>
                      <p className="text-white/80 text-xs">(11) 3000-1234</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-[var(--color-primary)]" />
                    <div>
                      <p className="text-white font-medium text-sm">WhatsApp</p>
                      <p className="text-white/80 text-xs">(11) 99999-1234</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                    <div>
                      <p className="text-white font-medium text-sm">Horário</p>
                      <p className="text-white/80 text-xs">Seg a Sex, 9h às 18h</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Entre em Contato Conosco</h2>
                <p className="text-white/80">Preencha o formulário e nossa equipe entrará em contato em até 24 horas.</p>
              </div>

              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Mensagem enviada com sucesso!</h3>
                  <p className="text-white/80 mb-4">Nossa equipe entrará em contato em até 24 horas.</p>
                  <button 
                    onClick={() => setSubmitStatus('idle')}
                    className="button px-6 py-3 text-sm"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-white font-medium mb-1 text-sm">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[var(--color-primary)] focus:outline-none transition-colors text-sm"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-1 text-sm">
                        E-mail corporativo *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[var(--color-primary)] focus:outline-none transition-colors text-sm"
                        placeholder="seu@email.com.br"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cnpj" className="block text-white font-medium mb-1 text-sm">
                        CNPJ
                      </label>
                      <input
                        type="text"
                        id="cnpj"
                        name="cnpj"
                        value={formData.cnpj}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[var(--color-primary)] focus:outline-none transition-colors text-sm"
                        placeholder="00.000.000/0000-00"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefone" className="block text-white font-medium mb-1 text-sm">
                        Telefone com DDD *
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[var(--color-primary)] focus:outline-none transition-colors text-sm"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="assunto" className="block text-white font-medium mb-1 text-sm">
                      Assunto *
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-[var(--color-primary)] focus:outline-none transition-colors text-sm"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="comercial">Interesse comercial</option>
                      <option value="suporte">Suporte técnico</option>
                      <option value="parcerias">Parcerias</option>
                      <option value="imprensa">Imprensa</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-white font-medium mb-1 text-sm">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[var(--color-primary)] focus:outline-none transition-colors resize-vertical text-sm"
                      placeholder="Conte-nos como podemos ajudar..."
                    />
                  </div>

                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                      <p className="text-white/90 text-xs">
                        <strong>Seus dados estão protegidos.</strong> Utilizamos criptografia e seguimos rigorosos padrões de segurança.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full button py-3 text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[var(--color-dark-green)] border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
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
              Para Quem é Sua <span className="no-gradient">Mensagem?</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              Direcionamos sua mensagem para a equipe certa, garantindo uma resposta mais rápida e precisa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:border-[var(--color-primary)]/30 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-10 h-10 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{option.title}</h3>
                <p className="text-white/80 mb-4">{option.description}</p>
                <a 
                  href={`mailto:${option.email}`}
                  className="text-[var(--color-primary)] hover:underline text-sm font-medium"
                >
                  {option.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media and Additional Info Section */}
      <section className="py-20 bg-horizontal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold title-gradient-hero mb-6">
                Siga-nos nas <span className="no-gradient">Redes Sociais</span>
              </h2>
              <p className="text-lg text-gradient-hero mb-8">
                Acompanhe as últimas novidades, insights do mercado financeiro e atualizações sobre nossos produtos.
              </p>

              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/company/tamborine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center hover:bg-[var(--color-primary)]/30 transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-[var(--color-primary)] group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://instagram.com/tamborine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center hover:bg-[var(--color-primary)]/30 transition-colors group"
                >
                  <Instagram className="w-6 h-6 text-[var(--color-primary)] group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Informações Adicionais</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Horário de Atendimento</h4>
                    <p className="text-white/80">Segunda a sexta-feira, das 9h às 18h</p>
                    <p className="text-white/60 text-sm">Exceto feriados nacionais</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Certificações</h4>
                    <p className="text-white/80">PCI DSS Level 1 certificado</p>
                    <p className="text-white/60 text-sm">Máxima segurança para seus dados</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Operação</h4>
                    <p className="text-white/80">100% digital e remota</p>
                    <p className="text-white/60 text-sm">Atendimento em todo o Brasil</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
