import { Clock, TrendingUp } from 'lucide-react';

interface MatchCardProps {
  league: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  status: 'live' | 'upcoming' | 'finished';
  time?: string;
  minute?: string;
  onClick?: () => void;
}

export function MatchCard({
  league,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
  time,
  minute,
  onClick,
}: MatchCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gray-900 rounded-xl p-4 hover:bg-gray-800 transition-colors border border-gray-800 hover:border-gray-700"
    >
      {/* League Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-gray-400">{league}</span>
        {status === 'live' && (
          <span className="flex items-center space-x-1 text-xs bg-red-500 text-white px-2 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            <span>LIVE</span>
          </span>
        )}
        {status === 'upcoming' && time && (
          <span className="flex items-center space-x-1 text-xs text-gray-400">
            <Clock className="w-3 h-3" />
            <span>{time}</span>
          </span>
        )}
        {status === 'finished' && (
          <span className="text-xs text-gray-500">FT</span>
        )}
      </div>

      {/* Match Details */}
      <div className="space-y-2">
        {/* Home Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-xs">
              {homeTeam.substring(0, 3).toUpperCase()}
            </div>
            <span className="text-white text-left">{homeTeam}</span>
          </div>
          {homeScore !== undefined && (
            <span className="text-xl text-white ml-2">{homeScore}</span>
          )}
        </div>

        {/* Away Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-xs">
              {awayTeam.substring(0, 3).toUpperCase()}
            </div>
            <span className="text-white text-left">{awayTeam}</span>
          </div>
          {awayScore !== undefined && (
            <span className="text-xl text-white ml-2">{awayScore}</span>
          )}
        </div>
      </div>

      {/* Live Minute */}
      {status === 'live' && minute && (
        <div className="mt-3 pt-3 border-t border-gray-800">
          <span className="text-xs text-yellow-400">{minute}'</span>
        </div>
      )}

      {/* Stats Link */}
      <div className="mt-3 pt-3 border-t border-gray-800">
        <div className="flex items-center justify-center space-x-1 text-xs text-gray-400 hover:text-yellow-400 transition-colors">
          <TrendingUp className="w-3 h-3" />
          <span>View Stats</span>
        </div>
      </div>
    </button>
  );
}
