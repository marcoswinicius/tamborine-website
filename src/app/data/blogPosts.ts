export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  featured: boolean;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "O Futuro dos Pagamentos Digitais no Brasil",
    slug: "futuro-pagamentos-digitais-brasil",
    excerpt: "Explore as tendências emergentes no setor de pagamentos digitais e como elas estão transformando o mercado financeiro brasileiro.",
    content: "O setor de pagamentos digitais no Brasil está passando por uma transformação sem precedentes...",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    category: "payments",
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-15",
    readTime: 5,
    featured: true,
    author: {
      name: "Maria Silva",
      role: "Especialista em FinTech",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b2e42a84?w=100&h=100&fit=crop&crop=face"
    },
    tags: ["pagamentos", "fintech", "brasil", "digital"]
  },
  {
    id: "2",
    title: "Como as APIs Estão Revolucionando o Setor Financeiro",
    slug: "apis-revolucionando-setor-financeiro",
    excerpt: "Descubra como as APIs estão permitindo inovações no setor financeiro e facilitando a integração entre diferentes plataformas.",
    content: "As APIs (Application Programming Interfaces) estão no centro da revolução digital...",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    category: "technology",
    publishedAt: "2024-01-12",
    updatedAt: "2024-01-12",
    readTime: 7,
    featured: false,
    author: {
      name: "João Santos",
      role: "Desenvolvedor Senior",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    tags: ["apis", "tecnologia", "integração", "fintech"]
  },
  {
    id: "3",
    title: "Segurança em Transações: Melhores Práticas",
    slug: "seguranca-transacoes-melhores-praticas",
    excerpt: "Aprenda sobre as principais medidas de segurança que toda empresa deve implementar para proteger transações financeiras.",
    content: "A segurança em transações financeiras é uma preocupação fundamental...",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=400&fit=crop",
    category: "fintech",
    publishedAt: "2024-01-10",
    updatedAt: "2024-01-10",
    readTime: 6,
    featured: true,
    author: {
      name: "Ana Costa",
      role: "Especialista em Segurança",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    tags: ["segurança", "transações", "compliance", "proteção"]
  },
  {
    id: "4",
    title: "BIN Sponsorship: Guia Completo para Emissão de Cartões",
    slug: "bin-sponsorship-guia-completo",
    excerpt: "Entenda como funciona o BIN sponsorship e como sua empresa pode começar a emitir cartões próprios.",
    content: "O BIN (Bank Identification Number) sponsorship é um serviço essencial...",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    category: "payments",
    publishedAt: "2024-01-08",
    updatedAt: "2024-01-08",
    readTime: 8,
    featured: false,
    author: {
      name: "Carlos Oliveira",
      role: "Consultor de Pagamentos",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    tags: ["bin", "cartões", "emissão", "sponsorship"]
  },
  {
    id: "5",
    title: "Inovações em FinTech: Tendências para 2024",
    slug: "inovacoes-fintech-tendencias-2024",
    excerpt: "Descubra as principais tendências e inovações que estão moldando o futuro do setor de FinTech em 2024.",
    content: "O ano de 2024 promete ser um marco para o setor de FinTech...",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    category: "innovation",
    publishedAt: "2024-01-05",
    updatedAt: "2024-01-05",
    readTime: 6,
    featured: true,
    author: {
      name: "Fernanda Lima",
      role: "Analista de Mercado",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    tags: ["fintech", "inovação", "tendências", "2024"]
  },
  {
    id: "6",
    title: "Gateway de Pagamento: Como Escolher o Ideal",
    slug: "gateway-pagamento-como-escolher",
    excerpt: "Um guia prático para ajudar sua empresa a escolher o gateway de pagamento mais adequado às suas necessidades.",
    content: "A escolha do gateway de pagamento certo pode fazer toda a diferença...",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop",
    category: "payments",
    publishedAt: "2024-01-03",
    updatedAt: "2024-01-03",
    readTime: 5,
    featured: false,
    author: {
      name: "Roberto Mendes",
      role: "Consultor Técnico",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face"
    },
    tags: ["gateway", "pagamentos", "escolha", "empresas"]
  }
];
