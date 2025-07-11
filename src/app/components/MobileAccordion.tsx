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
        className="block py-4 px-6 text-base font-medium text-gray-300 hover:text-white hover:bg-[var(--color-neutral)]/5 transition-colors"
      >
        {menuT(item.titleKey)}
      </Link>
    );
  }

  return (
    <div className="border-b border-[var(--color-neutral)]/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 px-6 text-base font-medium text-gray-300 hover:text-white hover:bg-[var(--color-neutral)]/5 transition-colors"
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
            className="overflow-hidden bg-[var(--color-dark-green)]/20"
          >
            <div className="py-2">
              {item.subItems.map((subItem) => (
                <Link 
                  key={subItem.id}
                  href={subItem.href}
                  className="block px-8 py-3 hover:bg-[var(--color-neutral)]/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {subItem.icon && (
                      <div className="w-8 h-8 rounded-lg bg-[var(--color-dark-green)] flex items-center justify-center text-[var(--color-primary)]">
                        {React.createElement(subItem.icon, { size: 18 })}
                      </div>
                    )}
                    <div>
                      <h3 className="text-sm font-medium text-white">{menuT(subItem.titleKey)}</h3>
                      {subItem.descriptionKey && (
                        <p className="text-xs text-[var(--color-neutral)]/70 mt-0.5">
                          {menuT(subItem.descriptionKey)}
                        </p>
                      )}
                    </div>
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