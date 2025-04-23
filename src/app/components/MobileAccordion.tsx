'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        className="block py-4 px-6 text-lg font-medium border-b border-[var(--color-neutral)]/10 hover:bg-[var(--color-neutral)]/5 transition-colors"
      >
        {menuT(item.titleKey)}
      </Link>
    );
  }

  return (
    <div className="border-b border-[var(--color-neutral)]/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 px-6 text-lg font-medium hover:bg-[var(--color-neutral)]/5 transition-colors"
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
            <div className="py-3 px-4 space-y-4">
              {item.subItems.map((subItem) => (
                <div key={subItem.id} className="p-2 rounded-lg hover:bg-[var(--color-neutral)]/5 transition-colors">
                  <Link 
                    href={subItem.href}
                    className="block"
                  >
                    <div className="flex items-center gap-3">
                      {subItem.icon && (
                        <div className="w-10 h-10 rounded-lg bg-[var(--color-dark-green)] flex items-center justify-center text-[var(--color-primary)]">
                          {React.createElement(subItem.icon, { size: 22 })}
                        </div>
                      )}
                      <div>
                        <h3 className="text-base font-medium text-white">{menuT(subItem.titleKey)}</h3>
                        {subItem.descriptionKey && (
                          <p className="text-sm text-[var(--color-neutral)]/70 mt-0.5">
                            {menuT(subItem.descriptionKey)}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    {/* Show image if available */}
                    {subItem.image && (
                      <div className="mt-3 rounded-lg overflow-hidden">
                        <div className="relative h-32">
                          <Image
                            src={subItem.image}
                            alt={menuT(subItem.titleKey)}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}