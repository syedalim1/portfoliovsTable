import React, { useState } from "react";
import "animate.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white text-black shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <img
          src="/vslogo.jpg"
          alt="Logo"
          className=" h-[80px] animate__animated animate__bounceIn"
        />

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
              className="hover:underline hover:text-orange-500 transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none"
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
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-40">
          <div className="flex flex-col space-y-4 p-8 bg-white w-3/4 mx-auto mt-10 rounded-lg">
            {[
              { label: "Home", link: "#" },
              { label: "About Us", link: "#about" },
              { label: "Products", link: "#products" },
              { label: "Contact Us", link: "#contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block text-lg text-black hover:bg-purple-700 px-4 py-2 rounded transition duration-300"
                onClick={closeMobileMenu} // Close menu on link click
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
