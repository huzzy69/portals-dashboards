import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Tabs } from '../components/Tabs';
import { MatchCard } from '../components/MatchCard';
import { Activity } from 'lucide-react';

interface LiveScoresProps {
  onNavigate: (page: string) => void;
}

export function LiveScores({ onNavigate }: LiveScoresProps) {
  const [sport, setSport] = useState('Football');
  const [filter, setFilter] = useState('Live');

  const matches = [
    {
      league: 'Premier League',
      homeTeam: 'Manchester United',
      awayTeam: 'Liverpool',
      status: 'live' as const,
      homeScore: 1,
      awayScore: 2,
      minute: '67',
    },
    {
      league: 'Premier League',
      homeTeam: 'Chelsea',
      awayTeam: 'Arsenal',
      status: 'live' as const,
      homeScore: 0,
      awayScore: 0,
      minute: '23',
    },
    {
      league: 'La Liga',
      homeTeam: 'Real Madrid',
      awayTeam: 'Barcelona',
      status: 'upcoming' as const,
      time: '20:00',
    },
    {
      league: 'Serie A',
      homeTeam: 'Juventus',
      awayTeam: 'Inter Milan',
      status: 'finished' as const,
      homeScore: 2,
      awayScore: 1,
    },
    {
      league: 'Bundesliga',
      homeTeam: 'Bayern Munich',
      awayTeam: 'Borussia Dortmund',
      status: 'finished' as const,
      homeScore: 3,
      awayScore: 2,
    },
    {
      league: 'Ligue 1',
      homeTeam: 'PSG',
      awayTeam: 'Marseille',
      status: 'upcoming' as const,
      time: '21:45',
    },
  ];

  const filteredMatches = matches.filter((match) => {
    if (filter === 'Live') return match.status === 'live';
    if (filter === 'Finished') return match.status === 'finished';
    if (filter === 'Upcoming') return match.status === 'upcoming';
    return true;
  });

  const liveCount = matches.filter((m) => m.status === 'live').length;

  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} />

      {/* Live Update Bar */}
      {liveCount > 0 && (
        <div className="bg-red-500 text-white py-2 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-2">
            <Activity className="w-4 h-4 animate-pulse" />
            <span className="text-sm">{liveCount} matches in progress - Live updates</span>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-white mb-2">Live Scores</h1>
          <p className="text-gray-400">Real-time scores and match updates</p>
        </div>

        {/* Sport Tabs */}
        <div className="mb-6">
          <Tabs
            tabs={['Football', 'Basketball']}
            activeTab={sport}
            onChange={setSport}
          />
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['Live', 'Finished', 'Upcoming'].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === filterOption
                  ? 'bg-yellow-400 text-black'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {filterOption}
              {filterOption === 'Live' && liveCount > 0 && (
                <span className="ml-2 bg-black bg-opacity-20 px-2 py-0.5 rounded-full text-xs">
                  {liveCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Matches Grid */}
        {filteredMatches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMatches.map((match, index) => (
              <MatchCard
                key={index}
                {...match}
                onClick={() => onNavigate('match-details')}
              />
            ))}
          </div>
        ) : (
          <div className="bg-gray-900 rounded-xl p-12 text-center border border-gray-800">
            <Activity className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No {filter.toLowerCase()} matches at the moment</p>
          </div>
        )}
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
