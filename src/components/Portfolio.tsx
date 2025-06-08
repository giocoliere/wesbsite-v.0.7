import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import AnimatedBackground from './AnimatedBackground'
import Navbar from './Navbar'
import Home from './Home'

const Portfolio: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Handle scroll to section when navigating from other pages
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
      // Clear the state
      navigate(location.pathname, { replace: true })
    }

    // Disable keyboard shortcuts for dev tools
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && e.key === 'I') || 
          (e.ctrlKey && e.shiftKey && e.key === 'J') || 
          (e.ctrlKey && e.shiftKey && e.key === 'C') || 
          (e.ctrlKey && e.key === 'U')) {
        e.preventDefault()
      }
    }

    // Smooth scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('.section-fade-in')
    sections.forEach(section => observer.observe(section))

    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      observer.disconnect()
    }
  }, [location.state, navigate, location.pathname])

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`)
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
    }
  }

  return (
    <>
      {/* Navigation */}
      <Navbar 
        onLogoClick={() => scrollToSection('home')}
        showInternalLinks={true}
      />

      {/* Animated Background with Content */}
      <AnimatedBackground>
        <Home onProjectClick={handleProjectClick} />
      </AnimatedBackground>
    </>
  )
}

export default Portfolio
