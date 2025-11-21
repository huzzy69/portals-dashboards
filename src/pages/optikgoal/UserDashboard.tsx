import { Home, User, Bell, Settings, LogOut, Trophy, Target, TrendingUp, Calendar, Shield, MessageSquare, Heart, History, Bookmark, Crown, Wallet } from 'lucide-react';
import { useState } from 'react';
import { AdBanner } from '../../components/optikgoal/AdBanner';
import { PopupAd } from '../../components/optikgoal/PopupAd';
import { motion } from 'framer-motion';

interface UserDashboardProps {
  onNavigate: (page: string) => void;
  onLogout?: () => void;
}

export function UserDashboard({ onNavigate, onLogout }: UserDashboardProps) {
  const [activeMenu, setActiveMenu] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState<'vip-upgrade' | 'meta-facebook' | 'sports-betting' | 'app-download'>('vip-upgrade');

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'my-bets', label: 'My Bets', icon: Target },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'history', label: 'History', icon: History },
    { id: 'comments', label: 'Comments', icon: MessageSquare },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Predictions Won', value: '87', icon: Trophy, color: 'from-green-500 to-green-600', glow: 'green' },
    { label: 'Active Bets', value: '12', icon: Target, color: 'from-blue-500 to-blue-600', glow: 'blue' },
    { label: 'Win Rate', value: '73%', icon: TrendingUp, color: 'from-orange-500 to-orange-600', glow: 'orange' },
    { label: 'Days Active', value: '45', icon: Calendar, color: 'from-purple-500 to-purple-600', glow: 'purple' },
  ];

  const recentActivity = [
    { title: 'Won Prediction', description: 'Manchester United vs Liverpool - Over 2.5 Goals', time: '2 hours ago', result: 'won' },
    { title: 'New Prediction', description: 'Real Madrid vs Barcelona - Home Win', time: '5 hours ago', result: 'pending' },
    { title: 'Lost Prediction', description: 'Bayern vs Dortmund - BTTS', time: '1 day ago', result: 'lost' },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case 'profile':
        return <ProfileSection />;
      case 'my-bets':
        return <MyBetsSection />;
      case 'favorites':
        return <FavoritesSection />;
      case 'history':
        return <HistorySection />;
      case 'comments':
        return <CommentsSection />;
      case 'wallet':
        return <WalletSection />;
      case 'notifications':
        return <NotificationsSection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <HomeSection stats={stats} recentActivity={recentActivity} onNavigate={onNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Popup Ads for Non-VIP Users */}
      <PopupAd type="vip-upgrade" autoShow delay={3000} onNavigate={onNavigate} />
      
      {/* Animated background orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="flex relative">
        {/* Sidebar */}
        <div className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-black/50 backdrop-blur-xl border-r border-white/10 flex flex-col min-h-screen transform transition-transform duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <button onClick={() => onNavigate('home')} className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">⚽</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-lg text-white">Optik<span className="text-gradient-orange">Goal</span></h1>
                  <p className="text-xs text-gray-400">User Panel</p>
                </div>
              </button>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* User Info */}
          <div className="p-4 border-b border-white/10">
            <div className="bg-white/5 rounded-xl p-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg text-white">JD</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate">John Doe</p>
                  <p className="text-xs text-gray-400 truncate">Free Member</p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveMenu(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all group ${
                    activeMenu === item.id
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white glow-orange'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-white/10">
            <button
              onClick={() => onNavigate('logout')}
              className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 hover:text-red-300 rounded-xl transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Mobile Header */}
          <div className="lg:hidden bg-black/50 backdrop-blur-xl border-b border-white/10 p-4 sticky top-0 z-30">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-lg text-white">
                {menuItems.find(item => item.id === activeMenu)?.label || 'Dashboard'}
              </h1>
              <div className="w-6" /> {/* Spacer for centering */}
            </div>
          </div>

          {renderContent()}
        </div>
      </div>
    </div>
  );
}

