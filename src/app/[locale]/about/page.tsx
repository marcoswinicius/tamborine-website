import type { Metadata } from 'next'
import Banner from '@/app/components/Hero';
 
export const metadata: Metadata = {
  title: 'About',
}
 
export default function About() {
  return (
    <main>
      <Banner />
    </main>
  );
}