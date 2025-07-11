'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguageSwitcher({ isMobile = false }: { isMobile?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const switchToLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 font-medium transition-colors ${
          isMobile 
            ? "w-full px-5 py-3 text-left text-[var(--color-neutral)] hover:text-[var(--color-primary)]"
            : "text-neutral hover:text-[var(--color-primary)]"
        }`}
        aria-label="Mudar idioma"
      >
        <Globe size={18} />
        <span>{locale.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`
              z-50 overflow-hidden rounded-md shadow-lg 
              ${isMobile 
                ? "w-full bg-[var(--color-dark-green)] mt-1"
                : "absolute right-0 top-full mt-2 w-24 bg-dropdown border border-[var(--color-neutral)]/20"
              }
            `}
          >
            <div className="py-1">
              <button
                onClick={() => switchToLocale('pt')}
                className={`${
                  locale === 'pt' ? 'bg-[var(--color-neutral)]/10' : ''
                } w-full px-4 py-2 text-left text-sm hover:bg-[var(--color-neutral)]/10 ${
                  isMobile ? 'text-[var(--color-neutral)] hover:text-[var(--color-primary)]' : 'text-neutral'
                }`}
              >
                Português
              </button>
              <button
                onClick={() => switchToLocale('en')}
                className={`${
                  locale === 'en' ? 'bg-[var(--color-neutral)]/10' : ''
                } w-full px-4 py-2 text-left text-sm hover:bg-[var(--color-neutral)]/10 ${
                  isMobile ? 'text-[var(--color-neutral)] hover:text-[var(--color-primary)]' : 'text-neutral'
                }`}
              >
                English
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}