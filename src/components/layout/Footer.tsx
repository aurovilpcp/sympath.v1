import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, Mail, Phone, MapPin, Instagram, Twitter, Youtube } from 'lucide-react';

/**
 * Footer component with company information, navigation links, and social media
 * Features: Multi-column layout, contact information, social links
 */
const Footer: React.FC = () => {
  // Footer navigation sections configuration
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'Find Studios', href: '/studios' },
        { label: 'Post-Production', href: '/post-production' },
        { label: 'How it Works', href: '#' },
        { label: 'Pricing', href: '#' },
      ],
    },
    {
      title: 'For Studios',
      links: [
        { label: 'List Your Studio', href: '/for-studio-owners' },
        { label: 'Studio Dashboard', href: '#' },
        { label: 'Resources', href: '#' },
        { label: 'Success Stories', href: '#' },
      ],
    },
    {
      title: 'For Artists',
      links: [
        { label: 'Browse Studios', href: '/studios' },
        { label: 'Booking Guide', href: '#' },
        { label: 'Quality Guarantee', href: '#' },
        { label: 'Support Center', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
  ];

  // Contact information
  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: 'hello@sympath.audio' },
    { icon: <Phone className="w-4 h-4" />, text: '+91 98765 43210' },
    { icon: <MapPin className="w-4 h-4" />, text: 'Mumbai, India' },
  ];

  // Social media links
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
  ];

  // Legal links
  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">SYMPATH</span>
            </Link>
            
            <p className="text-gray-300 text-sm mb-4 sm:mb-6 leading-relaxed">
              Professional audio recording studios and expert post-production services. 
              Turning passion into professional sound.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 mb-4 sm:mb-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                  {contact.icon}
                  <span>{contact.text}</span>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Navigation Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 SYMPATH. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;