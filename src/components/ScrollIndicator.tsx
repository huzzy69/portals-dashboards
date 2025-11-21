import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  targetSection: string;
  onClick: (section: string) => void;
}

export function ScrollIndicator({ targetSection, onClick }: ScrollIndicatorProps) {
  return (
    <div className="flex justify-center py-8">
      <button
        onClick={() => onClick(targetSection)}
        className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-blue-600 transition-colors duration-300"
        aria-label={`Scroll to ${targetSection}`}
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
        </div>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </div>
  );
}
