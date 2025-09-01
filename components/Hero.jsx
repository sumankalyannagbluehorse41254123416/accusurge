// components/Hero.js

export default function Hero() {
  return (
    <section>
      <div className="home background-hero bg-cover bg-center w-full pt-48 pb-40">
        <div className="container mx-auto md:px-12">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-7/12 md:w-full">
              <div className="ps-banner-content">
                <h2 className="text-4xl md:text-5xl font-normal text-white my-10 leading-tight">
                  Flat 5% extra on medicines<br />&amp; Enjoy FREE Delivery
                </h2>
              </div>
              <div className="ps-banner-btn">
                <a href="#" className="no-underline btn-hover inline-block max-w-[150px] w-full bg-blue-600 text-white text-base font-medium py-3 rounded-full text-center transition-all duration-300">
                  <span>SHOP NOW</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
}
