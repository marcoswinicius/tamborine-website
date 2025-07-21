# Configuração do Resend para Envio de Emails

## Passos para configurar o envio de emails:

### 1. Criar conta no Resend
1. Acesse [https://resend.com](https://resend.com)
2. Crie uma conta gratuita
3. Faça login na dashboard

### 2. Configurar domínio (Recomendado para produção)
1. Na dashboard do Resend, acesse "Domains"
2. Adicione seu domínio (ex: tamborine.com.br)
3. Configure os registros DNS conforme instruções
4. Aguarde a verificação

### 3. Obter API Key
1. Na dashboard, acesse "API Keys"
2. Clique em "Create API Key"
3. Dê um nome para a chave (ex: "Tamborine Website")
4. Selecione as permissões necessárias (Full access para desenvolvimento)
5. Copie a chave gerada

### 4. Configurar variáveis de ambiente
1. Abra o arquivo `.env.local` na raiz do projeto
2. Adicione sua chave API:
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 5. Testar o envio
1. Execute o projeto: `npm run dev`
2. Acesse a página de contato
3. Preencha e envie o formulário
4. Verifique se o email foi recebido

## Recursos implementados:

- ✅ Validação de campos obrigatórios
- ✅ Validação de formato de email
- ✅ Email formatado em HTML
- ✅ Email de confirmação para o usuário
- ✅ Tratamento de erros
- ✅ Estados de loading e feedback
- ✅ Resposta automática em até 24h

## Emails configurados:

1. **Email principal**: Enviado para `contato@tamborine.com.br`
2. **Email de confirmação**: Enviado para o usuário que preencheu o formulário

## Limitações da conta gratuita do Resend:

- 100 emails por dia
- 3,000 emails por mês
- Apenas 1 domínio verificado

Para produção, considere upgrade para plano pago.
