import { X, Crown, ExternalLink, Zap, TrendingUp, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

interface PopupAdProps {
  type?: 'vip-upgrade' | 'meta-facebook' | 'sports-betting' | 'app-download';
  onClose?: () => void;
  autoShow?: boolean;
  delay?: number;
  onNavigate?: (page: string) => void;
}

export function PopupAd({ type = 'vip-upgrade', onClose, autoShow = true, delay = 2000, onNavigate }: PopupAdProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (autoShow) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setTimeout(() => setIsAnimating(true), 50);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [autoShow, delay]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  if (!isVisible) return null;

  // VIP Upgrade Popup
  if (type === 'vip-upgrade') {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={handleClose}></div>

        {/* Popup Content */}
        <div className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl border border-orange-500/30 max-w-lg w-full shadow-2xl overflow-hidden transition-transform duration-300 ${isAnimating ? 'scale-100' : 'scale-95'}`}>
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-600/10 to-yellow-500/10 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all z-20"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="relative z-10 p-8">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-purple-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-orange-500 via-yellow-500 to-purple-600 rounded-2xl flex items-center justify-center glow-orange animate-float">
                  <Crown className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <h2 className="text-3xl text-white text-center mb-3">
              🎉 Upgrade to VIP!
            </h2>
            <p className="text-gray-300 text-center mb-6">
              Remove all ads and unlock premium features with 98% AI prediction accuracy
            </p>

            {/* Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white">Ad-Free Experience</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-white">98% AI Prediction Accuracy</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-white">Exclusive VIP Features</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  handleClose();
                  onNavigate?.('vip-payment');
                }}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-xl hover:from-orange-600 hover:to-purple-700 transition-all shadow-lg glow-orange flex items-center justify-center space-x-2"
              >
                <Crown className="w-5 h-5" />
                <span>Upgrade Now</span>
              </button>
              <button
                onClick={handleClose}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Meta Facebook Ads
  if (type === 'meta-facebook') {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={handleClose}></div>

        {/* Popup Content */}
        <div className={`relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden transition-transform duration-300 ${isAnimating ? 'scale-100' : 'scale-95'}`}>
          {/* Meta gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30"></div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all z-20"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="relative z-10 p-8">
            {/* Meta Logo */}
            <div className="flex justify-center mb-6">
              <div className="text-5xl">📘</div>
            </div>

            {/* Content */}
            <h2 className="text-3xl text-white text-center mb-3">
              Connect with Meta
            </h2>
            <p className="text-blue-100 text-center mb-6">
              Join millions using Meta platforms. Share, connect, and discover amazing content!
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-white text-sm">Connect</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">📸</div>
                <div className="text-white text-sm">Share</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🌍</div>
                <div className="text-white text-sm">Explore</div>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full px-6 py-3 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center space-x-2 mb-3">
              <span>Visit Meta</span>
              <ExternalLink className="w-5 h-5" />
            </button>

            <div className="text-center">
              <button
                onClick={handleClose}
                className="text-blue-100 hover:text-white text-sm underline"
              >
                No thanks
              </button>
            </div>

            {/* Advertisement label */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-xs text-blue-200 text-center">Advertisement • Sponsored by Meta</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Sports Betting Popup
  if (type === 'sports-betting') {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={handleClose}></div>

        {/* Popup Content */}
        <div className={`relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden transition-transform duration-300 ${isAnimating ? 'scale-100' : 'scale-95'}`}>
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-yellow-500/20 to-green-600/20 animate-pulse"></div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all z-20"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="relative z-10 p-8">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="text-6xl">🎯</div>
            </div>

            {/* Content */}
            <h2 className="text-3xl text-white text-center mb-3">
              🔥 $100 Welcome Bonus!
            </h2>
            <p className="text-green-100 text-center mb-6">
              Join the #1 rated sports betting platform. Sign up now and get your exclusive welcome bonus!
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="text-2xl">💰</div>
                <div>
                  <div className="text-white">$100 Welcome Bonus</div>
                  <div className="text-xs text-green-200">For new members</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="text-2xl">⚡</div>
                <div>
                  <div className="text-white">Live Betting</div>
                  <div className="text-xs text-green-200">Real-time odds</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="text-2xl">🏆</div>
                <div>
                  <div className="text-white">Best Odds Guaranteed</div>
                  <div className="text-xs text-green-200">Top markets</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-green-900 rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2 mb-3">
              <span>Claim Your Bonus</span>
              <ExternalLink className="w-5 h-5" />
            </button>

            <div className="text-center">
              <button
                onClick={handleClose}
                className="text-green-100 hover:text-white text-sm underline"
              >
                Not interested
              </button>
            </div>

            {/* Advertisement label */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-xs text-green-200 text-center">Advertisement • 18+ Only • Gamble Responsibly</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // App Download Popup
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={handleClose}></div>

      {/* Popup Content */}
      <div className={`relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden transition-transform duration-300 ${isAnimating ? 'scale-100' : 'scale-95'}`}>
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-600/20 animate-pulse"></div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all z-20"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="relative z-10 p-8">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="text-6xl">📱</div>
          </div>

          {/* Content */}
          <h2 className="text-3xl text-white text-center mb-3">
            Download Our App
          </h2>
          <p className="text-purple-100 text-center mb-6">
            Get the best mobile betting experience. Available on iOS and Android!
          </p>

          {/* App stores */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="bg-black hover:bg-gray-900 text-white rounded-xl p-4 transition-all">
              <div className="text-2xl mb-1">🍎</div>
              <div className="text-xs">Download on</div>
              <div className="text-sm">App Store</div>
            </button>
            <button className="bg-black hover:bg-gray-900 text-white rounded-xl p-4 transition-all">
              <div className="text-2xl mb-1">🤖</div>
              <div className="text-xs">Get it on</div>
              <div className="text-sm">Google Play</div>
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            <div className="text-center">
              <div className="text-2xl mb-1">⚡</div>
              <div className="text-xs text-purple-200">Fast</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🔔</div>
              <div className="text-xs text-purple-200">Alerts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🎯</div>
              <div className="text-xs text-purple-200">Accurate</div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleClose}
              className="text-purple-100 hover:text-white text-sm underline"
            >
              Continue on web
            </button>
          </div>

          {/* Advertisement label */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="text-xs text-purple-200 text-center">Advertisement</p>
          </div>
        </div>
      </div>
    </div>
  );
}
