import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';

import { Providers } from './_providers/Providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rock Onyx',
  description: 'Automatic Hedging Vaults While Earning Good Yields With Low Risk',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#F5F5F5] pt-8 ${inter.className}`}>
        <Providers>
          <Navbar />
          <main className="w-full sm:w-5/6 lg:w-3/4 mx-auto px-6 sm:px-0">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
