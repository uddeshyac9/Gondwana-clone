const Card = ({
  category,
  categoryColor,
  backgroundImage,
  companyName,
  description,
  keyServices,
  moreServicesCount = 1,
}) => {
  // Map the chosen color to overlay/badge styles
  const colorMap = {
    blue: { overlay: "bg-blue-600/70", badge: "bg-blue-600 text-white" },
    red: { overlay: "bg-red-600/70", badge: "bg-red-600 text-white" },
    purple: { overlay: "bg-purple-600/70", badge: "bg-purple-600 text-white" },
    gray: { overlay: "bg-gray-700/70", badge: "bg-gray-700 text-white" },
    green: { overlay: "bg-green-600/70", badge: "bg-green-600 text-white" },
    brown: { overlay: "bg-amber-700/70", badge: "bg-amber-700 text-white" },
    orange: { overlay: "bg-orange-500/70", badge: "bg-orange-500 text-white" },
  }

  const styles = colorMap[categoryColor] || colorMap.blue

  return (
    <div className="group bg-white rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl cursor-pointer overflow-hidden">
      {/* Image header with tinted overlay + category pill */}
      {/* Increase the height of the header to better match the Figma proportion */}
      <div className="relative h-56 md:h-60 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-500 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {/* Color overlay to mimic Figma tint */}
        {/* Remove mix-blend to achieve a more solid tinted overlay similar to the reference */}
        <div className={`absolute inset-0 ${styles.overlay}`} />

        {/* Category pill */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${styles.badge}`}>
            {category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-snug">
          {companyName}
        </h3>

        <p className="text-gray-600 text-sm md:text-base mb-5 leading-relaxed">
          {description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Key Services:</h4>
          <ul className="space-y-1.5">
            {keyServices.map((service, index) => (
              <li
                key={index}
                className="text-sm md:text-base text-gray-700 flex items-start"
              >
                {/* Use a colored bullet similar to the reference design */}
                <span className="mr-2 text-blue-600">•</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <button className="mt-2 text-blue-600 text-sm md:text-base font-medium hover:underline transition-colors">
            +{moreServicesCount} more services
          </button>
        </div>

        <button className="inline-flex items-center text-blue-600 text-sm md:text-base font-semibold hover:underline transition-colors">
          Learn More <span className="ml-1">→</span>
        </button>
      </div>
    </div>
  )
}

export default Card
