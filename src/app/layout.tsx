import type { Metadata } from 'next';

import { Outfit } from 'next/font/google';

import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/navbar/Navbar';

import { Providers } from './_providers/Providers';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Harmonix',
  description:
    'Implies a harmony in strategies that balance risk and reward, suitable for a platform managing diverse crypto assets.',
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
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
