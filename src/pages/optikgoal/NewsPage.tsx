import { TrendingUp, Clock, Eye, MessageCircle, Share2, Bookmark, ArrowRight, ArrowUp, ArrowDown, Activity, Zap, Calendar, Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { AdBanner } from '../../components/optikgoal/AdBanner';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

interface NewsPageProps {
  onNavigate: (page: string) => void;
}

export function NewsPage({ onNavigate }: NewsPageProps) {
  const { t } = useLanguage();

  const liveGames = [
    {
      league: 'Premier League',
      home: 'Manchester City',
      away: 'Arsenal',
      homeScore: 2,
      awayScore: 1,
      minute: '67',
      odds: {
        home: { value: '1.45', trend: 'down', change: '-0.15' },
        draw: { value: '4.20', trend: 'up', change: '+0.30' },
        away: { value: '6.50', trend: 'up', change: '+1.20' },
      },
      momentum: 'home',
      events: ['Goal 65\'', 'Yellow Card 63\''],
    },
    {
      league: 'La Liga',
      home: 'Barcelona',
      away: 'Atletico Madrid',
      homeScore: 1,
      awayScore: 1,
      minute: '72',
      odds: {
        home: { value: '2.10', trend: 'stable', change: '0.00' },
        draw: { value: '3.20', trend: 'down', change: '-0.10' },
        away: { value: '3.80', trend: 'up', change: '+0.20' },
      },
      momentum: 'neutral',
      events: ['Goal 70\'', 'Corner 68\''],
    },
    {
      league: 'Serie A',
      home: 'Inter Milan',
      away: 'AC Milan',
      homeScore: 0,
      awayScore: 0,
      minute: '38',
      odds: {
        home: { value: '2.30', trend: 'up', change: '+0.10' },
        draw: { value: '3.10', trend: 'down', change: '-0.05' },
        away: { value: '3.40', trend: 'stable', change: '0.00' },
      },
      momentum: 'away',
      events: ['Shot on Target 35\'', 'Free Kick 32\''],
    },
  ];

  const featuredNews = {
    title: 'BREAKING: Champions League Final Date Announced',
    excerpt: 'UEFA confirms the venue and date for the biggest club football match of the season. Tickets go on sale next week.',
    category: 'Champions League',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200',
    date: '10 min ago',
    views: '12.5K',
    trending: true,
  };

  const newsArticles = [
    {
      title: 'Manchester United Signs New Star Midfielder',
      excerpt: 'The Red Devils complete a major transfer deal worth €80 million.',
      category: 'Transfer',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800',
      date: '2 hours ago',
      views: '8.3K',
    },
    {
      title: 'Champions League Draw Results',
      excerpt: 'Exciting matchups revealed for the knockout stage.',
      category: 'Champions League',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800',
      date: '5 hours ago',
      views: '6.2K',
    },
    {
      title: 'La Liga Top Scorer Battle Heats Up',
      excerpt: 'Two strikers neck and neck with 6 games remaining in the season.',
      category: 'La Liga',
      image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800',
      date: '1 day ago',
      views: '5.1K',
    },
    {
      title: 'Premier League Title Race: Final Stretch Analysis',
      excerpt: 'Expert predictions as three teams battle for the trophy with five games left.',
      category: 'Premier League',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
      date: '1 day ago',
      views: '9.7K',
    },
    {
      title: 'Bundesliga Rising Stars: Top 5 Young Players',
      excerpt: 'Meet the next generation of football superstars making waves in Germany.',
      category: 'Bundesliga',
      image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=800',
      date: '2 days ago',
      views: '4.8K',
    },
    {
      title: 'Transfer Window: Biggest Deals Expected',
      excerpt: 'Summer transfer market set to break records with mega deals in the pipeline.',
      category: 'Transfer',
      image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800',
      date: '2 days ago',
      views: '11.2K',
    },
  ];

  const categories = [
    { name: 'All News', count: 124, icon: TrendingUp },
    { name: 'Transfers', count: 32, icon: TrendingUp },
    { name: 'Match Reports', count: 45, icon: Clock },
    { name: 'Trending', count: 18, icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background orbs */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <h1 className="text-2xl lg:text-3xl text-white mb-2">
            <span className="text-gradient-orange">{t('nav.news')}</span>
          </h1>
          <p className="text-sm lg:text-base text-gray-400">Latest sports news, transfers, and match updates</p>
        </div>

        {/* Live Betting Updates Section */}
        <div className="mb-8 lg:mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl lg:text-2xl text-white flex items-center space-x-3">
              <span>Live Betting Updates</span>
              <div className="flex items-center space-x-2 bg-red-500/20 border border-red-500/50 px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse-gold"></div>
                <span className="text-xs text-red-400">LIVE</span>
              </div>
            </h2>
            <button 
              onClick={() => onNavigate('live-scores')}
              className="text-sm text-orange-400 hover:text-orange-300 transition-colors flex items-center space-x-1"
            >
              <span>View All Live</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            {liveGames.map((game, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-orange-500/50 card-lift cursor-pointer"
                onClick={() => onNavigate('live-scores')}
              >
                {/* Sports field background image */}
                <div 
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1734652246537-104c43a68942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHN0YWRpdW0lMjBmaWVsZHxlbnwxfHx8fDE3NjM1NTA4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/60"></div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:to-orange-600/5 transition-all duration-300"></div>
                
                {/* Momentum indicator */}
                {game.momentum !== 'neutral' && (
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    game.momentum === 'home' ? 'from-green-500 to-green-600' : 'from-blue-500 to-blue-600'
                  }`}></div>
                )}

                <div className="relative z-10 p-4 lg:p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-400 bg-white/10 px-2.5 py-1 rounded-full">{game.league}</span>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 bg-red-500/20 border border-red-500/50 px-2 py-1 rounded-full">
                        <Activity className="w-3 h-3 text-red-400" />
                        <span className="text-xs text-red-400 font-semibold">{game.minute}'</span>
                      </div>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-white">{game.home}</span>
                      <span className="text-2xl text-white font-bold">{game.homeScore}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">{game.away}</span>
                      <span className="text-2xl text-white font-bold">{game.awayScore}</span>
                    </div>
                  </div>

                  {/* Recent Events */}
                  <div className="mb-4 pb-4 border-b border-white/10">
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <Zap className="w-3 h-3 text-orange-400" />
                      <span>{game.events[0]}</span>
                    </div>
                  </div>

                  {/* Live Odds */}
                  <div>
                    <div className="text-xs text-gray-400 mb-2">Live Odds</div>
                    <div className="grid grid-cols-3 gap-2">
                      {/* Home Odds */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate('predictions');
                        }}
                        className="relative bg-white/5 border border-white/10 hover:border-green-500/50 rounded-lg p-2 transition-all group/odd overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-600/0 group-hover/odd:from-green-500/10 group-hover/odd:to-green-600/10 transition-all"></div>
                        <div className="relative z-10">
                          <div className="flex items-center justify-center space-x-1 mb-1">
                            <span className="text-xs text-white font-semibold">{game.odds.home.value}</span>
                            {game.odds.home.trend === 'up' && <ArrowUp className="w-2.5 h-2.5 text-green-400" />}
                            {game.odds.home.trend === 'down' && <ArrowDown className="w-2.5 h-2.5 text-red-400" />}
                          </div>
                          <div className={`text-xs ${
                            game.odds.home.trend === 'up' ? 'text-green-400' : 
                            game.odds.home.trend === 'down' ? 'text-red-400' : 
                            'text-gray-500'
                          }`}>
                            {game.odds.home.change}
                          </div>
                        </div>
                      </button>

                      {/* Draw Odds */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate('predictions');
                        }}
                        className="relative bg-white/5 border border-white/10 hover:border-orange-500/50 rounded-lg p-2 transition-all group/odd overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover/odd:from-orange-500/10 group-hover/odd:to-orange-600/10 transition-all"></div>
                        <div className="relative z-10">
                          <div className="flex items-center justify-center space-x-1 mb-1">
                            <span className="text-xs text-white font-semibold">{game.odds.draw.value}</span>
                            {game.odds.draw.trend === 'up' && <ArrowUp className="w-2.5 h-2.5 text-green-400" />}
                            {game.odds.draw.trend === 'down' && <ArrowDown className="w-2.5 h-2.5 text-red-400" />}
                          </div>
                          <div className={`text-xs ${
                            game.odds.draw.trend === 'up' ? 'text-green-400' : 
                            game.odds.draw.trend === 'down' ? 'text-red-400' : 
                            'text-gray-500'
                          }`}>
                            {game.odds.draw.change}
                          </div>
                        </div>
                      </button>

                      {/* Away Odds */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate('predictions');
                        }}
                        className="relative bg-white/5 border border-white/10 hover:border-blue-500/50 rounded-lg p-2 transition-all group/odd overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover/odd:from-blue-500/10 group-hover/odd:to-blue-600/10 transition-all"></div>
                        <div className="relative z-10">
                          <div className="flex items-center justify-center space-x-1 mb-1">
                            <span className="text-xs text-white font-semibold">{game.odds.away.value}</span>
                            {game.odds.away.trend === 'up' && <ArrowUp className="w-2.5 h-2.5 text-green-400" />}
                            {game.odds.away.trend === 'down' && <ArrowDown className="w-2.5 h-2.5 text-red-400" />}
                          </div>
                          <div className={`text-xs ${
                            game.odds.away.trend === 'up' ? 'text-green-400' : 
                            game.odds.away.trend === 'down' ? 'text-red-400' : 
                            'text-gray-500'
                          }`}>
                            {game.odds.away.change}
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Quick Bet Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('predictions');
                    }}
                    className="w-full mt-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg glow-orange relative overflow-hidden group/btn"
                  >
                    <div className="absolute inset-0 shine-effect opacity-0 group-hover/btn:opacity-100"></div>
                    <span className="relative z-10">Quick Bet Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-8 lg:mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                onClick={() => onNavigate('news')}
                className="group relative bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-orange-500/50 card-lift overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/10 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center glow-orange group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <span className="text-xs lg:text-sm text-gray-400 bg-white/10 px-2 py-1 rounded-full">{category.count}</span>
                  </div>
                  <div className="text-sm lg:text-base text-white group-hover:text-orange-400 transition-colors">{category.name}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured News */}
        <div
          className="group relative bg-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 hover:border-orange-500/50 mb-8 lg:mb-12 cursor-pointer card-lift"
          onClick={() => onNavigate('news-detail')}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:to-orange-600/5 transition-all duration-300"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Image */}
            <div className="relative h-64 lg:h-96 overflow-hidden lg:rounded-l-3xl">
              <ImageWithFallback
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {featuredNews.trending && (
                  <div className="flex items-center space-x-1 bg-red-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs">
                    <TrendingUp className="w-3 h-3" />
                    <span>TRENDING</span>
                  </div>
                )}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-full text-xs glow-orange">
                  {featuredNews.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8 flex flex-col justify-center relative z-10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>{featuredNews.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Eye className="w-4 h-4 text-orange-400" />
                  <span>{featuredNews.views} views</span>
                </div>
              </div>

              <h2 className="text-2xl lg:text-4xl text-white mb-4 group-hover:text-orange-400 transition-colors">
                {featuredNews.title}
              </h2>

              <p className="text-base lg:text-lg text-gray-400 mb-6 line-clamp-3">
                {featuredNews.excerpt}
              </p>

              <button className="relative inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors group/btn overflow-hidden">
                <span className="text-sm lg:text-base">Read Full Story</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Latest News Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl lg:text-2xl text-white">Latest News</h2>
            <button 
              onClick={() => onNavigate('news')}
              className="text-sm text-orange-400 hover:text-orange-300 transition-colors flex items-center space-x-1">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {newsArticles.map((article, i) => (
              <article
                key={i}
                className="group bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-white/10 overflow-hidden hover:border-orange-500/50 card-lift cursor-pointer"
                onClick={() => onNavigate('news-detail')}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:to-orange-600/5 transition-all duration-300 rounded-xl lg:rounded-2xl"></div>
                
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2.5 py-1 rounded-full text-xs glow-orange">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 lg:p-6 relative z-10">
                  <div className="flex items-center justify-between text-xs lg:text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3.5 h-3.5 text-orange-400" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3.5 h-3.5 text-orange-400" />
                      <span>{article.views}</span>
                    </div>
                  </div>

                  <h3 className="text-base lg:text-lg text-white mb-3 line-clamp-2 group-hover:text-orange-400 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">{article.excerpt}</p>

                  <div className="flex items-center space-x-2 text-orange-400 group-hover:text-orange-300 transition-colors">
                    <span className="text-sm">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/10 p-6 lg:p-8">
          <h3 className="text-lg lg:text-xl text-white mb-6">Explore More</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => onNavigate('predictions')}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-4 hover:border-orange-500/50 transition-all card-lift overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/10 transition-all"></div>
              <div className="relative z-10 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white text-sm lg:text-base group-hover:text-orange-400 transition-colors">View Predictions</div>
                  <div className="text-xs text-gray-400">Expert tips & analysis</div>
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate('live-scores')}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-4 hover:border-orange-500/50 transition-all card-lift overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/10 transition-all"></div>
              <div className="relative z-10 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white text-sm lg:text-base group-hover:text-orange-400 transition-colors">Live Scores</div>
                  <div className="text-xs text-gray-400">Real-time updates</div>
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate('vip')}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-4 hover:border-orange-500/50 transition-all card-lift overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/10 transition-all"></div>
              <div className="relative z-10 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center glow-orange">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white text-sm lg:text-base group-hover:text-orange-400 transition-colors">VIP Membership</div>
                  <div className="text-xs text-gray-400">Premium access</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Ad Banner */}
        <AdBanner />
      </div>
    </div>
  );
}