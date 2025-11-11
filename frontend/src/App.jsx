import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import HomePage from './Pages/UserHomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ResetPasswordPage from './Pages/Reset Password Page';
import ChangePasswordPage from './Pages/ChangePasswordPage';
import UserHomePage from './Pages/UserHomePage';
import BookingsPage from './Pages/BookingsPage';
import MyTripsPage from './Pages/MyTripsPage';
import FlightStatusPage from './Pages/FlightStatusPage';
import AccountPage from './Pages/AccountPage';


const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/reset-password" element={< ResetPasswordPage/>} />

        <Route path="/user/home" element={<UserHomePage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/my-trips" element={<MyTripsPage />} />
        <Route path="/flight-status" element={<FlightStatusPage />} />
        <Route path="/account" element={<AccountPage />} />



        <Route path="*" element={<div className="text-center mt-20 text-2xl">Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
