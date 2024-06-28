import type { Metadata } from 'next';

import { Outfit } from 'next/font/google';

import Footer from '@/components/common/Footer';
import LegalAlert from '@/components/common/LegalAlert';
import Navbar from '@/components/common/navbar/Navbar';

import { Providers } from './_providers/Providers';
import './globals.css';
import {
  metaImageUrl,
  metaOpenGraphType,
  metaTwitterCard,
  metaTwitterSite,
} from './shared-metadata';

const outfit = Outfit({ subsets: ['latin'] });

const metaTitle = `Welcome to Harmonix Finance: Crypto Investment On Autopilot`;
const metaDescription = `The leading DeFi platform offering automated vault strategies to maximize returns and minimize risks.`;

export const metadata: Metadata = {
  metadataBase: new URL('https://harmonix.fi'),
  title: metaTitle,
  description: metaDescription,
  twitter: {
    site: metaTwitterSite,
    title: metaTitle,
    description: metaDescription,
    card: metaTwitterCard,
    images: {
      url: metaImageUrl,
    },
  },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: metaOpenGraphType,
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
