"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, BadgeCheck, LucideIcon } from "lucide-react";
import { menuItems } from "@/app/data/menuItems";
import MobileMenu from "./MobileMenu";
import Logo from "./ui/Logo";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./ui/LanguageSwitcher";
import Cubo from "./ui/Cubo";
import CuboUruguay from "./ui/CuboUruguay";
import Inovabra from "./ui/Inovabra";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuT = useTranslations("menu");
  const commonT = useTranslations("common");
  const statsT = useTranslations("stats");

  return (
    <>
      <header className="sticky top-0 z-50 transition-all duration-300 bg-[var(--color-dark-green)] backdrop-blur-sm">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.id} className="relative dropdown-group w-full">
                  <Link
                    href={item.href}
                    className="flex items-center py-2 font-medium hover:text-[var(--color-primary)] transition-colors"
                  >
                    {menuT(item.titleKey)}
                    {item.hasDropdown && <ChevronDown size={16} className="ml-1" />}
                  </Link>
                  
                  {item.hasDropdown && item.subItems && (
                    <>
                      {/* Invisible bridge to prevent gap between menu item and dropdown */}
                      <div className="absolute top-full left-0 w-full h-4 z-50" />
                      <div className="fixed left-0 right-0 top-full shadow-lg z-50 border-b-2 border-b-white bg-[var(--color-dark-green)] bg-opacity-90 backdrop-blur-sm opacity-0 invisible dropdown-group-hover:opacity-100 dropdown-group-hover:visible transition-all duration-200" style={{ top: '64px' }}>
                        <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-y-2 md:gap-x-8 auto-rows-auto relative z-10">
                          {/* Information div on the right side */}
                          <div className="hidden lg:block lg:col-span-1 lg:col-start-4 lg:row-span-3 border-l border-solid pl-6 self-start" style={{ borderColor: 'var(--color-solid)' }}>
                            <h3 className="font-medium mb-3 text-primary">{statsT('title')}</h3>
                            <div className='flex flex-col gap-4'>
                              <span className='text-gradient-custom'>
                                <BadgeCheck className="inline mr-2 text-neutral" />
                                {statsT('transactions')}
                              </span>
                              <span className='text-gradient-custom'>
                                <BadgeCheck className="inline mr-2 text-neutral" />
                                {statsT('availability')}
                              </span>
                            </div>
                            <Image 
                              src="/images/payment-illustration.svg"
                              alt={statsT('illustration')} 
                              width={200} 
                              height={200} 
                              className="mt-4"
                            />
                          </div>

                          {/* Partners section */}
                          <div className="hidden lg:block lg:col-span-1 lg:col-start-5 lg:row-span-3 border-l border-solid pl-6 self-start" style={{ borderColor: 'var(--color-solid)' }}>
                            <h3 className="font-medium mb-3 text-primary">Parceiros</h3>
                            <div className='flex flex-col gap-4'>
                              <div className="flex items-center justify-center bg-white/5 rounded p-2" style={{height:77, width:164}}>
                                <Inovabra style={{height:'46px', width:'113px', maxWidth:'100%', maxHeight:'46px'}} />
                              </div>
                              <div className="flex items-center justify-center bg-white/5 rounded p-2" style={{height:77, width:164}}>
                                <Cubo style={{height:'64px', width:'155px', maxWidth:'100%', maxHeight:'64px'}} />
                              </div>
                              <div className="flex items-center justify-center bg-white/5 rounded p-2" style={{height:77, width:164}}>
                                <CuboUruguay style={{height:'46px', width:'113px', maxWidth:'100%', maxHeight:'46px'}} />
                              </div>
                            </div>
                          </div>
                          
                          {/* Menu items */}
                          {item.subItems.map((subItem) => (
                            <div 
                              key={subItem.id} 
                              className={`flex flex-col ${
                                subItem.id === "product-1" ? "lg:col-start-1 lg:row-start-1 h-full" : 
                                subItem.id === "product-2" ? "lg:col-start-1 lg:row-start-2 h-full" : 
                                subItem.id === "product-3" ? "lg:col-start-2 lg:row-start-1 h-full" :
                                subItem.id === "product-4" ? "lg:col-start-2 lg:row-start-2 h-full" :
                                "h-full"
                              }`}
                            >
                              <div className="flex flex-col p-4 rounded-lg hover:bg-white/5 transition-colors group">
                                <div className="">
                                  {subItem.icon && (
                                    <div className="mb-3 w-fit">
                                      {React.createElement(subItem.icon as LucideIcon, {
                                        size: 20,
                                        className: "text-[var(--color-primary)] stroke-2 transition-colors duration-200",
                                        strokeWidth: 1.5
                                      })}
                                    </div>
                                  )}
                                  <Link
                                    href={subItem.href}
                                    className="text-lg font-medium bg-linear-to-r from-[#deffcb] to-white bg-clip-text text-transparent group-hover:text-[var(--color-primary)] transition-colors duration-200"
                                  >
                                    {menuT(subItem.titleKey)}
                                  </Link>
                                </div>
                                {subItem.descriptionKey && (
                                  <p className="text-gradient-custom text-sm pl-0">
                                    {menuT(subItem.descriptionKey)}
                                  </p>
                                )}
                                {subItem.id === "product-4" && (
                                  <div className="mt-4">
                                    <Image
                                      src="/credit-card.svg"
                                      alt={menuT('products.items.binSponsor.title')}
                                      width={131*1.5}
                                      height={80*1.5}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex gap-8 items-center">
              <LanguageSwitcher />
              <Link
                href="/contato"
                className="button px-4 py-1"
              >
                {commonT("contactUs")}
              </Link>
            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} menuItems={menuItems} />
    </>
  );
}