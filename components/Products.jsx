// components/Products.js
"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Products() {
  const productList = [
    { id: 1, img: "/images/Anesthesia Workstations.png", title: "Anesthesia Workstations" },
    { id: 2, img: "/images/Bedside Lockers.png", title: "Bedside Lockerse" },
    { id: 3, img: "/images/Cardiovascular Instruments.png", title: "Cardiovascular Instruments" },
    { id: 4, img: "/images/Catheters.png", title: "Catheters" },
    { id: 5, img: "/images/Crash Carts.png", title: "Crash Carts" },
    { id: 6, img: "/images/Defibrillators.png", title: "Defibrillators" },
    { id: 7, img: "/images/Diathermy_Machine_upscaled.png", title: "Diathermy Machine" },
    { id: 8, img: "/images/Electrosurgical unit.png", title: "Electrosurgical" },
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
    <section className="bg-white">
      <div className="md:px-20 py-10 mx-4">
        <div className="container mx-auto">
          {/* Heading */}
          <div className="col-span-full">
            <div className="flex justify-between items-center border-b-4 border-double border-gray-200 pb-6">
              <p className="text-2xl font-bold text-gray-800">Our Medical Instruments</p>
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

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="mt-12 cursor-pointer">
              <div className="bg-white w-full text-center rounded-md min-h-[260px] flex justify-center items-center relative">
                <img src="product1.jpg" alt="Product 1" className="max-h-[200px]" />
                <div className="absolute -bottom-10 left-0 right-0 transition-all duration-300 bg-[#ff9700] py-2.5">
                  <p className="font-bold">Product Title 1</p>
                </div>
              </div>
            </div>
            <div className="mt-12 cursor-pointer">
              <div className="bg-white w-full text-center rounded-md min-h-[260px] flex justify-center items-center relative">
                <img src="product2.jpg" alt="Product 2" className="max-h-[200px]" />
                <div className="absolute -bottom-10 left-0 right-0 transition-all duration-300 bg-[#ff9700] py-2.5">
                  <p className="font-bold">Product Title 2</p>
                </div>
              </div>
            </div>
            <div className="mt-12 cursor-pointer">
              <div className="bg-white w-full text-center rounded-md min-h-[260px] flex justify-center items-center relative">
                <img src="product3.jpg" alt="Product 3" className="max-h-[200px]" />
                <div className="absolute -bottom-10 left-0 right-0 transition-all duration-300 bg-[#ff9700] py-2.5">
                  <p className="font-bold">Product Title 3</p>
                </div>
              </div>
            </div>
            <div className="mt-12 cursor-pointer">
              <div className="bg-white w-full text-center rounded-md min-h-[260px] flex justify-center items-center relative">
                <img src="product4.jpg" alt="Product 4" className="max-h-[200px]" />
                <div className="absolute -bottom-10 left-0 right-0 transition-all duration-300 bg-[#ff9700] py-2.5">
                  <p className="font-bold">Product Title 4</p>
                </div>
              </div>
            </div>
            <div className="mt-12 cursor-pointer">
              <div className="bg-white w-full text-center rounded-md min-h-[260px] flex justify-center items-center relative">
                <img src="product4.jpg" alt="Product 4" className="max-h-[200px]" />
                <div className="absolute -bottom-10 left-0 right-0 transition-all duration-300 bg-[#ff9700] py-2.5">
                  <p className="font-bold">Product Title 4</p>
                </div>
              </div>
            </div>
            <div className="mt-12 cursor-pointer">
              <div className="bg-white w-full text-center rounded-md min-h-[260px] flex justify-center items-center relative">
                <img src="product4.jpg" alt="Product 4" className="max-h-[200px]" />
                <div className="absolute -bottom-10 left-0 right-0 transition-all duration-300 bg-[#ff9700] py-2.5">
                  <p className="font-bold">Product Title 4</p>
                </div>
              </div>
            </div>
            <div className="mt-12 cursor-pointer">
              <div className="bg-white w-full text-center rounded-md min-h-[260px] flex justify-center items-center relative">
                <img src="product4.jpg" alt="Product 4" className="max-h-[200px]" />
                <div className="absolute -bottom-10 left-0 right-0 transition-all duration-300 bg-[#ff9700] py-2.5">
                  <p className="font-bold">Product Title 4</p>
                </div>
              </div>
            </div>
            <div className="mt-12 cursor-pointer">
              <div className="bg-white w-full text-center rounded-md min-h-[260px] flex justify-center items-center relative">
                <img src="product4.jpg" alt="Product 4" className="max-h-[200px]" />
                <div className="absolute -bottom-10 left-0 right-0 transition-all duration-300 bg-[#ff9700] py-2.5">
                  <p className="font-bold">Product Title 4</p>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}