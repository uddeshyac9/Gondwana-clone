

import { useState } from "react"
import { ChevronDownIcon, Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline"
import logo from '../assets/logo.webp'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navigationItems = [
    {
      name: "About",
      hasDropdown: true,
      dropdownItems: [
        { name: "Our Story", href: "#" },
        { name: "Leadership", href: "#" },
        { name: "Vision & Mission", href: "#" },
        { name: "Awards & Recognition", href: "#" },
      ],
    },
    {
      name: "Companies",
      hasDropdown: true,
      dropdownItems: [
        { name: "Subsidiary 1", href: "#" },
        { name: "Subsidiary 2", href: "#" },
        { name: "Joint Ventures", href: "#" },
        { name: "Partnerships", href: "#" },
      ],
    },
    {
      name: "Foundations",
      hasDropdown: true,
      dropdownItems: [
        { name: "Education Foundation", href: "#" },
        { name: "Healthcare Foundation", href: "#" },
        { name: "Community Development", href: "#" },
        { name: "Environmental Foundation", href: "#" },
      ],
    },
    {
      name: "Sustainability",
      hasDropdown: true,
      dropdownItems: [
        { name: "Environmental Policy", href: "#" },
        { name: "Social Responsibility", href: "#" },
        { name: "Governance", href: "#" },
        { name: "Sustainability Reports", href: "#" },
      ],
    },
    {
      name: "Investors",
      hasDropdown: true,
      dropdownItems: [
        { name: "Financial Reports", href: "#" },
        { name: "Stock Information", href: "#" },
        { name: "Investor Presentations", href: "#" },
        { name: "Corporate Governance", href: "#" },
      ],
    },
    {
      name: "Media",
      hasDropdown: true,
      dropdownItems: [
        { name: "Press Releases", href: "#" },
        { name: "News & Updates", href: "#" },
        { name: "Media Kit", href: "#" },
        { name: "Photo Gallery", href: "#" },
      ],
    },
    { name: "Careers", hasDropdown: false, href: "#" },
    { name: "Contact", hasDropdown: false, href: "#" },
  ]

  const handleMouseEnter = (itemName) => {
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header className="fixed top-0 right-0 w-full z-50 flex flex-col align-center">
      {/* Top Bar */}
      <div className="bg-[#2d3448] text-white text-sm  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around items-center py-4 ">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                <span className="text-[13px] leading-none">+91-02244821316</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
                <span className="text-[13px] leading-none">rajmangond640@gmail.com</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="hover:text-gray-200 transition-colors text-[12px] font-medium tracking-wider uppercase"
              >
                INVESTOR RELATIONS
              </a>
              <a
                href="#"
                className="hover:text-gray-200 transition-colors text-[12px] font-medium tracking-wider uppercase"
              >
                MEDIA CENTER
              </a>
              <a
                href="#"
                className="hover:text-gray-200 transition-colors text-[12px] font-medium tracking-wider uppercase"
              >
                CAREERS
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
           
              <img src={logo} alt="" height={250} width={250} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8  justify-center">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.href || "#"}
                    className="flex items-center gap-1 text-[15px] text-gray-700 hover:text-blue-700 transition-colors py-2 font-medium"
                    aria-haspopup={item.hasDropdown ? "true" : undefined}
                    aria-expanded={item.hasDropdown && activeDropdown === item.name ? "true" : "false"}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDownIcon className="h-4 w-4 ml-0.5 transition-transform duration-200 group-hover:-rotate-180" />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 min-w-56 bg-white rounded-lg shadow-xl ring-1 ring-black/5 border border-slate-100 py-2  z-50">
                      <div className="grid grid-cols-1 gap-0">
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-700 transition-colors p-2"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
              >
                {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg z-40">
            <div className="px-4 py-2 space-y-1 max-h-96 overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                  <button
                    className="flex items-center justify-between w-full py-3 text-left text-gray-800 hover:text-blue-700 transition-colors"
                    onClick={() => {
                      if (item.hasDropdown) {
                        setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      } else {
                        setIsMobileMenuOpen(false)
                      }
                    }}
                    aria-expanded={item.hasDropdown && activeDropdown === item.name ? "true" : "false"}
                  >
                    <span className="font-medium">{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDownIcon
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="pl-4 pb-3 space-y-2 bg-gray-50 rounded-md mb-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block py-2 text-sm text-gray-700 hover:text-blue-700 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
