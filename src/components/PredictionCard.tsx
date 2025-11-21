import { Lock, TrendingUp, CheckCircle } from 'lucide-react';

interface PredictionCardProps {
  league: string;
  homeTeam: string;
  awayTeam: string;
  prediction: string;
  confidence: number;
  isVIP?: boolean;
  isUnlocked?: boolean;
  category?: string;
  odds?: string;
}

export function PredictionCard({
  league,
  homeTeam,
  awayTeam,
  prediction,
  confidence,
  isVIP = false,
  isUnlocked = false,
  category,
  odds,
}: PredictionCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl p-4 border border-gray-800 hover:border-gray-700 transition-colors">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <span className="text-xs text-gray-400">{league}</span>
          {category && (
            <span className="ml-2 text-xs bg-yellow-400 bg-opacity-20 text-yellow-400 px-2 py-0.5 rounded">
              {category}
            </span>
          )}
        </div>
        {isVIP && (
          <div className="flex items-center space-x-1">
            {isUnlocked ? (
              <CheckCircle className="w-4 h-4 text-green-400" />
            ) : (
              <Lock className="w-4 h-4 text-yellow-400" />
            )}
          </div>
        )}
      </div>

      {/* Match */}
      <div className="mb-4">
        <div className="text-white mb-1">{homeTeam}</div>
        <div className="text-xs text-gray-500 mb-1">vs</div>
        <div className="text-white">{awayTeam}</div>
      </div>

      {/* Prediction */}
      {isVIP && !isUnlocked ? (
        <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-center space-x-2">
          <Lock className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">VIP Members Only</span>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg p-3">
            <div className="text-xs text-black opacity-80 mb-1">Prediction</div>
            <div className="text-black">{prediction}</div>
            {odds && (
              <div className="text-xs text-black opacity-80 mt-1">Odds: {odds}</div>
            )}
          </div>

          {/* Confidence */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Confidence</span>
              <span className="text-yellow-400">{confidence}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all"
                style={{ width: `${confidence}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      {isVIP && !isUnlocked && (
        <button className="w-full mt-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-colors text-sm flex items-center justify-center space-x-1">
          <Lock className="w-4 h-4" />
          <span>Unlock VIP Access</span>
        </button>
      )}
    </div>
  );
}
