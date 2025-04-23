import { CircuitBoard, ArrowLeftRight, Webhook, CreditCard, Users, Rss, LifeBuoy } from 'lucide-react';

export interface SubMenuItem {
  id: string;
  titleKey: string;
  href: string;
  descriptionKey?: string;
  icon?: React.ElementType;
  image?: string;
}

export interface MenuItem {
  id: string;
  titleKey: string;
  href: string;
  hasDropdown?: boolean;
  subItems?: SubMenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    id: "products",
    titleKey: "products.title",
    href: "/products",
    hasDropdown: true,
    subItems: [
      {
        id: "product-1",
        titleKey: "products.items.cardProcessor.title",
        href: "/products/product-1",
        descriptionKey: "products.items.cardProcessor.description",
        icon: CircuitBoard,
        image: "/images/operation-system.png"
      },
      {
        id: "product-2",
        titleKey: "products.items.paymentGateway.title",
        href: "/products/product-2",
        descriptionKey: "products.items.paymentGateway.description",
        icon: ArrowLeftRight,
        image: "/images/solutions/paymentGateway.jpg"
      },
      {
        id: "product-3",
        titleKey: "products.items.apis.title",
        href: "/products/product-3",
        descriptionKey: "products.items.apis.description",
        icon: Webhook,
        image: "/images/solutions/apis.jpg"
      },
      {
        id: "product-4",
        titleKey: "products.items.binSponsor.title",
        href: "/products/product-3",
        descriptionKey: "products.items.binSponsor.description",
        icon: CreditCard,
        image: "/images/solutions/binSponsor.jpg"
      },
    ]
  },
  {
    id: "company",
    titleKey: "company.title",
    href: "/company"
  },
  {
    id: "resources",
    titleKey: "resources.title",
    href: "/resources",
    hasDropdown: true,
    subItems: [
      {
        id: "resource-1",
        titleKey: "resources.items.aboutUs.title",
        href: "/resources/resource-1",
        descriptionKey: "resources.items.aboutUs.description",
        icon: Users
      },
      {
        id: "resource-2",
        titleKey: "resources.items.blog.title",
        href: "/resources/resource-2",
        descriptionKey: "resources.items.blog.description",
        icon: Rss
      },
      {
        id: "resource-3",
        titleKey: "resources.items.helpCenter.title",
        href: "/resources/resource-3",
        descriptionKey: "resources.items.helpCenter.description",
        icon: LifeBuoy
      }
    ]
  },
  {
    id: "blog",
    titleKey: "blog.title",
    href: "/blog"
  },
  {
    id: "help",
    titleKey: "help.title",
    href: "/help"
  }
];