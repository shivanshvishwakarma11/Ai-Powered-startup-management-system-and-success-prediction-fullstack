import { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { LoginPage } from './components/pages/LoginPage';
import { Dashboard } from './components/pages/Dashboard';
import { TeamManagement } from './components/pages/TeamManagement';
import { FundingFinance } from './components/pages/FundingFinance';
import { Analytics } from './components/pages/Analytics';
import { AIPredictor } from './components/pages/AIPredictor';
import { Insights } from './components/pages/Insights';
import { Reports } from './components/pages/Reports';
import { Settings } from './components/pages/Settings';
import { About } from './components/pages/About';
import { DFDDiagram } from './components/DFDDiagram';
import { Button } from './components/ui/button';
import { Toaster } from './components/ui/sonner';
import { Network } from 'lucide-react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showDFD, setShowDFD] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleNavigate = (page: string) => {
    if (page === 'login') {
      setIsLoggedIn(false);
      setShowDFD(false);
    } else {
      setCurrentPage(page);
      setShowDFD(false);
    }
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderPage = () => {
    if (showDFD) {
      return (
        <div className="p-8">
          <DFDDiagram />
        </div>
      );
    }

    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'team':
        return <TeamManagement />;
      case 'funding':
        return <FundingFinance />;
      case 'analytics':
        return <Analytics />;
      case 'predictor':
        return <AIPredictor />;
      case 'insights':
        return <Insights />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      case 'about':
        return <About />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <div className="flex h-screen bg-background overflow-hidden">
        <Sidebar currentPage={showDFD ? 'dfd' : currentPage} onNavigate={handleNavigate} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <div className="h-16 bg-white border-b border-sidebar-border flex items-center justify-between px-6">
            <div>
              <h2 className="text-muted-foreground" style={{ fontSize: '14px' }}>
                {showDFD
                  ? 'System Architecture'
                  : currentPage.charAt(0).toUpperCase() + currentPage.slice(1).replace('-', ' ')}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant={showDFD ? 'default' : 'outline'}
                className={showDFD ? 'gradient-primary gap-2' : 'gap-2'}
                onClick={() => setShowDFD(!showDFD)}
              >
                <Network className="w-4 h-4" />
                {showDFD ? 'Hide DFD' : 'View Tech Stack DFD'}
              </Button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto">
            {renderPage()}
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}
