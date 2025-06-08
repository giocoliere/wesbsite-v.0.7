import React, { useState } from 'react'
import ContactPopup from './ContactPopup'

const Hero: React.FC = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)

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
      <section id="home" className="min-h-screen flex items-center pt-8 relative overflow-hidden">
        <div className="container mx-auto px-6 py-6 md:py-1 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-6">
                Hi, I'm <span className="gradient-text">Giocoliere</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600">
                A human... I guess
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                I'm a random dev working on exciting projects including Creepercraft, CreeperLAB, and various other developments. 
                I'm passionate about creating clean, efficient, and user-friendly applications.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setIsContactPopupOpen(true)}
                  className="btn-primary px-6 py-3 gradient-bg text-white rounded-lg font-medium hover:opacity-90 transition shadow-lg"
                >
                  Contact Me
                </button>
                <a
                  href="https://creeperhub.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition inline-block text-center"
                >
                  My Work
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 gradient-bg rounded-2xl opacity-20 blur-xl animate-pulse-slow"></div>
                <img 
                  src="/assets/img/default2.png" 
                  alt="Developer portrait" 
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-xl animate-float"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactPopup 
        isOpen={isContactPopupOpen} 
        onClose={() => setIsContactPopupOpen(false)} 
      />
    </>
  )
}

export default Hero
