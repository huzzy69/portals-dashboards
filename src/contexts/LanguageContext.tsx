import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'TR' | 'AR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN');
  const isRTL = language === 'AR';

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Navigation
    'nav.home': 'Home',
    'nav.predictions': 'Predictions',
    'nav.bulletin': 'Match Bulletin',
    'nav.liveScores': 'Live Scores',
    'nav.news': 'News',
    'nav.vip': 'VIP',
    'nav.login': 'Login',
    
    // Home
    'home.hero': "Today's Big Matches",
    'home.liveScores': 'Live Scores',
    'home.quickLinks': 'Quick Access',
    
    // Predictions
    'pred.banker': 'Banker',
    'pred.surprise': 'Surprise',
    'pred.coupon': 'Coupon',
    'pred.vip': 'VIP',
    'pred.odds': 'Odds',
    'pred.confidence': 'Confidence',
    
    // Common
    'common.openSource': 'Open Source',
    'common.seeAll': 'See All',
    'common.login': 'Login',
    'common.register': 'Register',
  },
  TR: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.predictions': 'Tahminler',
    'nav.bulletin': 'Maç Bülteni',
    'nav.liveScores': 'Canlı Skorlar',
    'nav.news': 'Haberler',
    'nav.vip': 'VIP',
    'nav.login': 'Giriş',
    
    // Home
    'home.hero': "Günün Büyük Maçları",
    'home.liveScores': 'Canlı Skorlar',
    'home.quickLinks': 'Hızlı Erişim',
    
    // Predictions
    'pred.banker': 'Banko',
    'pred.surprise': 'Sürpriz',
    'pred.coupon': 'Kupon',
    'pred.vip': 'VIP',
    'pred.odds': 'Oran',
    'pred.confidence': 'Güven',
    
    // Common
    'common.openSource': 'Kaynağı Aç',
    'common.seeAll': 'Tümünü Gör',
    'common.login': 'Giriş Yap',
    'common.register': 'Kayıt Ol',
  },
  AR: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.predictions': 'التوقعات',
    'nav.bulletin': 'نشرة المباريات',
    'nav.liveScores': 'النتائج المباشرة',
    'nav.news': 'الأخبار',
    'nav.vip': 'VIP',
    'nav.login': 'تسجيل الدخول',
    
    // Home
    'home.hero': 'مباريات اليوم الكبرى',
    'home.liveScores': 'النتائج المباشرة',
    'home.quickLinks': 'وصول سريع',
    
    // Predictions
    'pred.banker': 'مضمون',
    'pred.surprise': 'مفاجأة',
    'pred.coupon': 'قسيمة',
    'pred.vip': 'VIP',
    'pred.odds': 'الاحتمالات',
    'pred.confidence': 'الثقة',
    
    // Common
    'common.openSource': 'فتح المصدر',
    'common.seeAll': 'عرض الكل',
    'common.login': 'تسجيل الدخول',
    'common.register': 'التسجيل',
  },
};
