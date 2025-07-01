import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Calendar, Clock, MapPin, Phone, Mail, Download, Share2, Star } from 'lucide-react';

interface BookingDetails {
  bookingId: string;
  studio: string;
  engineer: string;
  date: string;
  timeSlot: string;
  duration: number;
  totalPrice: number;
  paymentMethod: 'online' | 'studio';
  specialRequests: string;
  contactNumber: string;
  status: 'confirmed' | 'pending_payment';
}

const BookingConfirmation: React.FC = () => {
  const { bookingId } = useParams<{ bookingId: string }>();
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);

  useEffect(() => {
    // In real app, fetch booking details from API
    const storedBooking = localStorage.getItem('lastBooking');
    if (storedBooking) {
      setBookingDetails(JSON.parse(storedBooking));
    }
  }, [bookingId]);

  if (!bookingDetails) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Booking Not Found</h1>
          <Link to="/studios" className="text-gray-600 hover:text-gray-900">
            ← Back to Studios
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEndTime = (startTime: string, duration: number) => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const endHour = hours + duration;
    return `${endHour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const handleDownloadReceipt = () => {
    // In real app, generate and download PDF receipt
    alert('Receipt download functionality would be implemented here');
  };

  const handleShareBooking = () => {
    // In real app, implement sharing functionality
    if (navigator.share) {
      navigator.share({
        title: 'Studio Booking Confirmation',
        text: `My studio session at ${bookingDetails.studio} is confirmed!`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Booking link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {bookingDetails.status === 'confirmed' ? 'Booking Confirmed!' : 'Booking Received!'}
          </h1>
          <p className="text-lg text-gray-600">
            {bookingDetails.status === 'confirmed' 
              ? 'Your studio session has been successfully booked.'
              : 'Your booking is confirmed. Please complete payment at the studio.'}
          </p>
        </div>

        {/* Booking Details Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
          {/* Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Booking Details</h2>
                <p className="text-sm text-gray-600">Booking ID: {bookingDetails.bookingId}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={handleDownloadReceipt}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  title="Download Receipt"
                >
                  <Download className="w-5 h-5" />
                </button>
                <button
                  onClick={handleShareBooking}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  title="Share Booking"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Studio Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Studio Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900">{bookingDetails.studio}</p>
                      <p className="text-sm text-gray-600">Professional Recording Studio</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <div>
                      <p className="font-medium text-gray-900">Engineer: {bookingDetails.engineer}</p>
                      <p className="text-sm text-gray-600">Your assigned audio engineer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Session Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Session Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900">{formatDate(bookingDetails.date)}</p>
                      <p className="text-sm text-gray-600">Session date</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {bookingDetails.timeSlot} - {getEndTime(bookingDetails.timeSlot, bookingDetails.duration)}
                      </p>
                      <p className="text-sm text-gray-600">{bookingDetails.duration} hour{bookingDetails.duration > 1 ? 's' : ''} session</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">{bookingDetails.contactNumber}</p>
                    <p className="text-sm text-gray-600">Your contact number</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">Confirmation sent</p>
                    <p className="text-sm text-gray-600">Check your email for details</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            {bookingDetails.specialRequests && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Special Requests</h3>
                <p className="text-gray-700 bg-gray-50 p-3 rounded-md">
                  {bookingDetails.specialRequests}
                </p>
              </div>
            )}

            {/* Payment Information */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Total Amount</span>
                  <span className="text-xl font-bold text-gray-900">₹{bookingDetails.totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Payment Method</span>
                  <span className="font-medium text-gray-900">
                    {bookingDetails.paymentMethod === 'online' ? 'Paid Online' : 'Pay at Studio'}
                  </span>
                </div>
                {bookingDetails.paymentMethod === 'studio' && (
                  <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                    <p className="text-sm text-yellow-800">
                      <strong>Important:</strong> Please bring the exact amount and arrive 15 minutes early to complete payment.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Important Information</h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Arrive 15 minutes early for setup and briefing</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Bring your instruments and any specific equipment you need</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Free cancellation up to 24 hours before your session</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Studio will contact you 1 day before to confirm details</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/dashboard"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center"
          >
            View in Dashboard
          </Link>
          <Link
            to="/studios"
            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors text-center"
          >
            Book Another Studio
          </Link>
        </div>

        {/* Support Contact */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-2">Need help with your booking?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="text-gray-900 hover:text-gray-700 font-medium"
            >
              Call Support: +91 98765 43210
            </a>
            <a
              href="mailto:support@sympath.audio"
              className="text-gray-900 hover:text-gray-700 font-medium"
            >
              Email: support@sympath.audio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;