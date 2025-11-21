import { Clock, User, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

interface NewsDetailPageProps {
  onNavigate: (page: string) => void;
}

export function NewsDetailPage({ onNavigate }: NewsDetailPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => onNavigate('news')}
          className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to News</span>
        </button>

        <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="aspect-video bg-gray-800">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200"
              alt="News"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm mb-4">
              Transfer News
            </span>

            <h1 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Manchester United Signs New Star Midfielder
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>OptikGoal Editorial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>November 19, 2025</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Manchester United have completed the signing of talented midfielder Marco Silva
                from AC Milan in a deal worth €80 million. The 24-year-old Portuguese
                international has signed a five-year contract.
              </p>

              <h2 className="text-2xl text-gray-900 mt-8 mb-4">A Major Coup</h2>
              <p className="text-gray-700 mb-4">
                The transfer represents a significant statement of intent from Manchester United,
                who fought off competition from several top European clubs.
              </p>

              <p className="text-gray-700 mb-4">
                Silva brings a blend of technical ability, vision, and work rate that manager
                Erik ten Hag believes will be crucial to the team's ambitions.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
