import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { NewsCard } from '../components/NewsCard';
import { Clock, User, Share2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface NewsDetailProps {
  onNavigate: (page: string) => void;
}

export function NewsDetail({ onNavigate }: NewsDetailProps) {
  const relatedNews = [
    {
      title: 'Liverpool Looking to Sign Young Defender',
      excerpt: 'The Reds are reportedly interested in the talented center-back from Bundesliga.',
      category: 'Transfer',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800',
      date: '3 hours ago',
    },
    {
      title: 'Chelsea Prepares Mega Bid for Star Striker',
      excerpt: 'The Blues are ready to make a significant offer to secure the services of the prolific scorer.',
      category: 'Transfer',
      image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800',
      date: '5 hours ago',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-6">
          <span className="text-xs bg-yellow-400 text-black px-3 py-1 rounded inline-block mb-4">
            Transfer News
          </span>
          <h1 className="text-3xl md:text-4xl text-white mb-4">
            Manchester United Signs New Star Midfielder
          </h1>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>OptikGoal Editorial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>November 19, 2025 • 2 hours ago</span>
            </div>
            <button className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden mb-8">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200"
            alt="Manchester United Signs New Star Midfielder"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4 text-lg">
              Manchester United have completed the signing of talented midfielder Marco Silva from AC Milan in a deal worth €80 million, the club announced today. The 24-year-old Portuguese international has signed a five-year contract with the Red Devils.
            </p>

            <h2 className="text-2xl text-white mt-8 mb-4">A Major Coup for United</h2>
            <p className="text-gray-300 mb-4">
              The transfer represents a significant statement of intent from Manchester United, who fought off competition from several top European clubs to secure Silva's signature. The midfielder was highly sought after following his impressive performances in Serie A over the past two seasons.
            </p>

            <p className="text-gray-300 mb-4">
              Silva brings a blend of technical ability, vision, and work rate that manager Erik ten Hag believes will be crucial to the team's ambitions both domestically and in Europe. The Portuguese playmaker scored 12 goals and provided 15 assists in all competitions last season.
            </p>

            <h2 className="text-2xl text-white mt-8 mb-4">What Silva Brings to the Team</h2>
            <p className="text-gray-300 mb-4">
              Known for his creative passing and ability to control the tempo of games, Silva is expected to slot into United's midfield alongside existing stars. His versatility allows him to play in multiple positions across the midfield, giving the manager tactical flexibility.
            </p>

            <p className="text-gray-300 mb-4">
              "I'm incredibly excited to join Manchester United," Silva said in his first interview. "This is a dream come true for me. The club has such a rich history and I can't wait to contribute to writing new chapters of success."
            </p>

            <h2 className="text-2xl text-white mt-8 mb-4">Manager's Thoughts</h2>
            <p className="text-gray-300 mb-4">
              Erik ten Hag praised the club's ambition in securing the deal: "Marco is exactly the type of player we need to take this team to the next level. His quality on the ball, intelligence, and winning mentality make him a perfect fit for Manchester United."
            </p>

            <p className="text-gray-300 mb-4">
              The signing comes as United continue to rebuild their squad with an eye on challenging for major honors. Silva is expected to make his debut in the upcoming match against Tottenham Hotspur this weekend.
            </p>

            <h2 className="text-2xl text-white mt-8 mb-4">Transfer Details</h2>
            <p className="text-gray-300 mb-4">
              The €80 million transfer fee makes Silva one of the most expensive signings in Manchester United's history. The deal includes various performance-related bonuses that could see the total package rise to €95 million over the length of his contract.
            </p>

            <p className="text-gray-300 mb-4">
              Silva becomes United's second major signing of the transfer window, following the earlier acquisition of a promising young striker. The club is expected to continue strengthening the squad before the transfer window closes.
            </p>
          </div>
        </article>

        {/* Related News */}
        <section>
          <h2 className="text-2xl text-white mb-6">Related News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedNews.map((article, index) => (
              <NewsCard
                key={index}
                {...article}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            ))}
          </div>
        </section>

        {/* Back Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate('news')}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            ← Back to News
          </button>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
