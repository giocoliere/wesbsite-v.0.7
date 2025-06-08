import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle, faHome, faMusic, faEnvelope, faCode, faComments, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faDiscord, faXTwitter, faBluesky, faMastodon } from '@fortawesome/free-brands-svg-icons'
import AnimatedBackground from './AnimatedBackground'
import Navbar from './Navbar'
import Footer from './Footer'

interface NotFoundProps {
  onBackToHome: () => void
}

const NotFound: React.FC<NotFoundProps> = ({ onBackToHome }) => {
  const excuses = [
    "I was too busy coding at 3 AM and my CSS skills went to sleep",
    "My designer friend ghosted me after seeing my first attempt",
    "I thought rainbow gradients were still cool in 2025",
    "ChatGPT had a breakdown when I asked for 'trendy web design'",
    "I accidentally used my old MySpace theme as inspiration",
    "My cat walked across the keyboard during the design phase",
    "I was going through my 'maximalist' phase",
    "The old design was actually an elaborate rickroll attempt",
    "I let my 5-year-old nephew 'help' with the CSS",
    "I was trying to recreate a fever dream I had",
    "Microsoft Paint was my only design tool available",
    "I thought Comic Sans was making a comeback",
    "My RGB keyboard influenced my color choices",
    "I confused a seizure warning with design inspiration",
    "I was experimenting with 'brutalist web design'... unsuccessfully",
    "Sorry... here's a video that might make you laugh: https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "I was inspired by Windows 95 screensavers",
    "My design philosophy was 'more is more, and even more is better'",
    "I thought users enjoyed eye strain as a feature",
    "I mistook a kaleidoscope for a design reference",
    "My reaction when someone said the old design was 'unique': https://media.giphy.com/media/32mC2kXYWCsg0/giphy.gif",
    "When I saw the old page on mobile: https://media.giphy.com/media/ToMjGpjpXMFPshSYGLm/giphy.gif",
    "My design process was basically: https://tenor.com/view/monkey-computer-gif-24225138",
    "My brain during the design phase: https://media.giphy.com/media/3owzW5c1tPq63MPmWk/giphy.gif",
    "When someone asked about color theory: https://tenor.com/view/dog-computer-this-is-fine-gif-15513148",
    "My CSS skills back then: https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif"
  ]

  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)]

  const handleExcuseClick = (excuse: string) => {
    if (excuse.includes('youtube.com/watch?v=dQw4w9WgXcQ')) {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
    } else if (excuse.includes('tenor.com') || excuse.includes('giphy.com')) {
      const urlMatch = excuse.match(/(https?:\/\/[^\s]+)/);
      if (urlMatch) {
        window.open(urlMatch[0], '_blank')
      }
    }
  }

  const renderExcuseContent = (excuse: string) => {
    if (excuse.includes('tenor.com') || excuse.includes('giphy.com')) {
      const parts = excuse.split('https://');
      const textPart = parts[0].trim().replace(/:\s*$/, '');
      const gifUrl = 'https://' + parts[1];
      
      return (
        <div className="space-y-3">
          <p className="text-gray-600 italic">"{textPart}"</p>
          <div className="bg-white rounded-lg p-2 border">
            <img 
              src={getEmbedUrl(gifUrl)} 
              alt="Reaction GIF" 
              className="w-full max-w-xs mx-auto rounded"
              style={{ maxHeight: '200px', objectFit: 'contain' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <p className="text-xs text-gray-500 mt-2 text-center">Click to view full GIF</p>
          </div>
        </div>
      );
    }
    return <p className="text-gray-600 italic">"{excuse}"</p>;
  }

  const getEmbedUrl = (url: string) => {
    if (url.includes('tenor.com')) {
      // Extract Tenor GIF ID and create embed URL
      const match = url.match(/gif-(\d+)/);
      if (match) {
        return `https://media.tenor.com/images/${match[1]}/tenor.gif`;
      }
      // Fallback for direct tenor links
      return url.replace('tenor.com/view/', 'media.tenor.com/') + '.gif';
    } else if (url.includes('giphy.com')) {
      // For Giphy media URLs, return as is
      if (url.includes('media.giphy.com')) {
        return url;
      }
      // Extract Giphy ID for embed
      const match = url.match(/giphy\.com\/media\/([^\/]+)/);
      if (match) {
        return `https://media.giphy.com/media/${match[1]}/giphy.gif`;
      }
    }
    return url;
  }

  return (
    <>
      {/* Navigation */}
      <Navbar 
        onLogoClick={onBackToHome}
        showInternalLinks={false}
      />

      {/* Animated Background with Content */}
      <AnimatedBackground>
        <div className="container mx-auto px-6 py-8 min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Main 404 Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-12 shadow-lg border border-gray-200 mb-8">
              <div className="mb-8">
                <h1 className="text-8xl md:text-9xl font-bold mb-4">
                  <span className="gradient-text">404</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Oops! Page Not Found
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Looks like you've wandered into the digital void. Don't worry, it happens to the best of us! 🕳️
                </p>
              </div>

              {/* Quick Links Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  <span className="gradient-text">Quick Links</span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <a href="https://github.com/giocoliere" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                    <FontAwesomeIcon icon={faGithub} className="text-gray-800 text-lg mr-2" />
                    <span className="font-medium text-sm">GitHub</span>
                  </a>
                  <a href="mailto:giocoliere@proton.me" className="flex items-center justify-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                    <FontAwesomeIcon icon={faEnvelope} className="text-red-500 text-lg mr-2" />
                    <span className="font-medium text-sm">Email</span>
                  </a>
                  <a href="https://discord.com/users/842087107908206654" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                    <FontAwesomeIcon icon={faDiscord} className="text-indigo-600 text-lg mr-2" />
                    <span className="font-medium text-sm">Discord</span>
                  </a>
                  <a href="https://x.com/giocolieredev" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                    <FontAwesomeIcon icon={faXTwitter} className="text-black text-lg mr-2" />
                    <span className="font-medium text-sm">X (Twitter)</span>
                  </a>
                  <a href="https://bsky.app/profile/giocoliere.dev" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                    <FontAwesomeIcon icon={faBluesky} className="text-sky-500 text-lg mr-2" />
                    <span className="font-medium text-sm">Bluesky</span>
                  </a>
                  <Link to="https://mas.to/@gioco" className="flex items-center justify-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                    <FontAwesomeIcon icon={faMastodon} className="text-purple-500 text-lg mr-2" />
                    <span className="font-medium text-sm">Mastodon</span>
                  </Link>
                </div>
              </div>

              {/* Improved Confession Section */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 mb-8 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="text-white text-lg" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Developer Confession
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  <strong>Why does the 404 page look like a unicorn exploded?</strong>
                </p>
                <div 
                  className={`bg-gray-50 rounded-lg p-4 border-l-4 border-primary ${(randomExcuse.includes('youtube.com') || randomExcuse.includes('tenor.com') || randomExcuse.includes('giphy.com')) ? 'cursor-pointer hover:bg-gray-100' : ''}`}
                  onClick={() => handleExcuseClick(randomExcuse)}
                >
                  {renderExcuseContent(randomExcuse)}
                </div>
                <p className="text-gray-500 text-xs mt-3">
                  - Giocoliere, moments before this redesign
                </p>
                {(randomExcuse.includes('youtube.com') || randomExcuse.includes('tenor.com') || randomExcuse.includes('giphy.com')) && (
                  <p className="text-blue-500 text-xs mt-1">
                    👆 Click the content above for the {randomExcuse.includes('youtube.com') ? 'video' : 'full GIF'}!
                  </p>
                )}
              </div>

              {/* Navigation Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Link 
                  to="/"
                  className="flex items-center justify-center px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faHome} className="mr-3" />
                  Back to Home
                </Link>
                <Link 
                  to="/music"
                  className="flex items-center justify-center px-6 py-4 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faMusic} className="mr-3" />
                  Listen to My Music
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">9+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">∞</div>
                  <div className="text-sm text-gray-600">Coffee Cups</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-gray-600">404 Designs</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">1</div>
                  <div className="text-sm text-gray-600">Brain cell</div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FontAwesomeIcon icon={faCode} className="mr-3 text-primary" />
                  Still Here?
                </h3>
                <p className="text-gray-600 mb-4">
                  Since you found this page, why not check out my actual work? I promise it's better designed than the 404 page! 😅
                </p>
                <a 
                  href="https://creeperhub.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                  View My Projects
                </a>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FontAwesomeIcon icon={faComments} className="mr-3 text-primary" />
                  Found a Bug?
                </h3>
                <p className="text-gray-600 mb-4">
                  If something's broken (other than your expectations after seeing the website design), let me know!
                </p>
                <a 
                  href="mailto:giocoliere@proton.me"
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  Report Issue
                </a>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">
                💡 Fun Fact
              </h4>
              <p className="text-blue-700 text-sm">
                This 404 page has a worse design than some of my actual projects. 
                Priorities: ❌ Working features ✅ Pretty error pages
                <br />
                (Okay...not so pretty, but the "wesbsite" is not out the beta yet!)
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </AnimatedBackground>
    </>
  )
}

export default NotFound
