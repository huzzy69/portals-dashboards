import { Check, Crown, Shield, Zap, Star, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface VIPPageProps {
  onNavigate: (page: string) => void;
}

export function VIPPage({ onNavigate }: VIPPageProps) {
  const { t } = useLanguage();

  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('optikgoal_user_auth') === 'true';

  const handleGetStarted = () => {
    if (isAuthenticated) {
      // If logged in, go to payment page
      onNavigate('payment');
    } else {
      // If not logged in, go to login page
      onNavigate('login');
    }
  };

  const plans = [
    {
      name: 'Monthly',
      price: '$29',
      period: '/month',
      popular: false,
    },
    {
      name: 'Quarterly',
      price: '$69',
      period: '/3 months',
      popular: true,
      savings: 'Save 20%',
    },
    {
      name: 'Annual',
      price: '$199',
      period: '/year',
      popular: false,
      savings: 'Save 43%',
    },
  ];

  const features = [
    'Access to all VIP predictions (95%+ accuracy)',
    'Exclusive insider tips and analysis',
    'Early access before matches',
    'Private VIP community',
    'Personal strategy consultations',
    'Real-time VIP notifications',
    'Monthly performance reports',
    'Priority support',
    'Cancel anytime',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <div className="inline-flex p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl mb-6 glow-orange-strong animate-float">
            <Crown className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
          </div>
          <h1 className="text-3xl lg:text-5xl mb-4 text-white">
            Join <span className="text-gradient-orange">VIP Membership</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Unlock premium predictions and win more consistently
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {[
            { label: 'Win Rate', value: '95%', color: 'text-green-400', icon: TrendingUp },
            { label: 'ROI', value: '287%', color: 'text-orange-400', icon: Star },
            { label: 'Members', value: '12,450+', color: 'text-blue-400', icon: Crown },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center card-lift">
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className={`text-3xl lg:text-4xl mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Pricing */}
        <h2 className="text-2xl lg:text-3xl text-white text-center mb-8 lg:mb-12">
          Choose Your <span className="text-gradient-orange">Plan</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 transition-all card-lift overflow-hidden ${
                plan.popular ? 'border-orange-500 glow-orange-strong' : 'border-white/10 hover:border-orange-500/50'
              }`}
            >
              {plan.popular && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10"></div>
                  {/* Most Popular Ribbon Banner */}
                  <div className="absolute top-0 left-0 right-0 flex justify-center -mt-px">
                    <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-t-3xl shadow-lg glow-orange-strong">
                      <span className="flex items-center space-x-2 text-sm">
                        <Crown className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  </div>
                </>
              )}

              <div className={`relative z-10 text-center ${plan.popular ? 'mt-6' : ''}`}>
                <h3 className="text-xl text-white mb-4">{plan.name}</h3>
                <div className="flex items-end justify-center mb-2">
                  <span className="text-4xl lg:text-5xl text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                {plan.savings && (
                  <span className="inline-block text-sm bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/50">
                    {plan.savings}
                  </span>
                )}
              </div>

              <button
                onClick={handleGetStarted}
                className={`relative w-full py-3.5 rounded-xl transition-all mb-6 overflow-hidden group ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white glow-orange'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <div className="absolute inset-0 shine-effect opacity-0 group-hover:opacity-100"></div>
                <span className="relative z-10">Get Started</span>
              </button>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 lg:p-8 mb-12">
          <h3 className="text-2xl text-white mb-8 text-center">
            All <span className="text-gradient-orange">VIP Features</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: 'SSL Encrypted', desc: 'Bank-level security' },
            { icon: Crown, title: 'Premium Access', desc: 'Instant activation' },
            { icon: Zap, title: 'Cancel Anytime', desc: 'No commitments' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all card-lift">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 glow-orange">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}