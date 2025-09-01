// components/Products.js

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

  return (
    <section className="bg-[#eef5f6] py-10 md:px-20">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex justify-between items-center border-b-4 border-double border-gray-200 pb-6 mb-8">
          <h4 className="text-2xl font-bold text-gray-800">Products</h4>
          <a
            href="#"
            className="text-base text-blue-600 font-bold hover:underline"
          >
            View All
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productList.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer transition-transform hover:scale-105"
            >
              <div className="bg-white w-full text-center rounded-lg min-h-[260px] flex justify-center items-center relative shadow-md">
                <Image
                  src={product.img}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
                <div className="absolute -bottom-10 left-0 right-0 transition-all duration-300 group-hover:bottom-0 bg-[#ff9700] py-2.5">
                  <p className="font-bold text-white">{product.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
