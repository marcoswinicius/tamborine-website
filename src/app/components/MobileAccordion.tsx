import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from '@/app/data/menuItems';

interface MobileAccordionProps {
  item: MenuItem;
}

export default function MobileAccordion({ item }: MobileAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.hasDropdown || !item.subItems) {
    return (
      <Link 
        href={item.href}
        className="block py-4 px-6 text-lg font-medium border-b border-gray-200"
      >
        {item.title}
      </Link>
    );
  }

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 px-6 text-lg font-medium"
      >
        <span>{item.title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
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
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-dark-green"
          >
            <div className="py-2 px-6 space-y-4">
              {item.subItems.map((subItem) => (
                <div key={subItem.id} className="py-2">
                  <div className="flex items-center">
                    {subItem.icon && (
                      <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        {/* Render the icon as a React component */}
                        {React.createElement(subItem.icon, { size: 20 })}
                      </div>
                    )}
                    <Link 
                      href={subItem.href}
                      className="text-base font-medium title-gradient-custom"
                    >
                      {subItem.title}
                    </Link>
                  </div>
                  {subItem.description && (
                    <p className="text-sm font-medium mt-1 ml-11 text-gradient-custom">
                      {subItem.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
