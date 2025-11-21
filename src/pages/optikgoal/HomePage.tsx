import { Trophy, Target, FileText, Crown, TrendingUp, Clock, Zap, Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { AdBanner } from '../../components/optikgoal/AdBanner';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage();

  const bigMatches = [
    { home: 'Manchester United', away: 'Liverpool', time: '20:00', league: 'Premier League', importance: 'high' },
    { home: 'Real Madrid', away: 'Barcelona', time: '21:45', league: 'La Liga', importance: 'high' },
    { home: 'Bayern Munich', away: 'Dortmund', time: '18:30', league: 'Bundesliga', importance: 'medium' },
  ];

  const liveMatches = [
    { home: 'Chelsea', away: 'Arsenal', homeScore: 1, awayScore: 2, minute: '67', sport: 'Football' },
    { home: 'Lakers', away: 'Celtics', homeScore: 98, awayScore: 95, minute: 'Q4 3:24', sport: 'Basketball' },
  ];

  const quickLinks = [
    { icon: Target, label: t('nav.predictions'), page: 'predictions', color: 'from-blue-500 to-blue-600', gradient: 'from-blue-400/20 to-blue-600/20' },
    { icon: Crown, label: t('nav.vip'), page: 'vip', color: 'from-orange-500 to-orange-600', gradient: 'from-orange-400/20 to-orange-600/20' },
    { icon: FileText, label: t('nav.bulletin'), page: 'bulletin', color: 'from-purple-500 to-purple-600', gradient: 'from-purple-400/20 to-purple-600/20' },
    { icon: Zap, label: t('nav.news'), page: 'news', color: 'from-green-500 to-green-600', gradient: 'from-green-400/20 to-green-600/20' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Top Ads Marquee */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-500/10 via-orange-600/5 to-orange-500/10 border-b border-orange-500/20 py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set of ads */}
          <div className="inline-flex items-center space-x-8 mx-4">
            <div className="flex items-center space-x-3 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-lg border border-orange-500/30">
              <span className="text-xl">⚡</span>
              <span className="text-white text-sm">Live Betting Available - Bet Now!</span>
            </div>
            <div className="flex items-center space-x-3 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-lg border border-orange-500/30">
              <span className="text-xl">🎁</span>
              <span className="text-white text-sm">New Users Get 50% Bonus!</span>
            </div>
            <div className="flex items-center space-x-3 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-lg border border-orange-500/30">
              <span className="text-xl">🔥</span>
              <span className="text-white text-sm">Hot Match: Man Utd vs Liverpool!</span>
            </div>
            <div className="flex items-center space-x-3 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-lg border border-orange-500/30">
              <span className="text-xl">💎</span>
              <span className="text-white text-sm">VIP: 98% Accurate Predictions!</span>
            </div>
            <div className="flex items-center space-x-3 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-lg border border-orange-500/30">
              <span className="text-xl">🏆</span>
              <span className="text-white text-sm">50,000+ Happy Winners!</span>
            </div>
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="inline-flex items-center space-x-8 mx-4">
            <div className="flex items-center space-x-3 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-lg border border-orange-500/30">
              <span className="text-xl">⚡</span>
              <span className="text-white text-sm">Live Betting Available - Bet Now!</span>
            </div>
            <div className="flex items-center space-x-3 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-lg border border-orange-500/30">
              <span className="text-xl">🎁</span>
              <span className="text-white text-sm">New Users Get 50% Bonus!</span>
            </div>
            <div className="flex items-center space-x-3 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-lg border border-orange-500/30">
              <span className="text-xl">🔥</span>
              <span className="text-white text-sm">Hot Match: Man Utd vs Liverpool!</span>
            </div>
            <div className="flex items-center space-x-3 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-lg border border-orange-500/30">
              <span className="text-xl">💎</span>
              <span className="text-white text-sm">VIP: 98% Accurate Predictions!</span>
            </div>
            <div className="flex items-center space-x-3 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-lg border border-orange-500/30">
              <span className="text-xl">🏆</span>
              <span className="text-white text-sm">50,000+ Happy Winners!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Pattern */}
      <div className="relative bg-premium-pattern overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3 mb-8"
          >
            <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl glow-orange">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl text-white">
              <span className="text-gradient-orange">{t('home.hero')}</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {bigMatches.map((match, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 cursor-pointer card-lift overflow-hidden"
                onClick={() => onNavigate('live-scores')}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 shine-effect opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Most Popular Ribbon - Only for first match */}
                {index === 0 && (
                  <div className="absolute -top-1 -left-1 z-20">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-6 py-2 rounded-tl-2xl rounded-br-2xl shadow-lg glow-orange-strong">
                        <span className="flex items-center space-x-1">
                          <span>🔥</span>
                          <span>Most Popular</span>
                        </span>
                      </div>
                      {/* Decorative corner cuts */}
                      <div className="absolute -bottom-2 left-0 w-2 h-2 bg-orange-700 transform rotate-45"></div>
                    </div>
                  </div>
                )}
                
                {/* High importance badge */}
                {match.importance === 'high' && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1 glow-orange">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="text-xs text-orange-400 mb-4 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <span>{match.league}</span>
                  </div>
                  <div className="space-y-3">
                    <div className="text-lg text-white group-hover:text-orange-400 transition-colors">{match.home}</div>
                    <div className="text-sm text-gray-400">vs</div>
                    <div className="text-lg text-white group-hover:text-orange-400 transition-colors">{match.away}</div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center space-x-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>{match.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <h2 className="text-2xl lg:text-3xl text-white mb-8">{t('home.quickLinks')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <button
                key={index}
                onClick={() => onNavigate(link.page)}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 lg:p-8 card-lift overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${link.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg glow-orange-strong`}>
                    <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="text-white group-hover:text-orange-400 transition-colors">{link.label}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Ad After Quick Links */}
        <div className="mt-12">
          <AdBanner showVIPUpgrade onNavigate={onNavigate} />
        </div>

        {/* Live Scores Widget */}
        <div className="mt-12 lg:mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl text-white flex items-center space-x-3">
              <span>{t('home.liveScores')}</span>
              <div className="flex items-center space-x-2 bg-red-500/20 border border-red-500/50 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse-gold"></div>
                <span className="text-xs text-red-400">LIVE</span>
              </div>
            </h2>
            <button
              onClick={() => onNavigate('live-scores')}
              className="text-sm text-orange-400 hover:text-orange-300 transition-colors flex items-center space-x-1"
            >
              <span>{t('common.seeAll')}</span>
              <span>→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {liveMatches.map((match, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 card-lift cursor-pointer overflow-hidden"
                onClick={() => onNavigate('live-scores')}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:to-orange-600/5 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs text-gray-400">{match.sport}</span>
                    <span className="flex items-center space-x-2 text-xs bg-red-500/20 border border-red-500/50 text-red-400 px-3 py-1.5 rounded-full">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse-gold"></span>
                      <span>LIVE</span>
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white text-lg">{match.home}</span>
                      <span className="text-3xl text-white font-bold tabular-nums">{match.homeScore}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white text-lg">{match.away}</span>
                      <span className="text-3xl text-white font-bold tabular-nums">{match.awayScore}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" style={{ width: `${(parseInt(match.minute) / 90) * 100}%` }}></div>
                      </div>
                      <span className="text-sm text-orange-400 font-semibold tabular-nums">{match.minute}'</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner />

      {/* Testimonials Section */}
      <div className="relative bg-gradient-to-br from-green-900/20 via-orange-900/10 to-green-900/20 py-16 lg:py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl text-white mb-4">
              What Say Our <span className="text-gradient-orange">Clients</span>
            </h2>
            <p className="text-gray-400 text-lg">Real success stories from our valued members</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Mohammed Al-Rashid",
                role: "VIP Member",
                avatar: "👨‍💼",
                rating: 5,
                text: "OptikGoal transformed my betting strategy! The VIP predictions are incredibly accurate, and I've seen a 300% return on investment in just 3 months. The AI analysis is truly next-level!",
                highlight: "300% ROI"
              },
              {
                name: "Sarah Johnson",
                role: "Premium Member",
                avatar: "👩‍💼",
                rating: 5,
                text: "I was skeptical at first, but the 98% accuracy rate is real! The detailed analysis and expert insights have made me a consistent winner. Best investment I've ever made!",
                highlight: "98% Accuracy"
              },
              {
                name: "Carlos Rodriguez",
                role: "VIP Member",
                avatar: "👨‍🦱",
                rating: 5,
                text: "The platform is incredible! From live scores to VIP predictions, everything is top-notch. The support team is amazing, and the community is very helpful. Highly recommended!",
                highlight: "Top Service"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-orange-500/50 transition-all duration-300 card-lift overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 shine-effect opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Highlight badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-3 py-1.5 rounded-full glow-orange">
                    {testimonial.highlight}
                  </span>
                </div>

                <div className="relative z-10">
                  {/* Quote icon */}
                  <div className="text-6xl text-orange-500/20 mb-4">"</div>
                  
                  {/* Testimonial text */}
                  <p className="text-gray-300 text-sm lg:text-base mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>

                  {/* Rating stars */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                    ))}
                  </div>

                  {/* Author info */}
                  <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-3xl glow-orange">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "50,000+", label: "Happy Clients" },
              { value: "98%", label: "Success Rate" },
              { value: "24/7", label: "Support" },
              { value: "5★", label: "Rating" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl text-gradient-orange mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}