import profile from "../assets/profile.webp"

const ProfileSection = () => {
  return (
    <section className="min-h-screen px-4 bg-white flex items-center justify-center sm:mt-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-90 h-120 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={profile || "/placeholder.svg"}
                alt="Rajesh Kumar - Chairman & CEO"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 max-w-2xl gap-6 flex flex-col items-start">
            {/* Main Quote */}
            <p className="text-xl lg:text-2xl font-medium text-gray-900 leading-relaxed mb-8">
              Innovation and sustainability are not just business strategies, they are our core values. Every decision
              we make, every project we undertake, must create lasting value for our communities while preserving our
              environment for future generations.
            </p>

            {/* Secondary Text */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We believe that true success comes from empowering rural India through technology, education, and
              sustainable development. This is not just our mission—it's our responsibility.
            </p>

            {/* Name and Title */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Rajesh Kumar</h3>
              <p className="text-gray-600 text-lg">Chairman & CEO, Gondwana Group</p>
            </div>

            {/* Accent Line */}
            <div className="w-16 h-1 bg-blue-600 mb-8"></div>

            {/* View Profile Button */}
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-300">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection
