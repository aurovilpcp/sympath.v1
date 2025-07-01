import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Clock, Users, Wifi, Car, Coffee, Music, Mic, Headphones, Calendar, Shield, Award, CheckCircle, Phone, Mail, Camera } from 'lucide-react';

const StudioDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showAllEquipment, setShowAllEquipment] = useState(false);

  // Studio data - in real app, this would come from API
  const studios = [
    {
      id: 1,
      name: 'Pallav Studio',
      location: 'Puri',
      fullAddress: 'Near Jagannath Temple, Grand Road, Puri, Odisha 752001',
      rating: 4.9,
      reviews: 127,
      hourlyRate: '₹1,800',
      images: [
        'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
      ],
      specialties: ['Hip-Hop', 'R&B', 'Pop', 'Bollywood'],
      equipment: [
        'Neumann U87 Microphone',
        'SSL Console',
        'Pro Tools HDX',
        'Yamaha HS8 Monitors',
        'Universal Audio Apollo Interface',
        'Vintage Neve Preamps',
        'Lexicon Reverb',
        'Antelope Audio Clock'
      ],
      engineer: {
        name: 'Pallav Kumar',
        rating: 4.8,
        experience: '12+ years',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        bio: 'Award-winning audio engineer with over 12 years of experience in music production. Specialized in Hip-Hop and R&B with credits on major label releases.',
        credits: ['Bollywood Film Soundtracks', 'Independent Albums', 'Commercial Jingles']
      },
      availability: 'Available Today',
      featured: true,
      analogueGear: true,
      distance: '2 km',
      description: 'Premier recording studio in the heart of Puri with state-of-the-art equipment and acoustically treated rooms. Our studio combines vintage warmth with modern precision to deliver exceptional sound quality.',
      amenities: [
        { icon: <Wifi className="w-4 h-4" />, name: 'High-Speed WiFi' },
        { icon: <Car className="w-4 h-4" />, name: 'Free Parking' },
        { icon: <Coffee className="w-4 h-4" />, name: 'Refreshments' },
        { icon: <Music className="w-4 h-4" />, name: 'Instrument Rental' },
        { icon: <Shield className="w-4 h-4" />, name: 'Security System' },
        { icon: <Users className="w-4 h-4" />, name: 'Lounge Area' }
      ],
      studioSize: 'Large (50+ sqm)',
      maxCapacity: 8,
      acoustics: 'Professionally treated with bass traps and diffusers',
      contact: {
        phone: '+91 98765 43210',
        email: 'booking@pallavstudio.com'
      },
      policies: [
        'Advance booking required',
        'Cancellation 24 hours prior',
        'No outside food/drinks',
        'Professional conduct expected'
      ],
      pricing: {
        hourly: 1800,
        halfDay: 7200,
        fullDay: 12000,
        weekly: 75000
      }
    },
    {
      id: 2,
      name: 'RajBilasini (RnB) Studios',
      location: 'Bhubaneswar (Forest Park)',
      fullAddress: 'Forest Park Area, Bhubaneswar, Odisha 751009',
      rating: 4.8,
      reviews: 89,
      hourlyRate: '₹2,200',
      images: [
        'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
      ],
      specialties: ['R&B', 'Soul', 'Jazz', 'Neo-Soul'],
      equipment: [
        'Shure SM7B Microphone',
        'Focusrite Interface',
        'Logic Pro X',
        'KRK Rokit Monitors',
        'Vintage Tube Preamps',
        'Moog Synthesizer',
        'Roland Piano',
        'TC Electronic Reverb'
      ],
      engineer: {
        name: 'Rajesh Mohanty',
        rating: 4.9,
        experience: '10+ years',
        avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        bio: 'Specialized in R&B and Soul music production with a passion for vintage sounds and modern techniques.',
        credits: ['Independent R&B Albums', 'Jazz Recordings', 'Soul Music Projects']
      },
      availability: 'Available Tomorrow',
      featured: true,
      analogueGear: false,
      distance: '5 km',
      description: 'Specialized R&B and Soul recording studio with vintage equipment and modern digital workflow. Perfect for artists looking for that classic R&B sound.',
      amenities: [
        { icon: <Wifi className="w-4 h-4" />, name: 'High-Speed WiFi' },
        { icon: <Car className="w-4 h-4" />, name: 'Free Parking' },
        { icon: <Coffee className="w-4 h-4" />, name: 'Refreshments' },
        { icon: <Music className="w-4 h-4" />, name: 'Piano Available' },
        { icon: <Users className="w-4 h-4" />, name: 'Comfortable Lounge' }
      ],
      studioSize: 'Medium (30-50 sqm)',
      maxCapacity: 6,
      acoustics: 'Vintage-inspired acoustic treatment',
      contact: {
        phone: '+91 98765 43211',
        email: 'info@rajbilasini.com'
      },
      policies: [
        'Advance booking required',
        'Flexible cancellation policy',
        'Instrument maintenance included',
        'Professional atmosphere maintained'
      ],
      pricing: {
        hourly: 2200,
        halfDay: 8800,
        fullDay: 15000,
        weekly: 90000
      }
    },
    {
      id: 3,
      name: 'Box Studios',
      location: 'Bhubaneswar (Rasulgarh)',
      fullAddress: 'Rasulgarh Industrial Area, Bhubaneswar, Odisha 751010',
      rating: 4.7,
      reviews: 156,
      hourlyRate: '₹1,500',
      images: [
        'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
      ],
      specialties: ['Electronic', 'Hip-Hop', 'Pop', 'EDM'],
      equipment: [
        'Ableton Live',
        'Moog Synthesizer',
        'KRK Monitors',
        'Audio-Technica Microphones',
        'Native Instruments Maschine',
        'Roland TR-808',
        'Novation Launchpad',
        'Arturia KeyLab'
      ],
      engineer: {
        name: 'Subham Dash',
        rating: 4.7,
        experience: '8+ years',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        bio: 'Electronic music specialist with expertise in modern production techniques and digital sound design.',
        credits: ['Electronic Albums', 'Hip-Hop Productions', 'Commercial Music']
      },
      availability: 'Available Now',
      featured: false,
      analogueGear: true,
      distance: '8 km',
      description: 'Modern electronic music production studio with cutting-edge digital equipment and creative atmosphere. Ideal for electronic music producers and hip-hop artists.',
      amenities: [
        { icon: <Wifi className="w-4 h-4" />, name: 'High-Speed WiFi' },
        { icon: <Car className="w-4 h-4" />, name: 'Parking Available' },
        { icon: <Music className="w-4 h-4" />, name: 'Synthesizer Collection' },
        { icon: <Headphones className="w-4 h-4" />, name: 'Premium Headphones' }
      ],
      studioSize: 'Compact (20-30 sqm)',
      maxCapacity: 4,
      acoustics: 'Optimized for electronic music production',
      contact: {
        phone: '+91 98765 43212',
        email: 'hello@boxstudios.in'
      },
      policies: [
        'Same-day booking available',
        'Flexible hours',
        'Equipment tutorials included',
        'Creative collaboration encouraged'
      ],
      pricing: {
        hourly: 1500,
        halfDay: 6000,
        fullDay: 10000,
        weekly: 60000
      }
    }
  ];

  const studio = studios.find(s => s.id === parseInt(id || '1'));

  if (!studio) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Studio Not Found</h1>
          <Link to="/studios" className="text-gray-600 hover:text-gray-900">
            ← Back to Studios
          </Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/studios"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Studios
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div className="relative">
                <img
                  src={studio.images[activeImageIndex]}
                  alt={studio.name}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                {studio.featured && (
                  <span className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-medium">
                    Featured Studio
                  </span>
                )}
                <div className="absolute top-4 right-4 bg-white rounded-md px-3 py-1 text-sm font-medium text-gray-700">
                  {studio.availability}
                </div>
              </div>
              
              {/* Image Thumbnails */}
              <div className="p-4 flex space-x-2 overflow-x-auto">
                {studio.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                      activeImageIndex === index ? 'border-gray-900' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${studio.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Studio Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {studio.name}
                  </h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm sm:text-base">{studio.fullAddress}</span>
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center">
                      {renderStars(studio.rating)}
                      <span className="ml-2 text-sm font-medium text-gray-700">
                        {studio.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({studio.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="text-right mt-4 sm:mt-0">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {studio.hourlyRate}
                  </div>
                  <div className="text-sm text-gray-500">per hour</div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {studio.description}
              </p>

              {/* Specialties */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {studio.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-md"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Studio Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Studio Size</h4>
                  <p className="text-gray-600 text-sm">{studio.studioSize}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Max Capacity</h4>
                  <p className="text-gray-600 text-sm">{studio.maxCapacity} people</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Acoustics</h4>
                  <p className="text-gray-600 text-sm">{studio.acoustics}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Distance</h4>
                  <p className="text-gray-600 text-sm">{studio.distance} from center</p>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {studio.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="text-gray-600">
                        {amenity.icon}
                      </div>
                      <span className="text-sm text-gray-700">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Equipment</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(showAllEquipment ? studio.equipment : studio.equipment.slice(0, 6)).map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                {studio.equipment.length > 6 && (
                  <button
                    onClick={() => setShowAllEquipment(!showAllEquipment)}
                    className="mt-3 text-sm text-gray-600 hover:text-gray-900 font-medium"
                  >
                    {showAllEquipment ? 'Show Less' : `Show All ${studio.equipment.length} Items`}
                  </button>
                )}
              </div>

              {/* Engineer Info */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Engineer</h3>
                <div className="flex items-start space-x-4">
                  <img
                    src={studio.engineer.avatar}
                    alt={studio.engineer.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{studio.engineer.name}</h4>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        {renderStars(studio.engineer.rating)}
                      </div>
                      <span className="text-sm text-gray-600">
                        {studio.engineer.rating} • {studio.engineer.experience}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{studio.engineer.bio}</p>
                    <div className="text-xs text-gray-500">
                      Credits: {studio.engineer.credits.join(' • ')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {studio.hourlyRate}
                </div>
                <div className="text-sm text-gray-500">per hour</div>
              </div>

              {/* Pricing Options */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Half Day (4 hrs)</span>
                  <span className="font-medium text-gray-900">₹{studio.pricing.halfDay.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Full Day (8 hrs)</span>
                  <span className="font-medium text-gray-900">₹{studio.pricing.fullDay.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">Weekly Rate</span>
                  <span className="font-medium text-gray-900">₹{studio.pricing.weekly.toLocaleString()}</span>
                </div>
              </div>

              <Link
                to={`/booking/${studio.id}`}
                className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center mb-4"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book This Studio
              </Link>

              <div className="text-center mb-6">
                <p className="text-sm text-gray-600">
                  Free cancellation up to 24 hours before session
                </p>
              </div>

              {/* Contact Info */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Contact Studio</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-600" />
                    <a
                      href={`tel:${studio.contact.phone}`}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {studio.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-600" />
                    <a
                      href={`mailto:${studio.contact.email}`}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {studio.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Policies */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Studio Policies</h4>
                <ul className="space-y-2">
                  {studio.policies.map((policy, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{policy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioDetail;