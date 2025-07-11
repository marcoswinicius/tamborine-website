'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem } from '@/app/data/menuItems';
import MobileAccordion from './MobileAccordion';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './ui/LanguageSwitcher';

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
          className="fixed top-[88px] right-0 w-full h-[calc(100vh-88px)] bg-[#192029] z-40 overflow-y-auto"
        >
          <div className="flex flex-col">
            {/* Menu Items */}
            <div className="border-b border-[var(--color-neutral)]/10">
              {menuItems.map((item) => (
                <div key={item.id}>
                  {item.hasDropdown ? (
                    <MobileAccordion item={item} />
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-4 px-6 text-base font-medium text-gray-300 hover:text-white hover:bg-[var(--color-neutral)]/5 transition-colors"
                    >
                      {menuT(item.titleKey)}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* Language Switcher */}
            <div className="border-b border-[var(--color-neutral)]/10">
              <LanguageSwitcher isMobile={true} />
            </div>
            
            {/* Contact Button */}
            <div className="p-6">
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