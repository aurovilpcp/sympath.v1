import React, { useState } from 'react';
import { Star, Filter, Search, ThumbsUp, MessageCircle, Edit, Trash2 } from 'lucide-react';

const Reviews: React.FC = () => {
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [searchTerm, setSearchTerm] = useState('');

  const reviews = [
    {
      id: 1,
      user: 'Arjun Mehta',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      rating: 5,
      date: '2024-01-15',
      type: 'studio',
      service: 'SoundWave Studios',
      title: 'Exceptional recording experience!',
      content: 'The studio quality is outstanding and the engineer was incredibly professional. The equipment is top-notch and the acoustics are perfect. Highly recommend for any serious recording project.',
      helpful: 12,
      replies: 3,
      verified: true,
    },
    {
      id: 2,
      user: 'Priya Sharma',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      rating: 5,
      date: '2024-01-12',
      type: 'post-production',
      service: 'Premium Mix & Master',
      title: 'Amazing post-production service',
      content: 'The mixing and mastering quality exceeded my expectations. The engineer understood my vision perfectly and delivered exactly what I was looking for. Quick turnaround time too!',
      helpful: 8,
      replies: 1,
      verified: true,
    },
    {
      id: 3,
      user: 'Rahul Singh',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      rating: 4,
      date: '2024-01-10',
      type: 'studio',
      service: 'Harmony Recording',
      title: 'Great studio with professional setup',
      content: 'Really good experience overall. The studio has excellent equipment and the engineer was knowledgeable. Only minor issue was with scheduling, but everything else was perfect.',
      helpful: 5,
      replies: 0,
      verified: true,
    },
    {
      id: 4,
      user: 'Sneha Patel',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      rating: 5,
      date: '2024-01-08',
      type: 'post-production',
      service: 'Industry Standard Mix',
      title: 'Professional quality results',
      content: 'Absolutely blown away by the quality of the final mix. The attention to detail and the professional approach made all the difference. Will definitely use again!',
      helpful: 15,
      replies: 2,
      verified: true,
    },
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesType = filterType === 'all' || review.type === filterType;
    const matchesSearch = review.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getServiceTypeColor = (type: string) => {
    return type === 'studio' 
      ? 'bg-gray-100 text-gray-700' 
      : 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            User Reviews
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Real experiences from our community of creators
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search reviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 sm:pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-3 sm:gap-4">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent text-xs sm:text-sm"
              >
                <option value="all">All Services</option>
                <option value="studio">Studio Bookings</option>
                <option value="post-production">Post-Production</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent text-xs sm:text-sm"
              >
                <option value="recent">Most Recent</option>
                <option value="rating">Highest Rating</option>
                <option value="helpful">Most Helpful</option>
              </select>
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4 sm:space-y-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:border-gray-300 transition-colors"
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <img
                    src={review.avatar}
                    alt={review.user}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{review.user}</h4>
                      {review.verified && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-xs sm:text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full ${getServiceTypeColor(review.type)}`}>
                  {review.type === 'studio' ? 'Studio' : 'Post-Production'}
                </span>
              </div>

              {/* Service Info */}
              <div className="mb-4">
                <h5 className="text-xs sm:text-sm font-medium text-gray-700 mb-1">Service:</h5>
                <p className="text-xs sm:text-sm text-gray-600">{review.service}</p>
              </div>

              {/* Review Content */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{review.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{review.content}</p>
              </div>

              {/* Review Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-xs sm:text-sm">Helpful ({review.helpful})</span>
                  </button>
                  {review.replies > 0 && (
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">{review.replies} replies</span>
                    </button>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-6 sm:mt-8">
          <button className="bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;