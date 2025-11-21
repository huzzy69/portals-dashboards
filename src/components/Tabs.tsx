interface TabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}

export function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <div className="flex space-x-1 bg-gray-900 rounded-lg p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
            activeTab === tab
              ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
