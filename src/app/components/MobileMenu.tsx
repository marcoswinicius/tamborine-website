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
          className="fixed top-[48px] right-0 w-full h-[calc(100vh-48px)] bg-gradient-to-b from-[#202B30] to-[#0f1419] z-40 overflow-y-auto backdrop-blur-sm"
        >
          <div className="flex flex-col h-full">
            {/* Menu Items */}
            <div className="flex-1 px-4 pt-6">
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.hasDropdown ? (
                      <MobileAccordion item={item} />
                    ) : (
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between py-4 px-6 text-base font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:border-[var(--color-primary)]/30"
                      >
                        <span>{menuT(item.titleKey)}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Language Switcher */}
            <motion.div 
              className="px-4 py-6 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h3 className="text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">Idioma</h3>
                <LanguageSwitcher />
              </div>
            </motion.div>
            
            {/* Contact Button */}
            <motion.div 
              className="p-4 pb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link 
                href="/contact"
                className="flex items-center justify-center gap-3 w-full py-4 px-6 text-center font-semibold rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[#00ff88] text-[var(--color-dark-green)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <span>{commonT('contactUs')}</span>
                <div className="w-2 h-2 rounded-full bg-[var(--color-dark-green)]"></div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}