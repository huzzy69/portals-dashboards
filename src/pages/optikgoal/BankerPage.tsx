import { Shield, Star, TrendingUp, Check, Zap, Trophy, Target, Lock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface BankerPageProps {
  onNavigate: (page: string) => void;
}

export function BankerPage({ onNavigate }: BankerPageProps) {
  const { t } = useLanguage();

  const bankerPredictions = [
    {
      league: 'Premier League',
      home: 'Manchester City',
      away: 'Burnley',
      prediction: 'Manchester City Win',
      odds: '1.25',
      confidence: 98,
      analysis: 'Strong Home Form',
      isVIP: false,
      reasoning: 'City unbeaten at home this season with 15 wins. Burnley struggling away with 1 point in last 5 games.',
    },
    {
      league: 'La Liga',
      home: 'Real Madrid',
      away: 'Granada',
      prediction: 'Real Madrid Win',
      odds: '1.30',
      confidence: 96,
      analysis: 'Form Advantage',
      isVIP: false,
      reasoning: 'Madrid scored 12 goals in last 3 home games. Granada conceded 10 in last 3 away.',
    },
    {
      league: 'Serie A',
      home: 'Inter Milan',
      away: 'Cagliari',
      prediction: 'Inter Milan Win & Over 2.5',
      odds: '1.65',
      confidence: 94,
      analysis: 'Attacking Power',
      isVIP: true,
      reasoning: 'Inter averaging 3.2 goals at home. Cagliari defense leaking goals on the road.',
    },
    {
      league: 'Bundesliga',
      home: 'Bayern Munich',
      away: 'Augsburg',
      prediction: 'Bayern Win & Both Teams Score',
      odds: '1.75',
      confidence: 92,
      analysis: 'Goals Expected',
      isVIP: true,
      reasoning: 'Bayern scored in every home game. Augsburg scored in 8/10 away matches but concede heavily.',
    },
  ];

  const stats = [
    { label: 'Win Rate', value: '96%', color: 'text-green-400', icon: Trophy },
    { label: 'Avg Odds', value: '1.45', color: 'text-orange-400', icon: Target },
    { label: 'Monthly ROI', value: '+342%', color: 'text-blue-400', icon: TrendingUp },
  ];

  const features = [
    'Highest confidence predictions (90%+)',
    'Low-risk, high-probability bets',
    'Perfect for accumulator base',
    'Detailed statistical analysis',
    'Updated daily based on form',
    'Expert team verification',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mb-6 glow-orange-strong animate-float">
            <Shield className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
          </div>
          <h1 className="text-3xl lg:text-5xl mb-4 text-white">
            <span className="text-gradient-orange">Banker</span> Predictions
          </h1>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Rock-solid predictions with the highest confidence - The safest bets
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
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-2xl lg:rounded-3xl p-6 lg:p-8 mb-12">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-white mb-2">What are Banker Predictions?</h3>
              <p className="text-gray-400 text-sm lg:text-base">
                Banker predictions are our highest confidence bets with win rates above 90%. These are carefully selected matches where statistics, form, and expert analysis all point to a clear outcome. Perfect for building your accumulator or betting with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Today's Bankers */}
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl text-white mb-8">
            Today's <span className="text-gradient-orange">Banker</span> Picks
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {bankerPredictions.map((prediction, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/50 card-lift ${
                  prediction.isVIP ? 'opacity-50' : ''
                }`}
              >
                {prediction.isVIP ? (
                  <>
                    <div className="filter blur-sm p-6">
                      <BankerCard prediction={prediction} onNavigate={onNavigate} />
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
                    <BankerCard prediction={prediction} onNavigate={onNavigate} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 lg:p-8 mb-12">
          <h3 className="text-2xl text-white mb-8 text-center">
            Why Choose <span className="text-gradient-orange">Banker</span> Picks?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mt-0.5">
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
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all card-lift overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/10 group-hover:to-blue-600/10 transition-all"></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 glow-orange">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white text-xl mb-2 group-hover:text-blue-400 transition-colors">All Predictions</h4>
              <p className="text-sm text-gray-400">View all our predictions including value bets</p>
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
              <p className="text-sm text-gray-400">Access exclusive VIP banker predictions</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function BankerCard({ prediction, onNavigate }: { prediction: any; onNavigate: (page: string) => void }) {
  return (
    <div className="group">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <Shield className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-xs lg:text-sm text-gray-400">{prediction.league}</span>
        </div>
        <div className="flex items-center space-x-2 bg-green-500/20 border border-green-500/50 px-2.5 py-1 rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-xs text-green-400 font-semibold">BANKER</span>
        </div>
      </div>

      {/* Match */}
      <div className="mb-4">
        <div className="grid grid-cols-3 gap-2 items-center mb-3">
          <div className="text-center">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/5 border border-white/10 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:border-blue-500/30 transition-all">
              <span className="text-lg lg:text-xl">🏆</span>
            </div>
            <div className="text-sm lg:text-base text-white line-clamp-1 group-hover:text-blue-400 transition-colors">{prediction.home}</div>
          </div>
          <div className="text-center">
            <div className="text-xs lg:text-sm text-gray-500 mb-1">VS</div>
            <div className="text-lg lg:text-2xl">⚽</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/5 border border-white/10 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:border-blue-500/30 transition-all">
              <span className="text-lg lg:text-xl">🏆</span>
            </div>
            <div className="text-sm lg:text-base text-white line-clamp-1 group-hover:text-blue-400 transition-colors">{prediction.away}</div>
          </div>
        </div>
      </div>

      {/* Prediction */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs text-blue-400">Banker Prediction</div>
          <div className="text-xs text-gray-400">{prediction.analysis}</div>
        </div>
        <div className="text-base lg:text-lg text-white mb-2">{prediction.prediction}</div>
        <div className="text-xs text-gray-400">{prediction.reasoning}</div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
          <div className="text-xs text-gray-400 mb-1">Odds</div>
          <div className="text-xl lg:text-2xl text-blue-400">{prediction.odds}</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
          <div className="text-xs text-gray-400 mb-1">Confidence</div>
          <div className="text-xl lg:text-2xl text-green-400">{prediction.confidence}%</div>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={() => onNavigate('predictions')}
        className="relative w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl transition-all group/btn overflow-hidden"
      >
        <div className="absolute inset-0 shine-effect opacity-0 group-hover/btn:opacity-100"></div>
        <span className="relative z-10">Add to Coupon</span>
      </button>

      {/* Confidence Bar */}
      <div className="h-2 bg-white/10 rounded-full overflow-hidden mt-4">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500"
          style={{ width: `${prediction.confidence}%` }}
        />
      </div>
    </div>
  );
}
