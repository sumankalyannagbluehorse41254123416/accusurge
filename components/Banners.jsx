// components/Banners.js

export default function Banners() {
  return (
  
   <div className="container md:px-20 py-20 mx-auto">
  <div className="flex flex-wrap -mx-4">
    <div className="w-full lg:w-4/12 md:w-6/12 px-3 mb-8">
      <div className="text-center">
        <a href="#" className="no-underline">
          <img src="images/ad-1.png" alt="Ad 1" className="w-full" />
        </a>
      </div>
    </div>
    <div className="w-full lg:w-4/12 md:w-6/12 px-3 mb-8">
      <div className="text-center">
        <a href="#" className="no-underline">
          <img src="images/ad-2.png" alt="Ad 2" className="w-full" />
        </a>
      </div>
    </div>
    <div className="w-full lg:w-4/12 md:w-6/12 px-3 mb-8">
      <div className="text-center">
        <a href="#" className="no-underline">
          <img src="images/ad-3.png" alt="Ad 3" className="w-full" />
        </a>
      </div>
    </div>
  </div>
</div>

  );
}
