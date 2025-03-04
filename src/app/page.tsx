import { SectionProvider } from '@/components/section-provider';
import Section from '@/components/section';
import Frame from '@/components/frame';
import { Metadata } from 'next';
import { FuzzyOverlay } from '@/components/ui/fuzzy-overlay';
import Cursor from '@/components/ui/cursor';

export default function Page() {
 return (
  <main
   id="portfolio"
   className="h-full touch-none w-full relative overflow-hidden overscroll-none"
   style={{
    WebkitOverflowScrolling: 'auto',
   }}
  >
   <SectionProvider>
    <Frame />
    <Section />
    <FuzzyOverlay />
    <Cursor />
   </SectionProvider>
  </main>
 );
}

export const metadata: Metadata = {
 title: 'Imanpal Singh | Portfolio',
 description:
  "Learn about Imanpal Singh's journey in cybersecurity and hacking, explore his projects and take a look for yourself:-)",
 openGraph: {
  title: 'Imanpal Singh | Portfolio',
  description:
   "Learn about Imanpal Singh's journey in cybersecurity and hacking, explore his projects and take a look for yourself:-)",
  images: [
   {
    url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/thumbnail.png`,
    width: 1200,
    height: 630,
    alt: 'Imanpal Singh Portfolio Thumbnail',
   },
  ],
  locale: 'en_US',
  type: 'website',
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Imanpal Singh | Portfolio',
  description:
   "Learn about Imanpal Singh's journey in cybersecurity and hacking, explore his projects and take a look for yourself:-)",
  images: [`${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/thumbnail.png`],
 },
};
