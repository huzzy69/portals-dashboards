import { ExternalLink, TrendingUp } from 'lucide-react';
import { type Match, sportColors } from '../../utils/sportsData';

interface PanelViewProps {
  matches: Match[];
  newMatchIds: Set<string>;
}

export function PanelView({ matches, newMatchIds }: PanelViewProps) {
  const groupedMatches = {
    tennis: matches.filter(m => m.sport === 'tennis'),
    hockey: matches.filter(m => m.sport === 'hockey'),
    basketball: matches.filter(m => m.sport === 'basketball'),
    volleyball: matches.filter(m => m.sport === 'volleyball'),
  };

  const renderPanel = (sport: keyof typeof groupedMatches, title: string, emoji: string) => {
    const sportMatches = groupedMatches[sport];
    const colors = sportColors[sport];

    return (
      <div 
        key={sport} 
        className={`${colors.bg} border ${colors.border} rounded-lg p-6 min-h-[300px]`}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-xl ${colors.text} flex items-center space-x-2`}>
            <span>{emoji}</span>
            <span>{title}</span>
          </h3>
          <span className={`px-3 py-1 ${colors.badge} ${colors.text} rounded-full text-sm`}>
            {sportMatches.length} active
          </span>
        </div>

        {sportMatches.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <p className="text-sm">No qualifying matches</p>
          </div>
        ) : (
          <div className="space-y-3">
            {sportMatches.map(match => (
              <PanelMatchCard 
                key={match.id} 
                match={match} 
                isNew={newMatchIds.has(match.id)}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {renderPanel('tennis', 'Tennis', '🎾')}
      {renderPanel('hockey', 'Ice Hockey', '🏒')}
      {renderPanel('basketball', 'Basketball', '🏀')}
      {renderPanel('volleyball', 'Volleyball', '🏐')}
    </div>
  );
}

function PanelMatchCard({ match, isNew }: { match: Match; isNew: boolean }) {
  const isHomeLeading = match.homeScore > match.awayScore;
  
  return (
    <div
      className={`bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-all ${
        isNew ? 'ring-2 ring-green-400 ring-offset-2' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className={`text-sm ${isHomeLeading ? '' : 'text-gray-600'}`}>
              {match.homeTeam}
            </span>
            <span className={`text-xl ${isHomeLeading ? '' : 'text-gray-600'}`}>
              {match.homeScore}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-sm ${!isHomeLeading ? '' : 'text-gray-600'}`}>
              {match.awayTeam}
            </span>
            <span className={`text-xl ${!isHomeLeading ? '' : 'text-gray-600'}`}>
              {match.awayScore}
            </span>
          </div>
        </div>
        
        {isNew && (
          <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs animate-pulse">
            NEW
          </span>
        )}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center space-x-4 text-xs text-gray-600">
          {match.timeRemaining && (
            <span>{match.timeRemaining}</span>
          )}
          {match.games && (
            <span>Games: {match.games.home}-{match.games.away}</span>
          )}
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-lg text-blue-600">{match.odds.toFixed(2)}</span>
          </div>
          
          <a
            href={match.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            title="Open Source"
          >
            <ExternalLink className="w-4 h-4 text-gray-700" />
          </a>
        </div>
      </div>
    </div>
  );
}
