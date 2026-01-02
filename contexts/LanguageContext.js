import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LanguageContext = createContext();

export const languages = [
  { code: 'lt', name: 'LT', displayName: 'Lietuvių' },
  { code: 'en', name: 'EN', displayName: 'English' }
];

export function LanguageProvider({ children }) {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  // Detect language from URL on mount and route changes
  useEffect(() => {
    const path = router.pathname;
    if (path.startsWith('/en')) {
      setCurrentLanguage(languages[1]);
    } else {
      setCurrentLanguage(languages[0]);
    }
  }, [router.pathname]);

  // Path translations mapping
  const pathTranslations = {
    // Lithuanian paths
    '/': { en: '/en', lt: '/' },
    '/about': { en: '/en/about', lt: '/about' },
    '/contact': { en: '/en/contact', lt: '/contact' },
    '/services': { en: '/en/services', lt: '/services' },
    '/blog': { en: '/en/blog', lt: '/blog' },
    '/blog-single': { en: '/en/blog-single', lt: '/blog-single' },
    '/faqs': { en: '/en/faqs', lt: '/faqs' },
    '/our-team': { en: '/en/our-team', lt: '/our-team' },
    '/request-a-quote': { en: '/en/request-a-quote', lt: '/request-a-quote' },
    '/service-detail': { en: '/en/service-detail', lt: '/service-detail' },
    '/trackyourparcel': { en: '/en/trackyourparcel', lt: '/trackyourparcel' },
    '/workprocess': { en: '/en/workprocess', lt: '/workprocess' },
    
    // English paths
    '/en': { lt: '/', en: '/en' },
    '/en/about': { lt: '/about', en: '/en/about' },
    '/en/contact': { lt: '/contact', en: '/en/contact' },
    '/en/services': { lt: '/services', en: '/en/services' },
    '/en/blog': { lt: '/blog', en: '/en/blog' },
    '/en/blog-single': { lt: '/blog-single', en: '/en/blog-single' },
    '/en/faqs': { lt: '/faqs', en: '/en/faqs' },
    '/en/our-team': { lt: '/our-team', en: '/en/our-team' },
    '/en/request-a-quote': { lt: '/request-a-quote', en: '/en/request-a-quote' },
    '/en/service-detail': { lt: '/service-detail', en: '/en/service-detail' },
    '/en/trackyourparcel': { lt: '/trackyourparcel', en: '/en/trackyourparcel' },
    '/en/workprocess': { lt: '/workprocess', en: '/en/workprocess' },
  };

  const changeLanguage = (langCode) => {
    const currentPath = router.pathname;
    let newPath;

    // Check if we have a translation for this path
    if (pathTranslations[currentPath] && pathTranslations[currentPath][langCode]) {
      newPath = pathTranslations[currentPath][langCode];
    } else {
      // If no specific translation found - fallback to the root of the selected language
      newPath = langCode === 'en' ? '/en' : '/';
    }

    router.push(newPath);
  };

  const getLanguagePath = (langCode) => {
    const currentPath = router.pathname;
    
    if (pathTranslations[currentPath] && pathTranslations[currentPath][langCode]) {
      return pathTranslations[currentPath][langCode];
    }
    
    return langCode === 'en' ? '/en' : '/';
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      changeLanguage,
      getLanguagePath,
      isEnglish: currentLanguage.code === 'en'
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}


