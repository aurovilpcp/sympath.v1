import React from 'react';
import { TrendingUp, Users, Calendar, DollarSign, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const ForStudioOwners: React.FC = () => {
  const benefits = [
    {
      title: 'Increased Bookings',
      description: 'Reach more clients through our verified platform and smart matching algorithm.',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: 'Professional Dashboard',
      description: 'Manage bookings, track earnings, and monitor studio performance in real-time.',
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: 'Quality Assurance',
      description: 'Maintain high standards with our quality control system and client feedback.',
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: 'Revenue Growth',
      description: 'Optimize pricing and maximize studio utilization with data-driven insights.',
      icon: <DollarSign className="w-6 h-6" />,
    },
  ];

  const features = [
    'Real-time booking management',
    'Automated payment processing',
    'Client communication tools',
    'Performance analytics',
    'Equipment verification',
    'Engineer profile management',
    'Quality control monitoring',
    'Revenue optimization tools',
  ];

  const stats = [
    { number: '40%', label: 'Average booking increase' },
    { number: '25%', label: 'Revenue growth' },
    { number: '95%', label: 'Studio satisfaction rate' },
    { number: '24/7', label: 'Platform availability' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Grow Your Studio Business with SYMPATH
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join India's leading network of professional recording studios. 
                Increase your bookings, streamline operations, and grow your revenue 
                with our comprehensive studio management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                  List Your Studio
                </button>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium border border-gray-300 hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner with SYMPATH?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the tools and platform you need to maximize your studio's potential 
              and reach more clients than ever before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Manage Your Studio
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our comprehensive platform provides all the tools you need to run 
                a successful recording studio business in the digital age.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Studio Dashboard Preview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <span className="text-sm font-medium text-gray-700">Today's Bookings</span>
                  <span className="text-sm font-bold text-gray-900">5</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <span className="text-sm font-medium text-gray-700">This Month's Revenue</span>
                  <span className="text-sm font-bold text-gray-900">₹1,25,000</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <span className="text-sm font-medium text-gray-700">Studio Rating</span>
                  <span className="text-sm font-bold text-gray-900">4.8 ⭐</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <span className="text-sm font-medium text-gray-700">Utilization Rate</span>
                  <span className="text-sm font-bold text-gray-900">85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Getting Started is Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our network in three easy steps and start growing your studio business today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Apply & Verify</h3>
              <p className="text-gray-600">
                Submit your studio details and equipment list. Our team will verify 
                your setup to ensure quality standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Setup Profile</h3>
              <p className="text-gray-600">
                Create your studio profile with photos, equipment details, 
                and engineer information to attract clients.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Start Earning</h3>
              <p className="text-gray-600">
                Go live on our platform and start receiving bookings from 
                verified clients across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Studio Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of successful studios already using SYMPATH to increase 
            their bookings and revenue. Get started today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              List Your Studio
            </button>
            <button className="bg-transparent text-white px-8 py-3 rounded-md font-medium border border-white hover:bg-white hover:text-gray-900 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForStudioOwners;