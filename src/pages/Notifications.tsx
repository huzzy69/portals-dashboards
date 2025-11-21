import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ToggleSwitch } from '../components/ToggleSwitch';
import { Bell, Target, Trophy, Crown, MessageSquare } from 'lucide-react';
import { useState } from 'react';

interface NotificationsProps {
  onNavigate: (page: string) => void;
}

export function Notifications({ onNavigate }: NotificationsProps) {
  const [goalAlerts, setGoalAlerts] = useState(true);
  const [matchStart, setMatchStart] = useState(true);
  const [predictionAlerts, setPredictionAlerts] = useState(true);
  const [vipAlerts, setVipAlerts] = useState(false);
  const [newsAlerts, setNewsAlerts] = useState(true);
  const [commentReplies, setCommentReplies] = useState(true);

  const notificationSettings = [
    {
      icon: Target,
      title: 'Goal Alerts',
      description: 'Get notified when a goal is scored in your followed matches',
      enabled: goalAlerts,
      onChange: setGoalAlerts,
      color: 'text-red-400',
    },
    {
      icon: Bell,
      title: 'Match Start Alerts',
      description: 'Receive notifications 15 minutes before matches start',
      enabled: matchStart,
      onChange: setMatchStart,
      color: 'text-blue-400',
    },
    {
      icon: Trophy,
      title: 'Prediction Alerts',
      description: 'Get notified when new predictions are available',
      enabled: predictionAlerts,
      onChange: setPredictionAlerts,
      color: 'text-green-400',
    },
    {
      icon: Crown,
      title: 'VIP Alerts',
      description: 'Exclusive notifications for VIP predictions and offers',
      enabled: vipAlerts,
      onChange: setVipAlerts,
      color: 'text-yellow-400',
    },
    {
      icon: MessageSquare,
      title: 'News & Updates',
      description: 'Stay updated with the latest sports news and platform updates',
      enabled: newsAlerts,
      onChange: setNewsAlerts,
      color: 'text-purple-400',
    },
    {
      icon: MessageSquare,
      title: 'Comment Replies',
      description: 'Get notified when someone replies to your comments',
      enabled: commentReplies,
      onChange: setCommentReplies,
      color: 'text-cyan-400',
    },
  ];

  const recentNotifications = [
    {
      icon: Target,
      title: 'GOAL!',
      message: 'Liverpool scored! Manchester United 1-2 Liverpool (67\')',
      time: '5 min ago',
      color: 'bg-red-500',
    },
    {
      icon: Trophy,
      title: 'New VIP Prediction',
      message: 'New Bank prediction available for Champions League match',
      time: '1 hour ago',
      color: 'bg-yellow-400',
    },
    {
      icon: Bell,
      title: 'Match Starting Soon',
      message: 'Real Madrid vs Barcelona starts in 15 minutes',
      time: '2 hours ago',
      color: 'bg-blue-500',
    },
    {
      icon: MessageSquare,
      title: 'New Comment Reply',
      message: 'John replied to your comment on Manchester United match',
      time: '3 hours ago',
      color: 'bg-cyan-500',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-white mb-2">Notifications</h1>
          <p className="text-gray-400">Manage your notification preferences</p>
        </div>

        {/* Notification Settings */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 mb-8">
          <h2 className="text-xl text-white mb-6">Notification Settings</h2>
          <div className="space-y-6">
            {notificationSettings.map((setting, index) => {
              const Icon = setting.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 pb-6 border-b border-gray-800 last:border-0 last:pb-0"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 ${setting.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-1">{setting.title}</h3>
                    <p className="text-sm text-gray-400">{setting.description}</p>
                  </div>
                  <ToggleSwitch
                    enabled={setting.enabled}
                    onChange={setting.onChange}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Notifications */}
        <div>
          <h2 className="text-xl text-white mb-4">Recent Notifications</h2>
          <div className="space-y-3">
            {recentNotifications.map((notification, index) => {
              const Icon = notification.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-4 border border-gray-800 hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 ${notification.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white mb-1">{notification.title}</h3>
                      <p className="text-sm text-gray-400 mb-2">{notification.message}</p>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-6">
            <button className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors">
              Load More Notifications
            </button>
          </div>
        </div>

        {/* Settings Info */}
        <div className="mt-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800">
          <p className="text-sm text-gray-400 text-center">
            You can change these settings at any time. Make sure to enable browser notifications for real-time alerts.
          </p>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
