import { Sparkles, Star, TrendingUp, Check, Zap, Trophy, Gift, Lock, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface SurprisePageProps {
  onNavigate: (page: string) => void;
}

export function SurprisePage({ onNavigate }: SurprisePageProps) {
  const { t } = useLanguage();

  const surprisePredictions = [
    {
      home: 'Nottingham Forest',
      away: 'Tottenham',
      league: 'Premier League',
      time: '15:00',
      date: 'Nov 21',
      prediction: 'Home Win',
      odds: '4.20',
      confidence: 68,
      isVIP: false,
      analysis: 'Value Opportunity',
      reasoning: 'Forest strong at home, Spurs struggling away',
      potentialValue: 'Very High',
    },
    {
      home: 'Getafe',
      away: 'Atletico Madrid',
      league: 'La Liga',
      time: '19:00',
      date: 'Nov 21',
      prediction: 'Draw',
      odds: '3.40',
      confidence: 72,
      isVIP: false,
      analysis: 'Defensive Battle',
      reasoning: 'Getafe defensive setup, low-scoring draw likely',
      potentialValue: 'High',
    },
    {
      home: 'Freiburg',
      away: 'RB Leipzig',
      league: 'Bundesliga',
      time: '17:30',
      date: 'Nov 22',
      prediction: 'Over 3.5 Goals',
      odds: '2.85',
      confidence: 74,
      isVIP: true,
      analysis: 'Goals Festival',
      reasoning: 'Both teams attacking minded, goals expected',
      potentialValue: 'High',
    },
    {
      home: 'Sassuolo',
      away: 'Napoli',
      league: 'Serie A',
      time: '20:45',
      date: 'Nov 22',
      prediction: 'Away Win & Over 2.5',
      odds: '3.75',
      confidence: 70,
      isVIP: true,
      analysis: 'Form Advantage',
      reasoning: 'Napoli in great form, Sassuolo leaky defense',
      potentialValue: 'Very High',
    },
    {
      home: 'Wolves',
      away: 'Newcastle',
      league: 'Premier League',
      time: '14:00',
      date: 'Nov 23',
      prediction: 'BTTS & Over 2.5',
      odds: '2.60',
      confidence: 76,
      isVIP: false,
      analysis: 'Open Game',
      reasoning: 'Open game expected with both teams scoring',
      potentialValue: 'Good',
    },
  ];

  const stats = [
    { label: 'Avg Odds', value: '4.80', color: 'text-purple-400', icon: Trophy },
    { label: 'Hit Rate', value: '68%', color: 'text-orange-400', icon: Star },
    { label: 'Avg ROI', value: '+285%', color: 'text-green-400', icon: TrendingUp },
  ];

  const features = [
    'High-value bets with premium odds',
    'Hidden gems from lower leagues',
    'Undervalued market opportunities',
    'Statistical edge predictions',
    'Perfect for value seekers',
    'Daily updated selections',
  ];

  const valueGuide = [
    { level: 'Good', odds: '2.50 - 3.50', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
    { level: 'High', odds: '3.50 - 5.00', color: 'text-purple-400', bgColor: 'bg-purple-500/20' },
    { level: 'Very High', odds: '5.00 - 7.00', color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
    { level: 'Exceptional', odds: '7.00+', color: 'text-green-400', bgColor: 'bg-green-500/20' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background orbs */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <div className="inline-flex p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl mb-6 glow-orange-strong animate-float">
            <Sparkles className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
          </div>
          <h1 className="text-3xl lg:text-5xl mb-4 text-white">
            <span className="text-gradient-orange">Surprise</span> Predictions
          </h1>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            High-value hidden gems with exceptional odds - For the brave and smart
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center card-lift">
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className={`text-3xl lg:text-4xl mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-2xl lg:rounded-3xl p-6 lg:p-8 mb-12">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-white mb-2">What are Surprise Predictions?</h3>
              <p className="text-gray-400 text-sm lg:text-base mb-3">
                Surprise predictions are high-value opportunities with excellent odds (3.00+). These are carefully selected matches where we've found statistical edges and market inefficiencies. Higher risk but potentially massive returns.
              </p>
              <div className="flex items-start space-x-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-yellow-400 text-sm">
                  <strong>Risk Notice:</strong> Higher odds mean higher risk. Recommended for small stakes or as part of mixed accumulators.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Value Guide */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 lg:p-8 mb-12">
          <h3 className="text-xl text-white mb-6 text-center">Value Rating Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {valueGuide.map((guide, i) => (
              <div key={i} className={`${guide.bgColor} border border-white/10 rounded-xl p-4 text-center`}>
                <div className={`text-lg ${guide.color} mb-2 font-semibold`}>{guide.level}</div>
                <div className="text-sm text-gray-400">{guide.odds}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Surprises */}
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl text-white mb-8">
            Today's <span className="text-gradient-orange">Surprise</span> Picks
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {surprisePredictions.map((prediction, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/10 overflow-hidden hover:border-purple-500/50 card-lift ${
                  prediction.isVIP ? 'opacity-50' : ''
                }`}
              >
                {prediction.isVIP ? (
                  <>
                    <div className="filter blur-sm p-6">
                      <SurpriseCard prediction={prediction} onNavigate={onNavigate} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <button
                        onClick={() => onNavigate('vip')}
                        className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl flex items-center space-x-2 hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg glow-orange text-sm lg:text-base"
                      >
                        <Lock className="w-4 h-4 lg:w-5 lg:h-5" />
                        <span>Unlock VIP Access</span>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="p-6">
                    <SurpriseCard prediction={prediction} onNavigate={onNavigate} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 lg:p-8 mb-12">
          <h3 className="text-2xl text-white mb-8 text-center">
            Why Choose <span className="text-gradient-orange">Surprise</span> Picks?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={() => onNavigate('predictions')}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all card-lift overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-600/0 group-hover:from-purple-500/10 group-hover:to-purple-600/10 transition-all"></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 glow-orange">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white text-xl mb-2 group-hover:text-purple-400 transition-colors">All Predictions</h4>
              <p className="text-sm text-gray-400">Browse all prediction categories</p>
            </div>
          </button>

          <button
            onClick={() => onNavigate('vip')}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-orange-500/50 transition-all card-lift overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/10 transition-all"></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 glow-orange">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white text-xl mb-2 group-hover:text-orange-400 transition-colors">Upgrade to VIP</h4>
              <p className="text-sm text-gray-400">Get exclusive surprise predictions</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function SurpriseCard({ prediction, onNavigate }: { prediction: any; onNavigate: (page: string) => void }) {
  const getValueColor = (value: string) => {
    switch (value) {
      case 'Good': return 'text-blue-400 border-blue-500/30 bg-blue-500/20';
      case 'High': return 'text-purple-400 border-purple-500/30 bg-purple-500/20';
      case 'Very High': return 'text-orange-400 border-orange-500/30 bg-orange-500/20';
      case 'Exceptional': return 'text-green-400 border-green-500/30 bg-green-500/20';
      default: return 'text-gray-400 border-white/10 bg-white/5';
    }
  };

  return (
    <div className="group">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
          <span className="text-xs lg:text-sm text-gray-400">{prediction.league}</span>
        </div>
        <div className={`flex items-center space-x-2 px-2.5 py-1 rounded-full border ${getValueColor(prediction.potentialValue)}`}>
          <Star className="w-3 h-3 fill-current" />
          <span className="text-xs font-semibold">{prediction.potentialValue}</span>
        </div>
      </div>

      {/* Match */}
      <div className="mb-4">
        <div className="grid grid-cols-3 gap-2 items-center mb-3">
          <div className="text-center">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/5 border border-white/10 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:border-purple-500/30 transition-all">
              <span className="text-lg lg:text-xl">🎯</span>
            </div>
            <div className="text-sm lg:text-base text-white line-clamp-1 group-hover:text-purple-400 transition-colors">{prediction.home}</div>
          </div>
          <div className="text-center">
            <div className="text-xs lg:text-sm text-gray-500 mb-1">VS</div>
            <div className="text-lg lg:text-2xl">⚡</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/5 border border-white/10 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:border-purple-500/30 transition-all">
              <span className="text-lg lg:text-xl">🎯</span>
            </div>
            <div className="text-sm lg:text-base text-white line-clamp-1 group-hover:text-purple-400 transition-colors">{prediction.away}</div>
          </div>
        </div>
      </div>

      {/* Prediction */}
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs text-purple-400">Surprise Prediction</div>
          <div className="text-xs text-gray-400">{prediction.analysis}</div>
        </div>
        <div className="text-base lg:text-lg text-white mb-2">{prediction.prediction}</div>
        <div className="text-xs text-gray-400">{prediction.reasoning}</div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
          <div className="text-xs text-gray-400 mb-1">Odds</div>
          <div className="text-xl lg:text-2xl text-purple-400">{prediction.odds}</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
          <div className="text-xs text-gray-400 mb-1">Confidence</div>
          <div className="text-xl lg:text-2xl text-orange-400">{prediction.confidence}%</div>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={() => onNavigate('predictions')}
        className="relative w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl transition-all group/btn overflow-hidden"
      >
        <div className="absolute inset-0 shine-effect opacity-0 group-hover/btn:opacity-100"></div>
        <span className="relative z-10">Add to Coupon</span>
      </button>

      {/* Confidence Bar */}
      <div className="h-2 bg-white/10 rounded-full overflow-hidden mt-4">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-500"
          style={{ width: `${prediction.confidence}%` }}
        />
      </div>
    </div>
  );
}