import { Lock, TrendingUp, Zap, FileText, Crown, Calendar, TrendingDown, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface PredictionsPageProps {
  onNavigate: (page: string) => void;
}

export function PredictionsPage({ onNavigate }: PredictionsPageProps) {
  const [activeTab, setActiveTab] = useState('coupon');
  const [couponItems, setCouponItems] = useState<any[]>([]);
  const { t } = useLanguage();

  const tabs = [
    { id: 'banker', label: t('pred.banker'), icon: TrendingUp },
    { id: 'surprise', label: t('pred.surprise'), icon: Zap },
    { id: 'coupon', label: t('pred.coupon'), icon: FileText },
    { id: 'vip', label: t('pred.vip'), icon: Crown },
  ];

  const handleTabClick = (tabId: string) => {
    if (tabId === 'vip') {
      onNavigate('vip');
    } else if (tabId === 'surprise') {
      onNavigate('surprise');
    } else if (tabId === 'banker') {
      onNavigate('banker');
    } else {
      setActiveTab(tabId);
    }
  };

  const predictions = [
    {
      home: 'Manchester United',
      away: 'Liverpool',
      league: 'Premier League',
      time: '20:00',
      date: 'Nov 19',
      prediction: 'Over 2.5 Goals',
      odds: '1.85',
      confidence: 92,
      isVIP: false,
      analysis: 'Both teams averaging 3+ goals per game',
      type: 'banker',
    },
    {
      home: 'Real Madrid',
      away: 'Barcelona',
      league: 'La Liga',
      time: '21:45',
      date: 'Nov 19',
      prediction: 'Home Win',
      odds: '2.10',
      confidence: 88,
      isVIP: false,
      analysis: 'Real Madrid unbeaten at home this season',
      type: 'banker',
    },
    {
      home: 'Bayern Munich',
      away: 'Dortmund',
      league: 'Bundesliga',
      time: '18:30',
      date: 'Nov 20',
      prediction: 'BTTS',
      odds: '1.65',
      confidence: 85,
      isVIP: activeTab === 'vip',
      analysis: 'High-scoring rivalry match',
      type: 'banker',
    },
    {
      home: 'Arsenal',
      away: 'Chelsea',
      league: 'Premier League',
      time: '17:00',
      date: 'Nov 20',
      prediction: 'Under 2.5 Goals',
      odds: '1.95',
      confidence: 79,
      isVIP: activeTab === 'vip',
      analysis: 'Defensive tactical battle expected',
      type: 'banker',
    },
  ];

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
      analysis: 'Forest strong at home, Spurs struggling away',
      type: 'surprise',
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
      analysis: 'Getafe defensive setup, low-scoring draw likely',
      type: 'surprise',
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
      isVIP: false,
      analysis: 'Both teams attacking minded, goals expected',
      type: 'surprise',
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
      isVIP: false,
      analysis: 'Napoli in great form, Sassuolo leaky defense',
      type: 'surprise',
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
      analysis: 'Open game expected with both teams scoring',
      type: 'surprise',
    },
  ];

  const getCurrentPredictions = () => {
    if (activeTab === 'surprise') {
      return surprisePredictions;
    }
    if (activeTab === 'vip') {
      return predictions.filter(p => p.isVIP);
    }
    return predictions;
  };

  const addToCoupon = (prediction: any) => {
    if (!couponItems.find(item => item.home === prediction.home)) {
      setCouponItems([...couponItems, prediction]);
    }
  };

  const removeFromCoupon = (prediction: any) => {
    setCouponItems(couponItems.filter(item => item.home !== prediction.home));
  };

  const totalOdds = couponItems.reduce((acc, item) => acc * parseFloat(item.odds), 1).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 lg:mb-8">
          <h1 className="text-2xl lg:text-3xl text-white mb-2">
            <span className="text-gradient-orange">{t('nav.predictions')}</span>
          </h1>
          <p className="text-sm lg:text-base text-gray-400">Professional betting predictions with high accuracy</p>
        </div>

        {/* Tabs */}
        <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-white/10 p-2 mb-6 lg:mb-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative px-3 py-2.5 lg:px-4 lg:py-3 rounded-lg transition-all flex items-center justify-center space-x-2 text-sm lg:text-base overflow-hidden group ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 glow-orange"></div>
                  )}
                  {activeTab !== tab.id && (
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all"></div>
                  )}
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5 relative z-10" />
                  <span className="hidden sm:inline relative z-10">{tab.label}</span>
                  <span className="sm:hidden relative z-10">{tab.label}</span>
                  <div className="absolute inset-0 shine-effect opacity-0 group-hover:opacity-100"></div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'coupon' ? (
          <CouponSection 
            couponItems={couponItems} 
            removeFromCoupon={removeFromCoupon}
            totalOdds={totalOdds}
          />
        ) : (
          <>
            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-6 lg:mb-8">
              {[
                { label: 'Success Rate', value: '87%', color: 'text-green-400', icon: TrendingUp },
                { label: 'Total Predictions', value: '1,234', color: 'text-blue-400', icon: FileText },
                { label: 'ROI', value: '+287%', color: 'text-orange-400', icon: TrendingDown },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-white/10 p-4 lg:p-6 text-center card-lift">
                    <Icon className={`w-6 h-6 lg:w-8 lg:h-8 ${stat.color} mx-auto mb-2`} />
                    <div className={`text-2xl lg:text-3xl mb-1 ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs lg:text-sm text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Predictions List */}
            <div className="space-y-4">
              {getCurrentPredictions()
                .map((prediction, index) => (
                  <div
                    key={index}
                    className={`bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-white/10 overflow-hidden hover:border-orange-500/50 card-lift ${
                      prediction.isVIP && activeTab === 'vip' ? 'relative' : ''
                    }`}
                  >
                    {prediction.isVIP && activeTab === 'vip' ? (
                      <>
                        <div className="filter blur-sm">
                          <PredictionContent 
                            prediction={prediction} 
                            addToCoupon={addToCoupon}
                            isInCoupon={couponItems.some(item => item.home === prediction.home)}
                          />
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
                      <PredictionContent 
                        prediction={prediction} 
                        addToCoupon={addToCoupon}
                        isInCoupon={couponItems.some(item => item.home === prediction.home)}
                      />
                    )}
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function PredictionContent({ prediction, addToCoupon, isInCoupon }: { prediction: any; addToCoupon: (p: any) => void; isInCoupon: boolean }) {
  const { t } = useLanguage();
  
  return (
    <div className="p-4 lg:p-6 group">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-orange-400" />
          <span className="text-xs lg:text-sm text-gray-400">{prediction.league}</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs lg:text-sm text-gray-500">{prediction.date}</span>
          <span className="text-sm lg:text-base text-orange-400">{prediction.time}</span>
        </div>
      </div>

      {/* Match */}
      <div className="mb-4 lg:mb-6">
        <div className="grid grid-cols-3 gap-2 lg:gap-4 items-center mb-3 lg:mb-4">
          <div className="text-center">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/5 border border-white/10 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:border-orange-500/30 transition-all">
              <span className="text-lg lg:text-2xl">🏆</span>
            </div>
            <div className="text-sm lg:text-base text-white line-clamp-2 group-hover:text-orange-400 transition-colors">{prediction.home}</div>
          </div>
          <div className="text-center">
            <div className="text-xs lg:text-sm text-gray-500 mb-1">VS</div>
            <div className="text-lg lg:text-2xl">⚽</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/5 border border-white/10 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:border-orange-500/30 transition-all">
              <span className="text-lg lg:text-2xl">🏆</span>
            </div>
            <div className="text-sm lg:text-base text-white line-clamp-2 group-hover:text-orange-400 transition-colors">{prediction.away}</div>
          </div>
        </div>
      </div>

      {/* Prediction */}
      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg lg:rounded-xl p-3 lg:p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs text-orange-400">Prediction</div>
          <div className="text-xs lg:text-sm text-gray-400">{prediction.analysis}</div>
        </div>
        <div className="text-base lg:text-lg text-white">{prediction.prediction}</div>
      </div>

      {/* Footer */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-4">
        <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
          <div className="text-xs text-gray-400 mb-1">{t('pred.odds')}</div>
          <div className="text-xl lg:text-2xl text-orange-400">{prediction.odds}</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
          <div className="text-xs text-gray-400 mb-1">{t('pred.confidence')}</div>
          <div className="text-xl lg:text-2xl text-green-400">{prediction.confidence}%</div>
        </div>
        <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
          <button
            onClick={() => addToCoupon(prediction)}
            disabled={isInCoupon}
            className={`relative w-full px-4 py-3 rounded-lg transition-all flex items-center justify-center space-x-2 text-sm lg:text-base overflow-hidden group ${
              isInCoupon
                ? 'bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white glow-orange'
            }`}
          >
            {!isInCoupon && <div className="absolute inset-0 shine-effect opacity-0 group-hover:opacity-100"></div>}
            <Plus className="w-4 h-4 lg:w-5 lg:h-5 relative z-10" />
            <span className="relative z-10">{isInCoupon ? 'In Coupon' : 'Add to Coupon'}</span>
          </button>
        </div>
      </div>

      {/* Confidence Bar */}
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500"
          style={{ width: `${prediction.confidence}%` }}
        />
      </div>
    </div>
  );
}

function CouponSection({ couponItems, removeFromCoupon, totalOdds }: any) {
  const [stake, setStake] = useState('10');
  const potentialWin = (parseFloat(stake) * parseFloat(totalOdds)).toFixed(2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
      {/* Coupon Items */}
      <div className="lg:col-span-2 space-y-4">
        <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-white/10 p-4 lg:p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg lg:text-xl text-white">Your Coupon</h2>
            <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">{couponItems.length} selections</span>
          </div>

          {couponItems.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 lg:w-16 lg:h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 mb-2">Your coupon is empty</p>
              <p className="text-sm text-gray-500">Add predictions to build your coupon</p>
            </div>
          ) : (
            <div className="space-y-3 lg:space-y-4">
              {couponItems.map((item: any, index: number) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-lg lg:rounded-xl p-3 lg:p-4 hover:border-orange-500/50 transition-all group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-orange-400 mb-1">{item.league}</div>
                      <div className="text-sm lg:text-base text-white mb-1 group-hover:text-orange-400 transition-colors">
                        {item.home} vs {item.away}
                      </div>
                      <div className="text-xs lg:text-sm text-gray-400">{item.prediction}</div>
                    </div>
                    <button
                      onClick={() => removeFromCoupon(item)}
                      className="ml-2 p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <span className="text-xs text-gray-500">Odds</span>
                    <span className="text-sm lg:text-base text-orange-400">{item.odds}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Coupon Summary */}
      <div className="lg:col-span-1">
        <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-white/10 p-4 lg:p-6 sticky top-4">
          <h2 className="text-lg lg:text-xl text-white mb-6">Coupon Summary</h2>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <span className="text-sm text-gray-400">Selections</span>
              <span className="text-sm text-white">{couponItems.length}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <span className="text-sm text-gray-400">Total Odds</span>
              <span className="text-lg text-orange-400">{totalOdds}</span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-2">Stake Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                value={stake}
                onChange={(e) => setStake(e.target.value)}
                className="w-full pl-8 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-4 mb-6">
            <div className="text-xs text-orange-400 mb-1">Potential Win</div>
            <div className="text-2xl lg:text-3xl text-orange-400">${isNaN(parseFloat(potentialWin)) ? '0.00' : potentialWin}</div>
          </div>

          <button
            disabled={couponItems.length === 0}
            className={`relative w-full py-3 rounded-xl transition-all text-sm lg:text-base overflow-hidden group ${
              couponItems.length === 0
                ? 'bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white glow-orange'
            }`}
          >
            {couponItems.length > 0 && <div className="absolute inset-0 shine-effect opacity-0 group-hover:opacity-100"></div>}
            <span className="relative z-10">Place Bet</span>
          </button>
        </div>
      </div>
    </div>
  );
}