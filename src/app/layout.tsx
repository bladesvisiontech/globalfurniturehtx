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
  description: `${siteData.tagline}. Shop bedroom sets, living room furniture, dining sets, and mattresses. Financing available — no credit needed. Serving Houston, TX.`,
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
