import { Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NewsCardProps {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  onClick?: () => void;
}

export function NewsCard({ title, excerpt, category, image, date, onClick }: NewsCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-colors border border-gray-800 hover:border-gray-700 text-left w-full"
    >
      {/* Image */}
      <div className="aspect-video bg-gray-800 relative overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-3 line-clamp-2">{excerpt}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-yellow-400">
            <span>Read more</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </button>
  );
}
