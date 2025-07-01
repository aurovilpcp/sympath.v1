import React, { useState } from 'react';
import { Edit3, Save, X, MapPin, Mail, Phone, User, Music, Plus, Copy, Check } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Profile: React.FC = () => {
  const { user, setUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [uidCopied, setUidCopied] = useState(false);
  const [editedData, setEditedData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    mobile: user?.mobile || '',
    address: user?.address || '',
    categories: user?.categories || []
  });

  const availableCategories = [
    'Singer',
    'Composer',
    'Lyricist/Writer',
    'Me hu Common Man',
    'Music Producer'
  ];

  const handleSaveChanges = () => {
    if (user && setUser) {
      setUser({
        ...user,
        name: editedData.name,
        email: editedData.email,
        mobile: editedData.mobile,
        address: editedData.address,
        categories: editedData.categories
      });
    }
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedData({
      name: user?.name || '',
      email: user?.email || '',
      mobile: user?.mobile || '',
      address: user?.address || '',
      categories: user?.categories || []
    });
    setIsEditing(false);
  };

  const addCategory = (category: string) => {
    if (!editedData.categories.includes(category)) {
      setEditedData(prev => ({
        ...prev,
        categories: [...prev.categories, category]
      }));
    }
  };

  const removeCategory = (category: string) => {
    setEditedData(prev => ({
      ...prev,
      categories: prev.categories.filter(c => c !== category)
    }));
  };

  const copyUID = async () => {
    if (user?.uid) {
      try {
        await navigator.clipboard.writeText(user.uid);
        setUidCopied(true);
        setTimeout(() => setUidCopied(false), 2000);
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = user.uid;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setUidCopied(true);
        setTimeout(() => setUidCopied(false), 2000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <Edit3 className="w-4 h-4" />
              <span>Edit</span>
            </button>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={handleSaveChanges}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>
              <button
                onClick={handleCancelEdit}
                className="flex items-center space-x-2 px-3 py-2 bg-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-400 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Platform Description */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg p-6 mb-6 text-white">
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">SYMPATH</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Built for creators, trusted by professionals. Professional audio recording and post-production services with complete transparency.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium mb-1">Your Unique ID</h3>
              <p className="text-gray-300 text-xs">Use this ID for bookings and support</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold tracking-wider mb-2">{user?.uid}</div>
              <button
                onClick={copyUID}
                className="flex items-center space-x-1 text-sm bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-md transition-colors"
              >
                {uidCopied ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6 space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedData.name}
                  onChange={(e) => setEditedData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              ) : (
                <div className="flex items-center space-x-3 py-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900">{editedData.name}</span>
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={editedData.email}
                  onChange={(e) => setEditedData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              ) : (
                <div className="flex items-center space-x-3 py-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900">{editedData.email}</span>
                </div>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number *
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editedData.mobile}
                  onChange={(e) => setEditedData(prev => ({ ...prev, mobile: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              ) : (
                <div className="flex items-center space-x-3 py-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900">{editedData.mobile}</span>
                </div>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address *
              </label>
              {isEditing ? (
                <textarea
                  value={editedData.address}
                  onChange={(e) => setEditedData(prev => ({ ...prev, address: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
                  placeholder="Enter your address"
                />
              ) : (
                <div className="flex items-start space-x-3 py-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <span className="text-gray-900">{editedData.address}</span>
                </div>
              )}
            </div>

            {/* Categories */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categories *
              </label>
              <p className="text-xs text-gray-500 mb-3">
                Select all that apply to you
              </p>
              
              {/* Selected Categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                {editedData.categories.map((category, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-full"
                  >
                    <Music className="w-3 h-3 mr-1.5" />
                    {category}
                    {isEditing && (
                      <button
                        onClick={() => removeCategory(category)}
                        className="ml-2 hover:text-red-300 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </span>
                ))}
              </div>

              {/* Add Categories (only in edit mode) */}
              {isEditing && (
                <div>
                  <p className="text-xs font-medium text-gray-600 mb-2">Add more:</p>
                  <div className="flex flex-wrap gap-2">
                    {availableCategories
                      .filter(cat => !editedData.categories.includes(cat))
                      .map((category, index) => (
                        <button
                          key={index}
                          onClick={() => addCategory(category)}
                          className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors"
                        >
                          <Plus className="w-3 h-3 mr-1.5" />
                          {category}
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Info */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Member since {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'January 2024'}</span>
              <span className="capitalize">{user?.role}</span>
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Why we collect this:</strong> This information helps us recommend the best studios and services for your needs, and allows studios to contact you for bookings. Your unique ID helps us provide personalized support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;