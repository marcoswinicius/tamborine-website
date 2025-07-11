"use client";

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContatoPage() {
  const t = useTranslations();
  const [form, setForm] = useState({
    nome: '',
    email: '',
    empresa: '',
    cargo: '',
    telefone: '',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Aqui você pode adicionar integração com backend
  }

  return (
    <main className="container mx-auto px-4 py-16 max-w-xl">
      <h1 className="text-3xl font-bold mb-4">{t('contact.title', { default: 'Contato' })}</h1>
      <p className="mb-8">{t('contact.description', { default: 'Entre em contato conosco preenchendo o formulário abaixo.' })}</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome" className="block mb-1 font-medium">Nome</label>
          <input type="text" id="nome" name="nome" required value={form.nome} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label htmlFor="empresa" className="block mb-1 font-medium">Empresa</label>
          <input type="text" id="empresa" name="empresa" value={form.empresa} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label htmlFor="cargo" className="block mb-1 font-medium">Cargo</label>
          <input type="text" id="cargo" name="cargo" value={form.cargo} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label htmlFor="telefone" className="block mb-1 font-medium">Telefone</label>
          <input type="tel" id="telefone" name="telefone" value={form.telefone} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label htmlFor="mensagem" className="block mb-1 font-medium">Mensagem</label>
          <textarea id="mensagem" name="mensagem" required rows={4} value={form.mensagem} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">Enviar</button>
        {submitted && (
          <p className="text-green-600 mt-2">Mensagem enviada com sucesso!</p>
        )}
      </form>
    </main>
  );
}
