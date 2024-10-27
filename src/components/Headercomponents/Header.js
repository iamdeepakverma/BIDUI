// import './Header.css'

import { ArrowRight, CheckCircle, Star, Zap, Users, TrendingUp, Mail, Phone, MapPin } from 'lucide-react';
import {  ChevronDown,  Shield } from 'lucide-react';

function Header(){
    return(
        <>
         {/* <!-- Features End --> */}
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <header className="relative text-center mb-16">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

          <div className="relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient-x">
                BID ME
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the thrill of bidding! Auctions offer unique opportunities to acquire items at competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <a
                href="#"
                className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300 transform hover:scale-105 shadow-lg flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <Zap className="h-8 w-8 text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Experience unparalleled speed and efficiency.</p>
            </div>
            <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <Shield className="h-8 w-8 text-green-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Your data is safe with our robust security measures.</p>
            </div>
            <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <Star className="h-8 w-8 text-purple-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Award-Winning</h3>
              <p className="text-gray-600">Recognized for excellence in our industry.</p>
            </div>
          </div>
        </header>

        {/* Rest of the page content... */}
      </div>
    </div>

        </>
    );
}

export default Header;