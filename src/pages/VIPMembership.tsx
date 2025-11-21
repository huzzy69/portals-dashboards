import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Crown, Check, Shield, CreditCard, Lock } from 'lucide-react';

interface VIPMembershipProps {
  onNavigate: (page: string) => void;
}

export function VIPMembership({ onNavigate }: VIPMembershipProps) {
  const plans = [
    {
      name: 'Monthly',
      price: '$29',
      period: '/month',
      description: 'Perfect for getting started',
      popular: false,
    },
    {
      name: 'Quarterly',
      price: '$69',
      period: '/3 months',
      description: 'Most popular choice',
      popular: true,
      savings: 'Save 20%',
    },
    {
      name: 'Yearly',
      price: '$199',
      period: '/year',
      description: 'Best value for money',
      popular: false,
      savings: 'Save 43%',
    },
  ];

  const features = [
    'Access to all VIP predictions (90%+ accuracy)',
    'Exclusive insider tips and analysis',
    'Early access to predictions before matches',
    'Private VIP community and chat',
    'Personal betting strategy consultations',
    'Real-time notifications for VIP tips',
    'Monthly performance reports',
    'Priority customer support',
    'Cancel anytime - no commitments',
  ];

  const successStats = [
    { label: 'Win Rate', value: '95%', color: 'text-green-400' },
    { label: 'ROI', value: '287%', color: 'text-yellow-400' },
    { label: 'Happy Members', value: '12,450+', color: 'text-blue-400' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Crown className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-4xl text-white mb-4">
            Join <span className="text-yellow-400">VIP Membership</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get access to premium predictions with industry-leading accuracy and unlock your winning potential
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {successStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800"
            >
              <div className={`text-4xl mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Pricing Plans */}
        <div className="mb-12">
          <h2 className="text-2xl text-white text-center mb-8">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-900 rounded-2xl p-8 border-2 relative ${
                  plan.popular ? 'border-yellow-400' : 'border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center mb-2">
                    <span className="text-4xl text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <span className="text-sm text-green-400">{plan.savings}</span>
                  )}
                </div>

                <button
                  className={`w-full py-3 rounded-lg transition-colors mb-6 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  Get Started
                </button>

                <div className="space-y-3">
                  {features.slice(0, 5).map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Features */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-12">
          <h2 className="text-2xl text-white mb-6 text-center">All VIP Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Security */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800">
          <h3 className="text-xl text-white mb-6 text-center">Safe & Secure Payment</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <Shield className="w-12 h-12 text-yellow-400 mb-3" />
              <h4 className="text-white mb-2">SSL Encrypted</h4>
              <p className="text-sm text-gray-400">
                Your payment information is protected with bank-level security
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CreditCard className="w-12 h-12 text-yellow-400 mb-3" />
              <h4 className="text-white mb-2">Multiple Payment Methods</h4>
              <p className="text-sm text-gray-400">
                Credit card, PayPal, crypto and more payment options
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Lock className="w-12 h-12 text-yellow-400 mb-3" />
              <h4 className="text-white mb-2">Privacy Protected</h4>
              <p className="text-sm text-gray-400">
                We never share your personal data with third parties
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Not sure yet? Check out our free predictions first
          </p>
          <button
            onClick={() => onNavigate('predictions')}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            View Free Predictions
          </button>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
