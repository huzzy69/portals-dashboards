import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();

  const sections = [
    {
      title: 'Quick Links',
      links: [
        { label: t('nav.predictions'), page: 'predictions' },
        { label: t('nav.liveScores'), page: 'live-scores' },
        { label: 'Match Bulletin', page: 'bulletin' },
        { label: t('nav.news'), page: 'news' },
      ],
    },
    {
      title: 'VIP Services',
      links: [
        { label: 'VIP Membership', page: 'vip' },
        { label: 'Pricing Plans', page: 'vip' },
        { label: 'Success Rate', page: 'vip' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Comments', page: 'comments' },
        { label: 'Notifications', page: 'notifications' },
        { label: 'About Us', page: 'home' },
      ],
    },
  ];

  return (
    <footer className="bg-black/95 backdrop-blur-xl border-t border-white/10 mt-12 mb-16 md:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">⚽</span>
                </div>
              </div>
              <span className="text-xl text-white">Optik<span className="text-gradient-orange">Goal</span></span>
            </div>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              Professional sports predictions and live scores platform. Your gateway to winning insights.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="group relative w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500/50 transition-all overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/10 transition-all"></div>
                  <Icon className="w-4 h-4 relative z-10" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="text-sm text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 <span className="text-gradient-orange">OptikGoal</span>. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button className="text-sm text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</button>
            <button className="text-sm text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}