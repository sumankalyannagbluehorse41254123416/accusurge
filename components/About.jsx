export default function About() {
  return (
    <section className="bg-gradient-to-br from-white to-purple-200 font-sans md:px-20 pb-10">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="col-span-full">
          <div className="flex justify-between items-center border-b-4 border-double border-gray-200 pb-6">
            <h4 className="text-2xl font-bold text-gray-800">About Us</h4>
            {/* <a href="#" className="text-base underline text-blue-600 font-bold">Register Now</a> */}
          </div>
        </div>

        {/* Main content */}
        <main className="flex flex-col md:flex-row justify-between p-10 bg-white rounded-lg shadow-lg mt-12">
          {/* Left column - text */}
          <div className="md:w-1/2 w-full">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              The Best Medical Healthcare Services
            </h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries...
            </p>
          </div>

          {/* Right column - image */}
          <div className="md:w-1/2 w-full flex justify-end md:ml-4 mt-6 md:mt-0">
            <img
              src="/images/about.avif"
              alt="Doctor"
              className="rounded-lg shadow-md max-h-[400px] object-cover"
            />
          </div>
        </main>
      </div>
    </section>
  );
}
