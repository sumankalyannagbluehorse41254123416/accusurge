// components/Services.js

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Free Shipping",
      description: "On all orders over $72.00",
      bg: "bg-orange-50",
      svg: (
        <svg viewBox="0 0 28 20" width="28" height="20" className="fill-current text-orange-500">
          <path d="M24.68 16.36C24.68 18.37 23.09 20 21.15 20C19.2 20 17.62 18.37 17.62 16.36C17.62 14.36 19.2 12.73 21.15 12.73C23.09 12.73 24.68 14.36 24.68 16.36Z..." />
        </svg>
      ),
    },
    {
      id: 2,
      title: "30 days returns",
      description: "30 Days Moneyback guarantee",
      bg: "bg-blue-50",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="29.906" viewBox="0 0 27 29.906" className="fill-current text-blue-500">
          <path d="M800.046,897.352h0a13.28,13.28,0,0,0-7.619-3.917l0.841-..." />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Offer & gift",
      description: "Offer & Gift on all orders over",
      bg: "bg-cyan-50",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="23.63" height="27.188" viewBox="0 0 23.63 27.188" className="fill-current text-cyan-500">
          <path d="M1079.89,903.212l-2.66-.97a3.219,3.219,0,1,0-4.17-..." />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Secure checkout",
      description: "Your Payment Protected by Paypal",
      bg: "bg-red-50",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19.969" viewBox="0 0 24 19.969" className="fill-current text-red-500">
          <path d="M1355.75,908.863a0.714,0.714,0,1,0,0,1.427h3a0.714,0.714..." />
        </svg>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="bg-white rounded-lg shadow-lg shadow-blue-100 pt-12 pb-8 px-6 md:px-12 -mt-32">
        <div className="flex flex-wrap -mx-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8"
            >
              <div className="text-center cursor-pointer group">
                <div
                  className={`w-20 h-20 ${service.bg} rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-500 group-hover:scale-110`}
                >
                  {service.svg}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
