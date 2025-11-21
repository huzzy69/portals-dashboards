import { Menu, X, User, Globe, ChevronDown, Target, TrendingUp, Shield, Crown, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'live-scores', label: t('nav.liveScores') },
    { id: 'predictions', label: t('nav.predictions'), icon: Target, badge: 'Hot', badgeColor: 'bg-blue-500' },
    { id: 'news', label: t('nav.news'), icon: TrendingUp, badge: 'New', badgeColor: 'bg-green-500' },
    { id: 'vip', label: t('nav.vip'), highlight: true },
  ];

  const languages = [
    { code: 'EN', name: 'English', flag: '🇬🇧' },
    { code: 'TR', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'AR', name: 'العربية', flag: '🇸🇦' },
  ];

  return (
    <nav className="bg-black/95 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">⚽</span>
              </div>
            </div>
            <span className="text-xl text-white tracking-tight hidden sm:inline">
              Optik<span className="text-gradient-orange">Goal</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-200 overflow-hidden group ${
                    currentPage === item.id
                      ? 'text-white'
                      : item.highlight
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {/* Background for active/highlight items */}
                  {currentPage === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg"></div>
                  )}
                  {item.highlight && currentPage !== item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
                  )}
                  {!currentPage.includes(item.id) && !item.highlight && (
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
                  )}
                  
                  <div className="relative z-10 flex items-center space-x-2">
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={`${item.badgeColor} text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse-gold`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 shine-effect opacity-0 group-hover:opacity-100"></div>
                </button>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{language}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {langMenuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setLangMenuOpen(false)} />
                  <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-2 w-48 bg-gray-900/95 backdrop-blur-xl rounded-lg shadow-2xl border border-white/10 overflow-hidden z-20`}>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as 'EN' | 'TR' | 'AR');
                          setLangMenuOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left hover:bg-white/10 transition-colors flex items-center space-x-3 ${
                          language === lang.code ? 'bg-white/10 text-orange-400' : 'text-gray-300'
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Login Button */}
            <div className="relative hidden md:block">
              <button 
                onClick={() => onNavigate('login')}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg transition-all shadow-lg glow-orange group relative overflow-hidden">
                <div className="absolute inset-0 shine-effect opacity-0 group-hover:opacity-100"></div>
                <User className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{t('nav.login')}</span>
              </button>
            </div>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-2 mb-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-4 py-3 rounded-lg ${isRTL ? 'text-right' : 'text-left'} transition-all ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                        : item.highlight
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {Icon && <Icon className="w-4 h-4" />}
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className={`${item.badgeColor} text-white text-xs px-2 py-0.5 rounded-full`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Mobile Language Selector */}
            <div className="border-t border-white/10 pt-4 mb-4">
              <div className="grid grid-cols-3 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as 'EN' | 'TR' | 'AR');
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg transition-all ${
                      language === lang.code
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                        : 'bg-white/5 border border-white/10 text-gray-300 hover:text-white'
                    }`}
                  >
                    <div className="text-lg mb-1">{lang.flag}</div>
                    <div className="text-xs">{lang.code}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile User/Admin Panel */}
            <div className="border-t border-white/10 pt-4 space-y-2">
              <button
                onClick={() => {
                  onNavigate('login');
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-3 rounded-lg text-left text-gray-300 hover:text-white hover:bg-white/10 transition-all flex items-center space-x-3"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span>User Panel</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('vip-login');
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-3 rounded-lg text-left text-gray-300 hover:text-white hover:bg-white/10 transition-all flex items-center space-x-3"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 via-orange-500 to-purple-600 rounded-lg flex items-center justify-center glow-orange">
                  <Crown className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <span>VIP Portal</span>
                    <Sparkles className="w-3 h-3 text-yellow-400" />
                  </div>
                  <div className="text-xs text-gray-400">Exclusive Access</div>
                </div>
              </button>
              <button
                onClick={() => {
                  onNavigate('admin-login');
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-3 rounded-lg text-left text-gray-300 hover:text-white hover:bg-white/10 transition-all flex items-center space-x-3"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span>Admin Panel</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}