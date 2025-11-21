import { Home, Activity, Target, Newspaper, Crown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface MobileBottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function MobileBottomNav({ currentPage, onNavigate }: MobileBottomNavProps) {
  const { t } = useLanguage();

  const navItems = [
    { icon: Home, label: t('nav.home'), page: 'home' },
    { icon: Activity, label: 'Live', page: 'live-scores' },
    { icon: Target, label: 'Tips', page: 'predictions' },
    { icon: Newspaper, label: t('nav.news'), page: 'news' },
    { icon: Crown, label: t('nav.vip'), page: 'vip' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 z-50 shadow-2xl">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.page;

          return (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`relative flex flex-col items-center justify-center space-y-1 px-3 py-2 rounded-lg transition-all ${
                isActive ? 'text-orange-400' : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-orange-500/10 rounded-lg"></div>
              )}
              <Icon className={`w-5 h-5 relative z-10 ${isActive ? 'glow-orange' : ''}`} />
              <span className="text-xs relative z-10">{item.label}</span>
              {isActive && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}