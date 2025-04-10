import { CircuitBoard, ArrowLeftRight, Webhook, CreditCard, Users, Rss, LifeBuoy } from 'lucide-react';

export interface SubMenuItem {
  id: string;
  title: string;
  href: string;
  description?: string;
  icon?: React.ElementType;
  image?: string;
}

export interface MenuItem {
  id: string;
  title: string;
  href: string;
  hasDropdown?: boolean;
  subItems?: SubMenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    id: "products",
    title: "Products",
    href: "/products",
    hasDropdown: true,
    subItems: [
      {
        id: "product-1",
        title: "Processadora de Cartões",
        href: "/products/product-1",
        description: "Soluções de pagamento tecnológicas",
        icon: CircuitBoard
      },
      {
        id: "product-2",
        title: "Gateway de Pagamento",
        href: "/products/product-2",
        description: "Transações em tempo real",
        icon: ArrowLeftRight
      },
      {
        id: "product-3",
        title: "APIs e TOS",
        href: "/products/product-3",
        description: "Integrações da plataforma",
        icon: Webhook
      },
      {
        id: "product-4",
        title: "BIN Sponsor & Emissão de Cartões ",
        href: "/products/product-3",
        description: "Solução completa para emissão de cartões de crédito, débito, múltiplo e pré-pago",
        icon: CreditCard
      },
    ]
  },
  {
    id: "company",
    title: "Company",
    href: "/company"
  },
  {
    id: "resources",
    title: "Resources",
    href: "/resources",
    hasDropdown: true,
    subItems: [
      {
        id: "resource-1",
        title: "Sobre nós",
        href: "/resources/resource-1",
        description: "Conheça a Tamborine",
        icon: Users
      },
      {
        id: "resource-2",
        title: "Blog",
        href: "/resources/resource-2",
        description: "Notícias e Artigos",
        icon: Rss
      },
      {
        id: "resource-3",
        title: "Help Center",
        href: "/resources/resource-3",
        description: "Central de Ajuda",
        icon: LifeBuoy
      }
    ]
  },
  {
    id: "blog",
    title: "Blog",
    href: "/blog"
  },
  {
    id: "help",
    title: "Help",
    href: "/help"
  }
];
