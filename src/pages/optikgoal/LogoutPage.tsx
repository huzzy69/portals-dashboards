import { LogOut, Home, Crown } from 'lucide-react';
import { PopupAd } from '../../components/optikgoal/PopupAd';
import { AdBanner } from '../../components/optikgoal/AdBanner';

interface LogoutPageProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
  userType?: 'user' | 'vip' | 'admin';
}

export function LogoutPage({ onNavigate, onLogout, userType = 'user' }: LogoutPageProps) {
  const handleLogout = () => {
    // Clear authentication
    localStorage.removeItem('optikgoal_user_auth');
    localStorage.removeItem('optikgoal_vip_auth');
    localStorage.removeItem('optikgoal_admin_auth');
    localStorage.removeItem('optikgoal_user_email');
    
    // Call onLogout callback
    onLogout();
    
    // Navigate to home
    onNavigate('home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Popup Ads for Non-VIP Users on Logout */}
      {userType === 'user' && (
        <>
          <PopupAd type="meta-facebook" autoShow delay={1000} />
          <PopupAd type="sports-betting" autoShow delay={5000} />
        </>
      )}

      {/* Animated background orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Logout Confirmation */}
          <div className="flex flex-col justify-center">
            {/* Logo */}
            <div className="text-center lg:text-left mb-8">
              <div className="inline-block relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                <button onClick={() => onNavigate('home')} className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-2xl">
                  <span className="text-white text-2xl">⚽</span>
                </button>
              </div>
              <h1 className="text-4xl text-white mb-2">Logging Out?</h1>
              <p className="text-gray-400">We'll miss you! Come back soon.</p>
            </div>

            {/* Logout Confirmation Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl mb-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-4 glow-orange">
                  <LogOut className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl text-white mb-2">Are you sure?</h2>
                <p className="text-gray-400">
                  You're about to log out from your {userType === 'vip' ? 'VIP' : userType === 'admin' ? 'Admin' : 'User'} account
                </p>
              </div>

              {/* Benefits Reminder for Free Users */}
              {userType === 'user' && (
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Crown className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-orange-300 mb-2">
                        Before you go, did you know VIP members get:
                      </p>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>✓ Ad-free experience</li>
                        <li>✓ 98% AI prediction accuracy</li>
                        <li>✓ Exclusive premium features</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleLogout}
                  className="px-6 py-3 bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 rounded-xl transition-all"
                >
                  Yes, Logout
                </button>
                <button
                  onClick={() => onNavigate(userType === 'vip' ? 'vip-dashboard' : userType === 'admin' ? 'admin-dashboard' : 'user-dashboard')}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg glow-orange"
                >
                  Stay Logged In
                </button>
              </div>

              {/* Quick Links */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-gray-400 text-center mb-3">Or explore more:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={() => onNavigate('home')}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 rounded-lg transition-all text-sm flex items-center space-x-2"
                  >
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </button>
                  {userType === 'user' && (
                    <button
                      onClick={() => onNavigate('vip')}
                      className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-600/20 border border-orange-500/30 text-orange-400 hover:bg-orange-500/30 rounded-lg transition-all text-sm flex items-center space-x-2"
                    >
                      <Crown className="w-4 h-4" />
                      <span>Go VIP</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Stats for motivation (for logged in users) */}
            {userType !== 'admin' && (
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4 text-center">
                  <div className="text-2xl text-white mb-1">87</div>
                  <div className="text-xs text-gray-400">Predictions Won</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4 text-center">
                  <div className="text-2xl text-white mb-1">73%</div>
                  <div className="text-xs text-gray-400">Win Rate</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4 text-center">
                  <div className="text-2xl text-white mb-1">45</div>
                  <div className="text-xs text-gray-400">Days Active</div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Ads Section (Only for Non-VIP Users) */}
          {userType === 'user' && (
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                <h3 className="text-xl text-white mb-4">Before You Go...</h3>
                <p className="text-gray-400 mb-6">
                  Check out these exclusive offers while you're here!
                </p>

                {/* VIP Upgrade Ad */}
                <div className="mb-6">
                  <AdBanner showVIPUpgrade onNavigate={onNavigate} />
                </div>

                {/* Regular Ads */}
                <div className="space-y-4">
                  <AdBanner type="horizontal" />
                  <AdBanner type="horizontal" />
                  <AdBanner type="horizontal" />
                </div>
              </div>

              {/* Additional promotional content */}
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-6">
                <h3 className="text-lg text-white mb-3">📱 Stay Connected</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Download our mobile app for instant match updates and predictions on the go!
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button className="px-4 py-2 bg-black hover:bg-gray-900 text-white rounded-lg transition-all text-sm">
                    <div className="text-xl mb-1">🍎</div>
                    <div className="text-xs">App Store</div>
                  </button>
                  <button className="px-4 py-2 bg-black hover:bg-gray-900 text-white rounded-lg transition-all text-sm">
                    <div className="text-xl mb-1">🤖</div>
                    <div className="text-xs">Google Play</div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Right Side for VIP/Admin - Clean layout without ads */}
          {(userType === 'vip' || userType === 'admin') && (
            <div className="flex items-center justify-center">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center">
                <div className="text-6xl mb-4">👋</div>
                <h3 className="text-2xl text-white mb-3">Thanks for visiting!</h3>
                <p className="text-gray-400 mb-6">
                  As a {userType === 'vip' ? 'VIP' : 'Admin'} member, you enjoy an ad-free experience.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">✓</span>
                    </div>
                    <span className="text-sm text-white">Premium Features Unlocked</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">✓</span>
                    </div>
                    <span className="text-sm text-white">Ad-Free Experience</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">✓</span>
                    </div>
                    <span className="text-sm text-white">Priority Support</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
