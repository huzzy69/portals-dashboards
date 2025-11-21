import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { AdBanner } from '../../components/optikgoal/AdBanner';

interface LoginPageProps {
  onNavigate: (page: string) => void;
  onLogin?: () => void;
}

export function LoginPage({ onNavigate, onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check credentials and redirect accordingly
    if (email === 'admin@optikgoal.com' && password === 'admin123') {
      // Admin login
      localStorage.setItem('optikgoal_admin_auth', 'true');
      localStorage.setItem('optikgoal_admin_email', email);
      localStorage.removeItem('optikgoal_user_auth');
      localStorage.removeItem('optikgoal_vip_auth');
      
      if (onLogin) {
        onLogin();
      } else {
        onNavigate('admin-dashboard');
      }
    } else if (email === 'vip@optikgoal.com' && password === 'vip123') {
      // VIP login
      localStorage.setItem('optikgoal_vip_auth', 'true');
      localStorage.setItem('optikgoal_vip_user_email', email);
      localStorage.removeItem('optikgoal_user_auth');
      localStorage.removeItem('optikgoal_admin_auth');
      
      if (onLogin) {
        onLogin();
      } else {
        onNavigate('vip-dashboard');
      }
    } else {
      // Regular user login
      localStorage.setItem('optikgoal_user_auth', 'true');
      localStorage.setItem('optikgoal_user_email', email);
      localStorage.removeItem('optikgoal_admin_auth');
      localStorage.removeItem('optikgoal_vip_auth');
      
      if (onLogin) {
        onLogin();
      } else {
        onNavigate('user-dashboard');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 py-12 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Login Form */}
          <div className="w-full">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="inline-block relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                <button onClick={() => onNavigate('home')} className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-2xl">
                  <span className="text-white text-2xl">⚽</span>
                </button>
              </div>
              <h1 className="text-3xl text-white mb-2">Welcome Back</h1>
              <p className="text-gray-400">Sign in to your <span className="text-gradient-orange">OptikGoal</span> account</p>
            </div>

            {/* Login Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl">
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

              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block text-sm text-gray-400 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-12 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 bg-black/40 border-white/20 rounded text-orange-500 focus:ring-orange-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => onNavigate('home')}
                    className="text-sm text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3.5 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-2xl glow-orange flex items-center justify-center space-x-2 group"
                >
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/5 text-gray-400">Or continue with</span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/50 hover:bg-white/10 transition-all group"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="text-sm text-gray-400 group-hover:text-orange-400 transition-colors">Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/50 hover:bg-white/10 transition-all group"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <span className="text-sm text-gray-400 group-hover:text-orange-400 transition-colors">Apple</span>
                </button>
              </div>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-400 mt-6">
              Don't have an account?{' '}
              <button
                onClick={() => onNavigate('signup')}
                className="text-orange-400 hover:text-orange-300 transition-colors"
              >
                Sign up for free
              </button>
            </p>

            {/* Back to Home */}
            <div className="text-center mt-4">
              <button
                onClick={() => onNavigate('home')}
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors inline-flex items-center space-x-1 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                <span>Back to Home</span>
              </button>
            </div>
          </div>

          {/* Right Side - Ad Banner */}
          <div className="w-full">
            <AdBanner />
          </div>
        </div>
      </div>
    </div>
  );
}