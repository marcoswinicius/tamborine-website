'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SubMenuItem } from '@/app/data/menuItems';
import { BadgeCheck, LucideIcon } from 'lucide-react';

interface DesktopDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  subItems: SubMenuItem[];
}

export default function DesktopDropdown({
  isOpen,
  onMouseEnter,
  onMouseLeave,
  subItems
}: DesktopDropdownProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Invisible bridge to prevent gap between menu item and dropdown */}
      <div
        className="fixed left-0 w-full h-4 z-40"
        style={{ top: '68px' }}
        onMouseEnter={onMouseEnter}
      />
      <div
        className="fixed left-0 w-full bg-dropdown shadow-lg z-50 border-b-2 border-b-white"
        style={{ top: '72px' }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-y-2 md:gap-x-8 auto-rows-auto">
          {/* Information div on the right side */}
          <div className="hidden lg:block lg:col-span-1 lg:col-start-4 lg:row-span-3 border-l border-solid pl-6 self-start" style={{ borderColor: 'var(--color-solid)' }}>
            <h3 className="font-medium mb-3 text-primary" >Processamento em números</h3>
            <div className='flex flex-col gap-4'>
              <span className='text-gradient-custom'><BadgeCheck className="inline mr-2 text-neutral" />4.410 transações por segundo</span>
              <span className='text-gradient-custom'><BadgeCheck className="inline mr-2 text-neutral" />99,99% de disponibilidade</span>
              </div>
            <Image 
              src="/images/payment-illustration.svg"
              alt='Processamento em números' 
              width={200}  height={200} 
              className="mt-4"
            />
          </div>
          
          {/* Menu items */}
          {subItems.map((item) => (
            <div 
              key={item.id} 
              className={`flex flex-col ${
                item.id === "product-1" ? "lg:col-start-1 lg:row-start-1 h-full" : 
                item.id === "product-2" ? "lg:col-start-1 lg:row-start-2 h-full" : 
                item.id === "product-3" ? "lg:col-start-1 lg:row-start-3 h-full" : 
                item.id === "product-4" ? "lg:col-start-2 lg:row-start-1 lg:row-span-3 h-full" : ""
              }`}
            >
              <div className={`flex flex-col mb-4 hover:bg-primary/20 p-3 rounded-xl ${item.id !== "product-4" ? "h-full" : ""}`}>
                <div className="flex items-center mb-2 group">
                  {item.icon && (
                    <div className="w-8 h-8 mr-3 flex items-center justify-center">
                      {React.createElement(item.icon as LucideIcon, {
                        size: 20,
                        className: "group-hover:text-[var(--color-primary)] transition-colors duration-200",
                        strokeWidth: 1.5
                      })}
                    </div>
                  )}
                  <Link
                    href={item.href}
                    className="text-lg font-medium title-gradient-custom"
                  >
                    {item.title}
                  </Link>
                </div>
                {item.description && (
                  <p className="text-gradient-custom text-sm pl-0">{item.description}</p>
                )}
                {item.id === "product-4" && (
                  <div className="mt-4">
                    <Image
                      src="/credit-card.svg"
                      alt="Credit Card"
                      width={131*1.5}
                      height={80*1.5}
                    />
                  </div>
                )}
              </div>

              {/* Add more fields as needed 
              {item.image && (
                <div className="mt-4">
                  <Image
                    src={item.image}
                    alt={`${item.title} image`}
                    width={300}
                    height={200}
                    className="rounded-lg bg-red-600"
                  />
                </div>
              )}
                */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
