import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MobileNav from './MobileNav'

interface NavbarProps {
  onLogoClick?: () => void
  showInternalLinks?: boolean
  className?: string
}

const Navbar: React.FC<NavbarProps> = ({ 
  onLogoClick, 
  showInternalLinks = false,
  className = 'portfolio-navbar'
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick()
    } else {
      navigate('/')
    }
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const mainContent = document.querySelector('.main-content-wrapper')
    const element = document.getElementById(sectionId)
    if (element && mainContent) {
      const elementTop = element.offsetTop - 100
      mainContent.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={className}>
      {/* Fixed flexbox layout - hamburger menu always at right */}
      <div className="flex flex-row justify-between items-center">
        <button 
          onClick={handleLogoClick}
          className="flex items-center text-primary font-semibold text-lg hover:scale-105 transition-transform duration-300"
        >
          <img 
            src="/assets/img/logo.png" 
            alt="Giocoliere Logo" 
            className="w-8 h-8 mr-3 rounded-full"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          Giocoliere
        </button>
        
        {/* Desktop Navigation Links - UNTOUCHED */}
        <div className="hidden md:flex portfolio-nav-links">
          <a href="https://status.gioco.lol/" target="_blank" rel="noopener noreferrer">Status</a>
          <a href="https://full-stack.dev/gioco" target="_blank" rel="noopener noreferrer">Links</a>
          <a href="https://creeperhub.net" target="_blank" rel="noopener noreferrer">CreeperHUB</a>
          <a href="https://creepercraft.net/" target="_blank" rel="noopener noreferrer">Creepercraft</a>
          <a href="https://creeperhub.net/otakuforge" target="_blank" rel="noopener noreferrer">OtakuForge</a>
          <a href="https://creeperlab.org" target="_blank" rel="noopener noreferrer">CreeperLAB</a>
        </div>
        
        {/* Mobile Navigation - Always at right side */}
        <MobileNav onLogoClick={handleLogoClick} />
      </div>
    </nav>
  )
}

export default Navbar
