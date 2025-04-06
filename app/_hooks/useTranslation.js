'use client';

import { useLanguage } from '../_context/LanguageContext';
import { useMemo } from 'react';

const translations = {
  en: {
    header: {
      home: "Home",
      about: "About Us",
      feedback: "Feedback",
      contact: "Contact Us",
      careers: "Careers",
      getStarted: "Get Started",
      quickLinks: "Quick Links"
    },
    services: {
      title: "Discover ESPE Service",
      subtitle: "Your trusted platform for professional services",
      features: {
        quality: {
          title: "Seamless Service Experience",
          description: "Our platform connects you with trusted professionals in minutes, not days. Experience hassle-free service booking and management with our intuitive interface."
        },
        experts: {
          title: "Verified Professionals",
          description: "Every service provider on our platform undergoes rigorous verification, ensuring quality and reliability for every service."
        },
        tracking: {
          title: "Real-time Tracking",
          description: "Stay informed with live updates on your service requests. Track progress, communicate with providers, and manage everything in one place."
        }
      }
    },
    footer: {
      contact: "Contact Us"
    },
    hero: {
      title: "Find and connect with trusted service providers",
      description: "Find the right service provider for your needs. Browse, connect, and request services quickly and easily. Enjoy a seamless experience from start to finish.",
      cta: "Get Started Now",
      imageAlt: "Service Illustration"
    }
  },
  sw: {
    header: {
      home: "Nyumbani",
      about: "Kuhusu Sisi",
      feedback: "Maoni",
      contact: "Wasiliana Nasi",
      careers: "Kazi",
      getStarted: "Anza",
      quickLinks: "Viungo Vya Haraka"
    },
    services: {
      title: "Gundua Huduma za ESPE",
      subtitle: "Jukwaa lako la kuegemea kwa huduma za kitaalamu",
      features: {
        quality: {
          title: "Uzoefu wa Huduma Bora",
          description: "Jukwaa letu linakunganisha na wataalamu wa kuaminika kwa dakika, sio siku. Pata uzoefu wa kuweka agizo na usimamizi wa huduma bila shida kwa kiolesura chetu cha kuvutia."
        },
        experts: {
          title: "Wataalamu Waliohakikiwa",
          description: "Kila mtoa huduma kwenye jukwaa letu hupitia uthibitisho mkali, kuhakikisha ubora na uaminifu kwa kila huduma."
        },
        tracking: {
          title: "Ufuatiliaji wa Wakati Halisi",
          description: "Endelea kufahamishwa na sasisho za moja kwa moja kuhusu maombi yako ya huduma. Fuatilia maendeleo, wasiliana na watoa huduma, na simamia kila kitu katika sehemu moja."
        }
      }
    },
    footer: {
      contact: "Wasiliana Nasi"
    },
    hero: {
      title: "Tafuta na uunganishe na watoa huduma wa kuaminika",
      description: "Tafuta mtoa huduma sahihi kwa mahitaji yako. Vinjari, unganisha, na omba huduma haraka na kwa urahisi. Furahia uzoefu wa laini kutoka mwanzo hadi mwisho.",
      cta: "Anza Sasa",
      imageAlt: "Mchoro wa Huduma"
    }
  }
};

export function useTranslation() {
  const { language } = useLanguage();

  const t = useMemo(() => {
    return (key) => {
      try {
        const keys = key.split('.');
        let value = translations[language];
        
        for (const k of keys) {
          if (value && typeof value === 'object') {
            value = value[k];
          } else {
            console.warn(`Translation key not found: ${key}`);
            return key;
          }
        }
        
        if (value === undefined) {
          console.warn(`Translation value not found for key: ${key}`);
          return key;
        }
        
        return value;
      } catch (error) {
        console.error('Translation error:', error);
        return key;
      }
    };
  }, [language]);

  return { t, language };
} 