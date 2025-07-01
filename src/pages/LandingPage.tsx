import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, TrendingUp, Shield, Zap, Globe, Mic, Headphones, Music, Clock, Award, CheckCircle, Search, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [studioWorkflowExpanded, setStudioWorkflowExpanded] = useState(false);
  const [postProductionWorkflowExpanded, setPostProductionWorkflowExpanded] = useState(false);
  const [postProductionInfoExpanded, setPostProductionInfoExpanded] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: 'Professional Studios',
      description: 'Access verified recording studios with transparent equipment listings and engineer profiles.',
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: 'Expert Post-Production',
      description: 'Industry-standard mixing and mastering by certified audio engineers.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Real-Time Booking',
      description: 'Instant studio availability with dynamic pricing and seamless booking experience.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quality Guaranteed',
      description: 'Every session backed by our quality assurance and professional standards.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Data-Driven Insights',
      description: 'Track trends, optimize bookings, and grow your audio production business.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Industry Recognition',
      description: 'Connect with labels, A&Rs, and industry professionals through our platform.',
    },
  ];

  const stats = [
    { number: '50', label: 'Professional Studios' },
    { number: '420', label: 'Sessions Completed' },
    { number: '20', label: 'Expert Engineers' },
    { number: '94%', label: 'Client Satisfaction' },
  ];

  const services = [
    {
      title: 'Recording Studios',
      subtitle: "Mumbai's golden standard service",
      description: 'Find and book professional recording studios with complete transparency on equipment and expertise. Proper guidance from industry professionals.',
      features: ['Real-time availability', 'Equipment verification', 'Engineer profiles', 'Dynamic pricing'],
      cta: 'Book a Studio',
      link: '/studios',
    },
    {
      title: 'Post-Production',
      subtitle: 'Industry standard, Expert sound engineer team',
      description: 'Expert mixing and mastering services by certified audio engineers with industry-standard results.',
      features: ['Professional mixing', 'Mastering services', 'Revision tracking', '24-72hr delivery'],
      cta: 'Get Expert Mix',
      link: '/post-production',
    }
  ];

  const studioWorkflowSteps = [
    { step: 1, title: 'Search & Filter', description: 'Browse verified studios by location, equipment, and budget' },
    { step: 2, title: 'Book Session', description: 'Select time slot and add post-production services if needed' },
    { step: 3, title: 'Record', description: 'Create with professional engineers in industry-standard studios' },
    { step: 4, title: 'Deliver', description: 'Receive your recordings and optional post-production' }
  ];

  const postProductionWorkflowSteps = [
    { step: 1, title: 'Upload Tracks', description: 'Submit your recorded stems in high-quality format' },
    { step: 2, title: 'Choose Tier', description: 'Select Basic, Premium, or Industry Standard service' },
    { step: 3, title: 'Expert Processing', description: 'AI-matched engineers mix and master your tracks' },
    { step: 4, title: 'Delivery', description: 'Receive professional-grade audio with revisions' }
  ];

  const toggleFeature = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Mobile Dark Design */}
      <section className="relative bg-gray-50 py-8 sm:py-12 lg:py-32">
        {/* Mobile Dark Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 md:hidden"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Unified Search Bar - Top Position */}
            <div className="max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    type="text"
                    placeholder="Search studios, locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-8 sm:pl-10 pr-20 sm:pr-24 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm sm:text-base"
                  />
                  <Link
                    to="/studios"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Search Studios
                  </Link>
                </div>
              </div>
            </div>

            <div className="mb-4 sm:mb-6 lg:mb-8">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white bg-opacity-20 md:bg-gray-100 text-white md:text-gray-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 lg:mb-6">
                India's first of its kind platform
              </span>
            </div>
            
            {/* Hero title - White on mobile, dark on desktop */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white md:text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight px-2">
              Find Studios - that Sound Better<br className="hidden sm:block" />
              & Work Smarter.
            </h1>
            
            {/* Tagline - White on mobile, gray on desktop */}
            <div className="mb-6 sm:mb-8 lg:mb-12">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 md:text-gray-600 font-medium px-4">
                <span>Discover</span>
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-300 md:bg-gray-400 rounded-full"></span>
                <span>Book</span>
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-300 md:bg-gray-400 rounded-full"></span>
                <span>Create</span>
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-300 md:bg-gray-400 rounded-full"></span>
                <span>Perfect</span>
              </div>
            </div>
            
            {/* Main CTA Buttons - Stacked on mobile, side by side on desktop */}
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 lg:mb-12 px-4">
              <Link
                to="/studios"
                className="bg-white md:bg-gray-900 text-gray-900 md:text-white px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-md text-sm sm:text-base lg:text-lg font-semibold hover:bg-gray-100 md:hover:bg-gray-800 transition-all duration-200 flex items-center justify-center"
              >
                Book Studio Now
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                to="/post-production"
                className="bg-transparent md:bg-white text-white md:text-gray-900 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-md text-sm sm:text-base lg:text-lg font-semibold hover:bg-white hover:bg-opacity-10 md:hover:bg-gray-100 transition-all duration-200 border border-white md:border-gray-300 flex items-center justify-center"
              >
                Get Expert Mix
              </Link>
            </div>
            
            {/* User Reviews Button */}
            <div className="mb-6 sm:mb-8 lg:mb-12 px-4">
              <Link
                to="/reviews"
                className="inline-flex items-center text-gray-300 md:text-gray-600 hover:text-white md:hover:text-gray-900 transition-colors text-sm sm:text-base"
              >
                <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-400 fill-current" />
                <span className="font-medium">See User Reviews</span>
                <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>

            {/* Informational Badges - 3 columns on mobile, white on mobile */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 justify-center mb-6 sm:mb-8 lg:mb-12 px-4 max-w-2xl sm:max-w-4xl mx-auto">
              <span className="inline-flex items-center px-2 sm:px-3 md:px-4 py-2 bg-white bg-opacity-20 md:bg-white md:bg-opacity-100 rounded-full text-xs sm:text-sm font-medium text-white md:text-gray-700 border border-white border-opacity-30 md:border-gray-200 shadow-sm">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-400 md:text-green-600 flex-shrink-0" />
                <span className="truncate">Verified studios</span>
              </span>
              <span className="inline-flex items-center px-2 sm:px-3 md:px-4 py-2 bg-white bg-opacity-20 md:bg-white md:bg-opacity-100 rounded-full text-xs sm:text-sm font-medium text-white md:text-gray-700 border border-white border-opacity-30 md:border-gray-200 shadow-sm">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-400 md:text-green-600 flex-shrink-0" />
                <span className="truncate">Expert engineers</span>
              </span>
              <span className="inline-flex items-center px-2 sm:px-3 md:px-4 py-2 bg-white bg-opacity-20 md:bg-white md:bg-opacity-100 rounded-full text-xs sm:text-sm font-medium text-white md:text-gray-700 border border-white border-opacity-30 md:border-gray-200 shadow-sm">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-400 md:text-green-600 flex-shrink-0" />
                <span className="truncate">Global quality</span>
              </span>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white md:text-gray-900 mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 md:text-gray-600 text-xs sm:text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg p-6 sm:p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-600 mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6 sm:mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-all duration-200 text-sm sm:text-base"
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Redesigned for mobile with expandable cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose SYMPATH?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              Built for the modern audio industry with transparency, quality, and professional standards.
            </p>
          </div>
          
          {/* Mobile: 3 columns, 2 rows with expandable cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                <button
                  onClick={() => toggleFeature(index)}
                  className="w-full p-4 sm:p-6 lg:p-8 text-left"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 mb-4 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  {/* Show description on desktop or when expanded on mobile */}
                  <div className={`${expandedFeature === index ? 'block' : 'hidden lg:block'}`}>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                  {/* Expand indicator for mobile */}
                  <div className="lg:hidden mt-2">
                    {expandedFeature === index ? (
                      <ChevronUp className="w-4 h-4 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Simple steps to get professional audio results
            </p>
          </div>

          <div className="space-y-6">
            {/* Studio Booking Workflow */}
            <div className="bg-gray-50 rounded-lg border border-gray-200">
              <button
                onClick={() => setStudioWorkflowExpanded(!studioWorkflowExpanded)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Studio Booking Process</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Learn how to book and record at professional studios</p>
                </div>
                {studioWorkflowExpanded ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
              </button>
              
              {studioWorkflowExpanded && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
                    {studioWorkflowSteps.map((step, index) => (
                      <div key={step.step} className="text-center">
                        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                          <span className="font-bold">{step.step}</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Post-Production Workflow */}
            <div className="bg-gray-50 rounded-lg border border-gray-200">
              <button
                onClick={() => setPostProductionWorkflowExpanded(!postProductionWorkflowExpanded)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Post-Production Process</h3>
                  <p className="text-gray-600 text-sm sm:text-base">How our expert mixing and mastering works</p>
                </div>
                {postProductionWorkflowExpanded ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
              </button>
              
              {postProductionWorkflowExpanded && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
                    {postProductionWorkflowSteps.map((step, index) => (
                      <div key={step.step} className="text-center">
                        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                          <span className="font-bold">{step.step}</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What is Post-Production Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-gray-200">
            <button
              onClick={() => setPostProductionInfoExpanded(!postProductionInfoExpanded)}
              className="w-full p-4 sm:p-6 lg:p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">What is Post-Production?</h2>
                <p className="text-gray-600 text-sm sm:text-base">Understanding professional audio mixing and mastering</p>
              </div>
              {postProductionInfoExpanded ? <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />}
            </button>
            
            {postProductionInfoExpanded && (
              <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
                <div className="pt-6 space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Mixing</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      The process of combining multiple recorded tracks into a cohesive stereo mix. This includes 
                      balancing levels, EQ, compression, effects, and spatial positioning to create a polished sound.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Mastering</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      The final step that optimizes your mix for distribution across all platforms. This includes 
                      loudness optimization, EQ refinement, and ensuring consistency across different playback systems.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Why Choose Professional Post-Production?</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">Industry-standard loudness levels (LUFS compliance)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">Professional equipment and acoustically treated rooms</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">Experienced engineers with genre expertise</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">Quality assurance and revision support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Studio Owners Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Own a recording studio?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Partner with us to reach more musicians and maximize your studio's potential.
              </p>
              <Link
                to="/for-studio-owners"
                className="inline-flex items-center bg-white text-gray-900 px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                List Your Studio
              </Link>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Why list with SymPath?</h3>
              <div className="space-y-4">
                <div className="flex items-start text-gray-300">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">Access our network of musicians</span>
                </div>
                <div className="flex items-start text-gray-300">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">Easy scheduling and booking management</span>
                </div>
                <div className="flex items-start text-gray-300">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">Secure payments and booking protection</span>
                </div>
                <div className="flex items-start text-gray-300">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">Professional promotion of your space</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Side by side buttons */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Create Professional Audio?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Join thousands of creators who've elevated their sound with SYMPATH's professional studios and expert services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/studios"
              className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              Book a Studio
            </Link>
            <Link
              to="/post-production"
              className="bg-transparent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-200 border-2 border-white"
            >
              Get Expert Mix
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;