import { privateCompanies, foundations, focusAreas, socialLinks, legalLinks } from "../data/footer.js"
import EarthImage from '../assets/earth.webp'
import logo from '../assets/logo.webp'
export function Footer() {
  return (
    <footer className="min-h-screen text-white">
      {/* Global Outlook and Collaborate Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:px-8 gap-4  pt-[25px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Global Outlook Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Global Outlook</h2>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Gondwana Group is actively expanding its global partnerships to share best practices, co-create models,
              and access global funding for social innovations.
            </p>

            <div className="mb-6">
              <h3 className="text-white font-semibold mb-4">Target Regions:</h3>
              <div className="flex flex-wrap gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-4  text-sm rounded-full font-medium transition-colors ">
                  Southeast Asia
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2  rounded-full text-center text-sm font-medium transition-colors">
                  Africa
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2  rounded-full text-center text-sm font-medium transition-colors">
                  Europe
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">Collaboration Areas:</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Renewable energy access
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Rural healthcare innovation
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Education for marginalised communities
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Environmental resilience projects
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Data-driven rural policy advocacy
                </li>
              </ul>
            </div>

            <button className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Global Partnerships
            </button>
          </div>

          {/* Collaborate With Us Section */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl overflow-hidden h-80">
              <img
                src={EarthImage}
                alt="Earth from space"
                className="absolute inset-0 w-full h-full object-top opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-6 text-slate-800">
                <h3 className="text-xl font-bold mb-3">Collaborate With Us</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  We welcome partnerships with corporations, governments, academic institutions, and international
                  development agencies.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2  rounded-full text-sm font-medium transition-colors">
                    CSR partnerships
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2  rounded-full text-sm font-medium transition-colors">
                    Joint ventures
                  </button>
                </div>

                <p className="text-blue-600 font-semibold text-sm">Let's build futures together.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traditional Footer Section */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-12 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  {/* <div className="w-8 h-8 bg-white rounded flex items-center justify-center mr-3"> */}
                  
                        <img src={logo} alt="Gondwana Group Logo" className="w-full h-full object-contain" /> 
                </div>
                <p className="text-gray-400 text-sm">EMPOWERING EVERYDAY LIVING</p>
              </div>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Driving economic growth and social impact across critical sectors in India
              </p>

              {/* Contact Information */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-gray-600 rounded mr-3 mt-1 flex-shrink-0"></div>
                  <div>
                    <p className="text-white text-sm font-medium mb-1">Head Office</p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      B-333 II Floor, Orchid road, Mall PremisesCHSL Aarey Milk Colony, Royal Palms, Goregaon, East
                      Mumbai-400065
                    </p>
                    <p className="text-gray-400 text-xs">+91-02244821316</p>
                    <p className="text-gray-400 text-xs">rajmangond640@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-4 h-4 bg-gray-600 rounded mr-3 mt-1 flex-shrink-0"></div>
                  <div>
                    <p className="text-white text-sm font-medium mb-1">Registered Office</p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Shop No. 05 Sugamau, Ram Kumar Lodhi Market, Cimap, Lucknow- 226016
                    </p>
                    <p className="text-gray-400 text-xs">+91-02244821316</p>
                    <p className="text-gray-400 text-xs">rajmangond640@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a key={link.id} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    <img src={link.icon} alt={link.label} className="w-6 h-6" />
          
                  </a>
                ))}
              </div>
            </div>

            {/* Private Companies */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Private Companies</h4>
              <ul className="space-y-2">
                {privateCompanies.map((company) => (
                  <li key={company.id}>
                    <a href={company.href} className="text-gray-300 text-sm hover:text-white transition-colors">
                      {company.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Foundations */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Foundations</h4>
              <ul className="space-y-2">
                {foundations.map((foundation) => (
                  <li key={foundation.id}>
                    <a href={foundation.href} className="text-gray-300 text-sm hover:text-white transition-colors">
                      {foundation.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Focus Areas */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Focus Areas</h4>
              <ul className="space-y-2">
                {focusAreas.map((area) => (
                  <li key={area.id}>
                    <a href={area.href} className="text-gray-300 text-sm hover:text-white transition-colors">
                      {area.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright and Legal Links */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-slate-700">
            <p className="text-gray-400 text-sm">© 2024 Gondwana Group. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {legalLinks.map((link) => (
                <a key={link.id} href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
