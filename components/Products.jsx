// components/Products.js
"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Products() {
  const productList = [
    { id: 1, img: "/images/product-1.png", title: "Medicine" },
    { id: 2, img: "/images/product-2.png", title: "Medicine" },
    { id: 3, img: "/images/product-3.png", title: "Medicine" },
    { id: 4, img: "/images/product-4.png", title: "Medicine" },
    { id: 5, img: "/images/product-5.png", title: "Medicine" },
    { id: 6, img: "/images/product-6.png", title: "Medicine" },
    { id: 7, img: "/images/product-7.png", title: "Medicine" },
    { id: 8, img: "/images/product-8.png", title: "Medicine" },
  ];

  useEffect(() => {
    // Function to handle scroll animation
    const handleScrollAnimation = () => {
      const products = document.querySelectorAll('.product-group');
      const windowHeight = window.innerHeight;

      products.forEach((product) => {
        // Calculate when each product should animate
        const productPosition = product.getBoundingClientRect().top;
        const productOffset = productPosition - windowHeight;

        if (productOffset < 0) {
          // Scrolling down - products come up
          product.style.transform = 'translateY(0)';
          product.style.opacity = '1';
        } else {
          // Scrolling up - products go down
          product.style.transform = 'translateY(50px)';
          product.style.opacity = '0';
        }
      });
    };

    // Add initial styles to products for animation
    const products = document.querySelectorAll('.product-group');
    products.forEach(product => {
      product.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      product.style.transform = 'translateY(50px)';
      product.style.opacity = '0';
    });

    // Listen for scroll events
    window.addEventListener('scroll', handleScrollAnimation);

    // Trigger once on load to check initial position
    handleScrollAnimation();

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <section className="bg-[#eef5f6]">
      <div className="md:px-20 py-10 mx-4">
        <div className="container mx-auto">
          {/* Heading */}
          <div className="col-span-full">
            <div className="flex justify-between items-center border-b-4 border-double border-gray-200 pb-6">
              <h4 className="text-2xl font-bold text-gray-800">Products</h4>
              <a href="#" className="text-base underline text-blue-600 font-bold no-underline">View All</a>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {productList.map((product) => (
              <div key={product.id} className="mt-12 product-group cursor-pointer">
                <div className="bg-white w-full text-center rounded-md min-h-[260px] flex justify-center items-center relative">
                  <img 
                    src={product.img} 
                    alt={`Product ${product.id}`} 
                    className="max-h-[200px]"
                  />
                  <div className="absolute -bottom-10 left-0 right-0 transition-all duration-300 bg-[#ff9700] py-2.5">
                    <p className="font-bold">{product.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}