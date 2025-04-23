import {createNavigation} from 'next-intl/navigation';

export const locales = ['en', 'pt'] as const;
export const defaultLocale = 'pt';

export type Locale = (typeof locales)[number];

export const pathnames = {
  '/': '/',
  '/blog': '/blog',
  '/products': {
    en: '/products',
    pt: '/produtos'
  },
  '/company': {
    en: '/company',
    pt: '/empresa'
  },
  '/contact': {
    en: '/contact',
    pt: '/contato'
  },
  '/resources': {
    en: '/resources',
    pt: '/recursos'
  },
  '/help': {
    en: '/help',
    pt: '/ajuda'
  }
} as const;

export const {Link, redirect, usePathname, useRouter} = createNavigation({
  locales,
  defaultLocale,
  pathnames
});