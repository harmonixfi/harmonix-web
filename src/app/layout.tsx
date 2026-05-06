import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import {
  metaImageUrl,
  metaOpenGraphType,
  metaTwitterCard,
  metaTwitterSite,
} from "@/lib/sharedMetadata";
import { Providers } from "@/providers";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/common/Footer";

const metaTitle = "Harmonix Finance";
const metaDescription = `Yield infrastructure built natively on Hyperliquid. Learn the fundamentals, explore our products, and start building.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://harmonix.fi/"),
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

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const fontInter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontPoppins.className} h-full antialiased ${fontInter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-linear-to-r from-[#C8EBD3] to-[#F4FAF1]">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
