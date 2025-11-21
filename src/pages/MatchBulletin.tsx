import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Calendar, Filter, Plus } from 'lucide-react';

interface MatchBulletinProps {
  onNavigate: (page: string) => void;
}

export function MatchBulletin({ onNavigate }: MatchBulletinProps) {
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedLeague, setSelectedLeague] = useState('All');

  const matches = [
    {
      time: '15:00',
      league: 'Premier League',
      home: 'Manchester United',
      away: 'Liverpool',
      odds: { home: '2.10', draw: '3.40', away: '3.20' },
    },
    {
      time: '17:30',
      league: 'Premier League',
      home: 'Chelsea',
      away: 'Arsenal',
      odds: { home: '2.45', draw: '3.30', away: '2.80' },
    },
    {
      time: '20:00',
      league: 'La Liga',
      home: 'Real Madrid',
      away: 'Barcelona',
      odds: { home: '2.20', draw: '3.60', away: '3.00' },
    },
    {
      time: '18:00',
      league: 'Serie A',
      home: 'Juventus',
      away: 'Inter Milan',
      odds: { home: '2.35', draw: '3.20', away: '2.95' },
    },
    {
      time: '19:30',
      league: 'Bundesliga',
      home: 'Bayern Munich',
      away: 'Borussia Dortmund',
      odds: { home: '1.75', draw: '3.80', away: '4.20' },
    },
  ];

  const dates = ['Yesterday', 'Today', 'Tomorrow', 'This Week'];
  const leagues = ['All', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'];

  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-white mb-2">Match Bulletin</h1>
          <p className="text-gray-400">Daily and weekly match fixtures with odds</p>
        </div>

        {/* Filters */}
        <div className="mb-6 space-y-4">
          {/* Date Selector */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Calendar className="w-5 h-5 text-yellow-400" />
              <span className="text-white">Date</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {dates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedDate === date
                      ? 'bg-yellow-400 text-black'
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          {/* League Filter */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Filter className="w-5 h-5 text-yellow-400" />
              <span className="text-white">League</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {leagues.map((league) => (
                <button
                  key={league}
                  onClick={() => setSelectedLeague(league)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedLeague === league
                      ? 'bg-yellow-400 text-black'
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  {league}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Matches Table */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-800 px-4 py-3 grid grid-cols-12 gap-4 text-sm text-gray-400">
            <div className="col-span-1">Time</div>
            <div className="col-span-2">League</div>
            <div className="col-span-5">Match</div>
            <div className="col-span-3 text-center">Odds (1-X-2)</div>
            <div className="col-span-1"></div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-800">
            {matches.map((match, index) => (
              <div
                key={index}
                className="px-4 py-4 grid grid-cols-12 gap-4 items-center hover:bg-gray-800 transition-colors"
              >
                {/* Time */}
                <div className="col-span-1 text-yellow-400 text-sm">{match.time}</div>

                {/* League */}
                <div className="col-span-2 text-sm text-gray-400">{match.league}</div>

                {/* Match */}
                <div className="col-span-5">
                  <div className="text-white text-sm mb-1">{match.home}</div>
                  <div className="text-white text-sm">{match.away}</div>
                </div>

                {/* Odds */}
                <div className="col-span-3 flex justify-center space-x-2">
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded text-sm transition-colors">
                    {match.odds.home}
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded text-sm transition-colors">
                    {match.odds.draw}
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded text-sm transition-colors">
                    {match.odds.away}
                  </button>
                </div>

                {/* Add to Coupon */}
                <div className="col-span-1 flex justify-end">
                  <button className="w-8 h-8 bg-yellow-400 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors">
                    <Plus className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4 mt-6">
          {matches.map((match, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-400">{match.league}</span>
                <span className="text-sm text-yellow-400">{match.time}</span>
              </div>
              
              <div className="mb-4">
                <div className="text-white mb-2">{match.home}</div>
                <div className="text-white">{match.away}</div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-3">
                <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 rounded text-sm transition-colors">
                  {match.odds.home}
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 rounded text-sm transition-colors">
                  {match.odds.draw}
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 rounded text-sm transition-colors">
                  {match.odds.away}
                </button>
              </div>

              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add to Coupon</span>
              </button>
            </div>
          ))}
        </div>

        {/* Coupon Summary */}
        <div className="fixed bottom-20 md:bottom-6 right-6 bg-yellow-400 text-black rounded-xl p-4 shadow-lg">
          <div className="text-sm mb-1">Betting Coupon</div>
          <div className="text-xl">0 matches</div>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
