// components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-16">
      <div className="container mx-auto px-6 md:px-20">
        {/* Footer Content */}
        <div className="flex flex-wrap -mx-4">
          {/* Logo & Description */}
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 pb-8">
            <div>
              <img
                src="images/footer-logo.png"
                alt="Logo"
                className="w-auto max-h-[7rem] mb-6"
              />
              <p className="text-gray-300 mb-6">
                "From surgical instruments to healthcare products, Accusurge supports doctors and nurses with reliable tools for safer care and faster recovery."
              </p>
              {/* <ul className="flex gap-2 mt-6">
                {["facebook", "twitter", "instagram"].map((icon, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="w-8 h-8 bg-blue-500 flex items-center justify-center rounded hover:-translate-y-1 transition-transform"
                    >
                      <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z">
                        </path>
                      </svg>
                    </a>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>

          {/* Categories */}
          {/* <div className="w-full lg:w-1/4 md:w-1/2 px-4 pb-8">
            <div>
              <h2 className="text-white text-xl mb-4">Categories</h2>
              <ul>
                {["Face masks", "PPE Kit", "Safety suits", "Eye protector", "Disposable"].map(
                  (item, idx) => (
                    <li key={idx} className="mb-2 relative pl-4">
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-blue-500 transform rotate-45"></span>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-blue-500 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div> */}
          <div className="w-full lg:w-1/4 md:w-1/2 px-4 pb-8">
            <div>
              <h2 className="text-white text-xl mb-4">Categories</h2>
              <ul>
                <li className="mb-2 relative pl-4">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-blue-500 transform rotate-45" />
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Medical Equipment</a>
                </li>
                <li className="mb-2 relative pl-4">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-blue-500 transform rotate-45" />
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Surgical Instruments</a>
                </li>
                <li className="mb-2 relative pl-4">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-blue-500 transform rotate-45" />
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Hospital Furniture</a>
                </li>
                <li className="mb-2 relative pl-4">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-blue-500 transform rotate-45" />
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">New Hospital Projects</a>
                </li>
                <li className="mb-2 relative pl-4">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-blue-500 transform rotate-45" />
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Disposable</a>
                </li>
              </ul>
            </div>
          </div>


          {/* Useful Links */}
          {/* <div className="w-full lg:w-1/5 md:w-1/2 px-4 pb-8">
            <div>
              <h2 className="text-white text-xl mb-4">Useful links</h2>
              <ul>
                {["About", "Services", "Privacy Policy", "Statements", "Faq"].map(
                  (item, idx) => (
                    <li key={idx} className="mb-2 relative pl-4">
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-blue-500 transform rotate-45"></span>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-blue-500 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div> */}
          <div className="w-full lg:w-1/5 md:w-1/2 px-4 pb-8">
            <div>
              <h2 className="text-white text-xl mb-4">Useful links</h2>
              <ul>
                <li className="mb-2 relative pl-4">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-blue-500 transform rotate-45" />
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">About</a>
                </li>
                <li className="mb-2 relative pl-4">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-blue-500 transform rotate-45" />
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Products</a>
                </li>
                <li className="mb-2 relative pl-4">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-blue-500 transform rotate-45" />
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Team</a>
                </li>
                <li className="mb-2 relative pl-4">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-blue-500 transform rotate-45" />
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Testimonial </a>
                </li>
                <li className="mb-2 relative pl-4">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-blue-500 transform rotate-45" />
                  <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Mission</a>
                </li>
              </ul>
            </div>
          </div>


          {/* Contact Info */}
          <div className="w-full lg:w-1/6 md:w-1/2 px-4 pb-8">
            <div>
              <h2 className="text-white text-xl mb-4">Contact</h2>
              <div className="text-gray-300 mb-2">
                <p className="text-blue-500">Contact : </p>
                <p>+91 80011 01111</p>
                <p>+91 97491 40606</p>
                <p>+91 90073 37749</p>
              </div>
              <div className="text-gray-300 mb-2">
                <p className="text-blue-500">Email : </p>
                <a href="#" className="block">sagarc@accusurge.co.in</a>
                <a href="#" className="block">achintyakar@accusurge.co.in</a>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-blue-500 py-3 mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-white text-center capitalize">
            © 2025 <a href="#">Accusurge</a>, All Rights Reserved | Powered By <a href="https://www.bluehorse.in/">BlueHorse Software</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
