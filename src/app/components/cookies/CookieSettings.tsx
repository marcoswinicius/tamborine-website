'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, BarChart3, Target } from 'lucide-react';
import { CookiePreferences } from '@/app/hooks/useCookieConsent';

interface CookieSettingsProps {
  show: boolean;
  preferences: CookiePreferences;
  onSave: (preferences: CookiePreferences) => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onClose: () => void;
}

export default function CookieSettings({
  show,
  preferences,
  onSave,
  onAcceptAll,
  onRejectAll,
  onClose
}: CookieSettingsProps) {
  const t = useTranslations('cookies.settings');
  const [localPreferences, setLocalPreferences] = useState<CookiePreferences>(preferences);

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Can't toggle necessary cookies
    
    setLocalPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    onSave(localPreferences);
  };

  const cookieTypes = [
    {
      key: 'necessary' as keyof CookiePreferences,
      icon: Shield,
      title: t('necessary.title'),
      description: t('necessary.description'),
      disabled: true,
    },
    {
      key: 'analytics' as keyof CookiePreferences,
      icon: BarChart3,
      title: t('analytics.title'),
      description: t('analytics.description'),
      disabled: false,
    },
    {
      key: 'marketing' as keyof CookiePreferences,
      icon: Target,
      title: t('marketing.title'),
      description: t('marketing.description'),
      disabled: false,
    },
  ];

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 500,
              duration: 0.3 
            }}
            className="fixed inset-4 sm:inset-8 md:inset-16 lg:inset-24 xl:inset-32 z-50 flex items-center justify-center"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-2xl max-h-full overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {t('title')}
                  </h2>
                  <button
                    onClick={onClose}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {t('description')}
                </p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
                {cookieTypes.map((type) => {
                  const Icon = type.icon;
                  const isEnabled = localPreferences[type.key];
                  
                  return (
                    <div key={type.key} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#a7e97f] to-[#7dd3fc] rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-gray-900" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            {type.title}
                          </h3>
                          
                          {/* Toggle Switch */}
                          <button
                            onClick={() => handleToggle(type.key)}
                            disabled={type.disabled}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a7e97f] ${
                              isEnabled
                                ? 'bg-gradient-to-r from-[#a7e97f] to-[#7dd3fc]'
                                : 'bg-gray-200 dark:bg-gray-700'
                            } ${type.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                isEnabled ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                        
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <div className="flex gap-3 sm:order-1">
                    <button
                      onClick={onRejectAll}
                      className="flex-1 sm:flex-none bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-2 px-4 rounded-lg text-sm transition-all duration-200 hover:scale-105"
                    >
                      {t('rejectAll')}
                    </button>
                    
                    <button
                      onClick={onAcceptAll}
                      className="flex-1 sm:flex-none bg-gradient-to-r from-[#a7e97f] to-[#7dd3fc] text-gray-900 font-medium py-2 px-4 rounded-lg text-sm hover:shadow-lg transition-all duration-200 hover:scale-105"
                    >
                      {t('acceptAll')}
                    </button>
                  </div>
                  
                  <button
                    onClick={handleSave}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-lg text-sm transition-all duration-200 hover:scale-105 sm:order-2"
                  >
                    {t('save')}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
