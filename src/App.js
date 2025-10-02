import React, { useState } from 'react';
import { Home, Star, MapPin, Building2, User, Search, TrendingUp, MessageSquare, AlertCircle } from 'lucide-react';

export default function RateMyPlace() {
  const [view, setView] = useState('landing'); // landing, userSignup, apartmentSignup, userDash, apartmentDash
  const [userType, setUserType] = useState(null);

  // Sample data
  const [apartments, setApartments] = useState([
    { id: 1, name: 'Sunset Towers', location: 'Downtown', rating: 4.2, reviews: 28 },
    { id: 2, name: 'Park View Apartments', location: 'Midtown', rating: 3.8, reviews: 45 },
    { id: 3, name: 'Riverside Complex', location: 'Waterfront', rating: 4.5, reviews: 62 }
  ]);

  const Landing = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold text-indigo-600">
            <Home size={32} />
            <span>RateMyPlace</span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setView('userSignup')}
              className="px-4 py-2 text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Sign In
            </button>
            <button
              onClick={() => setView('userSignup')}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect Home with<br />Real Reviews from Real Tenants
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Honest apartment ratings and reviews to help you make informed decisions
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => { setUserType('user'); setView('userSignup'); }}
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold text-lg flex items-center gap-2"
            >
              <User size={20} />
              I'm Looking for an Apartment
            </button>
            <button
              onClick={() => { setUserType('apartment'); setView('apartmentSignup'); }}
              className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 font-semibold text-lg flex items-center gap-2"
            >
              <Building2 size={20} />
              I'm a Property Manager
            </button>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search apartments by name or location..."
                className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:outline-none text-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Star className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Honest Reviews</h3>
            <p className="text-gray-600">Read authentic reviews from current and former tenants</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Compare Properties</h3>
            <p className="text-gray-600">See ratings across maintenance, management, and value</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Community Powered</h3>
            <p className="text-gray-600">Join thousands making informed housing decisions</p>
          </div>
        </div>
      </div>
    </div>
  );

  const UserSignup = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-indigo-600 mb-2">
            <Home size={28} />
            <span>RateMyPlace</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Create Your Account</h2>
          <p className="text-gray-600 mt-2">Start reading and writing reviews</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
          </div>

          <button
            onClick={() => setView('userDash')}
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold"
          >
            Sign Up
          </button>
        </div>

        <div className="mt-6 text-center">
          <button onClick={() => setView('landing')} className="text-indigo-600 hover:text-indigo-800 text-sm">
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );

  const ApartmentSignup = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-indigo-600 mb-2">
            <Building2 size={28} />
            <span>RateMyPlace</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Property Manager Signup</h2>
          <p className="text-gray-600 mt-2">Manage your property's reputation</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Property Name</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of Units</label>
            <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
          </div>

          <button
            onClick={() => setView('apartmentDash')}
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold"
          >
            Create Property Account
          </button>
        </div>

        <div className="mt-6 text-center">
          <button onClick={() => setView('landing')} className="text-indigo-600 hover:text-indigo-800 text-sm">
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );

  const UserDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-xl font-bold text-indigo-600">
            <Home size={28} />
            <span>RateMyPlace</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Welcome, John!</span>
            <button onClick={() => setView('landing')} className="px-4 py-2 text-gray-600 hover:text-gray-800">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Next Home</h1>
          <p className="text-gray-600">Search and compare apartments based on real tenant reviews</p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search apartments..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid gap-6">
          {apartments.map(apt => (
            <div key={apt.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{apt.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin size={16} />
                    <span>{apt.location}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-yellow-400" size={20} />
                      <span className="font-bold text-lg">{apt.rating}</span>
                    </div>
                    <span className="text-gray-500">{apt.reviews} reviews</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="text-indigo-600 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Have you lived somewhere?</h3>
              <p className="text-gray-700 mb-4">Share your experience and help others make informed decisions.</p>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ApartmentDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-xl font-bold text-indigo-600">
            <Building2 size={28} />
            <span>RateMyPlace Manager</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Sunset Towers</span>
            <button onClick={() => setView('landing')} className="px-4 py-2 text-gray-600 hover:text-gray-800">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Property Dashboard</h1>
          <p className="text-gray-600">Monitor and respond to your property reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Overall Rating</span>
              <Star className="text-yellow-400" size={20} />
            </div>
            <div className="text-3xl font-bold text-gray-900">4.2</div>
            <div className="text-sm text-gray-500 mt-1">Based on 28 reviews</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">New Reviews</span>
              <MessageSquare className="text-indigo-600" size={20} />
            </div>
            <div className="text-3xl font-bold text-gray-900">5</div>
            <div className="text-sm text-gray-500 mt-1">This month</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Response Rate</span>
              <TrendingUp className="text-green-600" size={20} />
            </div>
            <div className="text-3xl font-bold text-gray-900">85%</div>
            <div className="text-sm text-gray-500 mt-1">Last 30 days</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Reviews</h2>

          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      <span className="font-bold">4.5</span>
                    </div>
                    <span className="text-gray-500 text-sm">2 days ago</span>
                  </div>
                  <p className="text-gray-700">Great maintenance team, always quick to respond to issues.</p>
                </div>
                <button className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 text-sm font-medium">
                  Respond
                </button>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      <span className="font-bold">3.0</span>
                    </div>
                    <span className="text-gray-500 text-sm">5 days ago</span>
                  </div>
                  <p className="text-gray-700">Parking is limited and can be frustrating during peak hours.</p>
                </div>
                <button className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 text-sm font-medium">
                  Respond
                </button>
              </div>
            </div>

            <div className="pb-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      <span className="font-bold">5.0</span>
                    </div>
                    <span className="text-gray-500 text-sm">1 week ago</span>
                  </div>
                  <p className="text-gray-700">Love the location and the amenities. Great value for the price!</p>
                  <div className="mt-2 pl-4 border-l-2 border-indigo-200">
                    <p className="text-sm text-gray-600 italic">Response from Sunset Towers: Thank you so much! We're thrilled you're enjoying your home.</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Responded</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {view === 'landing' && <Landing />}
      {view === 'userSignup' && <UserSignup />}
      {view === 'apartmentSignup' && <ApartmentSignup />}
      {view === 'userDash' && <UserDashboard />}
      {view === 'apartmentDash' && <ApartmentDashboard />}
    </>
  );
}