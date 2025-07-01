import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft, User, Mail, Phone, MapPin, Music } from 'lucide-react';
import { useUser } from '../context/UserContext';

// Form data interface
interface FormData {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  mobile: string;
  address: string;
  categories: string[];
}

/**
 * Account component for user authentication (login/signup)
 * Features: Toggle between login/signup, form validation, Google auth, profile data collection
 */
const Account: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
    mobile: '',
    address: '',
    categories: []
  });
  const { setUser, createUserProfile } = useUser();

  const availableCategories = [
    'Singer',
    'Composer',
    'Lyricist/Writer',
    'Me hu Common Man',
    'Music Producer'
  ];

  // Toggle between login and signup modes
  const toggleMode = useCallback(() => {
    setIsLogin(prev => !prev);
    // Reset form when switching modes
    setFormData({
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
      mobile: '',
      address: '',
      categories: []
    });
  }, []);

  // Toggle password visibility
  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  // Update form data
  const updateFormData = useCallback((field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  // Toggle category selection
  const toggleCategory = useCallback((category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  }, []);

  // Handle form submission
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // Demo authentication - check for default credentials
      if (formData.email === 'email' && formData.password === 'password') {
        // Successful login with existing user
        setUser({
          id: '1',
          uid: '1234AB',
          name: 'Alex Rivera',
          email: 'alex@example.com',
          mobile: '+91 98765 43210',
          address: 'Mumbai, Maharashtra',
          categories: ['Singer', 'Music Producer'],
          role: 'artist',
          avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
          preferences: {
            genres: ['Hip-Hop', 'R&B'],
            location: 'Mumbai',
            budget_range: '₹2000-5000'
          },
          createdAt: '2024-01-01'
        });
        window.location.href = '/dashboard';
      } else {
        alert('Invalid credentials. Use email: "email" and password: "password"');
      }
    } else {
      // Basic form validation for signup
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      
      if (!formData.name || !formData.email || !formData.mobile) {
        alert('Please fill in all required fields');
        return;
      }

      if (formData.categories.length === 0) {
        alert('Please select at least one category');
        return;
      }
      
      // Create new user profile with UID
      const newUser = createUserProfile({
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        address: formData.address,
        categories: formData.categories,
        role: 'artist'
      });
      
      setUser(newUser);
      
      // Show success message with UID
      alert(`Account created successfully! Your unique ID is: ${newUser.uid}`);
      window.location.href = '/dashboard';
    }
  }, [isLogin, formData, setUser, createUserProfile]);

  // Handle Google authentication
  const handleGoogleAuth = useCallback(() => {
    // Mock Google authentication - create user with Google data
    const googleUser = createUserProfile({
      name: 'Alex Rivera',
      email: 'alex@gmail.com',
      mobile: '', // Will need to be filled later
      address: '', // Will need to be filled later
      categories: [], // Will need to be filled later
      role: 'artist'
    });
    
    setUser(googleUser);
    alert(`Welcome! Your unique ID is: ${googleUser.uid}. Please complete your profile.`);
    window.location.href = '/profile';
  }, [setUser, createUserProfile]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 sm:mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={toggleMode}
              className="font-medium text-gray-900 hover:text-gray-700"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-6 sm:py-8 px-4 shadow-sm border border-gray-200 rounded-lg sm:px-10">
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            {/* Name field for signup */}
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <div className="mt-1 relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required={!isLogin}
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
            )}

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address *
              </label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 text-sm sm:text-base"
                  placeholder={isLogin ? 'Enter "email"' : 'Enter your email'}
                />
              </div>
              {isLogin && (
                <p className="mt-1 text-xs text-gray-500">
                  Demo: Use "email" as username
                </p>
              )}
            </div>

            {/* Mobile field for signup */}
            {!isLogin && (
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Mobile Number *
                </label>
                <div className="mt-1 relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required={!isLogin}
                    value={formData.mobile}
                    onChange={(e) => updateFormData('mobile', e.target.value)}
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 text-sm sm:text-base"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            )}

            {/* Address field for signup */}
            {!isLogin && (
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address *
                </label>
                <div className="mt-1 relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                  <textarea
                    id="address"
                    name="address"
                    rows={2}
                    required={!isLogin}
                    value={formData.address}
                    onChange={(e) => updateFormData('address', e.target.value)}
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 text-sm sm:text-base resize-none"
                    placeholder="Enter your address"
                  />
                </div>
              </div>
            )}

            {/* Categories for signup */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categories * (Select all that apply)
                </label>
                <div className="space-y-2">
                  {availableCategories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.categories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 flex items-center">
                        <Music className="w-3 h-3 mr-1" />
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Password field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password *
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => updateFormData('password', e.target.value)}
                  className="appearance-none block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 text-sm sm:text-base"
                  placeholder={isLogin ? 'Enter "password"' : 'Create a password'}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {isLogin && (
                <p className="mt-1 text-xs text-gray-500">
                  Demo: Use "password" as password
                </p>
              )}
            </div>

            {/* Confirm password field for signup */}
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password *
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required={!isLogin}
                    value={formData.confirmPassword}
                    onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 text-sm sm:text-base"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            )}

            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                {isLogin ? 'Sign in' : 'Create Account'}
              </button>
            </div>

            {/* Divider */}
            <div className="mt-4 sm:mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              {/* Google auth button */}
              <div className="mt-4 sm:mt-6">
                <button
                  type="button"
                  onClick={handleGoogleAuth}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="ml-2">{isLogin ? 'Sign in' : 'Sign up'} with Google</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;