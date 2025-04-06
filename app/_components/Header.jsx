'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../_hooks/useTranslation";
import { useLanguage } from "../_context/LanguageContext";

const Header = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const languages = [
    { code: 'en', name: 'English', flag: '/america.png' },
    { code: 'sw', name: 'Kiswahili', flag: '/tanzania.png' }
  ];

  const menuItems = [
    { name: 'header.home', path: '/' },
    { name: 'header.about', path: '/about' },
    { name: 'header.feedback', path: '/feedback' },
    { name: 'header.contact', path: '/contact' },
    { name: 'header.careers', path: '/careers' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="espe logo" 
              width={147} 
              height={55}
              className="transition-transform hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className={`text-gray-600 group-hover:text-[#248c89] transition-colors duration-200 ${
                  hoveredItem === item.name ? 'text-[#248c89]' : ''
                }`}>
                  {t(item.name)}
                </span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#248c89] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ${
                  hoveredItem === item.name ? 'scale-x-100' : ''
                }`} />
              </Link>
            ))}
          </nav>

          {/* Right Section - Language and CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Image
                  src={languages.find(lang => lang.code === language)?.flag || '/america.png'}
                  alt={language === 'en' ? 'English' : 'Kiswahili'}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <span className="text-sm font-medium">
                  {language.toUpperCase()}
                </span>
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`flex items-center space-x-2 w-full px-4 py-2 text-sm ${
                        language === lang.code
                          ? 'bg-[#248c89] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Image
                        src={lang.flag}
                        alt={lang.name}
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Get Started Button */}
            <Link
              href="/get-started"
              className="hidden md:block bg-[#248c89] text-white px-4 py-2 rounded-md hover:bg-[#1a6b68] transition-colors text-sm lg:text-base"
            >
              {t('header.getStarted')}
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#248c89] hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.name)}
                </Link>
              ))}
              <Link
                href="/get-started"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#248c89] hover:bg-[#1a6b68]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('header.getStarted')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
