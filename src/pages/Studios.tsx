import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Star, Clock, Users, Mic, Headphones, Music, Calendar, ArrowRight, Sliders } from 'lucide-react';

const Studios: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const genres = ['All', 'Hip-Hop', 'Rock', 'Pop', 'Electronic', 'Jazz', 'Classical', 'R&B', 'Country'];
  const locations = ['All', 'Puri', 'Bhubaneswar'];
  const priceRanges = ['All', '₹500-999', '₹1000-1499', '₹1500-1999', '₹2000-2499', '₹2500+'];

  const studios = [
    {
      id: 1,
      name: 'Pallav Studio',
      location: 'Puri',
      rating: 4.9,
      reviews: 127,
      hourlyRate: '₹1,800',
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      specialties: ['Hip-Hop', 'R&B', 'Pop'],
      equipment: ['Neumann U87', 'SSL Console', 'Pro Tools HDX'],
      engineer: 'Pallav Kumar',
      engineerRating: 4.8,
      availability: 'Available Today',
      featured: true,
      analogueGear: true,
      distance: '2 km',
      description: 'Premier recording studio in the heart of Puri with state-of-the-art equipment and acoustically treated rooms.',
      amenities: ['Air Conditioning', 'Parking', 'Refreshments', 'WiFi'],
      studioSize: 'Large (50+ sqm)',
      maxCapacity: 8
    },
    {
      id: 2,
      name: 'RajBilasini (RnB) Studios',
      location: 'Bhubaneswar (Forest Park)',
      rating: 4.8,
      reviews: 89,
      hourlyRate: '₹2,200',
      image: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      specialties: ['R&B', 'Soul', 'Jazz'],
      equipment: ['Shure SM7B', 'Focusrite Interface', 'Logic Pro X'],
      engineer: 'Rajesh Mohanty',
      engineerRating: 4.9,
      availability: 'Available Tomorrow',
      featured: true,
      analogueGear: false,
      distance: '5 km',
      description: 'Specialized R&B and Soul recording studio with vintage equipment and modern digital workflow.',
      amenities: ['Air Conditioning', 'Parking', 'Refreshments', 'WiFi', 'Lounge Area'],
      studioSize: 'Medium (30-50 sqm)',
      maxCapacity: 6
    },
    {
      id: 3,
      name: 'Box Studios',
      location: 'Bhubaneswar (Rasulgarh)',
      rating: 4.7,
      reviews: 156,
      hourlyRate: '₹1,500',
      image: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      specialties: ['Electronic', 'Hip-Hop', 'Pop'],
      equipment: ['Ableton Live', 'Moog Synthesizer', 'KRK Monitors'],
      engineer: 'Subham Dash',
      engineerRating: 4.7,
      availability: 'Available Now',
      featured: false,
      analogueGear: true,
      distance: '8 km',
      description: 'Modern electronic music production studio with cutting-edge digital equipment and creative atmosphere.',
      amenities: ['Air Conditioning', 'Parking', 'WiFi', 'Instrument Rental'],
      studioSize: 'Compact (20-30 sqm)',
      maxCapacity: 4
    }
  ];

  const filteredStudios = studios.filter(studio => {
    const matchesSearch = studio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         studio.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         studio.specialties.some(genre => genre.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesGenre = selectedGenre === 'All' || studio.specialties.includes(selectedGenre);
    const matchesLocation = selectedLocation === 'All' || studio.location.includes(selectedLocation);
    
    const matchesPriceRange = priceRange === 'All' || (() => {
      const rate = parseInt(studio.hourlyRate.replace(/[₹,]/g, ''));
      switch(priceRange) {
        case '₹500-999': return rate >= 500 && rate <= 999;
        case '₹1000-1499': return rate >= 1000 && rate <= 1499;
        case '₹1500-1999': return rate >= 1500 && rate <= 1999;
        case '₹2000-2499': return rate >= 2000 && rate <= 2499;
        case '₹2500+': return rate >= 2500;
        default: return true;
      }
    })();
    
    return matchesSearch && matchesGenre && matchesLocation && matchesPriceRange;
  });

  const StudioCard: React.FC<{ studio: typeof studios[0] }> = ({ studio }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden border border-gray-200">
      <div className="relative">
        <img
          src={studio.image}
          alt={studio.name}
          className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {studio.featured && (
          <span className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-gray-900 text-white px-2 sm:px-3 py-1 rounded-md text-xs font-medium">
            Featured
          </span>
        )}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white rounded-md px-2 py-1 text-xs font-medium text-gray-700">
          {studio.availability}
        </div>
      </div>
      
      <div className="p-3 sm:p-4 lg:p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-sm sm:text-base lg:text-lg text-gray-900 mb-1 group-hover:text-gray-700 transition-colors truncate">
              {studio.name}
            </h3>
            <div className="flex items-center text-gray-600 text-xs sm:text-sm">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
              <span className="truncate">{studio.location} • {studio.distance}</span>
            </div>
          </div>
          <div className="text-right ml-2">
            <div className="text-sm sm:text-base lg:text-xl font-bold text-gray-900">
              {studio.hourlyRate}
            </div>
            <div className="text-xs sm:text-sm text-gray-500">per hour</div>
          </div>
        </div>
        
        <div className="flex items-center mb-3 sm:mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700 ml-1">
              {studio.rating}
            </span>
          </div>
          <span className="text-xs sm:text-sm text-gray-500 ml-2">
            ({studio.reviews} reviews)
          </span>
        </div>
        
        <div className="mb-3 sm:mb-4">
          <div className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Specialties:</div>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {studio.specialties.map((genre, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-3 sm:mb-4">
          <div className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Key Equipment:</div>
          <div className="text-xs sm:text-sm text-gray-600">
            {studio.equipment.slice(0, 2).join(', ')}
            {studio.equipment.length > 2 && '...'}
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-medium text-gray-700">{studio.engineer}</div>
              <div className="flex items-center">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs text-gray-500 ml-1">{studio.engineerRating}</span>
              </div>
            </div>
          </div>
          {studio.analogueGear && (
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md">
              Analogue Gear
            </span>
          )}
        </div>
        
        <div className="flex gap-2 sm:gap-3">
          <Link
            to={`/studio/${studio.id}`}
            className="flex-1 bg-gray-900 text-white py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center text-xs sm:text-sm"
          >
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Book Now
          </Link>
          <Link
            to={`/studio/${studio.id}`}
            className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Find Professional Recording Studios
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Discover verified studios with transparent equipment listings and expert engineers
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search studios..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-8 sm:pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 sm:py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base"
            >
              <Sliders className="w-4 h-4 mr-2" />
              Filters
            </button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-gray-200">
              {/* Genre Filter */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Genre</label>
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent text-xs sm:text-sm"
                >
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre === 'All' ? 'All Genres' : genre}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent text-xs sm:text-sm"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location === 'All' ? 'All Locations' : location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Budget Zone</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent text-xs sm:text-sm"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>
                      {range === 'All' ? 'All Prices' : range + '/hr'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-4 sm:mb-6">
          <p className="text-gray-600 text-sm sm:text-base">
            Showing {filteredStudios.length} studios
          </p>
        </div>

        {/* Studios Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredStudios.map((studio) => (
            <StudioCard key={studio.id} studio={studio} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Studios;