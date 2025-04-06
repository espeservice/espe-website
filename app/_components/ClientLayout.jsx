'use client';

import { Outfit } from "next/font/google";
import { LanguageProvider } from "../_context/LanguageContext";
import Header from "./Header";
import Footer from "./Footer";

const outfit = Outfit({ subsets: ["latin"] });

export default function ClientLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
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