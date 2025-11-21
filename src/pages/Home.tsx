import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MatchCard } from '../components/MatchCard';
import { NewsCard } from '../components/NewsCard';
import { ChevronLeft, ChevronRight, Trophy, TrendingUp, Newspaper, Crown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const [leagueIndex, setLeagueIndex] = useState(0);
  const { t, isRTL } = useLanguage();

  const todayMatches = [
    {
      league: 'Premier League',
      homeTeam: 'Manchester United',
      awayTeam: 'Liverpool',
      status: 'live' as const,
      homeScore: 1,
      awayScore: 2,
      minute: '67',
    },
    {
      league: 'La Liga',
      homeTeam: 'Real Madrid',
      awayTeam: 'Barcelona',
      status: 'upcoming' as const,
      time: '20:00',
    },
    {
      league: 'Serie A',
      homeTeam: 'Juventus',
      awayTeam: 'Inter Milan',
      status: 'finished' as const,
      homeScore: 2,
      awayScore: 1,
    },
  ];

  const leagues = [
    { name: 'Premier League', country: 'England', teams: 20 },
    { name: 'La Liga', country: 'Spain', teams: 20 },
    { name: 'Serie A', country: 'Italy', teams: 20 },
    { name: 'Bundesliga', country: 'Germany', teams: 18 },
  ];

  const latestNews = [
    {
      title: 'Manchester United Signs New Star Midfielder',
      excerpt: 'The Red Devils complete a major transfer deal worth €80 million for the young talent.',
      category: t('category.transfer'),
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800',
      date: '2 hours ago',
    },
    {
      title: 'Champions League Draw Results Announced',
      excerpt: 'The knockout stage draw reveals exciting matchups between European giants.',
      category: t('category.championsLeague'),
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800',
      date: '5 hours ago',
    },
    {
      title: 'Top Scorer Battle Heats Up in La Liga',
      excerpt: 'Two strikers are neck and neck in the race for the Pichichi Trophy with 6 games left.',
      category: t('category.laLiga'),
      image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800',
      date: '1 day ago',
    },
  ];

  const quickLinks = [
    { icon: TrendingUp, label: t('nav.liveScores'), page: 'live-scores', color: 'from-red-500 to-red-600' },
    { icon: Trophy, label: t('nav.predictions'), page: 'predictions', color: 'from-blue-500 to-blue-600' },
    { icon: Newspaper, label: t('nav.news'), page: 'news', color: 'from-green-500 to-green-600' },
    { icon: Crown, label: t('nav.vip'), page: 'vip', color: 'from-yellow-400 to-yellow-600' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-8 border border-gray-700">
          <h1 className="text-3xl md:text-4xl text-white mb-4">
            {t('home.welcome')} <span className="text-yellow-400">OptikGoal</span>
          </h1>
          <p className="text-gray-300 mb-6 max-w-2xl">
            {t('home.description')}
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('vip')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-colors flex items-center space-x-2"
            >
              <Crown className="w-5 h-5" />
              <span>{t('home.goVIP')}</span>
            </button>
            <button
              onClick={() => onNavigate('predictions')}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {t('home.viewFreeTips')}
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors border border-gray-800 hover:border-gray-700"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">{link.label}</div>
              </button>
            );
          })}
        </div>

        {/* Today's Matches */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-white">{t('home.todayMatches')}</h2>
            <button
              onClick={() => onNavigate('live-scores')}
              className={`text-sm text-yellow-400 hover:text-yellow-300 transition-colors flex items-center space-x-1 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}
            >
              <span>{t('home.viewAll')}</span>
              <span>{isRTL ? '←' : '→'}</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {todayMatches.map((match, index) => (
              <MatchCard
                key={index}
                {...match}
                onClick={() => onNavigate('match-details')}
              />
            ))}
          </div>
        </section>

        {/* Top Leagues Carousel */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-white">{t('home.topLeagues')}</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setLeagueIndex(Math.max(0, leagueIndex - 1))}
                className={`w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors ${isRTL ? 'flip-rtl' : ''}`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setLeagueIndex(Math.min(leagues.length - 1, leagueIndex + 1))}
                className={`w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors ${isRTL ? 'flip-rtl' : ''}`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {leagues.map((league, index) => (
              <button
                key={league.name}
                onClick={() => onNavigate('match-bulletin')}
                className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors border border-gray-800 hover:border-yellow-400"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Trophy className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-white mb-1">{league.name}</h3>
                <p className="text-sm text-gray-400">{league.country}</p>
                <p className="text-xs text-gray-500 mt-2">{league.teams} {t('common.teams')}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Latest News */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-white">{t('home.latestNews')}</h2>
            <button
              onClick={() => onNavigate('news')}
              className={`text-sm text-yellow-400 hover:text-yellow-300 transition-colors flex items-center space-x-1 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}
            >
              <span>{t('home.viewAll')}</span>
              <span>{isRTL ? '←' : '→'}</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {latestNews.map((news, index) => (
              <NewsCard
                key={index}
                {...news}
                onClick={() => onNavigate('news-detail')}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}