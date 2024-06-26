import type { Metadata } from 'next';

import { Outfit } from 'next/font/google';

import Footer from '@/components/common/Footer';
import LegalAlert from '@/components/common/LegalAlert';
import Navbar from '@/components/common/navbar/Navbar';

import { Providers } from './_providers/Providers';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

const metaTitle = 'Harmonix Finance';
const metaDescription =
  'Building efficient hedge fund on-chain derivatives pools. Delta neutral. Option Wheel. Restaking. Juicy Yield. Low Risk.';
const metaImageUrl = '/og-banner.jpg';

export const metadata: Metadata = {
  title: 'Harmonix Finance',
  description:
    'Implies a harmony in strategies that balance risk and reward, suitable for a platform managing diverse crypto assets.',
  metadataBase: new URL('https://harmonix.fi'),
  twitter: {
    site: '@harmonixfi',
    title: metaTitle,
    description: metaDescription,
    card: 'summary_large_image',
    images: {
      url: metaImageUrl,
    },
  },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'website',
    images: { url: metaImageUrl },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.className} bg-[#F5F5F5]`}>
      <body className="lg:pt-8">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <LegalAlert />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
