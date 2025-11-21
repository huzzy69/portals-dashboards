import { Search, Plus, Calendar, TrendingUp, Star, Clock, Filter } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface MatchBulletinPageProps {
  onNavigate: (page: string) => void;
}

export function MatchBulletinPage({ onNavigate }: MatchBulletinPageProps) {
  const [sport, setSport] = useState('all');
  const [search, setSearch] = useState('');
  const { t } = useLanguage();

  const sports = [
    { id: 'all', label: 'All Sports', icon: '⚽' },
    { id: 'football', label: 'Football', icon: '⚽' },
    { id: 'basketball', label: 'Basketball', icon: '🏀' },
    { id: 'horse-racing', label: 'Horse Racing', icon: '🏇' },
  ];

  const matches = [
    {
      time: '20:00',
      date: 'Today',
      league: 'Premier League',
      home: 'Manchester United',
      away: 'Liverpool',
      odds: { home: '2.10', draw: '3.40', away: '3.20' },
      sport: 'football',
      featured: true,
    },
    {
      time: '21:45',
      date: 'Today',
      league: 'La Liga',
      home: 'Real Madrid',
      away: 'Barcelona',
      odds: { home: '2.20', draw: '3.60', away: '3.00' },
      sport: 'football',
      featured: true,
    },
    {
      time: '02:30',
      date: 'Tomorrow',
      league: 'NBA',
      home: 'Lakers',
      away: 'Celtics',
      odds: { home: '1.85', draw: '-', away: '2.05' },
      sport: 'basketball',
      featured: false,
    },
    {
      time: '18:30',
      date: 'Today',
      league: 'Bundesliga',
      home: 'Bayern Munich',
      away: 'Dortmund',
      odds: { home: '1.65', draw: '4.20', away: '4.80' },
      sport: 'football',
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 lg:mb-8">
          <h1 className="text-2xl lg:text-3xl text-white mb-2">
            <span className="text-gradient-orange">Match Bulletin</span>
          </h1>
          <p className="text-sm lg:text-base text-gray-400">All upcoming matches with live odds and predictions</p>
        </div>

        {/* Filters */}
        <div className="mb-6 lg:mb-8 space-y-4">
          {/* Sport Filters */}
          <div className="flex flex-wrap gap-2 lg:gap-3">
            {sports.map((s) => (
              <button
                key={s.id}
                onClick={() => setSport(s.id)}
                className={`relative px-4 lg:px-6 py-2.5 lg:py-3 rounded-xl transition-all flex items-center space-x-2 overflow-hidden group ${
                  sport === s.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {sport === s.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 glow-orange"></div>
                )}
                {sport !== s.id && (
                  <div className="absolute inset-0 bg-white/5 border border-white/10 group-hover:border-orange-500/50 rounded-xl transition-all"></div>
                )}
                <span className="relative z-10 text-lg">{s.icon}</span>
                <span className="relative z-10 text-sm lg:text-base">{s.label}</span>
                <div className="absolute inset-0 shine-effect opacity-0 group-hover:opacity-100"></div>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search matches..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 lg:py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl lg:rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-gray-500"
            />
          </div>
        </div>

        {/* Matches */}
        <div className="space-y-4 lg:space-y-6">
          {matches.map((match, i) => (
            <div
              key={i}
              className="group bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-white/10 overflow-hidden hover:border-orange-500/50 card-lift"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:to-orange-600/5 transition-all duration-300 rounded-xl lg:rounded-2xl"></div>
              
              <div className="relative z-10 p-4 lg:p-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 lg:mb-6 gap-2">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 px-3 py-1.5 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-orange-400" />
                      <span className="text-sm text-orange-400 font-semibold">{match.time}</span>
                    </div>
                    <span className="text-xs lg:text-sm text-gray-500">{match.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {match.featured && (
                      <div className="flex items-center space-x-1 bg-orange-500/20 border border-orange-500/50 px-2.5 py-1 rounded-full">
                        <Star className="w-3 h-3 text-orange-400 fill-current" />
                        <span className="text-xs text-orange-400">Featured</span>
                      </div>
                    )}
                    <span className="text-xs lg:text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full">{match.league}</span>
                  </div>
                </div>

                {/* Teams */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
                  {/* Teams Display */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg group-hover:border-orange-500/30 transition-all">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                          <span className="text-lg">🏠</span>
                        </div>
                        <span className="text-sm lg:text-base text-white group-hover:text-orange-400 transition-colors">{match.home}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg group-hover:border-orange-500/30 transition-all">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                          <span className="text-lg">✈️</span>
                        </div>
                        <span className="text-sm lg:text-base text-white group-hover:text-orange-400 transition-colors">{match.away}</span>
                      </div>
                    </div>
                  </div>

                  {/* Odds */}
                  <div>
                    <div className="text-xs text-gray-400 mb-3">Betting Odds (1-X-2)</div>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => onNavigate('predictions')}
                        className="relative bg-white/5 border border-white/10 hover:border-orange-500/50 rounded-lg p-3 lg:p-4 transition-all group/odd overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover/odd:from-orange-500/10 group-hover/odd:to-orange-600/10 transition-all"></div>
                        <div className="relative z-10">
                          <div className="text-xs text-gray-400 mb-1">Home</div>
                          <div className="text-lg lg:text-xl text-orange-400 font-semibold">{match.odds.home}</div>
                        </div>
                      </button>
                      {match.odds.draw !== '-' && (
                        <button
                          onClick={() => onNavigate('predictions')}
                          className="relative bg-white/5 border border-white/10 hover:border-orange-500/50 rounded-lg p-3 lg:p-4 transition-all group/odd overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover/odd:from-orange-500/10 group-hover/odd:to-orange-600/10 transition-all"></div>
                          <div className="relative z-10">
                            <div className="text-xs text-gray-400 mb-1">Draw</div>
                            <div className="text-lg lg:text-xl text-orange-400 font-semibold">{match.odds.draw}</div>
                          </div>
                        </button>
                      )}
                      <button
                        onClick={() => onNavigate('predictions')}
                        className="relative bg-white/5 border border-white/10 hover:border-orange-500/50 rounded-lg p-3 lg:p-4 transition-all group/odd overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover/odd:from-orange-500/10 group-hover/odd:to-orange-600/10 transition-all"></div>
                        <div className="relative z-10">
                          <div className="text-xs text-gray-400 mb-1">Away</div>
                          <div className="text-lg lg:text-xl text-orange-400 font-semibold">{match.odds.away}</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => onNavigate('live-scores')}
                    className="relative px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white hover:border-orange-500/50 transition-all group/btn overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover/btn:from-orange-500/10 group-hover/btn:to-orange-600/10 transition-all"></div>
                    <span className="relative z-10">View Details</span>
                  </button>
                  <button
                    onClick={() => onNavigate('predictions')}
                    className="relative px-4 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-sm text-white glow-orange transition-all group/btn overflow-hidden"
                  >
                    <div className="absolute inset-0 shine-effect opacity-0 group-hover/btn:opacity-100"></div>
                    <div className="relative z-10 flex items-center justify-center space-x-2">
                      <Plus className="w-4 h-4" />
                      <span>Add to Coupon</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 lg:mt-12 bg-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/10 p-6 lg:p-8">
          <h3 className="text-lg lg:text-xl text-white mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => onNavigate('predictions')}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-4 hover:border-orange-500/50 transition-all card-lift overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/10 transition-all"></div>
              <div className="relative z-10 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white text-sm lg:text-base group-hover:text-orange-400 transition-colors">Expert Predictions</div>
                  <div className="text-xs text-gray-400">Get winning tips</div>
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate('live-scores')}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-4 hover:border-orange-500/50 transition-all card-lift overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/10 transition-all"></div>
              <div className="relative z-10 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white text-sm lg:text-base group-hover:text-orange-400 transition-colors">Live Scores</div>
                  <div className="text-xs text-gray-400">Track matches live</div>
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate('vip')}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-4 hover:border-orange-500/50 transition-all card-lift overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/10 transition-all"></div>
              <div className="relative z-10 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center glow-orange">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white text-sm lg:text-base group-hover:text-orange-400 transition-colors">VIP Access</div>
                  <div className="text-xs text-gray-400">Premium predictions</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}