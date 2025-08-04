import { CircuitBoard, ArrowLeftRight, Webhook, CreditCard, Users } from 'lucide-react';

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
        href: "/processadora-de-cartoes",
        descriptionKey: "products.items.cardProcessor.description",
        icon: CircuitBoard,
        image: "/images/solutions/cardProcessor.png"
      },
      {
        id: "product-2",
        titleKey: "products.items.paymentGateway.title",
        href: "/gateway-de-pagamento",
        descriptionKey: "products.items.paymentGateway.description",
        icon: ArrowLeftRight,
        image: "/images/solutions/paymentGateway.png"
      },
      {
        id: "product-3",
        titleKey: "products.items.apis.title",
        href: "/tos",
        descriptionKey: "products.items.apis.description",
        icon: Webhook,
        image: "/images/solutions/apis.png"
      },
      {
        id: "product-4",
        titleKey: "products.items.binSponsor.title",
        href: "/bin-sponsor-e-emissao-de-cartoes",
        descriptionKey: "products.items.binSponsor.description",
        icon: CreditCard,
        image:  "/images/solutions/binSponsor.png"
      },
    ]
  },
  {
    id: "company",
    titleKey: "company.title",
    href: "/about"
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
        href: "/about",
        descriptionKey: "resources.items.aboutUs.description",
        icon: Users
      },
    ]
  },
];