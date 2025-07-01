import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, CreditCard, MapPin, Star, Users, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useUser } from '../context/UserContext';

interface TimeSlot {
  time: string;
  available: boolean;
  price: number;
}

interface BookingData {
  date: string;
  timeSlot: string;
  duration: number;
  totalPrice: number;
  paymentMethod: 'online' | 'studio';
  specialRequests: string;
  contactNumber: string;
}

const Booking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useUser();
  
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [duration, setDuration] = useState(2);
  const [paymentMethod, setPaymentMethod] = useState<'online' | 'studio'>('online');
  const [specialRequests, setSpecialRequests] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/account');
    }
  }, [isAuthenticated, navigate]);

  // Studio data
  const studios = [
    {
      id: 1,
      name: 'Pallav Studio',
      location: 'Puri',
      hourlyRate: 1800,
      engineer: 'Pallav Kumar',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 2,
      name: 'RajBilasini (RnB) Studios',
      location: 'Bhubaneswar (Forest Park)',
      hourlyRate: 2200,
      engineer: 'Rajesh Mohanty',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 3,
      name: 'Box Studios',
      location: 'Bhubaneswar (Rasulgarh)',
      hourlyRate: 1500,
      engineer: 'Subham Dash',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
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

  // Generate available dates (next 30 days)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  // Generate time slots for selected date
  const generateTimeSlots = (date: string): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const selectedDate = new Date(date);
    const today = new Date();
    const isToday = selectedDate.toDateString() === today.toDateString();
    
    // Generate slots from 9 AM to 10 PM
    for (let hour = 9; hour <= 22; hour++) {
      const time = `${hour.toString().padStart(2, '0')}:00`;
      const slotDate = new Date(selectedDate);
      slotDate.setHours(hour, 0, 0, 0);
      
      // Check if slot is available (not in the past for today)
      const available = !isToday || slotDate > today;
      
      slots.push({
        time,
        available,
        price: studio.hourlyRate
      });
    }
    return slots;
  };

  const timeSlots = selectedDate ? generateTimeSlots(selectedDate) : [];
  const totalPrice = duration * studio.hourlyRate;
  const platformFee = Math.round(totalPrice * 0.05); // 5% platform fee
  const finalPrice = totalPrice + platformFee;

  // Generate unique booking ID
  const generateBookingId = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `SYM-${timestamp}-${random}`.toUpperCase();
  };

  const handleBookingSubmit = async () => {
    if (!selectedDate || !selectedTimeSlot || !contactNumber) {
      alert('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);
    
    // Simulate booking process
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const bookingId = generateBookingId();
      const bookingData: BookingData = {
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        duration,
        totalPrice: finalPrice,
        paymentMethod,
        specialRequests,
        contactNumber
      };

      // Store booking data (in real app, this would go to backend)
      localStorage.setItem('lastBooking', JSON.stringify({
        ...bookingData,
        bookingId,
        studio: studio.name,
        engineer: studio.engineer,
        status: paymentMethod === 'online' ? 'confirmed' : 'pending_payment'
      }));

      // Navigate to confirmation page
      navigate(`/booking-confirmation/${bookingId}`);
    } catch (error) {
      alert('Booking failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to={`/studio/${studio.id}`}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Studio Details
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className={`flex items-center space-x-2 ${bookingStep >= 1 ? 'text-gray-900' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bookingStep >= 1 ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <span className="text-sm font-medium">Select Date & Time</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-200"></div>
            <div className={`flex items-center space-x-2 ${bookingStep >= 2 ? 'text-gray-900' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bookingStep >= 2 ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <span className="text-sm font-medium">Booking Details</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-200"></div>
            <div className={`flex items-center space-x-2 ${bookingStep >= 3 ? 'text-gray-900' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bookingStep >= 3 ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <span className="text-sm font-medium">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Studio Info Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <img
                  src={studio.image}
                  alt={studio.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{studio.name}</h2>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{studio.location}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700 ml-1">
                        {studio.rating}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-gray-600 mr-1" />
                      <span className="text-sm text-gray-600">{studio.engineer}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">₹{studio.hourlyRate}</div>
                  <div className="text-sm text-gray-500">per hour</div>
                </div>
              </div>
            </div>

            {/* Date Selection */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Date</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {generateAvailableDates().slice(0, 12).map((date) => {
                  const dateObj = new Date(date);
                  const isSelected = selectedDate === date;
                  return (
                    <button
                      key={date}
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedTimeSlot('');
                        setBookingStep(Math.max(bookingStep, 1));
                      }}
                      className={`p-3 rounded-lg border text-center transition-colors ${
                        isSelected
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-sm font-medium">
                        {dateObj.toLocaleDateString('en-US', { weekday: 'short' })}
                      </div>
                      <div className="text-lg font-bold">
                        {dateObj.getDate()}
                      </div>
                      <div className="text-xs">
                        {dateObj.toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slot Selection */}
            {selectedDate && (
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Available Time Slots - {formatDate(selectedDate)}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedTimeSlot === slot.time;
                    return (
                      <button
                        key={slot.time}
                        onClick={() => {
                          if (slot.available) {
                            setSelectedTimeSlot(slot.time);
                            setBookingStep(Math.max(bookingStep, 2));
                          }
                        }}
                        disabled={!slot.available}
                        className={`p-3 rounded-lg border text-center transition-colors ${
                          !slot.available
                            ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                            : isSelected
                            ? 'border-gray-900 bg-gray-900 text-white'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-medium">{slot.time}</div>
                        <div className="text-xs">
                          {slot.available ? 'Available' : 'Booked'}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Booking Details */}
            {selectedTimeSlot && (
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Details</h3>
                
                {/* Duration */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Session Duration
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  >
                    <option value={1}>1 hour</option>
                    <option value={2}>2 hours</option>
                    <option value={3}>3 hours</option>
                    <option value={4}>4 hours (Half Day)</option>
                    <option value={8}>8 hours (Full Day)</option>
                  </select>
                </div>

                {/* Contact Number */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Special Requests */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    rows={3}
                    placeholder="Any specific requirements, equipment needs, or special instructions..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Payment Method
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="online"
                        checked={paymentMethod === 'online'}
                        onChange={(e) => {
                          setPaymentMethod(e.target.value as 'online' | 'studio');
                          setBookingStep(Math.max(bookingStep, 3));
                        }}
                        className="mr-3"
                      />
                      <div className="flex items-center">
                        <CreditCard className="w-4 h-4 mr-2 text-gray-600" />
                        <span>Pay Online (Recommended)</span>
                      </div>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="studio"
                        checked={paymentMethod === 'studio'}
                        onChange={(e) => {
                          setPaymentMethod(e.target.value as 'online' | 'studio');
                          setBookingStep(Math.max(bookingStep, 3));
                        }}
                        className="mr-3"
                      />
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-600" />
                        <span>Pay at Studio</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="mb-6">
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <a href="#" className="text-gray-900 hover:underline">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-gray-900 hover:underline">
                        Cancellation Policy
                      </a>
                    </label>
                  </div>
                </div>

                {/* Book Button */}
                <button
                  onClick={handleBookingSubmit}
                  disabled={isProcessing || !selectedDate || !selectedTimeSlot || !contactNumber}
                  className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isProcessing ? (
                    <>
                      <Loader className="w-4 h-4 mr-2 animate-spin" />
                      Processing Booking...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {paymentMethod === 'online' ? 'Proceed to Payment' : 'Confirm Booking'}
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
              
              {selectedDate && (
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">{formatDate(selectedDate)}</span>
                  </div>
                  
                  {selectedTimeSlot && (
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">
                        {selectedTimeSlot} - {String(parseInt(selectedTimeSlot.split(':')[0]) + duration).padStart(2, '0')}:00
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">{duration} hour{duration > 1 ? 's' : ''}</span>
                  </div>
                </div>
              )}

              {selectedTimeSlot && (
                <>
                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Studio Rate ({duration}h)</span>
                      <span className="text-sm font-medium">₹{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Platform Fee</span>
                      <span className="text-sm font-medium">₹{platformFee.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-900">Total</span>
                        <span className="font-bold text-gray-900">₹{finalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {paymentMethod === 'studio' && (
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-yellow-800">
                          <p className="font-medium mb-1">Pay at Studio</p>
                          <p>Your booking will be confirmed after payment at the studio. Please arrive 15 minutes early.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-green-800">
                        <p className="font-medium mb-1">Free Cancellation</p>
                        <p>Cancel up to 24 hours before your session for a full refund.</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;