import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface AdminPanelProps {
  onNavigate: (page: string) => void;
}

export function AdminPanel({ onNavigate }: AdminPanelProps) {
  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl text-white mb-4">Admin Panel</h1>
        <p className="text-gray-400">Admin functionality coming soon...</p>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
