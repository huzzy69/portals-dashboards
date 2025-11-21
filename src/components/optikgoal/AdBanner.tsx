import { ExternalLink, Crown, Sparkles } from 'lucide-react';

interface AdBannerProps {
  type?: 'horizontal' | 'vertical' | 'square';
  position?: 'top' | 'bottom' | 'sidebar' | 'inline';
  showVIPUpgrade?: boolean;
  onNavigate?: (page: string) => void;
}

export function AdBanner({ type = 'horizontal', position = 'inline', showVIPUpgrade = false, onNavigate }: AdBannerProps) {
  // VIP Upgrade Ad
  if (showVIPUpgrade) {
    return (
      <div className="relative bg-gradient-to-br from-orange-500/10 via-purple-600/10 to-yellow-500/10 border border-orange-500/30 rounded-2xl p-6 overflow-hidden group hover:border-orange-500/50 transition-all">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <div className="relative z-10">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-yellow-500 to-purple-600 rounded-xl flex items-center justify-center glow-orange animate-float">
                <Crown className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="text-xl text-white">Remove Ads Forever</h3>
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-gray-300 mb-4">
                Upgrade to VIP and enjoy an ad-free experience + 98% AI prediction accuracy
              </p>
              <button
                onClick={() => onNavigate?.('vip')}
                className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-xl hover:from-orange-600 hover:to-purple-700 transition-all shadow-lg glow-orange inline-flex items-center space-x-2"
              >
                <Crown className="w-4 h-4" />
                <span>Upgrade to VIP</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Regular Ad Banners
  const ads = {
    horizontal: {
      title: 'Premium Sports Betting Platform',
      description: 'Join the #1 rated sports betting platform. Get $100 welcome bonus!',
      cta: 'Claim Bonus',
      image: '🎯',
    },
    vertical: {
      title: 'Live Betting App',
      description: 'Download our app for exclusive in-play betting features',
      cta: 'Download Now',
      image: '📱',
    },
    square: {
      title: 'Win Big Today',
      description: 'Expert tips & predictions',
      cta: 'Learn More',
      image: '🏆',
    },
  };

  // Add Meta-specific ads randomly
  const metaAds = [
    {
      title: 'Connect with Meta',
      description: 'Join billions on Facebook, Instagram & WhatsApp. Share your moments!',
      cta: 'Join Meta',
      image: '📘',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Meta Business Suite',
      description: 'Grow your business with Meta advertising. Reach millions of customers!',
      cta: 'Start Now',
      image: '📊',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Instagram Reels',
      description: 'Create amazing short videos. Join the trend and go viral!',
      cta: 'Create Reels',
      image: '📸',
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  // Randomly show Meta ad or regular ad (50% chance)
  const showMetaAd = Math.random() > 0.5;
  const selectedMetaAd = metaAds[Math.floor(Math.random() * metaAds.length)];
  
  const ad = showMetaAd ? selectedMetaAd : ads[type];

  if (type === 'horizontal') {
    return (
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-4 overflow-hidden group hover:border-gray-600 transition-all">
        {/* Ad Label */}
        <div className="absolute top-2 left-2 px-2 py-0.5 bg-yellow-500/20 border border-yellow-500/30 rounded text-yellow-400 text-xs">
          Advertisement
        </div>

        <div className="flex items-center space-x-4 mt-6">
          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-3xl">
            {ad.image}
          </div>
          <div className="flex-1">
            <h4 className="text-white mb-1">{ad.title}</h4>
            <p className="text-sm text-gray-400 mb-2">{ad.description}</p>
          </div>
          <button className="flex-shrink-0 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all flex items-center space-x-1 text-sm">
            <span>{ad.cta}</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    );
  }

  if (type === 'vertical') {
    return (
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-4 overflow-hidden group hover:border-gray-600 transition-all">
        {/* Ad Label */}
        <div className="absolute top-2 left-2 px-2 py-0.5 bg-yellow-500/20 border border-yellow-500/30 rounded text-yellow-400 text-xs">
          Ad
        </div>

        <div className="text-center mt-6">
          <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-5xl mb-4">
            {ad.image}
          </div>
          <h4 className="text-white mb-2">{ad.title}</h4>
          <p className="text-sm text-gray-400 mb-4">{ad.description}</p>
          <button className="w-full px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all flex items-center justify-center space-x-1 text-sm">
            <span>{ad.cta}</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    );
  }

  // Square
  return (
    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-4 overflow-hidden group hover:border-gray-600 transition-all aspect-square flex flex-col">
      {/* Ad Label */}
      <div className="absolute top-2 left-2 px-2 py-0.5 bg-yellow-500/20 border border-yellow-500/30 rounded text-yellow-400 text-xs">
        Ad
      </div>

      <div className="flex-1 flex flex-col items-center justify-center mt-4">
        <div className="text-5xl mb-3">{ad.image}</div>
        <h4 className="text-white text-center mb-2">{ad.title}</h4>
        <p className="text-xs text-gray-400 text-center mb-3">{ad.description}</p>
        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all flex items-center space-x-1 text-sm">
          <span>{ad.cta}</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}