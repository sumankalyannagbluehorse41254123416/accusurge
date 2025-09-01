// components/Categories.js

// components/Categories.js

export default function Categories() {
  const categories = [
    { img: 'medicine.png', title: 'Allopathic', alt: 'Allopathic' },
    { img: 'ayurveda.png', title: 'Ayurveda', alt: 'Ayurveda' },
    { img: 'homeopathy.png', title: 'Homeopathy', alt: 'Homeopathy' },
    { img: 'mask.png', title: 'More Accessories', alt: 'More Accessories' },
  ];

  return (
    <div className="py-10 pb-11 md:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content */}
          <div className="lg:w-5/12 w-full mb-8 lg:mb-0">
            <div>
              <h4 className="text-3xl font-bold text-gray-900">Shop by categories</h4>
              <p className="text-base text-gray-500 font-normal max-w-xs mt-6 leading-6">
                consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua
                enim ad minim veniam nostrud exercit.
              </p>
            </div>
          </div>

          {/* Categories grid */}
          <div className="lg:w-7/12 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white rounded-lg shadow-lg p-9 hover:-translate-y-2 transition-transform duration-500"
                >
                  <img src={`images/${category.img}`} alt={category.alt} className="w-12 h-12" />
                  <p className="text-lg font-bold text-gray-900 pl-5">{category.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
