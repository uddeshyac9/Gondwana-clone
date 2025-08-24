"use client"

import { useState } from "react"
import "./App.css"
import Header from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import HeroSlider from "./components/HeroSlider.jsx"
import ProfileSection from "./components/ProfileSection.jsx"
import PrivateCompanies from "./components/PrivateCompanies.jsx"
import NonProfitCompanies from "./components/NonProfitCompanies.jsx"
function App() {
 

  return (
    <div className="w-full h-full">
      <Header />

      {/* Background Pattern */}
 
        <HeroSlider />
             <main className="flex flex-col justify-center items-center">
        <ProfileSection />
         <div className="w-full flex justify-center items-center bg-gray-50 ">
          <PrivateCompanies/>
         
          </div>
           <div className="w-full flex justify-center items-center bg-white ">
          <NonProfitCompanies/>
           </div>


          <div className="w-full flex justify-center items-center bg-slate-800 ">
          <Footer />

          </div>
            
      </main>
     
    
    
    </div>
  )
}

export default App
