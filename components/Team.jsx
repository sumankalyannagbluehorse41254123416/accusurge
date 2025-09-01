// components/Team.js

export default function Team() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Our Team</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center h-full">
            <div className="overflow-hidden rounded-t-lg">
              <img
                src="/images/team1-img.jfif"
                alt="Sagar Chakrabarti"
                className="w-full h-[325px] object-cover object-top"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-1">Sagar Chakrabarti</h4>
              <p className="text-gray-500">Founder & Director</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center h-full">
            <div className="overflow-hidden rounded-t-lg">
              <img
                src="/images/team2-img.jfif"
                alt="Badal Chandra Paul"
                className="w-full h-[325px] object-cover object-top"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-1">Badal Chandra Paul</h4>
              <p className="text-gray-500">Leader</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center h-full">
            <div className="overflow-hidden rounded-t-lg">
              <img
                src="/images/team3-img.jfif"
                alt="Tatan Kumar Sarangi"
                className="w-full h-[325px] object-cover object-top"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-1">Tatan Kumar Sarangi</h4>
              <p className="text-gray-500">Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
