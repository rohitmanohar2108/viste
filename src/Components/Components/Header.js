import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'; // Import a search icon from react-icons

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex items-center justify-between">
      {/* Left side: Navigation Links */}
      <nav className="flex space-x-6">
        <Link to="/" className="hover:text-blue-400 transition-colors duration-300">HomePage</Link>
        <Link to="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</Link>
        <Link to="/shop" className="hover:text-blue-400 transition-colors duration-300">Shop</Link>
        <Link to="/blog" className="hover:text-blue-400 transition-colors duration-300">Blog</Link>
      </nav>

      {/* Middle: Title */}
      <h1 className="text-3xl font-bold font-rocksalt text-white">VISTE</h1>

      {/* Right side: Search Box with Logo and Profile */}
      <div className="flex items-center space-x-4">
        {/* Unique Search Bar with Logo */}
        <div className="relative flex items-center bg-gray-700 rounded-full">
          {/* Search Logo */}
          <AiOutlineSearch className="absolute left-3 text-gray-300 text-xl" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white py-2 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Profile with clickable photo */}
        <div className="flex items-center space-x-2">
          <Link to="/profile">
            <img
              src="https://via.placeholder.com/40" // Replace this with the actual profile image URL
              alt="profile"
              className="w-10 h-10 rounded-full border-2 border-white cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
