const GondwanaSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">GONDWANA</h1>
        <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
          Unleashing boundless potential through innovation and sustainable development
        </p>
      </div>
    </div>
  )
}

export default GondwanaSection
