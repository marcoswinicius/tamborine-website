'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem } from '@/app/data/menuItems';
import MobileAccordion from './MobileAccordion';
import { useTranslations } from 'next-intl';

interface MobileMenuProps {
  isOpen: boolean;
  menuItems: MenuItem[];
}

export default function MobileMenu({ isOpen, menuItems }: MobileMenuProps) {
  const menuT = useTranslations('menu');
  const commonT = useTranslations('common');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed top-[72px] right-0 w-full h-[calc(100vh-72px)] bg-[var(--color-dark-green)] bg-hero  z-40 overflow-y-auto"
        >
          <div className="py-4">
            {menuItems.map((item) => (
              <div key={item.id}>
                {item.hasDropdown ? (
                  <MobileAccordion item={item} />
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-base text-neutral"
                  >
                    {menuT(item.titleKey)}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="px-6 py-6">
              <Link 
                href="/contact"
                className="block w-full py-3 px-4 text-center font-medium rounded-md bg-[var(--color-primary)] text-[var(--color-solid)] hover:bg-opacity-90 transition-colors"
              >
                {commonT('contactUs')}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}