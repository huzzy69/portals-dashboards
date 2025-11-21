import { LayoutGrid, Table, Columns } from 'lucide-react';

interface LayoutToggleProps {
  layout: 'card' | 'table' | 'panel';
  onLayoutChange: (layout: 'card' | 'table' | 'panel') => void;
}

export function LayoutToggle({ layout, onLayoutChange }: LayoutToggleProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <p className="text-sm text-gray-600">
        Showing matches that meet filtering criteria
      </p>
      
      <div className="flex items-center space-x-2 bg-white rounded-lg shadow-sm p-1 border border-gray-200">
        <button
          onClick={() => onLayoutChange('card')}
          className={`px-4 py-2 rounded-md transition-colors flex items-center space-x-2 ${
            layout === 'card'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          <span className="text-sm">Card View</span>
        </button>
        
        <button
          onClick={() => onLayoutChange('table')}
          className={`px-4 py-2 rounded-md transition-colors flex items-center space-x-2 ${
            layout === 'table'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Table className="w-4 h-4" />
          <span className="text-sm">Table View</span>
        </button>
        
        <button
          onClick={() => onLayoutChange('panel')}
          className={`px-4 py-2 rounded-md transition-colors flex items-center space-x-2 ${
            layout === 'panel'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Columns className="w-4 h-4" />
          <span className="text-sm">Panel View</span>
        </button>
      </div>
    </div>
  );
}
