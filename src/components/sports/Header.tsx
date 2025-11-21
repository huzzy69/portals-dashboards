import { RefreshCw } from 'lucide-react';

interface HeaderProps {
  lastUpdate: Date;
}

export function Header({ lastUpdate }: HeaderProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-gray-900">
            Live Odds Filter Dashboard
          </h1>
          
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <RefreshCw className="w-4 h-4 animate-spin text-blue-600" />
              <span>Auto-refresh: 4s</span>
            </div>
            <div className="h-4 w-px bg-gray-300" />
            <span>Last update: {formatTime(lastUpdate)}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
