import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Music, LayoutDashboard } from 'lucide-react';

/**
 * Bottom Navigation Bar for mobile devices
 * Features: Fixed bottom position, 4 main navigation items, active state indication
 */
const BottomNavBar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: Home,
      isActive: location.pathname === '/'
    },
    { 
      path: '/studios', 
      label: 'Book Studio', 
      icon: Calendar,
      isActive: location.pathname === '/studios'
    },
    { 
      path: '/post-production', 
      label: 'Mix/Master', 
      icon: Music,
      isActive: location.pathname === '/post-production'
    },
    { 
      path: '/dashboard', 
      label: 'Dashboard', 
      icon: LayoutDashboard,
      isActive: location.pathname === '/dashboard'
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                item.isActive
                  ? 'text-gray-900 bg-gray-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavBar;