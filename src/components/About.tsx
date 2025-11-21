import { CheckCircle, Users, Target, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const features = [
    { icon: Users, title: 'Expert Team', description: 'Talented professionals dedicated to your success' },
    { icon: Target, title: 'Goal-Oriented', description: 'Focused on delivering measurable results' },
    { icon: Zap, title: 'Fast Delivery', description: 'Quick turnaround without compromising quality' },
  ];

  const benefits = [
    'Modern and responsive design',
    'SEO optimized for better visibility',
    'Lightning-fast performance',
    'Scalable architecture',
    'Regular updates and support',
    'Security best practices',
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're passionate about creating digital experiences that make a difference
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Team collaboration"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                5+ Years
              </div>
              <p className="text-gray-600">Of Excellence in Digital Solutions</p>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Building the Future, One Project at a Time
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We are a team of creative designers, skilled developers, and strategic thinkers
              dedicated to crafting exceptional digital experiences. Our mission is to help
              businesses thrive in the digital age through innovative solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With years of experience and a passion for excellence, we combine cutting-edge
              technology with creative design to deliver results that exceed expectations.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
