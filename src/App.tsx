import { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navigation } from './components/optikgoal/Navigation';
import { Footer } from './components/optikgoal/Footer';
import { MobileBottomNav } from './components/optikgoal/MobileBottomNav';
import { HomePage } from './pages/optikgoal/HomePage';
import { LiveScoresPage } from './pages/optikgoal/LiveScoresPage';
import { MatchDetailsPage } from './pages/optikgoal/MatchDetailsPage';
import { PredictionsPage } from './pages/optikgoal/PredictionsPage';
import { MatchBulletinPage } from './pages/optikgoal/MatchBulletinPage';
import { VIPPage } from './pages/optikgoal/VIPPage';
import { NotificationsPage } from './pages/optikgoal/NotificationsPage';
import { CommentsPage } from './pages/optikgoal/CommentsPage';
import { NewsPage } from './pages/optikgoal/NewsPage';
import { NewsDetailPage } from './pages/optikgoal/NewsDetailPage';
import { AdminPage } from './pages/optikgoal/AdminPage';
import { LoginPage } from './pages/optikgoal/LoginPage';
import { SignupPage } from './pages/optikgoal/SignupPage';
import { AdminDashboard } from './pages/optikgoal/AdminDashboard';
import { UserDashboard } from './pages/optikgoal/UserDashboard';
import { VIPUserDashboard } from './pages/optikgoal/VIPUserDashboard';
import { VIPLoginPage } from './pages/optikgoal/VIPLoginPage';
import { VIPSignupPage } from './pages/optikgoal/VIPSignupPage';
import { PaymentPage } from './pages/optikgoal/PaymentPage';
import { BankerPage } from './pages/optikgoal/BankerPage';
import { SurprisePage } from './pages/optikgoal/SurprisePage';
import { AdminLoginPage } from './pages/optikgoal/AdminLoginPage';
import { AdminSignupPage } from './pages/optikgoal/AdminSignupPage';
import { LogoutPage } from './pages/optikgoal/LogoutPage';
MatchDetailsPage
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if user is authenticated from localStorage
    return localStorage.getItem('optikgoal_user_auth') === 'true';
  });
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    // Check if admin is authenticated from localStorage
    return localStorage.getItem('optikgoal_admin_auth') === 'true';
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle user login
  const handleUserLogin = () => {
    localStorage.setItem('optikgoal_user_auth', 'true');
    setIsAuthenticated(true);
    setCurrentPage('user-dashboard');
  };

  // Handle admin login
  const handleAdminLogin = () => {
    localStorage.setItem('optikgoal_admin_auth', 'true');
    setIsAdminAuthenticated(true);
    setCurrentPage('admin-dashboard');
  };

  // Handle smart login - detects user type from localStorage
  const handleSmartLogin = () => {
    // Check which auth was set by the login page
    const adminAuth = localStorage.getItem('optikgoal_admin_auth') === 'true';
    const vipAuth = localStorage.getItem('optikgoal_vip_auth') === 'true';
    const userAuth = localStorage.getItem('optikgoal_user_auth') === 'true';

    if (adminAuth) {
      setIsAdminAuthenticated(true);
      setIsAuthenticated(false);
      setCurrentPage('admin-dashboard');
    } else if (vipAuth) {
      setIsAuthenticated(true);
      setIsAdminAuthenticated(false);
      setCurrentPage('vip-dashboard');
    } else if (userAuth) {
      setIsAuthenticated(true);
      setIsAdminAuthenticated(false);
      setCurrentPage('user-dashboard');
    }
  };

  // Handle user logout
  const handleUserLogout = () => {
    localStorage.removeItem('optikgoal_user_auth');
    localStorage.removeItem('optikgoal_user_email');
    setIsAuthenticated(false);
    setCurrentPage('login');
  };

  // Handle admin logout
  const handleAdminLogout = () => {
    localStorage.removeItem('optikgoal_admin_auth');
    localStorage.removeItem('optikgoal_admin_email');
    setIsAdminAuthenticated(false);
    setCurrentPage('admin-login');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} />;
      case 'live-scores': return <LiveScoresPage onNavigate={setCurrentPage} />;
      case 'match-details': return <MatchDetailsPage onNavigate={setCurrentPage} />;
      case 'predictions': return <PredictionsPage onNavigate={setCurrentPage} />;
      case 'bulletin': return <MatchBulletinPage onNavigate={setCurrentPage} />;
      case 'vip': return <VIPPage onNavigate={setCurrentPage} />;
      case 'notifications': return <NotificationsPage onNavigate={setCurrentPage} />;
      case 'comments': return <CommentsPage onNavigate={setCurrentPage} />;
      case 'news': return <NewsPage onNavigate={setCurrentPage} />;
      case 'news-detail': return <NewsDetailPage onNavigate={setCurrentPage} />;
      case 'admin': return <AdminPage onNavigate={setCurrentPage} />;
      case 'login': return <LoginPage onNavigate={setCurrentPage} onLogin={handleSmartLogin} />;
      case 'signup': return <SignupPage onNavigate={setCurrentPage} />;
      case 'admin-dashboard': 
        // Protect admin dashboard - redirect to admin login if not authenticated
        if (!isAdminAuthenticated) {
          setCurrentPage('admin-login');
          return <AdminLoginPage onNavigate={setCurrentPage} onLogin={handleAdminLogin} />;
        }
        return <AdminDashboard onNavigate={setCurrentPage} onLogout={handleAdminLogout} />;
      case 'user-dashboard': 
        // Protect user dashboard - redirect to login if not authenticated
        if (!isAuthenticated) {
          setCurrentPage('login');
          return <LoginPage onNavigate={setCurrentPage} onLogin={handleUserLogin} />;
        }
        return <UserDashboard onNavigate={setCurrentPage} onLogout={handleUserLogout} />;
      case 'vip-dashboard':
        // Protect VIP dashboard - redirect to login if not authenticated
        if (!isAuthenticated) {
          setCurrentPage('login');
          return <LoginPage onNavigate={setCurrentPage} onLogin={handleUserLogin} />;
        }
        return <VIPUserDashboard onNavigate={setCurrentPage} onLogout={handleUserLogout} />;
      case 'payment':
        // Protect payment page - redirect to login if not authenticated
        if (!isAuthenticated) {
          setCurrentPage('login');
          return <LoginPage onNavigate={setCurrentPage} onLogin={handleUserLogin} />;
        }
        return <PaymentPage onNavigate={setCurrentPage} />;
      case 'banker': return <BankerPage onNavigate={setCurrentPage} />;
      case 'surprise': return <SurprisePage onNavigate={setCurrentPage} />;
      case 'admin-login': return <AdminLoginPage onNavigate={setCurrentPage} onLogin={handleAdminLogin} />;
      case 'admin-signup': return <AdminSignupPage onNavigate={setCurrentPage} />;
      case 'vip-login': return <VIPLoginPage onNavigate={setCurrentPage} onLogin={handleUserLogin} />;
      case 'vip-signup': return <VIPSignupPage onNavigate={setCurrentPage} />;
      case 'logout': 
        // Determine user type based on authentication
        const userType = isAdminAuthenticated ? 'admin' : isAuthenticated ? 'user' : 'user';
        return <LogoutPage onNavigate={setCurrentPage} onLogout={() => {
          if (isAdminAuthenticated) {
            handleAdminLogout();
          } else {
            handleUserLogout();
          }
        }} userType={userType} />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  // Don't show nav/footer for auth and dashboard pages
  const hideNavFooter = ['login', 'signup', 'admin-login', 'admin-signup', 'vip-login', 'vip-signup', 'admin-dashboard', 'user-dashboard', 'vip-dashboard', 'payment'].includes(currentPage);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        {!hideNavFooter && <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />}
        <main className={hideNavFooter ? '' : 'min-h-screen pb-20 md:pb-0'}>
          {renderPage()}
        </main>
        {!hideNavFooter && <Footer onNavigate={setCurrentPage} />}
        {isMobile && !hideNavFooter && <MobileBottomNav currentPage={currentPage} onNavigate={setCurrentPage} />}
      </div>
    </LanguageProvider>
  );
}