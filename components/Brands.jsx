// components/Brands.js

export default function Brands() {
  return (
    <section className="bg-white py-10 md:px-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col">
          {/* Heading */}
          <div>
            <div className="flex justify-between items-center border-b-4 border-double border-gray-200 pb-6">
              <h4 className="text-2xl font-bold text-gray-800">Shop by Brand</h4>
              <a
                href="#"
                className="text-base text-blue-600 font-bold underline hover:text-blue-800 transition"
              >
                View All
              </a>
            </div>
          </div>

          {/* Brand Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
            {[
              "brand-1.png",
              "brand-2.png",
              "brand-3.png",
              "brand-4.png",
              "brand-5.png",
              "brand-6.png",
              "brand-7.png",
              "brand-8.png",
              "brand-9.png",
              "brand-10.png",
            ].map((brand, index) => (
              <img
                key={index}
                src={`images/${brand}`}
                alt={`Brand ${index + 1}`}
                className="transition-transform duration-300 hover:-translate-y-2 rounded-lg shadow-md bg-white"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
