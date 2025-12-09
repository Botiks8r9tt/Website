import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import HomePage from './pages/HomePage';
import BiographyPage from './pages/BiographyPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import Navigation from './components/Navigation';

type PageType = 'home' | 'biography' | 'experience' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <button
          onClick={() => setIsDark(!isDark)}
          className="fixed top-6 right-6 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 z-50"
          aria-label="Toggle dark mode"
        >
          <div className="relative w-6 h-6">
            <Sun
              className={`absolute inset-0 w-6 h-6 text-amber-500 transition-all duration-300 ${
                isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
              }`}
            />
            <Moon
              className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-300 ${
                isDark ? 'opacity-100 -rotate-90' : 'opacity-0 -rotate-90'
              }`}
            />
          </div>
        </button>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          <main className="flex-1 order-2 lg:order-1">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-slate-950/50 p-8 lg:p-12 min-h-[600px] transition-all duration-300">
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
