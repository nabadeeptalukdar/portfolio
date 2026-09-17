import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Geist } from "next/font/google";
import { siteConfig } from "@/data/siteData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: "WordPress, Shopify & Custom Web Developer | Nabadeep Talukdar",
  description:
    "I build fast, conversion-focused WordPress, Shopify and custom websites for businesses in India and worldwide. View my work and discuss your project.",
  keywords: [
    "WordPress Developer",
    "Shopify Developer",
    "Custom Web Developer",
    "Technical SEO",
    "Website Performance",
    "Business Website Development",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WordPress, Shopify & Custom Web Developer | Nabadeep Talukdar",
    description:
      "I build fast, conversion-focused WordPress, Shopify and custom websites for businesses in India and worldwide. View my work and discuss your project.",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.baseUrl}/images/nabadeep.png`,
        width: 1200,
        height: 630,
        alt: "Nabadeep Talukdar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress, Shopify & Custom Web Developer | Nabadeep Talukdar",
    description:
      "I build fast, conversion-focused WordPress, Shopify and custom websites for businesses in India and worldwide. View my work and discuss your project.",
    images: [`${siteConfig.baseUrl}/images/nabadeep.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistSans.className} bg-black text-white antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10000 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black">
          Skip to content
        </a>
        <Navbar />
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}