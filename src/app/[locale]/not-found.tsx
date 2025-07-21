'use client';

import { useTranslations } from 'next-intl';
import { Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="min-h-screen flex items-center justify-center bg-solid">
      <div className="text-center">
        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl  text-primary mb-8">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral mb-4">
          {t('title')}
        </h2>

        {/* Description */}
        <p className="text-neutral/70 mb-8 max-w-md mx-auto">
          {t('subtitle')}
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
        >
          <Home className="w-4 h-4" />
          {t('backToHome')}
        </Link>
      </div>
    </div>
  );
}
