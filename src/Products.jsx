import React from "react";
import "animate.css";

const Products = () => {
  const productList = [
    {
      name: "School Tie",
      image: "/school_tie.png",
      details:
        "Elegant school ties with vibrant patterns and superior stitching, designed to enhance the uniform's overall look.",
    },
    {
      name: "School Belt",
      image: "/school_belt.png",
      details:
        "Stylish and durable school belts designed with premium materials to ensure a perfect fit and long-lasting use. Customizable with school logos.",
    },
    {
      name: "School Socks",
      image: "/school_socks.png",
      details:
        "Soft, breathable, and high-quality socks for all-day comfort. Available in different sizes and colors to complement the uniform.",
    },

    {
      name: "School Shorts",
      image: "/Shorts.png",
      details:
        "Made from breathable cotton-polyester blend, our school shorts offer comfort and durability. Available in multiple sizes to ensure a perfect fit for all students.",
    },
    {
      name: "School Badge",
      image: "/Badge.png",
      details:
        "Our custom school badges are made from high-quality materials, designed for durability and a professional look. Available in various sizes and customizable with your school's logo.",
    },
    {
      name: "School T-Shirt",
      image: "/school_tshirt.png",
      details:
        "Our school T-shirts are made from high-quality cotton for maximum comfort and durability. Available in various sizes and colors to match your school uniform needs.",
    },
  ];

  return (
    <div className="p-10 min-h-screen ">
      <h1 className="text-5xl font-extrabold text-center text-purple-800 animate__animated animate__fadeInDown mb-12">
        Our Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
        {productList.map((product, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 hover:rotate-2 transition-all duration-700"
          >
            {/* Product Image with hover zoom effect */}
            <div className="relative overflow-hidden rounded-lg transition-all duration-500">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] object-contain drop-shadow-lg transform group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500">
                <p className="text-white text-center text-lg font-bold mt-16">
                  {product.name}
                </p>
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-purple-700 group-hover:text-pink-500 transition-colors duration-500 animate__animated animate__fadeInUp">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-4 text-sm animate__animated animate__fadeIn animate__delay-1s">
                {product.details}
              </p>
            </div>

            {/* Glow Effect */}
          </div>
        ))}
      </div>

      <div id="about" className="mt-12"></div>
    </div>
  );
};

export default Products;
