import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MenuItem } from '@/app/data/menuItems';
import MobileAccordion from './MobileAccordion';

interface MobileMenuProps {
  isOpen: boolean;
  menuItems: MenuItem[];
}

export default function MobileMenu({ isOpen, menuItems }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed top-[72px] right-0 w-full h-[calc(100vh-72px)] bg-dark-green z-40 overflow-y-auto"
        >
          <div className="py-4">
            {menuItems.map((item) => (
              <MobileAccordion key={item.id} item={item} />
            ))}
            
            <div className="px-6 py-6">
              <Link 
                href="/contact"
                className="block w-full py-3 px-4 text-center font-medium rounded-md bg-[var(--color-primary)] text-[var(--color-solid)] hover:bg-opacity-90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
