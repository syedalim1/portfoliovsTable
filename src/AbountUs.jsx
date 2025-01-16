import React from "react";
import "animate.css";

const AboutUs = () => {
  return (
    <div className="my-20  px-6 py-10  rounded-lg ">
      <div>
        {/* Logo Section */}
        <div className="flex justify-center mb-8"></div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <img
              src="/aboutus.png"
              alt="About Us"
              className=" drop-shadow-lg animate__animated animate__fadeIn animate__delay-1s"
            />
            <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500">
              <p className="text-lg font-semibold text-gray-800 animate__animated animate__fadeIn animate__delay-2s">
                Celebrating 24 Years of Excellence. At VS Labels, we take
                immense pride in our 24-year journey of excellence in
                manufacturing and supplying school essentials to a wide range of
                educational institutions across Tamil Nadu, Kerala, Andhra
                Pradesh and karnataka. Our commitment to quality and service has
                been the cornerstone of our success.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "Our Journey",
                  content:
                    "Our two-and-a-half-decade-long journey has been fueled by a deep passion for delivering uniform products that include belts, ties, socks, badges, and house T-shirts. The trust and goodwill of numerous reputed schools in the southern states have been the driving force behind our growth.",
                },
                {
                  title: "Quality and Timely Delivery",
                  content:
                    "At VS Labels, we understand the significance of quality and timely delivery. We use supreme quality raw materials to ensure flawless products. Our dedicated team of efficient professionals ensures that every order is delivered promptly.",
                },
                {
                  title: "Building Relationships",
                  content:
                    "We believe in nurturing enduring relationships based on trust and mutual benefit. We consider every partnership as a testament to our commitment to excellence.",
                },
                {
                  title: "Our Promise",
                  content:
                    "Consider this an earnest invitation to extend your valuable patronage to us. We are confident that our service will not only meet but exceed your expectations. We eagerly await your orders and the opportunity to serve your esteemed institution.",
                },
                {
                  title: "Contact Us",
                  content:
                    "Please feel free to reach out to us at any time for inquiries, clarifications, or placing orders. Your satisfaction is our top priority.",
                },
              ].map((section, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-500 animate__animated animate__fadeIn animate__delay-1.5s"
                >
                  <h3 className="text-2xl font-bold text-indigo-700 animate__animated animate__fadeInDown">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mt-4 text-sm animate__animated animate__fadeIn animate__delay-2s">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="contact"></div>
    </div>
  );
};

export default AboutUs;
