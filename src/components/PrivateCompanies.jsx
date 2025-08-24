import Card from "./Card"

const PrivateCompanies = () => {
  const companies = [
    {
      category: "Human Resources",
      categoryColor: "blue",
      backgroundImage: "/placeholder.svg?height=128&width=400",
      companyName: "Gondwana Recruitas Private Limited",
      description:
        "A workforce solutions company dedicated to bridging the employment gap by connecting skilled individuals with industries in need.",
      keyServices: ["Mass hiring drives", "Training & upskilling programs", "Corporate and industrial staffing"],
      moreServicesCount: 1,
    },
    {
      category: "Security Services",
      categoryColor: "red",
      backgroundImage: "/placeholder.svg?height=128&width=400",
      companyName: "Gondwana Security Guards Private Limited",
      description:
        "A trusted provider of professional security personnel and services for government, industrial, and private institutions.",
      keyServices: ["Armed and unarmed guards", "24/7 monitoring & control room", "Event & VIP security"],
      moreServicesCount: 1,
    },
    {
      category: "Technology",
      categoryColor: "purple",
      backgroundImage: "/placeholder.svg?height=128&width=400",
      companyName: "Gondwana Multitech Pvt. Ltd.",
      description:
        "Specializing in technical infrastructure and smart solutions, implementing IT, electrification, surveillance, and digital systems.",
      keyServices: [
        "Smart village & e-governance projects",
        "Networking & system integration",
        "Renewable energy installations",
      ],
      moreServicesCount: 1,
    },
    {
      category: "Advanced Security",
      categoryColor: "gray",
      backgroundImage: "/placeholder.svg?height=128&width=400",
      companyName: "Gondwana Protection Pvt. Ltd.",
      description:
        "Focused on high-end security and risk management solutions, handling both physical and cyber protection.",
      keyServices: ["Executive security", "Cyber protection", "Risk management"],
      moreServicesCount: 1,
    },
    {
      category: "Healthcare",
      categoryColor: "green",
      backgroundImage: "/placeholder.svg?height=128&width=400",
      companyName: "Supersky Healthcare Pvt. Ltd.",
      description:
        "A healthcare innovation company dedicated to improving access to quality healthcare in rural and semi-urban India.",
      keyServices: ["Hospital setup and consulting", "Medical equipment supply", "Digital health initiatives"],
      moreServicesCount: 1,
    },
    {
      category: "Clean Energy",
      categoryColor: "brown",
      backgroundImage: "/placeholder.svg?height=128&width=400",
      companyName: "Supersky Energy Private Limited",
      description:
        "Our clean energy arm delivering end-to-end solutions in solar and hybrid renewable energy for businesses and communities.",
      keyServices: ["Rooftop and off-grid solar", "Solar parks (EPC services)", "Rural electrification models"],
      moreServicesCount: 1,
    },
    {
      category: "Infrastructure",
      categoryColor: "orange",
      backgroundImage: "/placeholder.svg?height=128&width=400",
      companyName: "Supersky Project Private Limited",
      description:
        "Focused on infrastructure development and turnkey project execution managing rural roads, water systems, and smart buildings.",
      keyServices: ["Rural road construction", "Water system development", "Smart building solutions"],
      moreServicesCount: 1,
    },
    {
      category: "Media & Communications",
      categoryColor: "blue",
      backgroundImage: "/placeholder.svg?height=128&width=400",
      companyName: "Gondwana Media Pvt Ltd",
      description:
        "A comprehensive media and communications company specializing in digital content creation, rural media outreach, and community engagement.",
      keyServices: ["Digital content creation", "Rural media outreach", "Community engagement programs"],
      moreServicesCount: 1,
    },
  ]

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center  mb-12 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
            Our Private Companies
          </h2>
          <p className="text-center md:text-xl text-gray-600 max-w-3xl mx-auto mt-10">
            Driving economic growth and innovation across critical sectors of the
            Indian economy
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <Card
              key={index}
              category={company.category}
              categoryColor={company.categoryColor}
              backgroundImage={company.backgroundImage}
              companyName={company.companyName}
              description={company.description}
              keyServices={company.keyServices}
              moreServicesCount={company.moreServicesCount}
            />
          ))}
        </div>

        {/* Explore All Companies button */}
        <div className="h-52 flex items-center justify-center ">

      
        <div className="mt-12 mb-12 h-8 p-8 flex justify-center items-center">
          <button className="px-8 py-5 rounded-sm bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-md">
            Explore All Companies
          </button>
        </div>
          </div>
      </div>
    </section>
  )
}

export default PrivateCompanies
