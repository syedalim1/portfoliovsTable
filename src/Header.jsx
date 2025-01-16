import React, { useState } from "react";
import "animate.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src="/vslogo.jpg"
            alt="Logo"
            className="h-[50px] rounded-full animate__animated animate__bounceIn"
          />
          <h1 className="text-3xl font-bold tracking-wide animate__animated animate__fadeInDown">
            VS LABEL
          </h1>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold">
          {[
            { label: "Home", link: "#" },
            { label: "About Us", link: "#about" },
            { label: "Products", link: "#products" },
            { label: "Contact Us", link: "#contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="hover:underline hover:text-yellow-200 transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-purple-500 px-6 pb-4 animate__animated animate__fadeIn">
          <nav className="flex flex-col space-y-4">
            {[
              { label: "Home", link: "#" },
              { label: "About Us", link: "#about" },
              { label: "Products", link: "#products" },
              { label: "Contact Us", link: "#contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block text-lg text-white hover:bg-purple-700 px-4 py-2 rounded transition duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
