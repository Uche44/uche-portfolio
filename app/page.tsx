"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import { Sidebar } from "@/components/layout/sidebar"
import { RightNav } from "@/components/layout/right-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { BlogSection } from "@/components/sections/blog-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ContactSection } from "@/components/sections/contact-section"

const sections = ["home", "about", "blog", "portfolio", "testimonials", "contact"]

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home")
  const [showNav, setShowNav] = useState(false)
  
  const { scrollY } = useScroll()
  
  // Show/hide navigation based on scroll
  useEffect(() => {
    const updateNav = () => {
      const heroHeight = window.innerHeight * 0.8
      setShowNav(window.scrollY > heroHeight)
    }
    
    window.addEventListener("scroll", updateNav)
    updateNav()
    
    return () => window.removeEventListener("scroll", updateNav)
  }, [])
  
  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const handleNavigate = useCallback((section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])
  
  return (
    <div className="relative">
      {/* Fixed navigation */}
      <Sidebar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
        isVisible={showNav}
      />
      <RightNav 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
        isVisible={showNav}
      />
      <MobileNav 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
      />
      
      {/* Main content */}
      <main className="relative">
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection />
        <BlogSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  )
}
