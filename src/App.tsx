import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BottomNavBar from './components/layout/BottomNavBar';
import LandingPage from './pages/LandingPage';
import Studios from './pages/Studios';
import StudioDetail from './pages/StudioDetail';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/BookingConfirmation';
import PostProduction from './pages/PostProduction';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';
import ForStudioOwners from './pages/ForStudioOwners';
import Reviews from './pages/Reviews';
import Account from './pages/Account';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-1 pb-16 md:pb-0">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/studios" element={<Studios />} />
              <Route path="/studio/:id" element={<StudioDetail />} />
              <Route path="/booking/:id" element={<Booking />} />
              <Route path="/booking-confirmation/:bookingId" element={<BookingConfirmation />} />
              <Route path="/post-production" element={<PostProduction />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/for-studio-owners" element={<ForStudioOwners />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </main>
          <Footer />
          <BottomNavBar />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;