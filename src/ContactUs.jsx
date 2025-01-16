import React from "react";
import "animate.css";

function ContactUs() {
  return (
    <div id="contact" className="py-16">
      {/* Contact Us Title */}
      <div className="text-center text-4xl font-bold text-indigo-700 animate__animated animate__fadeIn animate__delay-1s">
        CONTACT US
      </div>

      {/* Contact Details */}
      <div className="flex flex-wrap justify-center gap-8 mt-8 px-4">
        {/* Head Office */}
        <div className="bg-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-500 animate__animated animate__fadeIn animate__delay-1.5s w-full md:w-[45%] lg:w-[30%]">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
            HEAD OFFICE
          </h3>
          <p className="text-gray-700 text-sm mb-2">
            2/33 Kamarajar Street, Periyapodu - 642103 Pollachi, Coimbatore
          </p>
          <p className="text-gray-700 text-sm mb-2">
            Mobile: 9994473735, 9750993935
          </p>
          <p className="text-gray-700 text-sm">
            Email:{" "}
            <a
              href="mailto:vslabels3@gmail.com"
              className="text-blue-600 hover:underline"
            >
              vslabels3@gmail.com
            </a>
          </p>
        </div>

        {/* Thiruvananthapuram Branch */}
        <div className="bg-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-500 animate__animated animate__fadeIn animate__delay-1.5s w-full md:w-[45%] lg:w-[30%]">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
            THIRUVANANTHAPURAM BRANCH
          </h3>
          <p className="text-gray-700 text-sm mb-2">
            No.6, Standard Building, Marakkada Road, Chalai, Thiruvananthapuram,
            Kerala
          </p>
          <p className="text-gray-700 text-sm mb-2">
            Mobile: 9489353791, 9659265397
          </p>
        </div>

        {/* Chennai Branch */}
        <div className="bg-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-500 animate__animated animate__fadeIn animate__delay-1.5s w-full md:w-[45%] lg:w-[30%]">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
            CHENNAI BRANCH
          </h3>
          <p className="text-gray-700 text-sm mb-2">
            Gokulam Apartment, Door No. S2, Plot No. 535, 27th Street,
            Astalakshmi Nagar, Alapakkam, Chennai - 600116
          </p>
          <p className="text-gray-700 text-sm mb-2">
            Mobile: 9447450893, 9843811823
          </p>
        </div>
      </div>

      {/* Contact Form (Optional - can be added later) */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
          Send Us A Message
        </h3>
        <form className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Name and Email */}
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Product Selection */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-indigo-700">
              Choose a Product
            </h4>
            <select className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
              <option value="school_tshirt">School T-Shirt</option>
              <option value="school_belt">School Belt</option>
              <option value="school_socks">School Socks</option>
              <option value="school_tie">School Tie</option>
              <option value="school_backpack">School Backpack</option>
              <option value="school_water_bottle">School Water Bottle</option>
            </select>
          </div>

          {/* Message Section */}
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mt-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            rows="5"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      
    </div>
  );
}

export default ContactUs;
