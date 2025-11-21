import { 
  Home, User, Bell, Settings, LogOut, Trophy, Target, TrendingUp, Calendar, 
  Shield, Star, Zap, Brain, BarChart3, Activity, ChevronRight, Crown,
  Sparkles, Check, X, AlertCircle, Clock, Filter, Search, Download,
  TrendingDown, DollarSign, Percent, LineChart, PieChart, Award
} from 'lucide-react';
import { useState } from 'react';

interface VIPUserDashboardProps {
  onNavigate: (page: string) => void;
  onLogout?: () => void;
}

export function VIPUserDashboard({ onNavigate, onLogout }: VIPUserDashboardProps) {
  const [activeMenu, setActiveMenu] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedSport, setSelectedSport] = useState('all');
  const [aiAnalysisView, setAiAnalysisView] = useState<'overview' | 'detailed'>('overview');

  const menuItems = [
    { id: 'home', label: 'Dashboard', icon: Home },
    { id: 'ai-analyzer', label: 'AI Bet Analyzer', icon: Brain, badge: 'NEW' },
    { id: 'predictions', label: 'VIP Predictions', icon: Target },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const vipStats = [
    { label: 'AI Predictions', value: '234', change: '+12%', icon: Brain, color: 'from-purple-500 to-purple-600', glow: 'purple' },
    { label: 'Win Rate', value: '94.8%', change: '+5.2%', icon: TrendingUp, color: 'from-green-500 to-green-600', glow: 'green' },
    { label: 'Total Profit', value: '$8,450', change: '+$1,200', icon: DollarSign, color: 'from-orange-500 to-orange-600', glow: 'orange' },
    { label: 'Active Bets', value: '18', change: '+3', icon: Activity, color: 'from-blue-500 to-blue-600', glow: 'blue' },
  ];

  const aiPredictions = [
    {
      id: 1,
      match: 'Manchester United vs Liverpool',
      league: 'Premier League',
      prediction: 'Over 2.5 Goals',
      confidence: 96,
      aiScore: 9.6,
      odds: '1.85',
      status: 'hot',
      factors: ['Recent form', 'Head to head', 'Goals average'],
      time: '2 hours',
      stake: 'High',
    },
    {
      id: 2,
      match: 'Real Madrid vs Barcelona',
      league: 'La Liga',
      prediction: 'Both Teams to Score',
      confidence: 92,
      aiScore: 9.2,
      odds: '1.75',
      status: 'hot',
      factors: ['Offensive strength', 'Defensive gaps', 'Historical data'],
      time: '5 hours',
      stake: 'High',
    },
    {
      id: 3,
      match: 'Bayern Munich vs Dortmund',
      league: 'Bundesliga',
      prediction: 'Home Win',
      confidence: 88,
      aiScore: 8.8,
      odds: '1.65',
      status: 'good',
      factors: ['Home advantage', 'Squad strength', 'Recent wins'],
      time: '1 day',
      stake: 'Medium',
    },
  ];

  const liveMatches = [
    {
      id: 1,
      home: 'Chelsea',
      away: 'Arsenal',
      score: '2-1',
      minute: '67\'',
      prediction: 'Chelsea Win',
      status: 'winning',
      liveOdds: '1.45',
    },
    {
      id: 2,
      home: 'PSG',
      away: 'Marseille',
      score: '1-1',
      minute: '52\'',
      prediction: 'Over 2.5',
      status: 'pending',
      liveOdds: '1.90',
    },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case 'ai-analyzer':
        return <AIAnalyzerSection aiPredictions={aiPredictions} aiAnalysisView={aiAnalysisView} setAiAnalysisView={setAiAnalysisView} />;
      case 'predictions':
        return <VIPPredictionsSection aiPredictions={aiPredictions} />;
      case 'analytics':
        return <AnalyticsSection />;
      case 'profile':
        return <VIPProfileSection />;
      case 'notifications':
        return <VIPNotificationsSection />;
      case 'settings':
        return <VIPSettingsSection />;
      default:
        return <VIPHomeSection stats={vipStats} aiPredictions={aiPredictions} liveMatches={liveMatches} onNavigate={onNavigate} />;
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      onNavigate('login');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
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
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">⚽</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-lg text-white">Optik<span className="text-gradient-orange">Goal</span></h1>
                  <div className="flex items-center space-x-1">
                    <Crown className="w-3 h-3 text-yellow-400" />
                    <p className="text-xs text-yellow-400">VIP Panel</p>
                  </div>
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

          {/* VIP User Info */}
          <div className="p-4 border-b border-white/10">
            <div className="bg-gradient-to-br from-orange-500/10 to-purple-600/10 border border-orange-500/30 rounded-xl p-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl"></div>
              <div className="flex items-center space-x-3 relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 relative">
                  <span className="text-lg text-white">JD</span>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-black">
                    <Crown className="w-3 h-3 text-black" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate">John Doe</p>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <p className="text-xs text-yellow-400 truncate">VIP Premium</p>
                  </div>
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
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all group ${
                    activeMenu === item.id
                      ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white glow-orange'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* VIP Benefits CTA */}
          <div className="p-4 border-t border-white/10">
            <div className="bg-gradient-to-br from-purple-500/20 to-orange-500/20 border border-purple-500/30 rounded-xl p-4 mb-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center space-x-2 mb-2">
                  <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                  <Crown className="w-5 h-5 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                <p className="text-sm text-white mb-1">VIP Membership Active</p>
                <p className="text-xs text-gray-400">98% Win Rate • AI Powered</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
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
          ></div>
        )}

        {/* Main Content */}
        <div className="flex-1 min-h-screen">
          {/* Mobile Header */}
          <div className="lg:hidden bg-black/50 backdrop-blur-xl border-b border-white/10 p-4 sticky top-0 z-30">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="flex items-center space-x-2">
                <Crown className="w-5 h-5 text-yellow-400" />
                <h1 className="text-lg text-white">VIP Panel</h1>
              </div>
              <button className="text-white">
                <Bell className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 lg:p-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

// VIP Home Section
function VIPHomeSection({ stats, aiPredictions, liveMatches, onNavigate }: any) {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-orange-500/20 to-purple-600/20 backdrop-blur-xl rounded-2xl border border-orange-500/30 p-6 lg:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="relative">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Crown className="w-6 h-6 text-yellow-400 animate-pulse" />
                <h2 className="text-2xl lg:text-3xl text-white">Welcome Back, VIP Member!</h2>
              </div>
              <p className="text-gray-400 mb-4">AI-Powered predictions with 98% accuracy at your service</p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                  <Brain className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">AI Powered</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                  <Zap className="w-4 h-4 text-orange-400" />
                  <span className="text-sm text-gray-300">Real-time</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat: any, index: number) => (
          <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-orange-500/30 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl glow-${stat.glow}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-green-400 flex items-center space-x-1">
                <TrendingUp className="w-3 h-3" />
                <span>{stat.change}</span>
              </span>
            </div>
            <h3 className="text-2xl lg:text-3xl text-white mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* AI Predictions & Live Matches */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top AI Predictions */}
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Brain className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg text-white">AI Top Picks</h3>
                <p className="text-xs text-gray-400">Powered by advanced ML algorithms</p>
              </div>
            </div>
            <button className="text-sm text-orange-400 hover:text-orange-300 transition-colors flex items-center space-x-1">
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {aiPredictions.slice(0, 3).map((pred: any) => (
              <div key={pred.id} className="bg-black/40 rounded-xl p-4 border border-white/10 hover:border-orange-500/30 transition-all group">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-white">{pred.match}</h4>
                      {pred.status === 'hot' && (
                        <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30 flex items-center space-x-1">
                          <Zap className="w-3 h-3 fill-red-400" />
                          <span>HOT</span>
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400">{pred.league}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-orange-400 mb-1">Odds: {pred.odds}</div>
                    <div className="text-xs text-gray-400">{pred.time}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-orange-400" />
                    <span className="text-sm text-gray-300">{pred.prediction}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">AI Score:</span>
                    <span className="text-sm text-purple-400">{pred.aiScore}/10</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                    <span>Confidence</span>
                    <span>{pred.confidence}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${pred.confidence >= 90 ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-orange-500 to-orange-600'}`}
                      style={{ width: `${pred.confidence}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {pred.factors.slice(0, 2).map((factor: string, idx: number) => (
                      <span key={idx} className="px-2 py-0.5 bg-white/5 text-gray-400 text-xs rounded-full">
                        {factor}
                      </span>
                    ))}
                  </div>
                  <button className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all">
                    Place Bet
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Matches */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <h3 className="text-lg text-white">Live Matches</h3>
          </div>

          <div className="space-y-4">
            {liveMatches.map((match: any) => (
              <div key={match.id} className="bg-black/40 rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-400">{match.minute}</span>
                  <div className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs rounded-full flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                    <span>LIVE</span>
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">{match.home}</span>
                    <span className="text-white">{match.score.split('-')[0]}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">{match.away}</span>
                    <span className="text-white">{match.score.split('-')[1]}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-gray-400">Your Prediction:</span>
                    <span className={match.status === 'winning' ? 'text-green-400' : 'text-orange-400'}>
                      {match.prediction}
                    </span>
                  </div>
                  <div className={`flex items-center justify-center space-x-1 px-2 py-1 rounded ${
                    match.status === 'winning' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'
                  }`}>
                    {match.status === 'winning' ? (
                      <>
                        <TrendingUp className="w-3 h-3" />
                        <span className="text-xs">Winning</span>
                      </>
                    ) : (
                      <>
                        <Clock className="w-3 h-3" />
                        <span className="text-xs">Pending</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-lg transition-all text-sm border border-white/10">
            View All Live Matches
          </button>
        </div>
      </div>
    </div>
  );
}

// AI Analyzer Section
function AIAnalyzerSection({ aiPredictions, aiAnalysisView, setAiAnalysisView }: any) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500/20 to-orange-500/20 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center space-x-3 mb-4 lg:mb-0">
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <Brain className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl text-white mb-1">AI Bet Analyzer</h2>
              <p className="text-sm text-gray-400">Advanced machine learning predictions with 98% accuracy</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setAiAnalysisView('overview')}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                aiAnalysisView === 'overview'
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setAiAnalysisView('detailed')}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                aiAnalysisView === 'detailed'
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              Detailed
            </button>
          </div>
        </div>
      </div>

      {/* AI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Brain className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-sm text-gray-400">AI Predictions</span>
          </div>
          <div className="text-2xl text-white mb-1">2,847</div>
          <div className="text-xs text-green-400 flex items-center space-x-1">
            <TrendingUp className="w-3 h-3" />
            <span>+234 this week</span>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Check className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-sm text-gray-400">Success Rate</span>
          </div>
          <div className="text-2xl text-white mb-1">98.2%</div>
          <div className="text-xs text-green-400 flex items-center space-x-1">
            <TrendingUp className="w-3 h-3" />
            <span>+2.1% improvement</span>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <Zap className="w-5 h-5 text-orange-400" />
            </div>
            <span className="text-sm text-gray-400">Active Now</span>
          </div>
          <div className="text-2xl text-white mb-1">47</div>
          <div className="text-xs text-orange-400 flex items-center space-x-1">
            <Activity className="w-3 h-3" />
            <span>Being analyzed</span>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Award className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-sm text-gray-400">Avg Confidence</span>
          </div>
          <div className="text-2xl text-white mb-1">94.5%</div>
          <div className="text-xs text-blue-400 flex items-center space-x-1">
            <TrendingUp className="w-3 h-3" />
            <span>High accuracy</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">Filter by:</span>
          </div>
          <select className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>All Sports</option>
            <option>Football</option>
            <option>Basketball</option>
            <option>Tennis</option>
          </select>
          <select className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>All Confidence</option>
            <option>90%+</option>
            <option>95%+</option>
            <option>98%+</option>
          </select>
          <select className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>All Stakes</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <button className="ml-auto px-4 py-1.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* AI Predictions List */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h3 className="text-lg text-white mb-6 flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <span>Today's AI Predictions</span>
        </h3>

        <div className="space-y-4">
          {aiPredictions.map((pred: any) => (
            <div key={pred.id} className="bg-black/40 rounded-xl p-4 lg:p-6 border border-white/10 hover:border-purple-500/30 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Match Info */}
                <div className="lg:col-span-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-white mb-1">{pred.match}</h4>
                      <p className="text-xs text-gray-400">{pred.league}</p>
                    </div>
                    {pred.status === 'hot' && (
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-lg border border-red-500/30 flex items-center space-x-1">
                        <Zap className="w-3 h-3 fill-red-400" />
                        <span>HOT</span>
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span>Starting in {pred.time}</span>
                  </div>
                </div>

                {/* AI Analysis */}
                <div className="lg:col-span-5">
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-orange-400" />
                          <span className="text-sm text-gray-300">{pred.prediction}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-400">AI Score:</span>
                          <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded border border-purple-500/30">
                            {pred.aiScore}/10
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600"
                          style={{ width: `${pred.confidence}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-400">Confidence</span>
                        <span className="text-xs text-purple-400">{pred.confidence}%</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {pred.factors.map((factor: string, idx: number) => (
                        <span key={idx} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded border border-white/10">
                          {factor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="lg:col-span-3 flex flex-col justify-between">
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Odds:</span>
                      <span className="text-white">{pred.odds}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Stake:</span>
                      <span className={`px-2 py-0.5 text-xs rounded ${
                        pred.stake === 'High' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        pred.stake === 'Medium' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                        'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {pred.stake}
                      </span>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all flex items-center justify-center space-x-2">
                    <span>Place Bet</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// VIP Predictions Section
function VIPPredictionsSection({ aiPredictions }: any) {
  return (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h2 className="text-2xl text-white mb-4 flex items-center space-x-2">
          <Target className="w-6 h-6 text-orange-400" />
          <span>VIP Exclusive Predictions</span>
        </h2>
        <p className="text-gray-400">Premium predictions available only for VIP members</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {aiPredictions.map((pred: any) => (
          <div key={pred.id} className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6 hover:border-orange-500/30 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-white mb-1">{pred.match}</h3>
                <p className="text-sm text-gray-400">{pred.league}</p>
              </div>
              {pred.status === 'hot' && (
                <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">HOT</span>
              )}
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Prediction:</span>
                <span className="text-white">{pred.prediction}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Confidence:</span>
                <span className="text-green-400">{pred.confidence}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Odds:</span>
                <span className="text-orange-400">{pred.odds}</span>
              </div>
            </div>

            <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all">
              View Full Analysis
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Analytics Section
function AnalyticsSection() {
  return (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h2 className="text-2xl text-white mb-4 flex items-center space-x-2">
          <BarChart3 className="w-6 h-6 text-orange-400" />
          <span>Performance Analytics</span>
        </h2>
        <p className="text-gray-400">Track your betting performance and statistics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <PieChart className="w-5 h-5 text-green-400" />
            <span className="text-white">Win/Loss Ratio</span>
          </div>
          <div className="text-3xl text-white mb-2">3.8:1</div>
          <p className="text-sm text-gray-400">Excellent performance</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <LineChart className="w-5 h-5 text-orange-400" />
            <span className="text-white">Monthly Profit</span>
          </div>
          <div className="text-3xl text-white mb-2">$12,450</div>
          <p className="text-sm text-green-400">+45% from last month</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Percent className="w-5 h-5 text-purple-400" />
            <span className="text-white">ROI</span>
          </div>
          <div className="text-3xl text-white mb-2">187%</div>
          <p className="text-sm text-purple-400">Outstanding returns</p>
        </div>
      </div>
    </div>
  );
}

// VIP Profile Section
function VIPProfileSection() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-500/20 to-purple-600/20 backdrop-blur-xl rounded-2xl border border-orange-500/30 p-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center relative">
            <span className="text-2xl text-white">JD</span>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-black">
              <Crown className="w-4 h-4 text-black" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl text-white mb-1">John Doe</h2>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400">VIP Premium Member</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Member since January 2024</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6">
          <h3 className="text-white mb-4">Account Information</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Email</label>
              <div className="text-white">john.doe@example.com</div>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Membership</label>
              <div className="text-yellow-400">VIP Premium</div>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Valid Until</label>
              <div className="text-white">December 31, 2024</div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6">
          <h3 className="text-white mb-4">VIP Benefits</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-green-400">
              <Check className="w-4 h-4" />
              <span className="text-sm">98% AI Accuracy</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <Check className="w-4 h-4" />
              <span className="text-sm">Unlimited Predictions</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <Check className="w-4 h-4" />
              <span className="text-sm">Priority Support</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <Check className="w-4 h-4" />
              <span className="text-sm">Advanced Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// VIP Notifications Section
function VIPNotificationsSection() {
  return (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h2 className="text-2xl text-white mb-4 flex items-center space-x-2">
          <Bell className="w-6 h-6 text-orange-400" />
          <span>Notifications</span>
        </h2>
        <div className="space-y-3">
          <div className="bg-black/40 rounded-xl p-4 border border-white/10">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Check className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-white mb-1">Prediction Won!</h4>
                <p className="text-sm text-gray-400">Your bet on Manchester United won. Profit: $250</p>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>
            </div>
          </div>

          <div className="bg-black/40 rounded-xl p-4 border border-white/10">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Brain className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-white mb-1">New AI Prediction Available</h4>
                <p className="text-sm text-gray-400">High confidence prediction for Real Madrid vs Barcelona</p>
                <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
              </div>
            </div>
          </div>

          <div className="bg-black/40 rounded-xl p-4 border border-white/10">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <Crown className="w-5 h-5 text-orange-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-white mb-1">VIP Membership Renewed</h4>
                <p className="text-sm text-gray-400">Your VIP membership has been extended for 1 year</p>
                <p className="text-xs text-gray-500 mt-1">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// VIP Settings Section
function VIPSettingsSection() {
  return (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h2 className="text-2xl text-white mb-6 flex items-center space-x-2">
          <Settings className="w-6 h-6 text-orange-400" />
          <span>VIP Settings</span>
        </h2>

        <div className="space-y-6">
          {/* AI Preferences */}
          <div>
            <h3 className="text-white mb-4">AI Preferences</h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-white/10 cursor-pointer hover:border-orange-500/30 transition-all">
                <span className="text-gray-300">Enable AI Auto-Betting</span>
                <input type="checkbox" className="w-5 h-5 rounded border-white/10 bg-white/5 text-orange-500" />
              </label>
              <label className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-white/10 cursor-pointer hover:border-orange-500/30 transition-all">
                <span className="text-gray-300">Real-time Notifications</span>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-white/10 bg-white/5 text-orange-500" />
              </label>
              <label className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-white/10 cursor-pointer hover:border-orange-500/30 transition-all">
                <span className="text-gray-300">High Confidence Only</span>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-white/10 bg-white/5 text-orange-500" />
              </label>
            </div>
          </div>

          {/* Notification Preferences */}
          <div>
            <h3 className="text-white mb-4">Notification Preferences</h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-white/10 cursor-pointer hover:border-orange-500/30 transition-all">
                <span className="text-gray-300">Email Notifications</span>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-white/10 bg-white/5 text-orange-500" />
              </label>
              <label className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-white/10 cursor-pointer hover:border-orange-500/30 transition-all">
                <span className="text-gray-300">Push Notifications</span>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-white/10 bg-white/5 text-orange-500" />
              </label>
            </div>
          </div>

          <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
