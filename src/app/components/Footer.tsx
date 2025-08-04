import Image from 'next/image';
import InovabraLogo from './ui/Inovabra';
import CuboLogo from './ui/Cubo';
import CuboUruguayLogo from './ui/CuboUruguay';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="bg-gradient-to-br from-[var(--color-dark-green)] via-[#A7E97F]/5 to-[var(--color-dark-green)] text-[#B2C2C9] pt-16 pb-8 px-4">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Logo & Social */}
          <div className="flex flex-col gap-8 md:w-1/4">
            <Link href="/">
              <Image src="/logo.svg" alt="Tamborine Logo" width={180} height={40} className="mb-4" />
            </Link>
            <div className="flex gap-6 mt-2">
              
              <SocialIcon url="https://www.linkedin.com/company/tamborine/?" bgColor="#23343F" fgColor="#fff" style={{ height: 28+10, width: 28+10 }} />
              
            </div>

            {/* Parceiros */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <div className="flex items-center justify-center bg-white/5 rounded p-2" style={{height:84, width:180}}>
                <InovabraLogo style={{height:'50px', width:'125px', maxWidth:'100%', maxHeight:'50px'}} />
              </div>
              <div className="flex items-center justify-center bg-white/5 rounded p-2" style={{height:84, width:180}}>
                <CuboLogo style={{height:'70px', width:'170px', maxWidth:'100%', maxHeight:'70px'}} />
              </div>
              <div className="flex items-center justify-center bg-white/5 rounded p-2" style={{height:84, width:180}}>
                <CuboUruguayLogo style={{height:'50px', width:'125px', maxWidth:'100%', maxHeight:'50px'}} />
              </div>
            </div>
          </div>

          {/* Navigation Columns - atualizados conforme DesktopDropdown */}
          <div className="flex flex-col sm:flex-row gap-12 md:gap-20">
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.products')}</h4>
              <ul className="space-y-2">
                <li><Link href="/products/product-1" className="hover:text-white">{t('footer.cardProcessor')}</Link></li>
                <li><Link href="/products/product-2" className="hover:text-white">{t('footer.paymentGateway')}</Link></li>
                <li><Link href="/products/product-3" className="hover:text-white">{t('footer.apis')}</Link></li>
                <li><Link href="/products/product-3" className="hover:text-white">{t('footer.binSponsor')}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-[#2C3A45] mt-12 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h5 className="text-white font-semibold mb-2">{t('footer.newsletterTitle')}</h5>
            <p className="text-sm">{t('footer.newsletterDesc')}</p>
          </div>
          <form className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder={t('footer.newsletterPlaceholder')}
              className="bg-[#23343F] border border-[#2C3A45] rounded px-4 py-2 text-white focus:outline-none w-full md:w-64"
            />
            <button
              type="submit"
              className="bg-[#2C3A45] text-white px-6 py-2 rounded hover:bg-[#314652]"
            >
              {t('footer.newsletterButton')}
            </button>
          </form>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-[#2C3A45] mt-8 pt-6 flex flex-col md:flex-row md:justify-between md:items-center text-xs text-[#B2C2C9] gap-4">
          <div className="flex gap-4">
          </div>
          <div className="text-right">{t('footer.copyright')}</div>
        </div>
      </div>
    </footer>
  );
}