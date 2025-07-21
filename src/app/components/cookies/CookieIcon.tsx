'use client';

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings } from 'lucide-react';

interface CookieIconProps {
  show: boolean;
  onClick: () => void;
}

export default function CookieIcon({ show, onClick }: CookieIconProps) {
  const t = useTranslations('cookies.icon');

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ 
            type: "spring", 
            damping: 25, 
            stiffness: 500,
            delay: 0.5 // Delay to show after banner disappears
          }}
          className="fixed bottom-4 left-4 z-40"
        >
          <button
            onClick={onClick}
            title={t('tooltip')}
            className="group w-12 h-12 bg-gradient-to-r from-[#a7e97f] to-[#7dd3fc] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
          >
            <Settings className="w-5 h-5 text-gray-900 group-hover:rotate-180 transition-transform duration-300" />
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {t('tooltip')}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
