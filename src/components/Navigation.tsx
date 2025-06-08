import React from 'react'
import { Link } from 'react-router-dom'

interface NavigationProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (isOpen: boolean) => void
}

const Navigation: React.FC<NavigationProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300">
            Giocoliere
          </Link>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link text-gray-700 hover:text-primary">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link text-gray-700 hover:text-primary">About</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link text-gray-700 hover:text-primary">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link text-gray-700 hover:text-primary">Projects</button>
            <button onClick={() => scrollToSection('faq')} className="nav-link text-gray-700 hover:text-primary">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-gray-700 hover:text-primary">Contact</button>
          </div>
          <button 
            className="md:hidden focus:outline-none transition-transform duration-300 hover:scale-110" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl text-gray-700 transition-all duration-300`}></i>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden mt-4 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-4 overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-3 py-4">
            <button onClick={() => scrollToSection('home')} className="nav-link text-gray-700 hover:text-primary text-left">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link text-gray-700 hover:text-primary text-left">About</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link text-gray-700 hover:text-primary text-left">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link text-gray-700 hover:text-primary text-left">Projects</button>
            <button onClick={() => scrollToSection('faq')} className="nav-link text-gray-700 hover:text-primary text-left">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-gray-700 hover:text-primary text-left">Contact</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
