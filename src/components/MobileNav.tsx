import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBars, 
  faTimes, 
  faChartLine, 
  faLink,
  faCube,
  faGamepad,
  faFan,
  faFlask,
  faMusic,
  faExternalLinkAlt,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { 
  faGithub, 
  faDiscord, 
  faXTwitter, 
  faBluesky 
} from '@fortawesome/free-brands-svg-icons'

interface MobileNavProps {
  onLogoClick: () => void
}

export const MobileNav: React.FC<MobileNavProps> = ({ onLogoClick }) => {
  const [isOpen, setIsOpen] = useState(false)

  const funnyMessages = [
    "Coded with ☕ and questionable life choices",
    "Warning: May contain traces of spaghetti code",
    "Built by a human, not an AI... probably",
    "Made with 99% caffeine, 1% skill",
    "Powered by Stack Overflow and desperation",
    "No CSS was harmed in the making of this site",
    "Debugging in production since 2024",
    "Feature, not a bug... usually"
  ]

  const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)]

  // The navbar links - copied exactly from Navbar.tsx
  const navLinks = [
    { path: "https://status.gioco.lol/", label: "Status", icon: faChartLine },
    { path: "https://full-stack.dev/gioco", label: "Links", icon: faLink },
    { path: "https://creeperhub.net", label: "CreeperHUB", icon: faCube },
    { path: "https://creepercraft.net/", label: "Creepercraft", icon: faGamepad },
    { path: "https://creeperhub.net/otakuforge", label: "OtakuForge", icon: faFan },
    { path: "https://creeperlab.org", label: "CreeperLAB", icon: faFlask }
  ]

  const handleLinkClick = (path: string) => {
    // External link
    window.open(path, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-primary hover:text-secondary transition-colors duration-300"
        aria-label="Open menu"
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>

      {/* Overlay with blur effect */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer - Updated opacity and blur */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white transform transition-all duration-500 ease-out z-50 
          ${isOpen ? 'translate-x-0 shadow-[-10px_0_30px_rgba(0,0,0,0.15)]' : 'translate-x-full'}
          rounded-l-3xl overflow-hidden border-l border-gray-200`}
      >
        <div className="relative h-full p-6">
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => {
                onLogoClick()
                setIsOpen(false)
              }}
              className="flex items-center text-xl font-bold gradient-text"
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
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:text-secondary transition-all duration-300 hover:scale-110"
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          </div>

          {/* Main Navigation Links - COPIED FROM NAVBAR.TSX */}
          <div className="space-y-2 mb-6">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Navigation
            </div>
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className="flex items-center w-full py-4 px-4 text-gray-700 hover:text-primary transition-all duration-300
                  rounded-xl hover:bg-primary/10 transform hover:translate-x-2 hover:shadow-sm
                  border border-transparent hover:border-primary/20 group text-left"
              >
                <FontAwesomeIcon 
                  icon={link.icon} 
                  className="text-primary text-lg mr-3 group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="font-medium">{link.label}</span>
                <FontAwesomeIcon 
                  icon={faExternalLinkAlt} 
                  className="ml-auto text-xs text-gray-400 group-hover:text-primary" 
                />
              </button>
            ))}
          </div>

          {/* Additional quick actions */}
          <div className="space-y-2">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Quick Actions
            </div>
            <Link
              to="/music"
              className="flex items-center py-3 px-4 text-gray-600 hover:text-purple-600 transition-all duration-300
                rounded-xl hover:bg-purple-50 transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon 
                icon={faMusic} 
                className="text-purple-500 text-lg mr-3" 
              />
              <span>My Music</span>
            </Link>
            <button
              onClick={() => handleLinkClick('https://creeperhub.net')}
              className="flex items-center w-full py-3 px-4 text-gray-600 hover:text-green-600 transition-all duration-300
                rounded-xl hover:bg-green-50 transform hover:translate-x-2 text-left"
            >
              <FontAwesomeIcon 
                icon={faExternalLinkAlt} 
                className="text-green-500 text-lg mr-3" 
              />
              <span>All Projects</span>
            </button>
          </div>

          {/* Decorative elements and funny message - Improved visibility */}
          <div className="absolute bottom-8 left-6 right-6">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-4" />
            
            {/* Social links */}
            <div className="flex justify-center space-x-4 mb-4">
              <button
                onClick={() => handleLinkClick('https://github.com/giocoliere')}
                className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={faGithub} className="text-sm" />
              </button>
              <button
                onClick={() => handleLinkClick('https://discord.com/users/842087107908206654')}
                className="p-2 rounded-full bg-gray-100 hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={faDiscord} className="text-sm" />
              </button>
              <button
                onClick={() => handleLinkClick('https://x.com/giocolieredev')}
                className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={faXTwitter} className="text-sm" />
              </button>
              <button
                onClick={() => handleLinkClick('https://bsky.app/profile/giocoliere.dev')}
                className="p-2 rounded-full bg-gray-100 hover:bg-sky-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={faBluesky} className="text-sm" />
              </button>
              <button
                onClick={() => handleLinkClick('mailto:giocoliere@proton.me')}
                className="p-2 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
              </button>
            </div>
            
            <div className="text-center text-sm text-gray-700 font-medium italic leading-relaxed">
              {randomMessage}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
