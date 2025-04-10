import type { Metadata } from 'next'
import Banner from '@/app/components/Hero';
 
export const metadata: Metadata = {
  title: 'Início',
}

export default function HomePage() {
  return (
    <main>
      <Banner />
    </main>
  );
}