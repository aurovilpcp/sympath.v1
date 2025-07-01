import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, ChevronDown, Menu, X } from 'lucide-react';
import { useUser } from '../../context/UserContext';

/**
 * Header component with navigation and user authentication
 * Features: Responsive navigation, user dropdown, authentication state management
 */
const Header: React.FC = () => {
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, setUser } = useUser();
  const location = useLocation();

  // Navigation items configuration - only for desktop
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/studios', label: 'Find Studios' },
    { path: '/post-production', label: 'Post-Production' },
    { path: '/for-studio-owners', label: 'For Studio Owners' },
  ];

  // Additional nav items for mobile dropdown (excluding items already in bottom nav)
  const additionalNavItems = [
    { path: '/about', label: 'About Us' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/profile', label: 'Profile' },
  ];

  // Check if current path is active
  const isActive = useCallback((path: string) => location.pathname === path, [location.pathname]);

  // Handle user logout
  const handleLogout = useCallback(() => {
    setUser(null);
    setIsAccountDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [setUser]);

  // Toggle account dropdown
  const toggleAccountDropdown = useCallback(() => {
    setIsAccountDropdownOpen(prev => !prev);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Close dropdowns when item is clicked
  const closeDropdowns = useCallback(() => {
    setIsAccountDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold text-gray-900">SymPath</span>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-gray-900 border-b-2 border-gray-900 pb-4'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Account and Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Account Dropdown - Always visible */}
            <div className="relative">
              <button
                onClick={toggleAccountDropdown}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Account menu"
                aria-expanded={isAccountDropdownOpen}
              >
                {isAuthenticated ? (
                  <>
                    <img
                      src={user?.avatar}
                      alt={user?.name}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                    />
                    <span className="hidden sm:block text-sm font-medium text-gray-700">
                      {user?.name}
                    </span>
                  </>
                ) : (
                  <>
                    <User className="w-5 h-5 text-gray-600" />
                    <span className="hidden sm:block text-sm font-medium text-gray-700">
                      My Account
                    </span>
                  </>
                )}
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>

              {/* Account Dropdown Menu */}
              {isAccountDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                  {!isAuthenticated ? (
                    <Link
                      to="/account"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdowns}
                    >
                      Login / Signup
                    </Link>
                  ) : (
                    <>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeDropdowns}
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeDropdowns}
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Log Out
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Button - Only visible on mobile */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu - Only additional items not in bottom nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white">
            <div className="flex flex-col space-y-3">
              {/* Only additional navigation items (not in bottom nav) */}
              {additionalNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeDropdowns}
                  className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                    isActive(item.path)
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;