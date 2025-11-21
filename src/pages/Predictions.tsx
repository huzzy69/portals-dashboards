import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PredictionCard } from '../components/PredictionCard';
import { Lock, Crown, TrendingUp, Award } from 'lucide-react';

interface PredictionsProps {
  onNavigate: (page: string) => void;
}

export function Predictions({ onNavigate }: PredictionsProps) {
  const [filter, setFilter] = useState('All');

  const freePredictions = [
    {
      league: 'Premier League',
      homeTeam: 'Manchester City',
      awayTeam: 'Tottenham',
      prediction: 'Over 2.5 Goals',
      confidence: 85,
      category: 'Free',
      odds: '1.75',
    },
    {
      league: 'La Liga',
      homeTeam: 'Real Madrid',
      awayTeam: 'Sevilla',
      prediction: 'Home Win',
      confidence: 78,
      category: 'Free',
      odds: '1.45',
    },
  ];

  const bankPredictions = [
    {
      league: 'Serie A',
      homeTeam: 'AC Milan',
      awayTeam: 'Roma',
      prediction: 'BTTS (Both Teams to Score)',
      confidence: 92,
      category: 'Bank',
      odds: '1.90',
    },
  ];

  const vipPredictions = [
    {
      league: 'Champions League',
      homeTeam: 'Bayern Munich',
      awayTeam: 'PSG',
      prediction: 'VIP Prediction',
      confidence: 95,
      isVIP: true,
      isUnlocked: false,
      category: 'VIP',
    },
    {
      league: 'Premier League',
      homeTeam: 'Arsenal',
      awayTeam: 'Chelsea',
      prediction: 'VIP Prediction',
      confidence: 88,
      isVIP: true,
      isUnlocked: false,
      category: 'VIP',
    },
    {
      league: 'Bundesliga',
      homeTeam: 'Borussia Dortmund',
      awayTeam: 'RB Leipzig',
      prediction: 'VIP Prediction',
      confidence: 90,
      isVIP: true,
      isUnlocked: false,
      category: 'VIP',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-white mb-2">Expert Predictions</h1>
          <p className="text-gray-400">Professional sports betting tips and analysis</p>
        </div>

        {/* VIP Banner */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-6 md:p-8 mb-8 text-black">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl mb-2 flex items-center space-x-2">
                <Crown className="w-6 h-6" />
                <span>Unlock VIP Predictions</span>
              </h2>
              <p className="text-black text-opacity-80">
                Get access to our premium predictions with 90%+ accuracy rate
              </p>
            </div>
            <button
              onClick={() => onNavigate('vip')}
              className="bg-black text-yellow-400 px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors whitespace-nowrap"
            >
              Go Premium
            </button>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['All', 'Free', 'Bank', 'VIP'].map((filterOption) => (
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
            </button>
          ))}
        </div>

        {/* Free Predictions */}
        {(filter === 'All' || filter === 'Free') && (
          <section className="mb-12">
            <h2 className="text-2xl text-white mb-6 flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <span>Free Predictions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {freePredictions.map((prediction, index) => (
                <PredictionCard key={index} {...prediction} />
              ))}
            </div>
          </section>
        )}

        {/* Bank Predictions */}
        {(filter === 'All' || filter === 'Bank') && (
          <section className="mb-12">
            <h2 className="text-2xl text-white mb-6 flex items-center space-x-2">
              <Award className="w-6 h-6 text-blue-400" />
              <span>Bank Predictions</span>
              <span className="text-sm text-gray-400">(High Confidence)</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bankPredictions.map((prediction, index) => (
                <PredictionCard key={index} {...prediction} />
              ))}
            </div>
          </section>
        )}

        {/* VIP Predictions */}
        {(filter === 'All' || filter === 'VIP') && (
          <section>
            <h2 className="text-2xl text-white mb-6 flex items-center space-x-2">
              <Crown className="w-6 h-6 text-yellow-400" />
              <span>VIP Predictions</span>
              <span className="text-sm bg-yellow-400 bg-opacity-20 text-yellow-400 px-3 py-1 rounded-full">
                Premium
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vipPredictions.map((prediction, index) => (
                <PredictionCard key={index} {...prediction} />
              ))}
            </div>
          </section>
        )}

        {/* Success Rate Section */}
        <section className="mt-12">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl text-white mb-6 text-center">Our Success Rate</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl text-green-400 mb-2">87%</div>
                <div className="text-sm text-gray-400">Free Tips</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-blue-400 mb-2">92%</div>
                <div className="text-sm text-gray-400">Bank Tips</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-yellow-400 mb-2">95%</div>
                <div className="text-sm text-gray-400">VIP Tips</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
