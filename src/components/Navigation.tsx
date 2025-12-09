import { Home, User, Briefcase, Mail } from 'lucide-react';

type PageType = 'home' | 'biography' | 'experience' | 'contact';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home' as PageType, label: 'Home', icon: Home },
    { id: 'biography' as PageType, label: 'Biography', icon: User },
    { id: 'experience' as PageType, label: 'Experience', icon: Briefcase },
    { id: 'contact' as PageType, label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-slate-950/50 p-6 sticky top-8 transition-colors duration-300">
      <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
        Navigation
      </h2>
      <ul className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
