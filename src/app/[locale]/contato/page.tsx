"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Phone, Clock, MapPin, MessageSquare, Users, Headphones, Handshake, Shield, Send, Linkedin, Instagram, AlertCircle } from 'lucide-react';
import BackgroundSquares from '@/app/components/ui/BackgroundSquares';

export default function ContatoPage() {
  const t = useTranslations('contact');
  
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
  const [errorMessage, setErrorMessage] = useState<string>('');

  const contactOptions = [
    {
      icon: Users,
      title: t('contactOptions.options.client.title'),
      description: t('contactOptions.options.client.description'),
      email: t('contactOptions.options.client.email'),
      color: "primary"
    },
    {
      icon: Headphones,
      title: t('contactOptions.options.support.title'),
      description: t('contactOptions.options.support.description'),
      email: t('contactOptions.options.support.email'),
      color: "blue"
    },
    {
      icon: Handshake,
      title: t('contactOptions.options.partnerships.title'),
      description: t('contactOptions.options.partnerships.description'),
      email: t('contactOptions.options.partnerships.email'),
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
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem');
      }

      setSubmitStatus('success');
      setFormData({
        nome: '',
        email: '',
        cnpj: '',
        telefone: '',
        assunto: '',
        mensagem: ''
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Erro ao enviar mensagem. Tente novamente.');
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
                  {t('badge')}
                </span>
                <span className="text-white">{t('badgeSubtitle')}</span>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl  title-gradient-hero mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('title.part1')} <span className="no-gradient">{t('title.part2')}</span>
              </motion.h1>

              <motion.p 
                className="text-lg md:text-xl text-gradient-hero mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t('subtitle')}
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
                      <p className="text-white font-medium text-sm">{t('info.email')}</p>
                      <p className="text-white/80 text-xs">contato@tamborine.com.br</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                    <div>
                      <p className="text-white font-medium text-sm">{t('info.phone')}</p>
                      <p className="text-white/80 text-xs">(11) 3000-1234</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-[var(--color-primary)]" />
                    <div>
                      <p className="text-white font-medium text-sm">{t('info.whatsapp')}</p>
                      <p className="text-white/80 text-xs">(11) 99999-1234</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                    <div>
                      <p className="text-white font-medium text-sm">{t('info.hours')}</p>
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
                <h2 className="text-2xl  text-white mb-2">{t('form.title')}</h2>
                <p className="text-white/80">{t('form.subtitle')}</p>
              </div>

              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{t('form.success.title')}</h3>
                  <p className="text-white/80 mb-4">{t('form.success.description')}</p>
                  <button 
                    onClick={() => setSubmitStatus('idle')}
                    className="button px-6 py-3 text-sm"
                  >
                    {t('form.success.newMessage')}
                  </button>
                </div>
              ) : submitStatus === 'error' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Erro ao enviar mensagem</h3>
                  <p className="text-white/80 mb-4">{errorMessage}</p>
                  <button 
                    onClick={() => setSubmitStatus('idle')}
                    className="button px-6 py-3 text-sm"
                  >
                    Tentar novamente
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-white font-medium mb-1 text-sm">
                        {t('form.fields.name')} {t('form.fields.required')}
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[var(--color-primary)] focus:outline-none transition-colors text-sm"
                        placeholder={t('form.fields.namePlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-1 text-sm">
                        {t('form.fields.email')} {t('form.fields.required')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[var(--color-primary)] focus:outline-none transition-colors text-sm"
                        placeholder={t('form.fields.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cnpj" className="block text-white font-medium mb-1 text-sm">
                        {t('form.fields.cnpj')}
                      </label>
                      <input
                        type="text"
                        id="cnpj"
                        name="cnpj"
                        value={formData.cnpj}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[var(--color-primary)] focus:outline-none transition-colors text-sm"
                        placeholder={t('form.fields.cnpjPlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="telefone" className="block text-white font-medium mb-1 text-sm">
                        {t('form.fields.phone')} {t('form.fields.required')}
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[var(--color-primary)] focus:outline-none transition-colors text-sm"
                        placeholder={t('form.fields.phonePlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="assunto" className="block text-white font-medium mb-1 text-sm">
                      {t('form.fields.subject')} {t('form.fields.required')}
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-[var(--color-primary)] focus:outline-none transition-colors text-sm"
                    >
                      <option value="">{t('form.fields.subjectPlaceholder')}</option>
                      <option value="comercial">{t('form.subjects.commercial')}</option>
                      <option value="suporte">{t('form.subjects.support')}</option>
                      <option value="parcerias">{t('form.subjects.partnerships')}</option>
                      <option value="imprensa">{t('form.subjects.press')}</option>
                      <option value="outros">{t('form.subjects.others')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-white font-medium mb-1 text-sm">
                      {t('form.fields.message')} {t('form.fields.required')}
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[var(--color-primary)] focus:outline-none transition-colors resize-vertical text-sm"
                      placeholder={t('form.fields.messagePlaceholder')}
                    />
                  </div>

                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                      <p className="text-white/90 text-xs">
                        <strong>{t('form.privacy.title')}</strong> {t('form.privacy.description')}
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
                        {t('form.submitting')}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t('form.submit')}
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
            <h2 className="text-3xl md:text-5xl  title-gradient-hero mb-6">
              {t('contactOptions.title.part1')} <span className="no-gradient">{t('contactOptions.title.part2')}</span>
            </h2>
            <p className="text-lg text-gradient-hero max-w-3xl mx-auto">
              {t('contactOptions.subtitle')}
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
              <h2 className="text-3xl md:text-4xl  title-gradient-hero mb-6">
                {t('socialMedia.title.part1')} <span className="no-gradient">{t('socialMedia.title.part2')}</span>
              </h2>
              <p className="text-lg text-gradient-hero mb-8">
                {t('socialMedia.subtitle')}
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
              <h3 className="text-2xl  text-white mb-6">{t('additionalInfo.title')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{t('additionalInfo.businessHours.title')}</h4>
                    <p className="text-white/80">{t('additionalInfo.businessHours.description')}</p>
                    <p className="text-white/60 text-sm">{t('additionalInfo.businessHours.note')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{t('additionalInfo.certifications.title')}</h4>
                    <p className="text-white/80">{t('additionalInfo.certifications.description')}</p>
                    <p className="text-white/60 text-sm">{t('additionalInfo.certifications.note')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{t('additionalInfo.operation.title')}</h4>
                    <p className="text-white/80">{t('additionalInfo.operation.description')}</p>
                    <p className="text-white/60 text-sm">{t('additionalInfo.operation.note')}</p>
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
