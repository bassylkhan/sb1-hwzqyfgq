import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

interface HeaderProps {
  onThemeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">GeoOzge</span>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-blue-200 transition-colors duration-200">Home</a>
          <a href="#" className="hover:text-blue-200 transition-colors duration-200">Learn</a>
          <a href="#" className="hover:text-blue-200 transition-colors duration-200">Quizzes</a>
          <a href="#" className="hover:text-blue-200 transition-colors duration-200" onClick={(e) => {
            e.preventDefault();
            onThemeToggle();
          }}>Toggle Theme</a>
          
          <div className="relative flex items-center">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer object-cover"
              onMouseEnter={() => setShowProfile(true)}
              onMouseLeave={() => setShowProfile(false)}
            />
            
            {showProfile && (
              <div 
                className="absolute right-0 mt-32 w-48 rounded-md shadow-lg bg-white text-gray-800"
                onMouseEnter={() => setShowProfile(true)}
                onMouseLeave={() => setShowProfile(false)}
              >
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Progress</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Sign Out</a>
                </div>
              </div>
            )}
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <a href="#" className="text-white py-2 hover:bg-blue-700 px-2 rounded">Home</a>
            <a href="#" className="text-white py-2 hover:bg-blue-700 px-2 rounded">Learn</a>
            <a href="#" className="text-white py-2 hover:bg-blue-700 px-2 rounded">Quizzes</a>
            <a href="#" className="text-white py-2 hover:bg-blue-700 px-2 rounded" onClick={(e) => {
              e.preventDefault();
              onThemeToggle();
              setIsMenuOpen(false);
            }}>Toggle Theme</a>
            <a href="#" className="text-white py-2 hover:bg-blue-700 px-2 rounded">Profile</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;