import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  const navItems = [
    { label: t('nav.home'), page: 'home' },
    { label: t('nav.liveScores'), page: 'live-scores' },
    { label: t('nav.predictions'), page: 'predictions' },
    { label: t('nav.news'), page: 'news' },
    { label: t('nav.vip'), page: 'vip', highlight: true },
  ];

  const languages = [
    { code: 'EN', name: 'English', flag: '🇬🇧' },
    { code: 'TR', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'AR', name: 'العربية', flag: '🇸🇦' },
  ];

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-black">OG</span>
            </div>
            <span className="text-xl text-white hidden sm:inline">OptikGoal</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  item.highlight
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Language Dropdown - Desktop */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{language}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {langMenuOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setLangMenuOpen(false)}
                  />
                  <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden z-20`}>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as 'EN' | 'TR' | 'AR');
                          setLangMenuOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left hover:bg-gray-700 transition-colors flex items-center space-x-3 ${
                          language === lang.code ? 'bg-gray-700 text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <div className="flex-1">
                          <div className={language === lang.code ? 'text-yellow-400' : 'text-white'}>{lang.name}</div>
                          <div className="text-xs text-gray-400">{lang.code}</div>
                        </div>
                        {language === lang.code && (
                          <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Language Buttons - Mobile (in menu) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-2 mb-4">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg ${isRTL ? 'text-right' : 'text-left'} transition-colors ${
                    item.highlight
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Language Selector in Mobile Menu */}
            <div className="border-t border-gray-800 pt-4">
              <div className="px-4 mb-2 text-xs text-gray-400 flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Language / Dil / اللغة</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as 'EN' | 'TR' | 'AR');
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      language === lang.code
                        ? 'bg-yellow-400 text-black'
                        : 'bg-gray-800 text-gray-300 hover:text-white'
                    }`}
                  >
                    <div className="text-lg mb-1">{lang.flag}</div>
                    <div className="text-xs">{lang.code}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}