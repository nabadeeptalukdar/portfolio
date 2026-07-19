import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nabadeep Talukdar | WordPress Developer & Business Website Developer",
  description:
    "Professional WordPress development, custom business websites, ecommerce websites, and full stack web solutions built for growth and performance.",
  keywords: [
    "WordPress Developer",
    "Business Website Developer",
    "Custom Website Development",
    "Ecommerce Website Development",
    "Technical SEO",
    "Website Maintenance",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[10000] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black">
          Skip to content
        </a>
        <Navbar />
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}