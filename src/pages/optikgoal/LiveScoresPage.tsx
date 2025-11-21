import { Activity, RefreshCw, TrendingUp, Filter } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

interface LiveScoresPageProps {
  onNavigate: (page: string) => void;
}

export function LiveScoresPage({ onNavigate }: LiveScoresPageProps) {
  const [filter, setFilter] = useState('all');
  const { t } = useLanguage();

  const filters = [
    { id: 'all', label: 'All Sports', icon: '⚽' },
    { id: 'football', label: 'Football', icon: '⚽' },
    { id: 'basketball', label: 'Basketball', icon: '🏀' },
    { id: 'cricket', label: 'Cricket', icon: '🏏' },
    { id: 'tennis', label: 'Tennis', icon: '🎾' },
    { id: 'horse-racing', label: 'Horse Racing', icon: '🏇' },
  ];

  const matches = [
    {
      sport: 'Football',
      home: 'Manchester United',
      away: 'Liverpool',
      homeScore: 1,
      awayScore: 2,
      status: 'live',
      minute: '67',
      league: 'Premier League',
      icon: '⚽',
    },
    {
      sport: 'Basketball',
      home: 'Lakers',
      away: 'Celtics',
      homeScore: 98,
      awayScore: 95,
      status: 'live',
      minute: 'Q4 3:24',
      league: 'NBA',
      icon: '🏀',
    },
    {
      sport: 'Cricket',
      home: 'India',
      away: 'Australia',
      homeScore: 245,
      awayScore: 178,
      status: 'live',
      minute: 'Over 42.3',
      league: 'ICC World Cup',
      icon: '🏏',
    },
    {
      sport: 'Tennis',
      home: 'Rafael Nadal',
      away: 'Novak Djokovic',
      homeScore: 2,
      awayScore: 1,
      status: 'live',
      minute: 'Set 4',
      league: 'Wimbledon',
      icon: '🎾',
    },
    {
      sport: 'Football',
      home: 'Real Madrid',
      away: 'Barcelona',
      homeScore: 0,
      awayScore: 0,
      status: 'upcoming',
      minute: '21:45',
      league: 'La Liga',
      icon: '⚽',
    },
    {
      sport: 'Cricket',
      home: 'England',
      away: 'Pakistan',
      homeScore: 156,
      awayScore: 89,
      status: 'live',
      minute: 'Over 28.5',
      league: 'T20 Series',
      icon: '🏏',
    },
    {
      sport: 'Tennis',
      home: 'Serena Williams',
      away: 'Naomi Osaka',
      homeScore: 1,
      awayScore: 0,
      status: 'live',
      minute: 'Set 2',
      league: 'US Open',
      icon: '🎾',
    },
    {
      sport: 'Basketball',
      home: 'Warriors',
      away: 'Nets',
      homeScore: 0,
      awayScore: 0,
      status: 'upcoming',
      minute: '19:30',
      league: 'NBA',
      icon: '🏀',
    },
  ];

  // Filter matches based on selected sport
  const filteredMatches = filter === 'all' 
    ? matches 
    : matches.filter(match => match.sport.toLowerCase() === filter.replace('-', ' '));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background orbs */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl text-white mb-2 flex items-center space-x-3">
              <span className="text-gradient-orange">{t('nav.liveScores')}</span>
              <div className="flex items-center space-x-2 bg-red-500/20 border border-red-500/50 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse-gold"></div>
                <span className="text-xs text-red-400">LIVE</span>
              </div>
            </h1>
            <p className="text-sm lg:text-base text-gray-400">Real-time match updates</p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl">
              <RefreshCw className="w-4 h-4 animate-spin text-orange-500" />
              <span className="text-sm text-gray-400">Auto-refresh</span>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-gold" />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 lg:gap-3 mb-8">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`relative px-4 lg:px-6 py-2.5 lg:py-3 rounded-xl transition-all group overflow-hidden ${
                filter === f.id
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {filter === f.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 glow-orange"></div>
              )}
              {filter !== f.id && (
                <div className="absolute inset-0 bg-white/5 border border-white/10 group-hover:border-orange-500/50 rounded-xl transition-all"></div>
              )}
              <span className="relative z-10 flex items-center space-x-2">
                <span className="text-base lg:text-lg">{f.icon}</span>
                <span className="text-sm lg:text-base">{f.label}</span>
              </span>
              <div className="absolute inset-0 shine-effect opacity-0 group-hover:opacity-100"></div>
            </button>
          ))}
        </div>

        {/* Matches */}
        <div className="space-y-4 lg:space-y-6">
          {filteredMatches.map((match, index) => (
            <motion.div
              key={`${match.sport}-${match.home}-${index}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.01, y: -3 }}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 card-lift cursor-pointer overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:to-orange-600/5 transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-orange-400">{match.icon}</span>
                    </div>
                    <span className="text-sm text-gray-400">{match.league}</span>
                  </div>
                  {match.status === 'live' ? (
                    <span className="flex items-center space-x-2 text-xs bg-red-500/20 border border-red-500/50 text-red-400 px-3 py-1.5 rounded-full">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse-gold" />
                      <span>LIVE</span>
                    </span>
                  ) : (
                    <span className="text-sm text-gray-500">{match.minute}</span>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-4 lg:gap-6 items-center mb-6">
                  <div className="text-right">
                    <div className="text-base lg:text-lg text-white mb-2 group-hover:text-orange-400 transition-colors">{match.home}</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-3 lg:space-x-4">
                      <div className="text-3xl lg:text-4xl text-white font-bold tabular-nums">{match.homeScore}</div>
                      <div className="text-gray-600">-</div>
                      <div className="text-3xl lg:text-4xl text-white font-bold tabular-nums">{match.awayScore}</div>
                    </div>
                    {match.status === 'live' && (
                      <div className="text-sm text-orange-400 mt-2 font-semibold">{match.minute}'</div>
                    )}
                  </div>

                  <div className="text-left">
                    <div className="text-base lg:text-lg text-white mb-2 group-hover:text-orange-400 transition-colors">{match.away}</div>
                  </div>
                </div>

                {match.status === 'live' && (
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all"
                      style={{ width: `${(parseInt(match.minute) / 90) * 100}%` }}
                    />
                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-white/10">
                  <button className="w-full flex items-center justify-center space-x-2 text-sm text-gray-400 hover:text-orange-400 transition-colors group">
                    <TrendingUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>View Stats & Details</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}