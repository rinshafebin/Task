import React, { useState } from "react";
import {
  Plane,
  Home,
  ClipboardList,
  Briefcase,
  Activity,
  User,
  LogOut,
  Settings,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/user/home" },
    { label: "Bookings", path: "/bookings" },
    { label: "My Trips", path: "/my-trips" },
    { label: "Flight Status", path: "/flight-status" },
  ];

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/user/home")}
        >
          <div className="w-9 h-9 bg-orange-100 rounded-full flex items-center justify-center shadow-inner">
            <Plane className="text-orange-500 w-5 h-5" />
          </div>
          <span className="text-lg font-bold text-gray-900 tracking-wide">
            AirEase
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition 
                ${
                  location.pathname === item.path
                    ? "text-orange-600 bg-orange-50"
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 bg-orange-50 px-3 py-2 rounded-full hover:bg-orange-100 transition"
          >
            <User className="text-orange-600 w-5 h-5" />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border border-orange-100 rounded-xl shadow-lg">
              <button
                onClick={() => {
                  navigate("/account");
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 transition"
              >
                <Settings size={16} className="text-orange-500" />
                Account
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
