import React from 'react';
import { CheckCircle, Users, Headphones, Award, ArrowRight, Music, Mic, Star } from 'lucide-react';

const AboutUs: React.FC = () => {
  const howItWorksSteps = [
    {
      step: 1,
      title: 'Discover Studios',
      description: 'Browse verified recording studios with transparent equipment listings, engineer profiles, and real-time availability.',
      icon: <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: 2,
      title: 'Book Your Session',
      description: 'Select your preferred studio, engineer, and time slot. Add post-production services for a complete package.',
      icon: <Music className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: 3,
      title: 'Create & Record',
      description: 'Work with professional engineers in industry-standard studios equipped with the latest technology.',
      icon: <Mic className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: 4,
      title: 'Expert Post-Production',
      description: 'Get your tracks mixed and mastered by certified audio engineers with guaranteed industry-standard results.',
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  const stats = [
    { number: '500+', label: 'Professional Studios' },
    { number: '200+', label: 'Expert Engineers' },
    { number: '50K+', label: 'Sessions Completed' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Who We Are? Why We Exist?
          </h1>
          <div className="text-left max-w-3xl mx-auto space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p>
              The world is creating more audio content than ever before. But behind the scenes, most of India's recording studios still run on guesswork, word-of-mouth, and outdated processes.
            </p>
            <p className="font-semibold text-gray-900">
              At SymPath, we're changing that.
            </p>
            <p>
              We're building a new foundation. SymPath is a hybrid platform and studio network designed to bring consistency, quality, and transparency to the fragmented audio industry. Our mission is simple: to make world-class audio production accessible, scalable, and business-optimized, without compromising the creative spirit.
            </p>
            <p>
              Our platform empowers creators, producers, studios and brands with AI driven smart booking tools, verified studios, quality benchmarks, expert backed post-production and deep data insights that fuel better content and better business decisions.
            </p>
            
            {/* Quote Box */}
            <div className="bg-white p-4 sm:p-6 rounded-lg border-l-4 border-gray-900 my-6 sm:my-8 shadow-sm">
              <p className="text-center font-medium text-gray-900 italic text-sm sm:text-base">
                Think of us as the Dr. Lal PathLabs of audio post-production meets the AirBnB of professional studios!
              </p>
            </div>
            
            <p className="font-semibold text-gray-900">
              But we're not just fixing inefficiencies. We're unlocking value.
            </p>
            <p>
              No more inconsistent experiences. No more hidden pricing. No more mix/master chaos. Just pure, professional sound. From seamless studio discovery and bookings to centralized expert post-production, we deliver industry-standard sound—without the guesswork.
            </p>
            <p>
              Whether you're an emerging artist, podcaster, brand or content studio! SymPath is your creative infrastructure partner.
            </p>
            
            {/* Final tagline */}
            <div className="text-center py-6 sm:py-8">
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                Your sound deserves structure. Your work deserves SymPath.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Optimized for mobile */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From discovery to delivery, we've streamlined the entire audio production process 
              to make professional recording accessible to everyone.
            </p>
          </div>

          {/* Mobile: 2x2 grid, Desktop: 1x4 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-900 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                    {step.step}
                  </div>
                  {/* Connection line - only show on desktop and not for last item */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 sm:top-8 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2"></div>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Create Professional Audio?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Join thousands of creators who've elevated their sound with SYMPATH's 
            professional studios and expert services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/studios"
              className="bg-white text-gray-900 px-6 sm:px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Book a Studio
            </a>
            <a
              href="/post-production"
              className="bg-transparent text-white px-6 sm:px-8 py-3 rounded-md font-medium border border-white hover:bg-white hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              Get Expert Mix
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;