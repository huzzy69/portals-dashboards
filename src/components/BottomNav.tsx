import { Home, Activity, Target, Newspaper, Crown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  const { t } = useLanguage();

  const navItems = [
    { icon: Home, label: t('nav.home'), page: 'home' },
    { icon: Activity, label: t('home.live'), page: 'live-scores' },
    { icon: Target, label: t('home.tips'), page: 'predictions' },
    { icon: Newspaper, label: t('nav.news'), page: 'news' },
    { icon: Crown, label: t('nav.vip'), page: 'vip' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.page;
          
          return (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`flex flex-col items-center justify-center space-y-1 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'text-yellow-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}