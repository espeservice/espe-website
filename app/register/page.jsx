'use client';

import { useState, useEffect } from 'react';
// import { useTranslation } from '../_hooks/useTranslation';

export default function RegisterPage() {
  // const { t } = useTranslation();
  const [isOpeningApp, setIsOpeningApp] = useState(true);
  const [appType, setAppType] = useState('provider');
  const [ref, setRef] = useState('');
  const [platform, setPlatform] = useState('other'); // 'android', 'ios', or 'other'

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const refParam = urlParams.get('ref');
    const appTypeParam = urlParams.get('app_type');
    setRef(refParam || '');
    let type = 'provider';
    if (appTypeParam === 'client' || appTypeParam === 'provider') {
      type = appTypeParam;
    }
    setAppType(type);

    // Detect platform
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(ua)) {
      setPlatform('android');
    } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
      setPlatform('ios');
    } else {
      setPlatform('other');
    }

    // Build the app URL scheme
    const appScheme = type === 'client' ? 'especlientlink' : 'espelink';
    const appUrl = `${appScheme}://register${refParam ? `?ref=${refParam}` : ''}`;
    window.location.href = appUrl;

    // Fallback to download after 2 seconds
    const timer = setTimeout(() => {
      setIsOpeningApp(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Store links
  const playStoreLink = appType === 'client'
    ? 'https://play.google.com/store/apps/details?id=com.espeClient'
    : 'https://play.google.com/store/apps/details?id=com.espeProvider';
  const appStoreLink = appType === 'client'
    ? 'https://apps.apple.com/app/espeClient'
    : 'https://apps.apple.com/app/espeProvider';

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
          {(platform === 'android' || platform === 'other') && (
            <a
              href={playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-black text-white py-3 px-4 rounded-lg text-center hover:bg-gray-800 transition-colors"
            >
              Download Google Play
            </a>
          )}
          {(platform === 'ios' || platform === 'other') && (
            <a
              href={appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-black text-white py-3 px-4 rounded-lg text-center hover:bg-gray-800 transition-colors"
            >
              Download App Store
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 