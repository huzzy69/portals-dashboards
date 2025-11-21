import { Shield, Lock, Mail, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface AdminLoginPageProps {
  onNavigate: (page: string) => void;
  onLogin?: () => void;
}

export function AdminLoginPage({ onNavigate, onLogin }: AdminLoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Mock validation
    setTimeout(() => {
      if (email === 'admin@optikgoal.com' && password === 'admin123') {
        // Set admin authentication in localStorage
        localStorage.setItem('optikgoal_admin_auth', 'true');
        localStorage.setItem('optikgoal_admin_email', email);
        
        // Call onLogin callback if provided
        if (onLogin) {
          onLogin();
        } else {
          // Fallback navigation
          onNavigate('admin-dashboard');
        }
      } else {
        setError('Invalid admin credentials. Please try again.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      {/* Animated background orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('home')}
          className="absolute -top-16 left-0 text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to Home</span>
        </button>

        {/* Login Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 lg:p-10 card-lift">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl mb-4 glow-orange-strong animate-float">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl text-white mb-2">
              Admin <span className="text-gradient-orange">Portal</span>
            </h1>
            <p className="text-gray-400">Secure access for administrators</p>
          </div>

          {/* Demo Credentials */}
          <div className="mb-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
            <h3 className="text-orange-400 text-sm mb-2 flex items-center space-x-2">
              <Lock className="w-4 h-4" />
              <span>Demo Credentials</span>
            </h3>
            <div className="space-y-1 text-xs text-gray-300">
              <p><span className="text-gray-400">User:</span> user@optikgoal.com / user123</p>
              <p><span className="text-gray-400">VIP:</span> vip@optikgoal.com / vip123</p>
              <p><span className="text-gray-400">Admin:</span> admin@optikgoal.com / admin123</p>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-sm text-red-300">{error}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                Admin Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@optikgoal.com"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm text-gray-300 mb-2">
                Admin Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-gray-500"
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-white/10 bg-white/5 text-orange-500 focus:ring-2 focus:ring-orange-500"
                />
                <span className="text-gray-400 group-hover:text-white transition-colors">Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => setError('Please contact system administrator for password reset.')}
                className="text-orange-400 hover:text-orange-300 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="relative w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl transition-all shadow-lg glow-orange group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 shine-effect opacity-0 group-hover:opacity-100"></div>
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>{loading ? 'Signing in...' : 'Sign in as Admin'}</span>
              </span>
            </button>
          </form>

          {/* Regular User Login */}
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-gray-400 mb-3">
              Not an admin?
            </p>
            <button
              onClick={() => onNavigate('login')}
              className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all text-sm"
            >
              Go to User Login
            </button>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            🔒 Protected by enterprise-grade security
          </p>
        </div>
      </div>
    </div>
  );
}