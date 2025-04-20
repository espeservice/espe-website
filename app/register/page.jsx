'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '../_hooks/useTranslation';

export default function RegisterPage() {
  const { t } = useTranslation();
  const [isOpeningApp, setIsOpeningApp] = useState(true);

  useEffect(() => {
    // Get the ref parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');

    // Try to open the app with the ref parameter
    const appUrl = `espelink://register${ref ? `?ref=${ref}` : ''}`;
    window.location.href = appUrl;

    // If the app doesn't open within 2 seconds, show the download options
    const timer = setTimeout(() => {
      setIsOpeningApp(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isOpeningApp) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Opening App</h1>
          <p className="text-gray-600">Please wait...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Download App</h1>
        <p className="text-gray-600 mb-6">Download the app to get started</p>
        
        <div className="space-y-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.espeProvider"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-black text-white py-3 px-4 rounded-lg text-center hover:bg-gray-800 transition-colors"
          >
             Download Google Play
          </a>
          
          <a
            href="https://apps.apple.com/app/espeProvider"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-black text-white py-3 px-4 rounded-lg text-center hover:bg-gray-800 transition-colors"
          >
            Download App Store
          </a>
        </div>
      </div>
    </div>
  );
} 