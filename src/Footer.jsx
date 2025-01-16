import React from "react";
import "animate.css"; // Make sure animate.css is imported
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-white py-14">
      <div className="container mx-auto px-6 md:flex md:justify-between items-center space-y-6 md:space-y-0">
        {/* Logo Section with Animation */}

        {/* Footer Navigation with Slide-up Animation */}
        <nav className="flex justify-center space-x-8 text-lg animate__animated animate__fadeIn animate__delay-2s">
          {[
            { label: "Home", link: "#" },
            { label: "About Us", link: "#about" },
            { label: "Products", link: "#products" },
            { label: "Contact Us", link: "#contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="hover:underline hover:text-orange-500 transition duration-300 transform hover:scale-110"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Footer Content Sections */}
      <div className="container mx-auto px-6 md:flex md:justify-between mt-10 space-y-10 md:space-y-0">
        {/* Quick Links Section */}

        {/* Contact Info Section */}
        <div className="text-center md:text-left animate__animated animate__fadeIn animate__delay-4s">
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <p className="mb-2">Email: vslabels3@gmail.com</p>
          <p className="mb-2">Phone: 9994473735, 9750993935</p>
          <p className="mb-2">
            Address: 2/33 Kamarajar Street, Periyapodu - 642103 Pollachi,
            Coimbatore
          </p>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="flex justify-center space-x-6 mt-6 animate__animated animate__fadeIn animate__delay-1s">
          <a
            href="#facebook"
            className="text-black hover:text-blue-600 text-3xl transform hover:scale-125 transition duration-300"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="#twitter"
            className="text-black hover:text-blue-400 text-3xl transform hover:scale-125 transition duration-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#instagram"
            className="text-black hover:text-pink-600 text-3xl transform hover:scale-125 transition duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#linkedin"
            className="text-black hover:text-blue-800 text-3xl transform hover:scale-125 transition duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Footer Bottom Section with Text Animation */}
      <div className="container mx-auto px-6 mt-10 text-center text-sm animate__animated animate__fadeIn animate__delay-6s">
        <p>&copy; {new Date().getFullYear()} VSLABELS. All rights reserved.</p>
      </div>

      {/* Social Media Icons with Hover Animation */}
    </footer>
  );
};

export default Footer;
