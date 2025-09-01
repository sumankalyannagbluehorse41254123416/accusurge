// components/Banners.js

export default function Banners() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Banner 1 */}
          <div>
            <div
              className="flex flex-col justify-center items-start text-white p-6 rounded-lg"
              style={{
                backgroundImage: "url('/images/banner-slider.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "350px",
              }}
            >
              <h2 className="text-xl font-semibold mb-4 leading-snug">
                Flat 5% extra on medicines <br /> &amp; Enjoy FREE Delivery
              </h2>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-2 transition"
              >
                SHOP NOW
              </a>
            </div>
          </div>

          {/* Banner 2 */}
          <div>
            <div
              className="flex flex-col justify-center items-start text-white p-6 rounded-lg"
              style={{
                backgroundImage: "url('/images/banner-slider.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "350px",
              }}
            >
              <h2 className="text-xl font-semibold mb-4 leading-snug">
                Flat 10% off on wellness products <br /> &amp; Free Consultation
              </h2>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-2 transition"
              >
                SHOP NOW
              </a>
            </div>
          </div>

          {/* Banner 3 */}
          <div>
            <div
              className="flex flex-col justify-center items-start text-white p-6 rounded-lg"
              style={{
                backgroundImage: "url('/images/banner-slider.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "350px",
              }}
            >
              <h2 className="text-xl font-semibold mb-4 leading-snug">
                Save more on family health packs <br /> with Exclusive Offers
              </h2>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-2 transition"
              >
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
