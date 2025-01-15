import React from "react";
import "animate.css";

const AboutUs = () => {
  return (
    <div className="mx-auto px-4 py-8 bg-gray-200">
      {/* Logo Section */}

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8 mt-10 animate__animated animate__fadeIn animate__delay-4s">
        {/* Left Column */}
        <div className="flex flex-col space-y-6 w-full md:w-1/2">
          <div className="text-center mt-8 animate__animated animate__fadeIn animate__delay-1s">
            <img
              src="/aboutus.png"
              alt="About Us"
              height={50}
              className="animate__animated animate__zoomIn animate__delay-1s"
            />
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800 animate__animated animate__fadeIn animate__delay-2s">
              Celebrating 24 Years of Excellence. At VS Labels, we take immense
              pride in our 24-year journey of excellence in manufacturing and
              supplying school essentials to a wide range of educational
              institutions across Tamil Nadu, Kerala, and Andhra Pradesh. Our
              commitment to quality and service has been the cornerstone of our
              success.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-6 w-full md:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__zoomIn animate__delay-6s">
            <h3 className="text-xl font-bold text-gray-800 animate__animated animate__bounceIn animate__delay-6s">
              Our Journey
            </h3>
            <p className="text-gray-600 mt-4 text-sm animate__animated animate__fadeIn animate__delay-7s">
              Our two-and-a-half-decade-long journey has been fueled by a deep
              passion for delivering uniform products that include belts, ties,
              socks, badges, and house T-shirts. The trust and goodwill of
              numerous reputed schools in the southern states have been the
              driving force behind our growth.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__zoomIn animate__delay-8s">
            <h3 className="text-xl font-bold text-gray-800 animate__animated animate__bounceIn animate__delay-8s">
              Quality and Timely Delivery
            </h3>
            <p className="text-gray-600 mt-4 text-sm animate__animated animate__fadeIn animate__delay-9s">
              At VS Labels, we understand the significance of quality and timely
              delivery. We use supreme quality raw materials to ensure flawless
              products. Our dedicated team of efficient professionals ensures
              that every order is delivered promptly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__zoomIn animate__delay-10s">
            <h3 className="text-xl font-bold text-gray-800 animate__animated animate__bounceIn animate__delay-10s">
              Building Relationships
            </h3>
            <p className="text-gray-600 mt-4 text-sm animate__animated animate__fadeIn animate__delay-11s">
              We believe in nurturing enduring relationships based on trust and
              mutual benefit. We consider every partnership as a testament to
              our commitment to excellence.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__zoomIn animate__delay-12s">
            <h3 className="text-xl font-bold text-gray-800 animate__animated animate__bounceIn animate__delay-12s">
              Our Promise
            </h3>
            <p className="text-gray-600 mt-4 text-sm animate__animated animate__fadeIn animate__delay-13s">
              Consider this an earnest invitation to extend your valuable
              patronage to us. We are confident that our service will not only
              meet but exceed your expectations. We eagerly await your orders
              and the opportunity to serve your esteemed institution.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__zoomIn animate__delay-14s">
            <h3 className="text-xl font-bold text-gray-800 animate__animated animate__bounceIn animate__delay-14s">
              Contact Us
            </h3>
            <p className="text-gray-600 mt-4 text-sm animate__animated animate__fadeIn animate__delay-15s">
              Please feel free to reach out to us at any time for inquiries,
              clarifications, or placing orders. Your satisfaction is our top
              priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
