import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t, isRTL } = useLanguage();

  const footerSections = [
    {
      title: t('footer.quickLinks'),
      links: [
        { label: t('nav.liveScores'), page: 'live-scores' },
        { label: t('nav.predictions'), page: 'predictions' },
        { label: t('nav.matchBulletin'), page: 'match-bulletin' },
        { label: t('nav.news'), page: 'news' },
      ],
    },
    {
      title: t('footer.vipServices'),
      links: [
        { label: t('footer.membershipPlans'), page: 'vip' },
        { label: t('footer.vipPredictions'), page: 'predictions' },
        { label: t('footer.successRate'), page: 'vip' },
        { label: t('footer.paymentOptions'), page: 'vip' },
      ],
    },
    {
      title: t('footer.community'),
      links: [
        { label: t('nav.comments'), page: 'comments' },
        { label: t('nav.notifications'), page: 'notifications' },
        { label: t('footer.aboutUs'), page: 'home' },
        { label: t('footer.contact'), page: 'home' },
      ],
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 mt-12 mb-16 md:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-black">OG</span>
              </div>
              <span className="text-xl text-white">OptikGoal</span>
            </div>
            <p className="text-sm text-gray-400">
              {t('footer.description')}
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
              {t('footer.privacy')}
            </button>
            <button className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
              {t('footer.terms')}
            </button>
            <button className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
              {t('footer.cookies')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}