import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MessageSquare, ThumbsUp, Reply, Shield, Flag } from 'lucide-react';

interface CommentsProps {
  onNavigate: (page: string) => void;
}

export function Comments({ onNavigate }: CommentsProps) {
  const [newComment, setNewComment] = useState('');

  const comments = [
    {
      id: 1,
      user: 'John Smith',
      avatar: 'JS',
      message: 'Great prediction! Liverpool totally dominated in the second half.',
      time: '5 minutes ago',
      likes: 12,
      isAdmin: false,
      replies: [
        {
          user: 'Admin',
          avatar: 'AD',
          message: 'Thank you! We analyze every match carefully to provide the best predictions.',
          time: '3 minutes ago',
          isAdmin: true,
        },
      ],
    },
    {
      id: 2,
      user: 'Sarah Johnson',
      avatar: 'SJ',
      message: 'Been following OptikGoal for 3 months now. 87% win rate on my bets! Incredible service.',
      time: '15 minutes ago',
      likes: 24,
      isAdmin: false,
      replies: [],
    },
    {
      id: 3,
      user: 'Michael Brown',
      avatar: 'MB',
      message: 'The VIP predictions are absolutely worth it. Made my money back in the first week!',
      time: '1 hour ago',
      likes: 18,
      isAdmin: false,
      replies: [],
    },
    {
      id: 4,
      user: 'Admin',
      avatar: 'AD',
      message: 'New Bank prediction just released! Check out our Predictions page for today\'s top picks.',
      time: '2 hours ago',
      likes: 45,
      isAdmin: true,
      replies: [],
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-white mb-2">Community Comments</h1>
          <p className="text-gray-400">Join the discussion with fellow sports betting enthusiasts</p>
        </div>

        {/* New Comment Box */}
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-black text-sm">U</span>
            </div>
            <div className="flex-1">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 resize-none"
                rows={3}
              />
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs text-gray-500">
                  Be respectful and follow community guidelines
                </p>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-colors">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Anti-spam Notice */}
        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800 mb-6 flex items-start space-x-3">
          <Shield className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-white text-sm mb-1">Protected Community</h3>
            <p className="text-xs text-gray-400">
              Our AI-powered moderation system keeps spam and abuse away. All comments are monitored.
            </p>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              {/* Comment Header */}
              <div className="flex items-start space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  comment.isAdmin
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-600'
                    : 'bg-gray-800'
                }`}>
                  <span className={comment.isAdmin ? 'text-black text-sm' : 'text-white text-sm'}>
                    {comment.avatar}
                  </span>
                </div>

                <div className="flex-1">
                  {/* User Info */}
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-white">{comment.user}</span>
                    {comment.isAdmin && (
                      <span className="bg-yellow-400 text-black text-xs px-2 py-0.5 rounded">
                        Admin
                      </span>
                    )}
                    <span className="text-xs text-gray-500">{comment.time}</span>
                  </div>

                  {/* Comment Message */}
                  <p className="text-gray-300 mb-4">{comment.message}</p>

                  {/* Comment Actions */}
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-yellow-400 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">{comment.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-yellow-400 transition-colors">
                      <Reply className="w-4 h-4" />
                      <span className="text-sm">Reply</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-red-400 transition-colors">
                      <Flag className="w-4 h-4" />
                      <span className="text-sm">Report</span>
                    </button>
                  </div>

                  {/* Replies */}
                  {comment.replies.length > 0 && (
                    <div className="mt-4 pl-6 border-l-2 border-gray-800 space-y-4">
                      {comment.replies.map((reply, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            reply.isAdmin
                              ? 'bg-gradient-to-br from-yellow-400 to-yellow-600'
                              : 'bg-gray-800'
                          }`}>
                            <span className={reply.isAdmin ? 'text-black text-xs' : 'text-white text-xs'}>
                              {reply.avatar}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-white text-sm">{reply.user}</span>
                              {reply.isAdmin && (
                                <span className="bg-yellow-400 text-black text-xs px-2 py-0.5 rounded">
                                  Admin
                                </span>
                              )}
                              <span className="text-xs text-gray-500">{reply.time}</span>
                            </div>
                            <p className="text-sm text-gray-300">{reply.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-6">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
            Load More Comments
          </button>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
