import { Mail, Lock, Eye, EyeOff, User, Crown, Sparkles, Shield, Check } from 'lucide-react';
import { useState } from 'react';

interface VIPSignupPageProps {
  onNavigate: (page: string) => void;
}

export function VIPSignupPage({ onNavigate }: VIPSignupPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    // Redirect to payment page after signup
    onNavigate('payment');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const benefits = [
    '98% AI prediction accuracy',
    'Unlimited VIP predictions',
    'Advanced analytics dashboard',
    'Priority support 24/7',
    'Real-time notifications',
    'Exclusive insights',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 py-12">
      {/* Animated background orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Signup Form */}
          <div>
            {/* Logo */}
            <div className="text-center mb-6">
              <button onClick={() => onNavigate('home')} className="inline-flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-yellow-500 to-purple-600 rounded-2xl blur-lg opacity-75 animate-pulse"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 via-yellow-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                </div>
              </button>
              <h1 className="text-3xl text-white mb-2">
                Join VIP <span className="text-gradient-orange">Program</span>
              </h1>
              <p className="text-gray-400">Get exclusive access to premium features</p>
            </div>

            {/* Signup Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
              {/* VIP Badge */}
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-purple-600 px-4 py-2 rounded-full flex items-center space-x-2 glow-orange">
                  <Crown className="w-4 h-4 text-white" />
                  <span className="text-sm text-white">VIP Membership</span>
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>

              <h2 className="text-2xl text-white mb-6 text-center">Create VIP Account</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name Input */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="vip@optikgoal.com"
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      required
                      className="w-full pl-12 pr-12 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      required
                      className="w-full pl-12 pr-12 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="w-5 h-5 rounded border-gray-600 text-orange-500 focus:ring-orange-500 focus:ring-offset-0 bg-black/40 mt-0.5"
                  />
                  <label className="text-sm text-gray-300">
                    I agree to the{' '}
                    <button type="button" className="text-orange-400 hover:text-orange-300 transition-colors">
                      Terms of Service
                    </button>
                    {' '}and{' '}
                    <button type="button" className="text-orange-400 hover:text-orange-300 transition-colors">
                      Privacy Policy
                    </button>
                  </label>
                </div>

                {/* Signup Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-purple-600 text-white rounded-xl hover:from-orange-600 hover:via-yellow-600 hover:to-purple-700 transition-all shadow-lg glow-orange flex items-center justify-center space-x-2 group"
                >
                  <Crown className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Continue to Payment</span>
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-transparent text-gray-400">Or signup with</span>
                </div>
              </div>

              {/* Social Signup */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button
                  type="button"
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-sm">Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-sm">GitHub</span>
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Already a VIP member?{' '}
                  <button
                    onClick={() => onNavigate('vip-login')}
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Login here
                  </button>
                </p>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-6">
              <button
                onClick={() => onNavigate('home')}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                ← Back to Home
              </button>
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="hidden lg:flex flex-col justify-center">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 via-yellow-500 to-purple-600 rounded-2xl flex items-center justify-center glow-orange">
                  <Crown className="w-10 h-10 text-white" />
                </div>
              </div>

              <h2 className="text-2xl text-white mb-2 text-center">VIP Membership Benefits</h2>
              <p className="text-gray-400 text-center mb-8">Everything you need to win big</p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-xl p-4 text-center">
                  <div className="text-2xl text-white mb-1">98%</div>
                  <div className="text-xs text-gray-400">Accuracy</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-xl p-4 text-center">
                  <div className="text-2xl text-white mb-1">24/7</div>
                  <div className="text-xs text-gray-400">Support</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-4 text-center">
                  <div className="text-2xl text-white mb-1">10K+</div>
                  <div className="text-xs text-gray-400">Members</div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center space-x-4 text-gray-500 text-xs">
                <div className="flex items-center space-x-1">
                  <Shield className="w-3 h-3" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="w-3 h-3" />
                  <span>Verified</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
