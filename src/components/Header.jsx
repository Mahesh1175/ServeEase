import React, { useState } from 'react';

const MenuItems = () => (
  <>
    <li className="hover:text-gray-300 cursor-pointer">Home</li>
    <li className="hover:text-gray-300 cursor-pointer">About</li>
    <li className="hover:text-gray-300 cursor-pointer">Services</li>
    <li className="hover:text-gray-300 cursor-pointer">Contact</li>
  </>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-sky-700 text-white p-4 fixed drop-shadow-2xl w-full top-0 z-10">
      <nav className="flex justify-between items-center max-w-7xl mx-auto w-full">
        {/* Logo */}
        <h1 className="text-3xl font-bold">ServeEase</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <MenuItems />
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 w-full bg-sky-700 text-white p-4 space-y-4 shadow-lg">
            <MenuItems />
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
