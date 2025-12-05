import { useState } from 'react';
import HomePage from './pages/HomePage';
import BiographyPage from './pages/BiographyPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import Navigation from './components/Navigation';

type PageType = 'home' | 'biography' | 'experience' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'biography':
        return <BiographyPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          <main className="flex-1 order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 min-h-[600px] transition-all duration-300">
              {renderPage()}
            </div>
          </main>

          <aside className="lg:w-80 order-1 lg:order-2">
            <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
