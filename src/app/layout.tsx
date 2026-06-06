import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CMSPreviewListener from "@/components/CMSPreviewListener";
import siteData from "@/data/site.json";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = {
  title: {
    default: `${siteData.name} | Quality Furniture in Houston, TX`,
    template: `%s | ${siteData.name}`,
  },
  description: `Welcome to Global Furniture HTX, your one-stop shop for high-quality mattresses, stylish, and affordable furniture in Houston, TX. Modern and classic designs for every taste and budget. Financing available — no credit needed.`,
  keywords: ['furniture Houston TX', 'bedroom sets Houston', 'living room furniture', 'mattresses Houston', 'furniture financing no credit', 'Global Furniture HTX', 'affordable furniture Houston'],
  openGraph: {
    siteName: siteData.name,
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <CMSPreviewListener />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
