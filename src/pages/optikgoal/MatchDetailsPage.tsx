import React from 'react';
import { Activity, Users, MessageSquare, TrendingUp, Target, Flag, Clock } from 'lucide-react';

interface MatchDetailsPageProps {
  onNavigate: (page: string) => void;
}

export const MatchDetailsPage = ({ onNavigate }: MatchDetailsPageProps) => {
  const stats = [
    { label: 'Possession', home: 58, away: 42 },
    { label: 'Shots', home: 12, away: 8 },
    { label: 'Shots on Target', home: 5, away: 3 },
    { label: 'Corners', home: 6, away: 4 },
    { label: 'Fouls', home: 11, away: 14 },
    { label: 'Yellow Cards', home: 2, away: 3 },
  ];

  const events = [
    { minute: '67', type: 'goal', team: 'away', player: 'Salah', description: 'Goal' },
    { minute: '54', type: 'yellow', team: 'home', player: 'Fernandes', description: 'Yellow Card' },
    { minute: '45', type: 'goal', team: 'home', player: 'Rashford', description: 'Goal' },
    { minute: '38', type: 'goal', team: 'away', player: 'Diaz', description: 'Goal' },
  ];

  const homeLineup = [
    'De Gea',
    'Wan-Bissaka',
    'Varane',
    'Martinez',
    'Shaw',
    'Casemiro',
    'Eriksen',
    'Fernandes',
    'Antony',
    'Rashford',
    'Martial',
  ];

  const awayLineup = [
    'Alisson',
    'Alexander-Arnold',
    'Van Dijk',
    'Konate',
    'Robertson',
    'Fabinho',
    'Henderson',
    'Thiago',
    'Salah',
    'Nunez',
    'Diaz',
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Live Bar */}
      <div className="bg-red-500 text-white py-2 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-2">
          <Activity className="w-4 h-4 animate-pulse" />
          <span className="text-sm">LIVE - Match in progress</span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Match Header */}
        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 mb-6 border border-gray-800">
          <div className="text-center mb-6">
            <span className="text-sm text-gray-400">Premier League</span>
          </div>

          {/* Score Section */}
          <div className="grid grid-cols-3 gap-4 items-center mb-6">
            {/* Home Team */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mb-3 mx-auto">
                <span className="text-xl">MUN</span>
              </div>
              <h2 className="text-xl text-white">Manchester United</h2>
            </div>

            {/* Score */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-2">
                <span className="text-4xl md:text-5xl text-white">1</span>
                <span className="text-2xl text-gray-500">-</span>
                <span className="text-4xl md:text-5xl text-white">2</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-yellow-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">67'</span>
              </div>
            </div>

            {/* Away Team */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mb-3 mx-auto">
                <span className="text-xl">LIV</span>
              </div>
              <h2 className="text-xl text-white">Liverpool</h2>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>View Stats</span>
            </button>
            <button
              onClick={() => onNavigate('comments')}
              className="bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Comments</span>
            </button>
          </div>
        </div>

        {/* Stats Table */}
        <section className="mb-6">
          <h3 className="text-xl text-white mb-4 flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-yellow-400" />
            <span>Match Statistics</span>
          </h3>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white">{stat.home}</span>
                    <span className="text-sm text-gray-400">{stat.label}</span>
                    <span className="text-white">{stat.away}</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden flex">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600"
                      style={{ width: `${(stat.home / (stat.home + stat.away)) * 100}%` }}
                    />
                    <div
                      className="bg-gradient-to-r from-red-500 to-red-600"
                      style={{ width: `${(stat.away / (stat.home + stat.away)) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Timeline */}
        <section className="mb-6">
          <h3 className="text-xl text-white mb-4 flex items-center space-x-2">
            <Flag className="w-5 h-5 text-yellow-400" />
            <span>Match Events</span>
          </h3>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 ${
                    event.team === 'home' ? '' : 'flex-row-reverse space-x-reverse'
                  }`}
                >
                  <div className="w-12 h-12 bg-yellow-400 bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-yellow-400">{event.minute}'</span>
                  </div>
                  <div
                    className={`flex-1 bg-gray-800 rounded-lg p-3 ${
                      event.team === 'home' ? 'text-left' : 'text-right'
                    }`}
                  >
                    <div className="text-white mb-1">{event.player}</div>
                    <div className="text-sm text-gray-400">{event.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lineups */}
        <section>
          <h3 className="text-xl text-white mb-4 flex items-center space-x-2">
            <Users className="w-5 h-5 text-yellow-400" />
            <span>Starting Lineups</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Home Team Lineup */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h4 className="text-white mb-4">Manchester United</h4>
              <div className="space-y-2">
                {homeLineup.map((player, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="text-xs text-gray-500 w-6">{index + 1}</span>
                    <span>{player}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Away Team Lineup */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h4 className="text-white mb-4">Liverpool</h4>
              <div className="space-y-2">
                {awayLineup.map((player, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="text-xs text-gray-500 w-6">{index + 1}</span>
                    <span>{player}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comments Preview */}
        <section className="mt-6">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center">
            <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-3" />
            <p className="text-gray-400 mb-4">Join the conversation</p>
            <button
              onClick={() => onNavigate('comments')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-colors"
            >
              View Comments
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
