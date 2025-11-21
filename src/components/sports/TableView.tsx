import { ExternalLink } from 'lucide-react';
import { type Match, sportColors } from '../../utils/sportsData';

interface TableViewProps {
  matches: Match[];
  newMatchIds: Set<string>;
}

export function TableView({ matches, newMatchIds }: TableViewProps) {
  const groupedMatches = {
    tennis: matches.filter(m => m.sport === 'tennis'),
    hockey: matches.filter(m => m.sport === 'hockey'),
    basketball: matches.filter(m => m.sport === 'basketball'),
    volleyball: matches.filter(m => m.sport === 'volleyball'),
  };

  const renderTable = (sport: keyof typeof groupedMatches, title: string) => {
    const sportMatches = groupedMatches[sport];
    if (sportMatches.length === 0) return null;

    const colors = sportColors[sport];

    return (
      <div key={sport} className="mb-8">
        <h2 className="text-lg text-gray-800 mb-4 flex items-center space-x-2">
          <span>{title}</span>
          <span className="text-sm text-gray-500">({sportMatches.length})</span>
        </h2>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className={`${colors.bg} border-b border-gray-200`}>
              <tr>
                <th className="px-4 py-3 text-left text-xs text-gray-600">Match</th>
                <th className="px-4 py-3 text-center text-xs text-gray-600">Score</th>
                {sport === 'tennis' && (
                  <>
                    <th className="px-4 py-3 text-center text-xs text-gray-600">Sets</th>
                    <th className="px-4 py-3 text-center text-xs text-gray-600">Games</th>
                  </>
                )}
                {sport === 'volleyball' && (
                  <th className="px-4 py-3 text-center text-xs text-gray-600">Sets</th>
                )}
                <th className="px-4 py-3 text-center text-xs text-gray-600">Time</th>
                <th className="px-4 py-3 text-center text-xs text-gray-600">Odds</th>
                <th className="px-4 py-3 text-center text-xs text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {sportMatches.map(match => (
                <tr
                  key={match.id}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    newMatchIds.has(match.id) ? 'bg-green-50 animate-pulse' : ''
                  }`}
                >
                  <td className="px-4 py-3">
                    <div className="space-y-1">
                      <div className="text-sm text-gray-900">{match.homeTeam}</div>
                      <div className="text-sm text-gray-600">{match.awayTeam}</div>
                    </div>
                    {newMatchIds.has(match.id) && (
                      <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">
                        NEW
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="text-lg">
                      {match.homeScore} - {match.awayScore}
                    </div>
                  </td>
                  {sport === 'tennis' && match.sets && (
                    <>
                      <td className="px-4 py-3 text-center text-sm">
                        {match.sets.home} - {match.sets.away}
                      </td>
                      <td className="px-4 py-3 text-center text-sm">
                        {match.games?.home} - {match.games?.away}
                      </td>
                    </>
                  )}
                  {sport === 'volleyball' && match.sets && (
                    <td className="px-4 py-3 text-center text-sm">
                      {match.sets.home} - {match.sets.away}
                    </td>
                  )}
                  <td className="px-4 py-3 text-center text-sm text-gray-600">
                    {match.timeRemaining || '-'}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-lg text-blue-600">
                      {match.odds.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <a
                      href={match.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-xs text-gray-700 transition-colors"
                    >
                      <span>Open</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderTable('tennis', '🎾 Tennis')}
      {renderTable('hockey', '🏒 Ice Hockey')}
      {renderTable('basketball', '🏀 Basketball')}
      {renderTable('volleyball', '🏐 Volleyball')}
      
      {matches.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500">No matches currently meet the filtering criteria</p>
          <p className="text-sm text-gray-400 mt-2">Waiting for qualifying matches...</p>
        </div>
      )}
    </div>
  );
}
