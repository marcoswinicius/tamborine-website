'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from '@/app/data/menuItems';
import { useTranslations } from 'next-intl';

interface MobileAccordionProps {
  item: MenuItem;
}

export default function MobileAccordion({ item }: MobileAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuT = useTranslations('menu');

  if (!item.hasDropdown || !item.subItems) {
    return (
      <Link 
        href={item.href}
        className="group flex items-center justify-between py-4 px-6 text-base font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:border-[var(--color-primary)]/30"
      >
        <span>{menuT(item.titleKey)}</span>
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Link>
    );
  }

  return (
    <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 px-6 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
        aria-expanded={isOpen}
      >
        <span>{menuT(item.titleKey)}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[var(--color-primary)]"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-gradient-to-r from-white/5 to-white/10 border-t border-white/10"
          >
            <div className="p-3 space-y-2">
              {item.subItems.map((subItem) => (
                <Link 
                  key={subItem.id}
                  href={subItem.href}
                  className="group block p-3 hover:bg-white/10 transition-all duration-300 rounded-lg border border-transparent hover:border-[var(--color-primary)]/30"
                >
                  <div className="flex items-center gap-3">
                    {subItem.icon && (
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/5 flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300">
                        {React.createElement(subItem.icon, { size: 20 })}
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">
                        {menuT(subItem.titleKey)}
                      </h3>
                      {subItem.descriptionKey && (
                        <p className="text-xs text-white/60 mt-1 leading-relaxed">
                          {menuT(subItem.descriptionKey)}
                        </p>
                      )}
                    </div>
                    <div className="w-1 h-1 rounded-full bg-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}