// Home Section Component
function HomeSection({ stats, recentActivity, onNavigate }: any) {
  return (
    <div className="p-6 lg:p-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 lg:p-8 mb-8 text-white glow-orange shadow-2xl">
        <h1 className="text-2xl lg:text-3xl mb-2">Welcome back, John! 👋</h1>
        <p className="text-orange-100 text-sm lg:text-base">Here's what's happening with your predictions today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        {stats.map((stat: any, i: number) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-4 lg:p-6 card-lift group hover:border-orange-500/50 transition-all">
              <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3 lg:mb-4 glow-${stat.glow}`}>
                <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="text-2xl lg:text-3xl text-white mb-1">{stat.value}</div>
              <div className="text-xs lg:text-sm text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity: any, i: number) => (
                <div key={i} className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activity.result === 'won'
                        ? 'bg-green-500/20 text-green-400'
                        : activity.result === 'lost'
                        ? 'bg-red-500/20 text-red-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}
                  >
                    {activity.result === 'won' ? '✓' : activity.result === 'lost' ? '✗' : '⋯'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm text-white mb-1 group-hover:text-orange-400 transition-colors">{activity.title}</h3>
                    <p className="text-sm text-gray-400 mb-2 line-clamp-2">{activity.description}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VIP Upgrade Ad */}
          <AdBanner showVIPUpgrade onNavigate={onNavigate} />

          {/* Regular Ad */}
          <AdBanner type="horizontal" />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* User Details */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl text-white mb-6">Profile Details</h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-400 mb-1">Full Name</p>
                <p className="text-sm text-white">John Doe</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Email</p>
                <p className="text-sm text-white">john@example.com</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Member Since</p>
                <p className="text-sm text-white">January 2025</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Membership</p>
                <p className="text-sm text-white">Free Plan</p>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg glow-orange text-sm">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Vertical Ad */}
          <AdBanner type="vertical" />
        </div>
      </div>
    </div>
  );
}

// Profile Section Component
function ProfileSection() {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 8900',
    location: 'New York, USA',
    bio: 'Sports betting enthusiast',
  });

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl text-white mb-2">Profile Settings</h1>
        <p className="text-gray-400">Manage your account information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture */}
        <div className="lg:col-span-1">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <h2 className="text-lg text-white mb-4">Profile Picture</h2>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 glow-orange">
                <span className="text-4xl text-white">JD</span>
              </div>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg glow-orange text-sm mb-2">
                Upload Photo
              </button>
              <button className="w-full px-4 py-2 bg-white/10 border border-white/10 text-gray-300 rounded-lg hover:bg-white/20 transition-all text-sm">
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="lg:col-span-2">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <h2 className="text-lg text-white mb-6">Personal Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Bio</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg glow-orange"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="mt-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h2 className="text-lg text-white mb-6 flex items-center space-x-2">
          <Shield className="w-5 h-5 text-orange-400" />
          <span>Change Password</span>
        </h2>
        <form className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Current Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white transition-all"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">New Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white transition-all"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white transition-all"
            />
          </div>
          <div className="lg:col-span-3">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg glow-orange"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// My Bets Section Component
function MyBetsSection() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl text-white mb-2">My Bets</h1>
        <p className="text-gray-400">Manage your active bets</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Bets */}
        <div className="lg:col-span-3">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl text-white mb-6">Active Bets</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-500/20 text-blue-400">
                  ⋯
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm text-white mb-1 group-hover:text-orange-400 transition-colors">New Prediction</h3>
                  <p className="text-sm text-gray-400 mb-2 line-clamp-2">Real Madrid vs Barcelona - Home Win</p>
                  <p className="text-xs text-gray-500">5 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Favorites Section Component
function FavoritesSection() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl text-white mb-2">Favorites</h1>
        <p className="text-gray-400">Manage your favorite matches</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Favorite Matches */}
        <div className="lg:col-span-3">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl text-white mb-6">Favorite Matches</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-500/20 text-blue-400">
                  ⋯
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm text-white mb-1 group-hover:text-orange-400 transition-colors">New Prediction</h3>
                  <p className="text-sm text-gray-400 mb-2 line-clamp-2">Real Madrid vs Barcelona - Home Win</p>
                  <p className="text-xs text-gray-500">5 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// History Section Component
function HistorySection() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl text-white mb-2">History</h1>
        <p className="text-gray-400">View your prediction history</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Prediction History */}
        <div className="lg:col-span-3">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl text-white mb-6">Prediction History</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-green-500/20 text-green-400">
                  ✓
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm text-white mb-1 group-hover:text-orange-400 transition-colors">Won Prediction</h3>
                  <p className="text-sm text-gray-400 mb-2 line-clamp-2">Manchester United vs Liverpool - Over 2.5 Goals</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-red-500/20 text-red-400">
                  ✗
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm text-white mb-1 group-hover:text-orange-400 transition-colors">Lost Prediction</h3>
                  <p className="text-sm text-gray-400 mb-2 line-clamp-2">Bayern vs Dortmund - BTTS</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Comments Section Component
function CommentsSection() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl text-white mb-2">Comments</h1>
        <p className="text-gray-400">View and manage your comments</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Comments */}
        <div className="lg:col-span-3">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl text-white mb-6">Comments</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-500/20 text-blue-400">
                  ⋯
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm text-white mb-1 group-hover:text-orange-400 transition-colors">New Prediction</h3>
                  <p className="text-sm text-gray-400 mb-2 line-clamp-2">Real Madrid vs Barcelona - Home Win</p>
                  <p className="text-xs text-gray-500">5 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Wallet Section Component
function WalletSection() {
  const [selectedTab, setSelectedTab] = useState<'all' | 'deposit' | 'withdraw'>('all');

  const transactions = [
    { id: 1, type: 'deposit', amount: '+$500.00', description: 'Credit Card Deposit', date: '2 hours ago', status: 'completed', icon: '💳' },
    { id: 2, type: 'withdraw', amount: '-$150.00', description: 'Bank Transfer Withdrawal', date: '1 day ago', status: 'completed', icon: '🏦' },
    { id: 3, type: 'deposit', amount: '+$200.00', description: 'PayPal Deposit', date: '2 days ago', status: 'completed', icon: '💰' },
    { id: 4, type: 'withdraw', amount: '-$75.00', description: 'Withdrawal Request', date: '3 days ago', status: 'pending', icon: '⏳' },
    { id: 5, type: 'deposit', amount: '+$1,000.00', description: 'Wire Transfer', date: '5 days ago', status: 'completed', icon: '💵' },
  ];

  const filteredTransactions = selectedTab === 'all' 
    ? transactions 
    : transactions.filter(t => t.type === selectedTab);

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl text-white mb-2">Wallet</h1>
        <p className="text-gray-400">Manage your wallet</p>
      </div>

      {/* Balance Card */}
      <div className="relative mb-8 rounded-3xl overflow-hidden">
        {/* Gradient Background with Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative p-8 lg:p-10">
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="text-orange-100 text-sm mb-2">Total Balance</p>
              <h2 className="text-5xl lg:text-6xl text-white mb-1">$24,960.50</h2>
              <p className="text-orange-100 text-sm flex items-center space-x-2">
                <span className="inline-flex items-center px-2 py-1 bg-white/20 rounded-full text-xs">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12.5%
                </span>
                <span>vs last month</span>
              </p>
            </div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center">
              <Wallet className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-2 px-6 py-4 bg-white text-orange-600 rounded-2xl hover:bg-orange-50 transition-all shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Deposit</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-6 py-4 bg-white/20 backdrop-blur-xl text-white border border-white/30 rounded-2xl hover:bg-white/30 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
              <span>Withdraw</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5 hover:border-green-500/50 transition-all">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400">Total Income</p>
              <p className="text-lg text-white">$12,450</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5 hover:border-red-500/50 transition-all">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400">Total Spent</p>
              <p className="text-lg text-white">$8,320</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5 hover:border-blue-500/50 transition-all">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400">Savings</p>
              <p className="text-lg text-white">$4,130</p>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl text-white">Transaction History</h2>
          
          {/* Filter Tabs */}
          <div className="flex items-center space-x-2 bg-white/5 rounded-xl p-1">
            <button
              onClick={() => setSelectedTab('all')}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                selectedTab === 'all'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedTab('deposit')}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                selectedTab === 'deposit'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Deposit
            </button>
            <button
              onClick={() => setSelectedTab('withdraw')}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                selectedTab === 'withdraw'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Withdraw
            </button>
          </div>
        </div>

        {/* Transaction List */}
        <div className="space-y-3">
          {filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                  transaction.type === 'deposit'
                    ? 'bg-green-500/20'
                    : 'bg-blue-500/20'
                }`}>
                  {transaction.icon}
                </div>
                <div>
                  <h3 className="text-sm text-white mb-1 group-hover:text-orange-400 transition-colors">
                    {transaction.description}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <p className="text-xs text-gray-500">{transaction.date}</p>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${
                      transaction.status === 'completed'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {transaction.status === 'completed' ? '✓ Completed' : '⏳ Pending'}
                    </span>
                  </div>
                </div>
              </div>
              <div className={`text-lg ${
                transaction.type === 'deposit'
                  ? 'text-green-400'
                  : 'text-blue-400'
              }`}>
                {transaction.amount}
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <button className="w-full mt-4 px-4 py-3 bg-white/5 border border-white/10 text-gray-400 rounded-xl hover:bg-white/10 hover:text-white transition-all text-sm">
          Load More Transactions
        </button>
      </div>
    </div>
  );
}

// Notifications Section Component
function NotificationsSection() {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    goalAlerts: true,
    matchStart: true,
    predictionResults: true,
    vipOffers: false,
    newsletter: true,
  });

  const toggleNotification = (key: string) => {
    setNotifications({ ...notifications, [key]: !notifications[key as keyof typeof notifications] });
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl text-white mb-2">Notification Settings</h1>
        <p className="text-gray-400">Manage how you receive notifications</p>
      </div>

      <div className="space-y-6">
        {/* General Notifications */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl text-white mb-6">General Notifications</h2>
          <div className="space-y-4">
            <NotificationToggle
              label="Email Notifications"
              description="Receive notifications via email"
              checked={notifications.emailNotifications}
              onChange={() => toggleNotification('emailNotifications')}
            />
            <NotificationToggle
              label="Push Notifications"
              description="Receive push notifications on your device"
              checked={notifications.pushNotifications}
              onChange={() => toggleNotification('pushNotifications')}
            />
            <NotificationToggle
              label="SMS Notifications"
              description="Receive text messages for important updates"
              checked={notifications.smsNotifications}
              onChange={() => toggleNotification('smsNotifications')}
            />
          </div>
        </div>

        {/* Match Notifications */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl text-white mb-6">Match Notifications</h2>
          <div className="space-y-4">
            <NotificationToggle
              label="Goal Alerts"
              description="Get notified when a goal is scored"
              checked={notifications.goalAlerts}
              onChange={() => toggleNotification('goalAlerts')}
            />
            <NotificationToggle
              label="Match Start Alerts"
              description="Receive alerts when matches are about to start"
              checked={notifications.matchStart}
              onChange={() => toggleNotification('matchStart')}
            />
            <NotificationToggle
              label="Prediction Results"
              description="Get updates on your prediction outcomes"
              checked={notifications.predictionResults}
              onChange={() => toggleNotification('predictionResults')}
            />
          </div>
        </div>

        {/* Marketing Notifications */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl text-white mb-6">Marketing & Updates</h2>
          <div className="space-y-4">
            <NotificationToggle
              label="VIP Offers"
              description="Receive exclusive VIP membership offers"
              checked={notifications.vipOffers}
              onChange={() => toggleNotification('vipOffers')}
            />
            <NotificationToggle
              label="Newsletter"
              description="Get weekly sports insights and tips"
              checked={notifications.newsletter}
              onChange={() => toggleNotification('newsletter')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Settings Section Component
function SettingsSection() {
  const [settings, setSettings] = useState({
    language: 'en',
    timezone: 'utc',
    dateFormat: 'MM/DD/YYYY',
    oddsFormat: 'decimal',
    darkMode: false,
    autoRefresh: true,
  });

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl text-white mb-2">General Settings</h1>
        <p className="text-gray-400">Customize your experience</p>
      </div>

      <div className="space-y-6">
        {/* Preferences */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl text-white mb-6">Preferences</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Language</label>
              <select
                value={settings.language}
                onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white transition-all"
              >
                <option value="en" className="bg-gray-900">English</option>
                <option value="tr" className="bg-gray-900">Türkçe</option>
                <option value="ar" className="bg-gray-900">العربية</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Timezone</label>
              <select
                value={settings.timezone}
                onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white transition-all"
              >
                <option value="utc" className="bg-gray-900">UTC</option>
                <option value="est" className="bg-gray-900">Eastern Time (EST)</option>
                <option value="pst" className="bg-gray-900">Pacific Time (PST)</option>
                <option value="gmt" className="bg-gray-900">GMT</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Date Format</label>
              <select
                value={settings.dateFormat}
                onChange={(e) => setSettings({ ...settings, dateFormat: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white transition-all"
              >
                <option value="MM/DD/YYYY" className="bg-gray-900">MM/DD/YYYY</option>
                <option value="DD/MM/YYYY" className="bg-gray-900">DD/MM/YYYY</option>
                <option value="YYYY-MM-DD" className="bg-gray-900">YYYY-MM-DD</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Odds Format</label>
              <select
                value={settings.oddsFormat}
                onChange={(e) => setSettings({ ...settings, oddsFormat: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white transition-all"
              >
                <option value="decimal" className="bg-gray-900">Decimal (2.50)</option>
                <option value="fractional" className="bg-gray-900">Fractional (3/2)</option>
                <option value="american" className="bg-gray-900">American (+150)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Display Settings */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl text-white mb-6">Display Settings</h2>
          <div className="space-y-4">
            <NotificationToggle
              label="Dark Mode"
              description="Switch to dark theme (Coming soon)"
              checked={settings.darkMode}
              onChange={() => setSettings({ ...settings, darkMode: !settings.darkMode })}
              disabled
            />
            <NotificationToggle
              label="Auto-Refresh Scores"
              description="Automatically update live scores"
              checked={settings.autoRefresh}
              onChange={() => setSettings({ ...settings, autoRefresh: !settings.autoRefresh })}
            />
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl text-white mb-6">Account Actions</h2>
          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-white/10 border border-white/10 text-gray-300 rounded-xl hover:bg-white/20 transition-all text-left">
              Export Account Data
            </button>
            <button className="w-full px-4 py-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl hover:bg-red-500/20 transition-all text-left">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Notification Toggle Component
function NotificationToggle({ label, description, checked, onChange, disabled = false }: any) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all">
      <div className="flex-1">
        <p className="text-sm text-white">{label}</p>
        <p className="text-xs text-gray-400 mt-1">{description}</p>
      </div>
      <button
        onClick={onChange}
        disabled={disabled}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        } ${checked ? 'bg-orange-500' : 'bg-gray-600'}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}