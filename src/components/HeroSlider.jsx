"use client"

import { useState, useEffect, useRef } from "react"
import GondwanaSection from "./GondwanaSection"
import AboutUsSection from "./AboutUsSection"
import DifferentiatorsSection from "./DifferentiatorsSection"

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMouseOverSlider, setIsMouseOverSlider] = useState(false)
  const containerRef = useRef(null)
  const lastScrollTime = useRef(0)

  const slides = [
    { component: <GondwanaSection />, name: "Gondwana" },
    { component: <AboutUsSection />, name: "About Us" },
    { component: <DifferentiatorsSection />, name: "Our Differentiators" },
  ]

  useEffect(() => {
    const handleScroll = (e) => {
      const container = containerRef.current
      if (!container) return

      const containerRect = container.getBoundingClientRect()
      const now = Date.now()

      const isSliderFullyVisible = containerRect.top <= 0 && containerRect.bottom >= window.innerHeight
      const isSliderPartiallyVisible = containerRect.top < window.innerHeight && containerRect.bottom > 0

      const shouldInterceptScroll = isMouseOverSlider && isSliderPartiallyVisible && !isTransitioning

      if (shouldInterceptScroll && currentSlide >= 0 && currentSlide < slides.length) {
        if (containerRect.bottom < window.innerHeight && currentSlide === slides.length - 1) {
          // Allow normal scrolling to bring the differentiators section fully into view
          return
        }
        e.preventDefault()
      }

      if (now - lastScrollTime.current < 100) {
        return
      }
      lastScrollTime.current = now

      if (!shouldInterceptScroll) {
        return
      }

      const delta = e.deltaY

      if (Math.abs(delta) < 1) return

      setIsTransitioning(true)

      if (delta > 0) {
        // Scrolling down
        if (currentSlide < slides.length - 1) {
          setCurrentSlide((prev) => prev + 1)
        } else {
          setIsTransitioning(false)
          return
        }
      } else {
        // Scrolling up
        if (currentSlide > 0) {
          setCurrentSlide((prev) => prev - 1)
        } else {
          setIsTransitioning(false)
          return
        }
      }

      setTimeout(() => {
        setIsTransitioning(false)
      }, 200)
    }

    const handleMouseEnter = () => {
      setIsMouseOverSlider(true)
    }

    const handleMouseLeave = () => {
      setIsMouseOverSlider(false)
    }

    window.addEventListener("wheel", handleScroll, { passive: false })

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      window.removeEventListener("wheel", handleScroll)
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [currentSlide, isTransitioning, slides.length, isMouseOverSlider])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden h-screen"
      onMouseEnter={() => setIsMouseOverSlider(true)}
      onMouseLeave={() => setIsMouseOverSlider(false)}
    >
      <div
        className="flex flex-col transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateY(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-screen">
            {slide.component}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroSlider
