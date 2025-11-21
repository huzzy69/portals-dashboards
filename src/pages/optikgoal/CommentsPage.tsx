import { ThumbsUp, Reply, Flag, Shield } from 'lucide-react';
import { useState } from 'react';

interface CommentsPageProps {
  onNavigate: (page: string) => void;
}

export function CommentsPage({ onNavigate }: CommentsPageProps) {
  const [newComment, setNewComment] = useState('');

  const comments = [
    {
      user: 'John Smith',
      avatar: 'JS',
      message: 'Great prediction! Liverpool dominated in the second half.',
      time: '5 minutes ago',
      likes: 12,
      isAdmin: false,
    },
    {
      user: 'Admin',
      avatar: 'AD',
      message: 'Thank you! We analyze every match carefully.',
      time: '3 minutes ago',
      likes: 8,
      isAdmin: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl text-gray-900 mb-8">Community Comments</h1>

        {/* New Comment */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm">U</span>
            </div>
            <div className="flex-1">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts..."
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                rows={3}
              />
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs text-gray-500">Be respectful</p>
                <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-colors">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Anti-spam Notice */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6 flex items-start space-x-3">
          <Shield className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-gray-900 text-sm mb-1">Protected Community</h3>
            <p className="text-xs text-gray-600">AI-powered moderation keeps spam away</p>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.map((comment, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start space-x-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    comment.isAdmin
                      ? 'bg-gradient-to-br from-orange-500 to-orange-600'
                      : 'bg-gray-200'
                  }`}
                >
                  <span className={comment.isAdmin ? 'text-white text-sm' : 'text-gray-600 text-sm'}>
                    {comment.avatar}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-gray-900">{comment.user}</span>
                    {comment.isAdmin && (
                      <span className="bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded">
                        Admin
                      </span>
                    )}
                    <span className="text-xs text-gray-500">{comment.time}</span>
                  </div>

                  <p className="text-gray-700 mb-4">{comment.message}</p>

                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-orange-500 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">{comment.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-orange-500 transition-colors">
                      <Reply className="w-4 h-4" />
                      <span className="text-sm">Reply</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors">
                      <Flag className="w-4 h-4" />
                      <span className="text-sm">Report</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
