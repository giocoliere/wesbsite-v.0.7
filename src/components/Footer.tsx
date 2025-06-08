import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faDiscord, faXTwitter, faBluesky } from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => {
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
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <button onClick={() => scrollToSection('home')} className="flex items-center text-2xl font-bold gradient-text">
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
            <p className="mt-2 text-gray-400">A human... I guess.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://status.gioco.lol" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Status</a>
            <a href="https://links.gioco.lol" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Links</a>
            <a href="https://creeperhub.net" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">CreeperHUB</a>
            <a href="https://creepers.sbs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">creepers.sbs</a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} Giocoliere. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/giocoliere" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://discord.com/users/842087107908206654" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a href="https://x.com/giocolieredev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://bsky.app/profile/giocoliere.dev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition">
              <FontAwesomeIcon icon={faBluesky} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
