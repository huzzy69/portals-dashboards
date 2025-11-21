import { ExternalLink, Clock } from 'lucide-react';
import { type Match, sportColors } from '../../utils/sportsData';

interface CardViewProps {
  matches: Match[];
  newMatchIds: Set<string>;
}

export function CardView({ matches, newMatchIds }: CardViewProps) {
  const groupedMatches = {
    tennis: matches.filter(m => m.sport === 'tennis'),
    hockey: matches.filter(m => m.sport === 'hockey'),
    basketball: matches.filter(m => m.sport === 'basketball'),
    volleyball: matches.filter(m => m.sport === 'volleyball'),
  };

  const renderSection = (sport: keyof typeof groupedMatches, title: string) => {
    const sportMatches = groupedMatches[sport];
    if (sportMatches.length === 0) return null;

    return (
      <div key={sport} className="mb-8">
        <h2 className="text-lg text-gray-800 mb-4 flex items-center space-x-2">
          <span>{title}</span>
          <span className="text-sm text-gray-500">({sportMatches.length})</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sportMatches.map(match => (
            <MatchCard 
              key={match.id} 
              match={match} 
              isNew={newMatchIds.has(match.id)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderSection('tennis', '🎾 Tennis')}
      {renderSection('hockey', '🏒 Ice Hockey')}
      {renderSection('basketball', '🏀 Basketball')}
      {renderSection('volleyball', '🏐 Volleyball')}
      
      {matches.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500">No matches currently meet the filtering criteria</p>
          <p className="text-sm text-gray-400 mt-2">Waiting for qualifying matches...</p>
        </div>
      )}
    </div>
  );
}

function MatchCard({ match, isNew }: { match: Match; isNew: boolean }) {
  const colors = sportColors[match.sport];
  const isHomeLeading = match.homeScore > match.awayScore;

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border ${colors.border} p-4 hover:shadow-md transition-all ${
        isNew ? 'animate-pulse-border' : ''
      }`}
    >
      {/* Sport Badge */}
      <div className="flex items-center justify-between mb-3">
        <span className={`px-3 py-1 rounded-full text-xs ${colors.badge} ${colors.text}`}>
          {match.sport.charAt(0).toUpperCase() + match.sport.slice(1)}
        </span>
        {isNew && (
          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs animate-pulse">
            NEW
          </span>
        )}
      </div>

      {/* Teams & Score */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between">
          <span className={`text-sm ${isHomeLeading ? '' : 'text-gray-600'}`}>
            {match.homeTeam}
          </span>
          <span className={`text-lg ${isHomeLeading ? '' : 'text-gray-600'}`}>
            {match.homeScore}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className={`text-sm ${!isHomeLeading ? '' : 'text-gray-600'}`}>
            {match.awayTeam}
          </span>
          <span className={`text-lg ${!isHomeLeading ? '' : 'text-gray-600'}`}>
            {match.awayScore}
          </span>
        </div>
      </div>

      {/* Additional Info */}
      <div className="space-y-2 mb-4 text-xs text-gray-600">
        {match.games && (
          <div className="flex justify-between">
            <span>Games:</span>
            <span>{match.games.home} - {match.games.away}</span>
          </div>
        )}
        {match.sets && (
          <div className="flex justify-between">
            <span>Sets:</span>
            <span>{match.sets.home} - {match.sets.away}</span>
          </div>
        )}
        {match.timeRemaining && (
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{match.timeRemaining}</span>
          </div>
        )}
      </div>

      {/* Odds & Button */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div>
          <span className="text-xs text-gray-500 block">Live Odds</span>
          <span className="text-lg text-blue-600">{match.odds.toFixed(2)}</span>
        </div>
        <a
          href={match.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-xs text-gray-700 transition-colors flex items-center space-x-1"
        >
          <span>Open Source</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
