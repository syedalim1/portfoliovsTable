import React from "react";
import "animate.css";

function ContactUs() {
  return (
    <div
      id="products"
      className=" py-10 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100"
    >
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
    </div>
  );
}

export default ContactUs;
