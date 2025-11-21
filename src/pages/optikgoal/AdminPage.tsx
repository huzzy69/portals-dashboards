import { BarChart3, Users, Target, MessageSquare, Bell, Settings } from 'lucide-react';

interface AdminPageProps {
  onNavigate: (page: string) => void;
}

export function AdminPage({ onNavigate }: AdminPageProps) {
  const stats = [
    { icon: Users, label: 'Total Users', value: '12,450', color: 'bg-blue-100 text-blue-600' },
    { icon: Target, label: 'Predictions', value: '1,234', color: 'bg-green-100 text-green-600' },
    { icon: MessageSquare, label: 'Comments', value: '5,678', color: 'bg-purple-100 text-purple-600' },
    { icon: Users, label: 'VIP Members', value: '2,340', color: 'bg-orange-100 text-orange-600' },
  ];

  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', active: true },
    { icon: Target, label: 'Predictions Management' },
    { icon: MessageSquare, label: 'Comment Moderation' },
    { icon: Users, label: 'VIP Members' },
    { icon: Bell, label: 'Send Notifications' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl text-gray-900 mb-8">Admin Panel</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Admin Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={i}
                className={`bg-white rounded-xl shadow-sm border p-6 text-left hover:shadow-md transition-all ${
                  item.active ? 'border-orange-500' : 'border-gray-200'
                }`}
              >
                <Icon className={`w-6 h-6 mb-3 ${item.active ? 'text-orange-500' : 'text-gray-400'}`} />
                <div className={item.active ? 'text-orange-500' : 'text-gray-900'}>{item.label}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
