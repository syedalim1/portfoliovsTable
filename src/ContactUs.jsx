import React from "react";

function ContactUs() {
  return (
    <div className="bg-gray-200">
      {/* Header */}
      <div className="flex justify-center items-center mt-5 animate__animated animate__fadeIn">
        <img
          src="/vslogo.jpg"
          alt="VS Labels Logo"
          className="h-20 transition-transform transform hover:scale-110"
        />
      </div>

      {/* Contact Us Title */}
      <div className="text-start text-3xl font-bold mt-5 mx-10 text-blue-600 animate__animated animate__fadeIn animate__delay-1s">
        CONTACT US
      </div>

      {/* Contact Details */}
      <div className="flex gap-6 justify-between mt-5 mx-10 animate__animated animate__fadeIn animate__delay-2s">
        <div className="bg-white p-5 rounded-lg shadow-lg w-[50%] hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
          <h3 className="text-xl font-semibold text-blue-600">HEAD OFFICE</h3>
          <p className="text-sm text-gray-700">
            2/33 Kamarajar Street, Periyapodu - 642103 Pollachi, Coimbatore
          </p>
          <p className="text-sm text-gray-700">
            Mobile: 9994473735, 9750993935
          </p>
          <p className="text-sm text-gray-700">
            Email:{" "}
            <a href="mailto:vslabels3@gmail.com" className="text-blue-600">
              vslabels3@gmail.com
            </a>
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg w-[50%] hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
          <h3 className="text-xl font-semibold text-blue-600">
            THIRUVANANTHAPURAM BRANCH
          </h3>
          <p className="text-sm text-gray-700">
            No.6, Standard Building, Marakkada Road, Chalai, Thiruvananthapuram,
            Kerala
          </p>
          <p className="text-sm text-gray-700">
            Mobile: 9489353791, 9659265397
          </p>
        </div>
      </div>

      <div className="flex gap-6 justify-center mt-5 animate__animated animate__fadeIn animate__delay-3s">
        <div className="bg-white p-5 rounded-lg shadow-lg w-[50%] hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
          <h3 className="text-xl font-semibold text-blue-600">
            CHENNAI BRANCH
          </h3>
          <p className="text-sm text-gray-700">
            Gokulam Apartment, Door No. S2, Plot No. 535, 27th Street,
            Astalakshmi Nagar, Alapakkam, Chennai - 600116
          </p>
          <p className="text-sm text-gray-700">
            Mobile: 9447450893, 9843811823
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
