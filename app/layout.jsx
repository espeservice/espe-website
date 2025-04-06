'use client';

import { Outfit } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './_context/LanguageContext';
import Header from './_components/Header';
import Footer from './_components/Footer';

const outfit = Outfit({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
} 