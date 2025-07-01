import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, Star, Music, Users, Headphones, ArrowRight } from 'lucide-react';
import { useUser } from '../context/UserContext';

// Type definitions for better type safety
interface Stat {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

interface QuickAction {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  emphasized: boolean;
}

interface Activity {
  id: number;
  type: 'studio' | 'post-production';
  title: string;
  subtitle: string;
  time: string;
  amount: string;
  status: 'completed' | 'upcoming' | 'in-progress';
  icon: React.ReactNode;
}

/**
 * Dashboard component providing user overview and quick actions
 * Features: Stats display, activity history, quick actions, tabbed navigation
 */
const Dashboard: React.FC = () => {
  const { user, isAuthenticated } = useUser();
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/account');
    }
  }, [isAuthenticated, navigate]);

  // Dashboard statistics configuration
  const stats: Stat[] = useMemo(() => [
    {
      title: 'Total Bookings',
      value: '12',
      icon: <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />,
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-700',
    },
    {
      title: 'Completed Projects',
      value: '8',
      icon: <Users className="w-3 h-3 sm:w-4 sm:h-4" />,
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-700',
    },
    {
      title: 'Upcoming Sessions',
      value: '2',
      icon: <Music className="w-3 h-3 sm:w-4 sm:h-4" />,
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-700',
    },
    {
      title: 'Average Rating',
      value: '4.8',
      icon: <Star className="w-3 h-3 sm:w-4 sm:h-4" />,
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-700',
    },
  ], []);

  // Quick actions configuration
  const quickActions: QuickAction[] = useMemo(() => [
    {
      title: 'Find Studios',
      description: 'Browse and book recording studios',
      icon: <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: '/studios',
      emphasized: true
    },
    {
      title: 'Post-Production',
      description: 'Get mixing and mastering services',
      icon: <Music className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: '/post-production',
      emphasized: true
    },
    {
      title: 'Write Review',
      description: 'Share your experience',
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: '/reviews',
      emphasized: false
    },
    {
      title: 'View Schedule',
      description: 'Check your upcoming bookings',
      icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: '#',
      emphasized: false
    },
  ], []);

  // User activities data
  const myActivities: Activity[] = useMemo(() => [
    {
      id: 1,
      type: 'studio',
      title: 'Harmony Studios',
      subtitle: '2024-01-15',
      time: '10:00 AM - 12:00 PM',
      amount: '₹3,500',
      status: 'completed',
      icon: <Headphones className="w-4 h-4" />,
    },
    {
      id: 2,
      type: 'post-production',
      title: 'Mixing & Mastering',
      subtitle: '2024-01-10',
      time: '',
      amount: '₹4,000',
      status: 'completed',
      icon: <Music className="w-4 h-4" />,
    },
    {
      id: 3,
      type: 'studio',
      title: 'SoundWave Recording',
      subtitle: '2024-01-20',
      time: '2:00 PM - 4:00 PM',
      amount: '₹2,800',
      status: 'upcoming',
      icon: <Headphones className="w-4 h-4" />,
    },
    {
      id: 4,
      type: 'post-production',
      title: 'Premium Mix Package',
      subtitle: '2024-01-18',
      time: '',
      amount: '₹6,500',
      status: 'in-progress',
      icon: <Music className="w-4 h-4" />,
    },
  ], []);

  // Tab configuration
  const tabs = useMemo(() => [
    { id: 'overview', label: 'Overview' },
    { id: 'activities', label: 'Activities' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'preferences', label: 'Prefs' },
  ], []);

  // Get status color based on activity status
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'completed':
        return 'text-green-700 bg-green-50 border-green-200';
      case 'upcoming':
        return 'text-gray-700 bg-gray-50 border-gray-200';
      case 'in-progress':
        return 'text-gray-700 bg-gray-100 border-gray-300';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  // Don't render if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1 flex items-center">
            Welcome back 👋
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Here's what's happening with your music projects
          </p>
        </div>

        {/* Navigation Tabs - Optimized for mobile */}
        <div className="mb-6 sm:mb-8">
          <div className="flex space-x-2 sm:space-x-4 lg:space-x-8 border-b border-gray-200 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-2 sm:px-3 border-b-2 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <>
            {/* Stats Grid - Reduced size for mobile */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-2 sm:p-3 lg:p-4 border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <div className={`p-1 sm:p-1.5 rounded-md ${stat.iconBg}`}>
                      <div className={stat.iconColor}>
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-0.5 sm:space-y-1">
                    <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">{stat.title}</p>
                    <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Content Grid - Responsive */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {quickActions.map((action, index) => (
                    <Link
                      key={index}
                      to={action.href}
                      className={`flex flex-col items-center p-3 sm:p-4 rounded-md border transition-all group text-center ${
                        action.emphasized 
                          ? 'border-gray-300 hover:border-gray-400 hover:bg-gray-50' 
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`p-2 sm:p-3 rounded-md mb-2 sm:mb-3 group-hover:bg-gray-200 transition-colors ${
                        action.emphasized ? 'bg-gray-100' : 'bg-gray-50'
                      }`}>
                        <div className="text-gray-700">
                          {action.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-xs sm:text-sm mb-1">{action.title}</h4>
                        <p className="text-xs text-gray-600 hidden sm:block">{action.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Recent Activity</h3>
                  <button className="text-gray-600 hover:text-gray-900 flex items-center text-xs sm:text-sm font-medium">
                    View all
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </button>
                </div>

                <div className="space-y-3">
                  {myActivities.slice(0, 4).map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center justify-between p-2 sm:p-3 rounded-md border border-gray-100 hover:border-gray-200 transition-colors"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                        <div className="p-1 sm:p-1.5 bg-gray-100 rounded-md flex-shrink-0">
                          <div className="text-gray-600">
                            {activity.icon}
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-medium text-gray-900 text-xs sm:text-sm truncate">{activity.title}</h4>
                          <div className="flex items-center space-x-1 sm:space-x-2 text-xs text-gray-600">
                            <Calendar className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{activity.subtitle}</span>
                            {activity.time && (
                              <span className="hidden sm:inline">{activity.time}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0 ml-2">
                        <p className="font-medium text-gray-900 text-xs sm:text-sm">{activity.amount}</p>
                        <span className={`inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium border ${getStatusColor(activity.status)}`}>
                          {activity.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Activities Tab with Sales Funnel */}
        {activeTab === 'activities' && (
          <div className="space-y-6">
            {/* Sales Funnel Buttons */}
            <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Quick Book Services</h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/studios"
                  className="flex-1 bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-center text-sm sm:text-base"
                >
                  + Book Studio Now
                </Link>
                <Link
                  to="/post-production"
                  className="flex-1 bg-gray-100 text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center text-sm sm:text-base"
                >
                  + Mix/Master
                </Link>
              </div>
            </div>

            {/* Activities History */}
            <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">My Activities / History</h3>
              <div className="space-y-4">
                {myActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-1.5 sm:p-2 bg-gray-100 rounded-md">
                          <div className="text-gray-600">
                            {activity.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm sm:text-base">{activity.title}</h4>
                          <p className="text-xs sm:text-sm text-gray-600 capitalize">{activity.type.replace('-', ' ')}</p>
                        </div>
                      </div>
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${getStatusColor(activity.status)}`}>
                        {activity.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                      <div>
                        <div className="font-medium text-gray-700">Date & Time</div>
                        <div>{activity.subtitle}</div>
                        {activity.time && <div className="hidden sm:block">{activity.time}</div>}
                      </div>
                      <div>
                        <div className="font-medium text-gray-700">Amount</div>
                        <div className="text-base sm:text-lg font-semibold text-gray-900">{activity.amount}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-700">Type</div>
                        <div className="capitalize">{activity.type.replace('-', ' ')}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Your Reviews</h3>
            <div className="text-center py-8 sm:py-12">
              <Star className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300 mx-auto mb-4" />
              <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No reviews yet</h4>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Share your experience with studios and engineers</p>
              <button className="bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base">
                Write Your First Review
              </button>
            </div>
          </div>
        )}

        {/* Preferences Tab */}
        {activeTab === 'preferences' && (
          <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Preferences</h3>
            <div className="max-w-2xl">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Genres
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {user?.preferences?.genres.map((genre, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium rounded-md border border-gray-200"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="text-gray-600 text-sm sm:text-base">{user?.preferences?.location}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <div className="text-gray-600 text-sm sm:text-base">{user?.preferences?.budget_range}</div>
                </div>
                <button className="bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base">
                  Update Preferences
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;