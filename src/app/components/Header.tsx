'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { menuItems } from '@/app/data/menuItems';
import DesktopDropdown from './DesktopDropdown';
import MobileMenu from './MobileMenu';
import Logo from './ui/Logo';
import { useTranslations } from 'next-intl';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setIsMobile] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuT = useTranslations('menu');
  const commonT = useTranslations('common');

  // Check if we're on mobile based on screen width and close mobile menu on large screens
  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileView = window.innerWidth < 1024;
      setIsMobile(isMobileView);
      
      // Close mobile menu when screen size is lg or larger
      if (!isMobileView) {
        setIsMobileMenuOpen(false);
      }
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Handle dropdown hover
  const handleMouseEnter = (itemId: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // Increased delay to prevent accidental closing when moving to dropdown
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-dropdown">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[88px]">
            {/* Logo */}
            <Link href="/" className="relative h-8 w-32">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown ? handleMouseEnter(item.id) : null}
                  onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
                >
                  <div className="flex items-center">
                    <Link 
                      href={item.href}
                      className="py-2 text-base font-medium text-neutral hover:text-[var(--color-primary)] transition-colors"
                    >
                      {menuT(item.titleKey)}
                    </Link>
                    {item.hasDropdown && (
                      <motion.div 
                        className="ml-1 text-neutral"
                        animate={{ rotate: activeDropdown === item.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    )}
                  </div>
                  
                  {item.hasDropdown && item.subItems && (
                    <DesktopDropdown
                      isOpen={activeDropdown === item.id}
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                      subItems={item.subItems}
                    />
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Button (Desktop) */}
            <div className="hidden lg:block">
              <Link 
                href="/contact"
                className="py-2 px-4 rounded-md button text-[var(--color-solid)] font-medium hover:bg-opacity-90 transition-colors"
              >
                {commonT('contactUs')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} menuItems={menuItems} />
    </>
  );
}
