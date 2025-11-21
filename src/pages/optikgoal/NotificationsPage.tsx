import { Bell, Target, Trophy, Crown, Check } from 'lucide-react';

interface NotificationsPageProps {
  onNavigate: (page: string) => void;
}

export function NotificationsPage({ onNavigate }: NotificationsPageProps) {
  const notifications = [
    {
      icon: Trophy,
      title: 'GOAL!',
      message: 'Manchester United 2-1 Liverpool (78\')',
      time: '2 min ago',
      type: 'goal',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Target,
      title: 'New Prediction',
      message: 'Bank prediction available for Champions League',
      time: '15 min ago',
      type: 'prediction',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Bell,
      title: 'Match Starting Soon',
      message: 'Real Madrid vs Barcelona starts in 15 minutes',
      time: '30 min ago',
      type: 'match',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Crown,
      title: 'VIP Alert',
      message: 'Exclusive VIP prediction just released',
      time: '1 hour ago',
      type: 'vip',
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl text-gray-900">Notifications</h1>
          <button className="text-sm text-orange-500 hover:text-orange-600 flex items-center space-x-1">
            <Check className="w-4 h-4" />
            <span>Mark all as read</span>
          </button>
        </div>

        <div className="space-y-3">
          {notifications.map((notif, i) => {
            const Icon = notif.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 ${notif.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">{notif.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{notif.message}</p>
                    <span className="text-xs text-gray-500">{notif.time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
