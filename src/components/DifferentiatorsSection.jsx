const DifferentiatorsSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-800 to-amber-700 relative overflow-hidden flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-24 left-12 w-36 h-36 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-24 right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-16 tracking-tight">OUR DIFFERENTIATORS</h1>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Innovation */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="text-6xl">🚀</div>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Innovation</h3>
            <p className="text-base md:text-lg opacity-90 leading-relaxed">
              Cutting-edge technology and creative solutions
            </p>
          </div>

          {/* Sustainability */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="text-6xl">🌱</div>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sustainability</h3>
            <p className="text-base md:text-lg opacity-90 leading-relaxed">
              Environmental responsibility and long-term impact
            </p>
          </div>

          {/* Community */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="text-6xl">🤝</div>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Community</h3>
            <p className="text-base md:text-lg opacity-90 leading-relaxed">
              Empowering local communities and partnerships
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DifferentiatorsSection
