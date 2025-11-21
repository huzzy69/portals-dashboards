import { Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function News() {
  const newsItems = [
    {
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
      title: 'The Future of Web Development',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development in 2025.',
      date: 'March 15, 2025',
      category: 'Technology',
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      title: 'Design Systems That Scale',
      excerpt: 'Learn how to build and maintain design systems that grow with your organization.',
      date: 'March 12, 2025',
      category: 'Design',
    },
    {
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
      title: 'Building Better User Experiences',
      excerpt: 'Discover the principles of creating intuitive and delightful user experiences.',
      date: 'March 10, 2025',
      category: 'UX/UI',
    },
    {
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
      title: 'Mastering Modern CSS',
      excerpt: 'Deep dive into CSS Grid, Flexbox, and other modern layout techniques.',
      date: 'March 8, 2025',
      category: 'Development',
    },
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      title: 'Team Collaboration Tools',
      excerpt: 'The best tools and practices for remote team collaboration in 2025.',
      date: 'March 5, 2025',
      category: 'Productivity',
    },
    {
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800',
      title: 'Performance Optimization Tips',
      excerpt: 'Practical tips to make your web applications faster and more efficient.',
      date: 'March 1, 2025',
      category: 'Performance',
    },
  ];

  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
            Latest Updates
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            News & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our team
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.excerpt}
                </p>

                <button className="group/btn inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
