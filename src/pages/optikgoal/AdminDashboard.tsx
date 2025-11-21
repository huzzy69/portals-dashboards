import { 
  LayoutDashboard, Users, FileText, Settings, LogOut, TrendingUp, Activity, Eye, Clock,
  Shield, DollarSign, Target, Bell, Edit, Trash2, Search, Plus, Download, Filter,
  ChevronDown, CheckCircle, XCircle, AlertCircle, TrendingDown, Award, MessageSquare,
  BarChart3, PieChart, Calendar, Globe
} from 'lucide-react';
import { useState } from 'react';

interface AdminDashboardProps {
  onNavigate: (page: string) => void;
  onLogout?: () => void;
}

export function AdminDashboard({ onNavigate, onLogout }: AdminDashboardProps) {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [userStatusFilter, setUserStatusFilter] = useState<'all' | 'active' | 'inactive' | 'banned'>('all');
  const [userTypeFilter, setUserTypeFilter] = useState<'all' | 'vip' | 'regular'>('all');

  // Check if user is logged in (from localStorage)
  const isAuthenticated = localStorage.getItem('optikgoal_admin_auth') === 'true';
  const adminEmail = localStorage.getItem('optikgoal_admin_email') || 'Admin';

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl mb-6 glow-orange-strong animate-float">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl text-white mb-4">Admin Access Required</h2>
          <p className="text-gray-400 mb-6">Please login to access the admin panel</p>
          <button
            onClick={() => onNavigate('admin-login')}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg glow-orange"
          >
            Go to Admin Login
          </button>
        </div>
      </div>
    );
  }

  // Handle logout
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      // Fallback if onLogout is not provided
      localStorage.removeItem('optikgoal_admin_auth');
      localStorage.removeItem('optikgoal_admin_email');
      onNavigate('admin-login');
    }
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'predictions', label: 'Predictions', icon: Target },
    { id: 'matches', label: 'Matches', icon: Activity },
    { id: 'vip', label: 'VIP Members', icon: Award },
    { id: 'news', label: 'News', icon: FileText },
    { id: 'comments', label: 'Comments', icon: MessageSquare },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Total Users', value: '12,450', change: '+12%', trend: 'up', icon: Users, color: 'from-blue-500 to-blue-600', glow: 'blue' },
    { label: 'Active Users', value: '8,234', change: '+8%', trend: 'up', icon: Activity, color: 'from-green-500 to-green-600', glow: 'green' },
    { label: 'VIP Members', value: '543', change: '+23%', trend: 'up', icon: Award, color: 'from-orange-500 to-orange-600', glow: 'orange' },
    { label: 'Revenue', value: '$45,678', change: '+15%', trend: 'up', icon: DollarSign, color: 'from-purple-500 to-purple-600', glow: 'purple' },
    { label: 'Predictions', value: '1,234', change: '+5%', trend: 'up', icon: Target, color: 'from-cyan-500 to-cyan-600', glow: 'cyan' },
    { label: 'Win Rate', value: '87%', change: '+2%', trend: 'up', icon: TrendingUp, color: 'from-emerald-500 to-emerald-600', glow: 'emerald' },
    { label: 'Page Views', value: '234K', change: '+18%', trend: 'up', icon: Eye, color: 'from-pink-500 to-pink-600', glow: 'pink' },
    { label: 'Avg Session', value: '12m', change: '-3%', trend: 'down', icon: Clock, color: 'from-red-500 to-red-600', glow: 'red' },
  ];

  const recentUsers = [
    { id: 1, name: 'John Smith', email: 'john@example.com', status: 'active', vip: true, joined: '2 hours ago', avatar: '👨' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', status: 'active', vip: false, joined: '5 hours ago', avatar: '👩' },
    { id: 3, name: 'Mike Wilson', email: 'mike@example.com', status: 'active', vip: true, joined: '1 day ago', avatar: '👨‍💼' },
    { id: 4, name: 'Emma Davis', email: 'emma@example.com', status: 'inactive', vip: false, joined: '2 days ago', avatar: '👩‍💼' },
    { id: 5, name: 'Alex Brown', email: 'alex@example.com', status: 'active', vip: true, joined: '3 days ago', avatar: '🧑' },
  ];

  const recentPredictions = [
    { id: 1, match: 'Man City vs Liverpool', type: 'Banker', odds: '1.85', status: 'pending', date: 'Today 20:00' },
    { id: 2, match: 'Real Madrid vs Barcelona', type: 'Surprise', odds: '3.20', status: 'won', date: 'Today 21:45' },
    { id: 3, match: 'Bayern vs Dortmund', type: 'VIP', odds: '2.10', status: 'pending', date: 'Tomorrow' },
    { id: 4, match: 'Arsenal vs Chelsea', type: 'Banker', odds: '1.65', status: 'lost', date: 'Yesterday' },
  ];

  const recentActivity = [
    { user: 'John Smith', action: 'Created new account', time: '2 min ago', status: 'success', icon: Users },
    { user: 'Sarah Johnson', action: 'Updated profile', time: '5 min ago', status: 'info', icon: Edit },
    { user: 'Mike Wilson', action: 'Purchased VIP', time: '12 min ago', status: 'success', icon: Award },
    { user: 'Emma Davis', action: 'Login failed', time: '15 min ago', status: 'error', icon: XCircle },
    { user: 'Alex Brown', action: 'Changed password', time: '23 min ago', status: 'warning', icon: Shield },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return <DashboardContent stats={stats} recentUsers={recentUsers} recentPredictions={recentPredictions} recentActivity={recentActivity} setActiveMenu={setActiveMenu} setUserStatusFilter={setUserStatusFilter} setUserTypeFilter={setUserTypeFilter} />;
      case 'users':
        return <UsersContent users={recentUsers} searchQuery={searchQuery} setSearchQuery={setSearchQuery} userStatusFilter={userStatusFilter} setUserStatusFilter={setUserStatusFilter} userTypeFilter={userTypeFilter} setUserTypeFilter={setUserTypeFilter} />;
      case 'predictions':
        return <PredictionsContent predictions={recentPredictions} />;
      case 'matches':
        return <MatchesContent />;
      case 'news':
        return <NewsContent />;
      case 'comments':
        return <CommentsContent />;
      case 'analytics':
        return <AnalyticsContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <DashboardContent stats={stats} recentUsers={recentUsers} recentPredictions={recentPredictions} recentActivity={recentActivity} setActiveMenu={setActiveMenu} setUserStatusFilter={setUserStatusFilter} setUserTypeFilter={setUserTypeFilter} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="flex relative">
        {/* Sidebar */}
        <div className="w-72 bg-black/50 backdrop-blur-xl border-r border-white/10 flex flex-col min-h-screen sticky top-0">
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <button onClick={() => onNavigate('home')} className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">⚽</span>
                </div>
              </div>
              <div>
                <h1 className="text-lg text-white">Optik<span className="text-gradient-orange">Goal</span></h1>
                <p className="text-xs text-gray-400">Admin Panel</p>
              </div>
            </button>
          </div>

          {/* Menu */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    // If VIP Members menu is clicked, navigate to users page with VIP filter
                    if (item.id === 'vip') {
                      setUserStatusFilter('all');
                      setUserTypeFilter('vip');
                      setActiveMenu('users');
                    } else {
                      // Reset filters when navigating to users page normally
                      if (item.id === 'users') {
                        setUserStatusFilter('all');
                        setUserTypeFilter('all');
                      }
                      setActiveMenu(item.id);
                    }
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all group ${
                    activeMenu === item.id || (item.id === 'vip' && activeMenu === 'users' && userTypeFilter === 'vip')
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white glow-orange'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Admin Profile */}
          <div className="p-4 border-t border-white/10">
            <div className="bg-white/5 rounded-xl p-3 mb-2">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate">Admin</p>
                  <p className="text-xs text-gray-400 truncate">{adminEmail}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logout */}
          <div className="p-4 pt-0">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 hover:text-red-300 rounded-xl transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6 lg:p-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardContent({ stats, recentUsers, recentPredictions, recentActivity, setActiveMenu, setUserStatusFilter, setUserTypeFilter }: any) {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-white mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome back, Admin</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        {stats.map((stat: any, i: number) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <button
              key={i}
              onClick={() => {
                // If it's the Total Users card, switch to users tab
                if (stat.label === 'Total Users') {
                  setActiveMenu('users');
                  setUserStatusFilter('all');
                  setUserTypeFilter('all');
                }
                // If it's the Active Users card, switch to users tab with active filter
                if (stat.label === 'Active Users') {
                  setUserStatusFilter('active');
                  setUserTypeFilter('all');
                  setActiveMenu('users');
                }
                // If it's the VIP Members card, switch to users tab with VIP filter
                if (stat.label === 'VIP Members') {
                  setUserStatusFilter('all');
                  setUserTypeFilter('vip');
                  setActiveMenu('users');
                }
                // If it's the Predictions card, switch to predictions tab
                if (stat.label === 'Predictions') {
                  setActiveMenu('predictions');
                }
              }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 card-lift group hover:border-orange-500/50 transition-all text-left w-full cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center glow-orange`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${
                  stat.trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  <TrendIcon className="w-3 h-3" />
                  <span className="text-xs font-semibold">{stat.change}</span>
                </div>
              </div>
              <div className="text-2xl lg:text-3xl text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </button>
          );
        })}
      </div>

      {/* Recent Activity & Users */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Recent Activity */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-white">Recent Activity</h2>
            <Bell className="w-5 h-5 text-orange-400" />
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity: any, i: number) => {
              const Icon = activity.icon;
              return (
                <div key={i} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all group">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activity.status === 'success' ? 'bg-green-500/20' :
                    activity.status === 'error' ? 'bg-red-500/20' :
                    activity.status === 'warning' ? 'bg-yellow-500/20' : 'bg-blue-500/20'
                  }`}>
                    <Icon className={`w-4 h-4 ${
                      activity.status === 'success' ? 'text-green-400' :
                      activity.status === 'error' ? 'text-red-400' :
                      activity.status === 'warning' ? 'text-yellow-400' : 'text-blue-400'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white group-hover:text-orange-400 transition-colors">{activity.user}</p>
                    <p className="text-xs text-gray-400">{activity.action}</p>
                  </div>
                  <span className="text-xs text-gray-500 flex-shrink-0">{activity.time}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Users */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-white">Recent Users</h2>
            <Users className="w-5 h-5 text-blue-400" />
          </div>
          <div className="space-y-3">
            {recentUsers.slice(0, 5).map((user: any) => (
              <div key={user.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all group">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-lg">
                    {user.avatar}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm text-white group-hover:text-orange-400 transition-colors">{user.name}</p>
                      {user.vip && <Award className="w-3 h-3 text-orange-400" />}
                    </div>
                    <p className="text-xs text-gray-400">{user.email}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{user.joined}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Predictions */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl text-white">Recent Predictions</h2>
          <Target className="w-5 h-5 text-purple-400" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-sm text-gray-400 pb-3">Match</th>
                <th className="text-left text-sm text-gray-400 pb-3">Type</th>
                <th className="text-left text-sm text-gray-400 pb-3">Odds</th>
                <th className="text-left text-sm text-gray-400 pb-3">Status</th>
                <th className="text-left text-sm text-gray-400 pb-3">Date</th>
                <th className="text-right text-sm text-gray-400 pb-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentPredictions.map((pred: any) => (
                <tr key={pred.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-4 text-sm text-white group-hover:text-orange-400 transition-colors">{pred.match}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      pred.type === 'Banker' ? 'bg-blue-500/20 text-blue-400' :
                      pred.type === 'Surprise' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {pred.type}
                    </span>
                  </td>
                  <td className="py-4 text-sm text-orange-400">{pred.odds}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      pred.status === 'won' ? 'bg-green-500/20 text-green-400' :
                      pred.status === 'lost' ? 'bg-red-500/20 text-red-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {pred.status}
                    </span>
                  </td>
                  <td className="py-4 text-sm text-gray-400">{pred.date}</td>
                  <td className="py-4">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 hover:bg-blue-500/20 rounded-lg text-blue-400 transition-all">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-500/20 rounded-lg text-red-400 transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function UsersContent({ users, searchQuery, setSearchQuery, userStatusFilter, setUserStatusFilter, userTypeFilter, setUserTypeFilter }: any) {
  // Filter users based on status
  const filteredUsers = userStatusFilter === 'all' 
    ? users 
    : users.filter((user: any) => user.status === userStatusFilter);

  // Further filter users based on type
  const finalFilteredUsers = userTypeFilter === 'all'
    ? filteredUsers
    : filteredUsers.filter((user: any) => user.vip === (userTypeFilter === 'vip'));

  return (
    <>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl text-white mb-2">User Management</h1>
          <p className="text-gray-400">
            {userTypeFilter === 'vip'
              ? `Showing ${finalFilteredUsers.length} VIP Members`
              : userStatusFilter === 'active' 
              ? `Showing ${filteredUsers.length} Active Users` 
              : `Manage all registered users (${finalFilteredUsers.length} users)`}
          </p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl flex items-center space-x-2 hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg glow-orange">
          <Plus className="w-5 h-5" />
          <span>Add New User</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-4 lg:p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Search Input */}
          <div className="relative w-full md:col-span-2 lg:col-span-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search users..."
              className="w-full pl-12 pr-4 py-3 sm:py-3.5 bg-black/60 border-2 border-orange-500 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-white placeholder-gray-500 hover:border-orange-400 shadow-lg text-sm sm:text-base"
            />
          </div>
          
          {/* Status Dropdown */}
          <div className="relative w-full">
            <select
              value={userStatusFilter}
              onChange={(e) => setUserStatusFilter(e.target.value as 'all' | 'active' | 'inactive' | 'banned')}
              className="w-full appearance-none px-4 py-3 sm:py-3.5 bg-black/40 border-2 border-orange-500/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white cursor-pointer transition-all hover:border-orange-500 shadow-lg text-sm sm:text-base"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23F7931A'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem'
              }}
            >
              <option value="all" className="bg-gray-900 text-white">All Status</option>
              <option value="active" className="bg-gray-900 text-white">Active</option>
              <option value="inactive" className="bg-gray-900 text-white">Inactive</option>
              <option value="banned" className="bg-gray-900 text-white">Banned</option>
            </select>
          </div>
          
          {/* Type Dropdown */}
          <div className="relative w-full">
            <select
              value={userTypeFilter}
              onChange={(e) => setUserTypeFilter(e.target.value as 'all' | 'vip' | 'regular')}
              className="w-full appearance-none px-4 py-3 sm:py-3.5 bg-black/40 border-2 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white cursor-pointer transition-all hover:border-orange-500 shadow-lg text-sm sm:text-base"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem'
              }}
            >
              <option value="all" className="bg-gray-900 text-white">All Types</option>
              <option value="vip" className="bg-gray-900 text-white">VIP Members</option>
              <option value="regular" className="bg-gray-900 text-white">Regular Users</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left text-sm text-gray-400 p-4">User</th>
                <th className="text-left text-sm text-gray-400 p-4">Email</th>
                <th className="text-left text-sm text-gray-400 p-4">Status</th>
                <th className="text-left text-sm text-gray-400 p-4">Type</th>
                <th className="text-left text-sm text-gray-400 p-4">Joined</th>
                <th className="text-right text-sm text-gray-400 p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {finalFilteredUsers.map((user: any) => (
                <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                        {user.avatar}
                      </div>
                      <span className="text-sm text-white group-hover:text-orange-400 transition-colors">{user.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-400">{user.email}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      user.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {user.vip ? (
                      <span className="flex items-center space-x-1 text-orange-400">
                        <Award className="w-4 h-4" />
                        <span className="text-xs">VIP</span>
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400">Regular</span>
                    )}
                  </td>
                  <td className="p-4 text-sm text-gray-400">{user.joined}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 hover:bg-blue-500/20 rounded-lg text-blue-400 transition-all">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-green-500/20 rounded-lg text-green-400 transition-all">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-500/20 rounded-lg text-red-400 transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function PredictionsContent({ predictions }: any) {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl text-white mb-2">Predictions Management</h1>
          <p className="text-gray-400">Manage all betting predictions</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl flex items-center space-x-2 hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg glow-orange">
          <Plus className="w-5 h-5" />
          <span>Add Prediction</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Predictions', value: '1,234', color: 'from-blue-500 to-blue-600', icon: Target },
          { label: 'Banker Picks', value: '234', color: 'from-blue-500 to-blue-600', icon: Shield },
          { label: 'Surprise Picks', value: '156', color: 'from-purple-500 to-purple-600', icon: TrendingUp },
          { label: 'Win Rate', value: '87%', color: 'from-green-500 to-green-600', icon: CheckCircle },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4">
              <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-3`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Predictions Table */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left text-sm text-gray-400 p-4">Match</th>
                <th className="text-left text-sm text-gray-400 p-4">Type</th>
                <th className="text-left text-sm text-gray-400 p-4">Odds</th>
                <th className="text-left text-sm text-gray-400 p-4">Status</th>
                <th className="text-left text-sm text-gray-400 p-4">Date</th>
                <th className="text-right text-sm text-gray-400 p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {predictions.map((pred: any) => (
                <tr key={pred.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="p-4 text-sm text-white group-hover:text-orange-400 transition-colors">{pred.match}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      pred.type === 'Banker' ? 'bg-blue-500/20 text-blue-400' :
                      pred.type === 'Surprise' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {pred.type}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-orange-400">{pred.odds}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      pred.status === 'won' ? 'bg-green-500/20 text-green-400' :
                      pred.status === 'lost' ? 'bg-red-500/20 text-red-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {pred.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-400">{pred.date}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 hover:bg-blue-500/20 rounded-lg text-blue-400 transition-all">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-green-500/20 rounded-lg text-green-400 transition-all">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-500/20 rounded-lg text-red-400 transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function MatchesContent() {
  const [selectedSport, setSelectedSport] = useState('all');

  const sports = [
    { id: 'football', name: 'Football', icon: '⚽', color: 'from-green-500 to-green-600', count: 45 },
    { id: 'horseriding', name: 'Horse Riding', icon: '🏇', color: 'from-amber-500 to-amber-600', count: 12 },
    { id: 'volleyball', name: 'Volleyball', icon: '🏐', color: 'from-blue-500 to-blue-600', count: 18 },
    { id: 'basketball', name: 'Basketball', icon: '🏀', color: 'from-orange-500 to-orange-600', count: 23 },
    { id: 'tennis', name: 'Tennis', icon: '🎾', color: 'from-yellow-500 to-yellow-600', count: 15 },
    { id: 'cricket', name: 'Cricket', icon: '🏏', color: 'from-red-500 to-red-600', count: 8 },
  ];

  const allMatches = {
    football: [
      { id: 1, match: 'Man City vs Liverpool', league: 'Premier League', date: '2023-10-01', time: '20:00', venue: 'Etihad Stadium', sport: 'football' },
      { id: 2, match: 'Real Madrid vs Barcelona', league: 'La Liga', date: '2023-10-02', time: '21:45', venue: 'Camp Nou', sport: 'football' },
      { id: 3, match: 'Bayern vs Dortmund', league: 'Bundesliga', date: '2023-10-03', time: '19:30', venue: 'Allianz Arena', sport: 'football' },
      { id: 4, match: 'Arsenal vs Chelsea', league: 'Premier League', date: '2023-10-04', time: '18:00', venue: 'Emirates Stadium', sport: 'football' },
    ],
    horseriding: [
      { id: 5, match: 'Kentucky Derby 2024', league: 'Triple Crown', date: '2024-05-04', time: '18:30', venue: 'Churchill Downs', sport: 'horseriding' },
      { id: 6, match: 'Royal Ascot Gold Cup', league: 'Ascot', date: '2024-06-20', time: '16:30', venue: 'Ascot Racecourse', sport: 'horseriding' },
      { id: 7, match: 'Dubai World Cup', league: 'World Cup', date: '2024-03-30', time: '19:00', venue: 'Meydan Racecourse', sport: 'horseriding' },
    ],
    volleyball: [
      { id: 8, match: 'USA vs Brazil', league: 'FIVB World League', date: '2023-09-15', time: '19:00', venue: 'Ginasio do Ibirapuera', sport: 'volleyball' },
      { id: 9, match: 'Italy vs Poland', league: 'European Championship', date: '2023-09-18', time: '20:00', venue: 'Palais des Sports', sport: 'volleyball' },
      { id: 10, match: 'Japan vs China', league: 'Asian Cup', date: '2023-09-20', time: '15:00', venue: 'Tokyo Arena', sport: 'volleyball' },
    ],
    basketball: [
      { id: 11, match: 'Lakers vs Warriors', league: 'NBA', date: '2023-10-15', time: '19:30', venue: 'Staples Center', sport: 'basketball' },
      { id: 12, match: 'Heat vs Celtics', league: 'NBA', date: '2023-10-16', time: '20:00', venue: 'TD Garden', sport: 'basketball' },
    ],
    tennis: [
      { id: 13, match: 'Djokovic vs Nadal', league: 'ATP Finals', date: '2023-11-10', time: '14:00', venue: 'Pala Alpitour', sport: 'tennis' },
      { id: 14, match: 'Federer vs Murray', league: 'Wimbledon', date: '2023-07-08', time: '15:00', venue: 'Centre Court', sport: 'tennis' },
    ],
    cricket: [
      { id: 15, match: 'India vs Australia', league: 'World Cup', date: '2023-10-08', time: '10:30', venue: 'Eden Gardens', sport: 'cricket' },
      { id: 16, match: 'England vs Pakistan', league: 'Test Series', date: '2023-10-12', time: '11:00', venue: "Lord's Cricket Ground", sport: 'cricket' },
    ],
  };

  const getFilteredMatches = () => {
    if (selectedSport === 'all') {
      return Object.values(allMatches).flat();
    }
    return allMatches[selectedSport as keyof typeof allMatches] || [];
  };

  const getFilteredSports = () => {
    if (selectedSport === 'all') {
      return sports;
    }
    return sports.filter(sport => sport.id === selectedSport);
  };

  return (
    <>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl text-white mb-2">Matches Management</h1>
          <p className="text-gray-400">Manage all sports matches and events</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl flex items-center space-x-2 hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg glow-orange">
          <Plus className="w-5 h-5" />
          <span>Add New Match</span>
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setSelectedSport('all')}
          className={`px-6 py-3 rounded-xl transition-all ${
            selectedSport === 'all'
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white glow-orange'
              : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-orange-500/50'
          }`}
        >
          All Sports
        </button>
        {sports.map((sport) => (
          <button
            key={sport.id}
            onClick={() => setSelectedSport(sport.id)}
            className={`px-6 py-3 rounded-xl transition-all flex items-center space-x-2 ${
              selectedSport === sport.id
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white glow-orange'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-orange-500/50'
            }`}
          >
            <span className="text-lg">{sport.icon}</span>
            <span>{sport.name}</span>
          </button>
        ))}
      </div>

      {/* Sports Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
        {getFilteredSports().map((sport) => (
          <div
            key={sport.id}
            className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 card-lift group transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${sport.color} rounded-xl flex items-center justify-center text-3xl shadow-lg`}>
                {sport.icon}
              </div>
              <div className="text-right">
                <div className="text-2xl text-white">{sport.count}</div>
                <div className="text-xs text-gray-400">Matches</div>
              </div>
            </div>
            <h3 className="text-lg text-white mb-1 group-hover:text-orange-400 transition-colors">{sport.name}</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Activity className="w-4 h-4" />
              <span>Active Events</span>
            </div>
          </div>
        ))}
      </div>

      {/* Matches Table */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
        <div className="p-4 border-b border-white/10 bg-white/5">
          <h2 className="text-xl text-white">
            {selectedSport === 'all' ? 'All Matches' : `${sports.find(s => s.id === selectedSport)?.name} Matches`}
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left text-sm text-gray-400 p-4">Match</th>
                <th className="text-left text-sm text-gray-400 p-4">League/Event</th>
                <th className="text-left text-sm text-gray-400 p-4">Date</th>
                <th className="text-left text-sm text-gray-400 p-4">Time</th>
                <th className="text-left text-sm text-gray-400 p-4">Venue</th>
                <th className="text-right text-sm text-gray-400 p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {getFilteredMatches().map((match: any) => (
                <tr key={match.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="p-4 text-sm text-white group-hover:text-orange-400 transition-colors">{match.match}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-orange-500/20 text-orange-400">
                      {match.league}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-400">{match.date}</td>
                  <td className="p-4 text-sm text-gray-400">{match.time}</td>
                  <td className="p-4 text-sm text-gray-400">{match.venue}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 hover:bg-blue-500/20 rounded-lg text-blue-400 transition-all">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-green-500/20 rounded-lg text-green-400 transition-all">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-500/20 rounded-lg text-red-400 transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function NewsContent() {
  const newsArticles = [
    { id: 1, title: 'Manchester City Wins Premier League Title', category: 'Football', author: 'Admin', date: '2 hours ago', status: 'published', views: 1234, image: '⚽' },
    { id: 2, title: 'NBA Finals: Lakers vs Celtics Preview', category: 'Basketball', author: 'Admin', date: '5 hours ago', status: 'published', views: 856, image: '🏀' },
    { id: 3, title: 'Wimbledon 2024: Top Seeds Advance', category: 'Tennis', author: 'Admin', date: '1 day ago', status: 'draft', views: 0, image: '🎾' },
    { id: 4, title: 'Champions League Draw Results', category: 'Football', author: 'Admin', date: '2 days ago', status: 'published', views: 2341, image: '⚽' },
    { id: 5, title: 'Formula 1 Monaco Grand Prix Highlights', category: 'Racing', author: 'Admin', date: '3 days ago', status: 'published', views: 1567, image: '🏎️' },
  ];

  return (
    <>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl text-white mb-2">News Management</h1>
          <p className="text-gray-400">Create and manage sports news articles</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl flex items-center space-x-2 hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg glow-orange">
          <Plus className="w-5 h-5" />
          <span>Add New Article</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Articles', value: '156', color: 'from-blue-500 to-blue-600', icon: FileText },
          { label: 'Published', value: '124', color: 'from-green-500 to-green-600', icon: CheckCircle },
          { label: 'Drafts', value: '32', color: 'from-yellow-500 to-yellow-600', icon: Edit },
          { label: 'Total Views', value: '45.2K', color: 'from-purple-500 to-purple-600', icon: Eye },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4">
              <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-3`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* News Table */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left text-sm text-gray-400 p-4">Article</th>
                <th className="text-left text-sm text-gray-400 p-4">Category</th>
                <th className="text-left text-sm text-gray-400 p-4">Author</th>
                <th className="text-left text-sm text-gray-400 p-4">Status</th>
                <th className="text-left text-sm text-gray-400 p-4">Views</th>
                <th className="text-left text-sm text-gray-400 p-4">Date</th>
                <th className="text-right text-sm text-gray-400 p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {newsArticles.map((article) => (
                <tr key={article.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                        {article.image}
                      </div>
                      <span className="text-sm text-white group-hover:text-orange-400 transition-colors">{article.title}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400">
                      {article.category}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-400">{article.author}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      article.status === 'published' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {article.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-400">{article.views}</td>
                  <td className="p-4 text-sm text-gray-400">{article.date}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 hover:bg-blue-500/20 rounded-lg text-blue-400 transition-all">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-green-500/20 rounded-lg text-green-400 transition-all">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-500/20 rounded-lg text-red-400 transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function CommentsContent() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-white mb-2">Comments Management</h1>
        <p className="text-gray-400">Moderate user comments and feedback</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Comments', value: '1,234', color: 'from-blue-500 to-blue-600', icon: MessageSquare },
          { label: 'Approved', value: '987', color: 'from-green-500 to-green-600', icon: CheckCircle },
          { label: 'Pending', value: '156', color: 'from-yellow-500 to-yellow-600', icon: Clock },
          { label: 'Rejected', value: '91', color: 'from-red-500 to-red-600', icon: XCircle },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4">
              <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-3`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Comments Page Content */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <p className="text-gray-400">Comments moderation interface will be displayed here</p>
      </div>
    </>
  );
}

function AnalyticsContent() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-white mb-2">Analytics Dashboard</h1>
        <p className="text-gray-400">Track platform performance and user engagement</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Revenue', value: '$45,678', change: '+15%', trend: 'up', icon: DollarSign, color: 'from-green-500 to-green-600' },
          { label: 'Page Views', value: '234K', change: '+18%', trend: 'up', icon: Eye, color: 'from-blue-500 to-blue-600' },
          { label: 'Avg Session', value: '12m 34s', change: '-3%', trend: 'down', icon: Clock, color: 'from-purple-500 to-purple-600' },
          { label: 'Bounce Rate', value: '42%', change: '-5%', trend: 'up', icon: Activity, color: 'from-orange-500 to-orange-600' },
        ].map((metric, i) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${
                  metric.trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  <TrendIcon className="w-3 h-3" />
                  <span className="text-xs">{metric.change}</span>
                </div>
              </div>
              <div className="text-2xl text-white mb-1">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          );
        })}
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl text-white mb-4">Traffic Overview</h2>
          <div className="h-64 flex items-center justify-center border border-white/10 rounded-xl bg-black/20">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-orange-400 mx-auto mb-2" />
              <p className="text-gray-400">Chart will be displayed here</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl text-white mb-4">User Distribution</h2>
          <div className="h-64 flex items-center justify-center border border-white/10 rounded-xl bg-black/20">
            <div className="text-center">
              <PieChart className="w-12 h-12 text-orange-400 mx-auto mb-2" />
              <p className="text-gray-400">Chart will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SettingsContent() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage platform settings and configuration</p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* General Settings */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl text-white mb-6 flex items-center space-x-2">
            <Settings className="w-5 h-5 text-orange-400" />
            <span>General Settings</span>
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Platform Name</label>
              <input
                type="text"
                defaultValue="OptikGoal"
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Support Email</label>
              <input
                type="email"
                defaultValue="support@optikgoal.com"
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Timezone</label>
              <select className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white">
                <option>UTC +0</option>
                <option>UTC +1</option>
                <option>UTC +2</option>
                <option>UTC +3</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl text-white mb-6 flex items-center space-x-2">
            <Shield className="w-5 h-5 text-orange-400" />
            <span>Security Settings</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
              <div>
                <p className="text-sm text-white">Two-Factor Authentication</p>
                <p className="text-xs text-gray-400">Add extra security to your account</p>
              </div>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all">
                Enable
              </button>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
              <div>
                <p className="text-sm text-white">Session Timeout</p>
                <p className="text-xs text-gray-400">Auto logout after inactivity</p>
              </div>
              <select className="px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-white">
                <option>15 minutes</option>
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>2 hours</option>
              </select>
            </div>
          </div>
        </div>

        {/* Change Password Section */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl text-white mb-4 lg:mb-6 flex items-center space-x-2">
            <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-orange-400" />
            <span>Change Password</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs lg:text-sm text-gray-400 mb-2">Current Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-3 lg:px-4 py-2.5 lg:py-3 bg-black/40 border border-white/10 rounded-xl text-sm lg:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs lg:text-sm text-gray-400 mb-2">New Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-3 lg:px-4 py-2.5 lg:py-3 bg-black/40 border border-white/10 rounded-xl text-sm lg:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs lg:text-sm text-gray-400 mb-2">Confirm New Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-3 lg:px-4 py-2.5 lg:py-3 bg-black/40 border border-white/10 rounded-xl text-sm lg:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
              />
            </div>
          </div>
          <div className="mt-4 lg:mt-6">
            <button className="w-full md:w-auto px-6 py-2.5 lg:py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm lg:text-base rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg glow-orange">
              Update Password
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg glow-orange">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}