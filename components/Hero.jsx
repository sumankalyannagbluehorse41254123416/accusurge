// components/Hero.js

export default function Hero() {
  return (
    <section className="background-hero">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center py-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
              Flat 5% extra on medicines &amp; Enjoy FREE Delivery
            </h2>
            <a
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-3 transition"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
