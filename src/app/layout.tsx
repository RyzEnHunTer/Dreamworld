import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Dream World | Simdega's Premier Women-Only Salon",
  description: "Elevate your everyday glow & bridal elegance at Dream World. Simdega's top women-only beauty destination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <SmoothScrollProvider>
          <main className="flex-grow pt-20">
            {children}
          </main>
        </SmoothScrollProvider>
        <Footer />
      </body>
    </html>
  );
}
