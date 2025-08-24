const AboutUsSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-800 via-green-700 to-emerald-800 relative overflow-hidden flex items-center justify-center">
      {/* Background overlay for the business meeting effect */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 right-16 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-16 w-56 h-56 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">ABOUT US</h1>
        <p className="text-lg md:text-xl font-light leading-relaxed opacity-95 max-w-4xl mx-auto">
          We are a diversified organization committed to creating sustainable value through innovation, technology, and
          community development. Our mission is to transform rural India while building a better future for all.
        </p>
      </div>
    </div>
  )
}

export default AboutUsSection
