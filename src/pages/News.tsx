import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { NewsCard } from '../components/NewsCard';
import { Newspaper } from 'lucide-react';
import { useState } from 'react';

interface NewsProps {
  onNavigate: (page: string) => void;
}

export function News({ onNavigate }: NewsProps) {
  const [category, setCategory] = useState('All');

  const categories = [
    'All',
    'Transfer',
    'Champions League',
    'Premier League',
    'La Liga',
    'Serie A',
    'Match Reports',
  ];

  const newsArticles = [
    {
      title: 'Manchester United Signs New Star Midfielder',
      excerpt: 'The Red Devils complete a major transfer deal worth €80 million for the young talent from Serie A.',
      category: 'Transfer',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800',
      date: '2 hours ago',
    },
    {
      title: 'Champions League Draw Results Announced',
      excerpt: 'The knockout stage draw reveals exciting matchups between European giants as the competition heats up.',
      category: 'Champions League',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800',
      date: '5 hours ago',
    },
    {
      title: 'Top Scorer Battle Heats Up in La Liga',
      excerpt: 'Two strikers are neck and neck in the race for the Pichichi Trophy with just 6 games remaining.',
      category: 'La Liga',
      image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800',
      date: '1 day ago',
    },
    {
      title: 'Premier League Title Race: Analysis of Top 3 Teams',
      excerpt: 'As we enter the final stretch, we analyze the strengths and weaknesses of the title contenders.',
      category: 'Premier League',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
      date: '1 day ago',
    },
    {
      title: 'Juventus Manager Under Pressure After Recent Losses',
      excerpt: 'The Italian giants face a crucial period as questions arise about the manager\'s future at the club.',
      category: 'Serie A',
      image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800',
      date: '2 days ago',
    },
    {
      title: 'Liverpool vs Manchester City: Match Report',
      excerpt: 'An intense battle at Anfield sees both teams fight for crucial points in the title race.',
      category: 'Match Reports',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800',
      date: '2 days ago',
    },
  ];

  const filteredNews = category === 'All'
    ? newsArticles
    : newsArticles.filter(article => article.category === category);

  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-white mb-2">Sports News</h1>
          <p className="text-gray-400">Stay updated with the latest sports news and stories</p>
        </div>

        {/* Featured News */}
        <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-video md:aspect-auto bg-gray-800">
              <img
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800"
                alt="Featured"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded inline-block w-fit mb-3">
                Featured
              </span>
              <h2 className="text-2xl text-white mb-3">
                Manchester United Signs New Star Midfielder
              </h2>
              <p className="text-gray-400 mb-6">
                The Red Devils complete a major transfer deal worth €80 million for the young talent from Serie A. The midfielder is expected to strengthen the team's midfield.
              </p>
              <button
                onClick={() => onNavigate('news-detail')}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-colors w-fit"
              >
                Read Full Story
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Newspaper className="w-5 h-5 text-yellow-400" />
            <span className="text-white">Categories</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  category === cat
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((article, index) => (
            <NewsCard
              key={index}
              {...article}
              onClick={() => onNavigate('news-detail')}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
            Load More Articles
          </button>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
