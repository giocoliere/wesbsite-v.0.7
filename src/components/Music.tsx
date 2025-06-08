import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedBackground from './AnimatedBackground'
import Navbar from './Navbar'
import Footer from './Footer'

const Music: React.FC = () => {
  useEffect(() => {
    // Load Elfsight platform script dynamically
    const loadElfsightScript = () => {
      // Check if script already exists
      if (document.querySelector('script[src*="elfsight.com"]')) {
        return
      }

      const script = document.createElement('script')
      script.src = 'https://static.elfsight.com/platform/platform.js'
      script.setAttribute('data-use-service-core', '')
      script.defer = true
      script.onload = () => {
        console.log('Elfsight script loaded successfully')
        // Force widget refresh if needed
        if (window.ElfSight) {
          window.ElfSight.refresh()
        }
      }
      script.onerror = () => {
        console.error('Failed to load Elfsight script')
      }
      document.head.appendChild(script)
    }

    // Load script after component mounts
    const timer = setTimeout(loadElfsightScript, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {/* Navigation */}
      <Navbar 
        onLogoClick={() => {}}
        showInternalLinks={false}
      />

      {/* Animated Background with Content */}
      <AnimatedBackground>
        <div className="container mx-auto px-6 py-8">
          <Link 
            to="/"
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm text-primary border border-primary/20 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group mb-8"
          >
            <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform duration-300"></i> 
            Back to Home
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">🎵 My Music</span>
              </h1>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <i className="fas fa-music text-white text-2xl"></i>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Music as a Hobby
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Welcome to my musical corner! 🎼 Music production is one of my favorite hobbies outside of coding. 
                  Here you can listen to some tracks I've created during my free time when i was a kid. It's nothing professional, 
                  just me experimenting with sounds, beats, and melodies that inspire me.
                </p>
                <p className="text-md text-gray-500 mb-8">
                  Feel free to listen and let me know what you think! Each track represents a part of a project i 
                  wanted to do when i was a kid. Hope you enjoy them as much as I enjoyed making them! 🎧
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    🎵 Listen Below
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Use the music player below to explore my tracks. Each song tells a different story!
                  </p>
                </div>
              </div>
            </div>
            
            {/* Music Player Widget */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Music Player
                </h3>
                <p className="text-gray-600 text-sm">
                  Click play to start listening to my collection
                </p>
              </div>
              
              {/* Elfsight Music Player Widget */}
              <div 
                className="elfsight-app-c052d5a6-d56e-4d74-875b-aa31caea75be" 
                data-elfsight-app-lazy
                style={{ minHeight: '400px' }}
              ></div>
            </div>
            
            {/* Additional Info Section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <i className="fas fa-headphones text-primary text-xl mr-3"></i>
                  <h4 className="text-lg font-semibold text-gray-800">Genre & Style</h4>
                </div>
                <p className="text-gray-600">
                  I experiment with various electronic genres, ambient sounds, and sometimes mix in some 
                  chill beats. No specific style - just whatever feels right!
                </p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <i className="fas fa-tools text-primary text-xl mr-3"></i>
                  <h4 className="text-lg font-semibold text-gray-800">Tools & Setup</h4>
                </div>
                <p className="text-gray-600">
                  Created using various tools and apps on my mobile during late-night coding sessions. 
                  Music helps me stay creative and focused!
                </p>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Enjoyed the Music? 🎶
                </h4>
                <p className="text-gray-600 mb-4">
                  Great! Now that you've had a chance to listen, let's get back to the main page.
                </p>
                <Link 
                  to="/"
                  state={{ scrollTo: 'contact' }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <i className="fas fa-globe mr-2"></i>
                  Go to Main Page
                </Link>
              </div>
            </div>
          </div>
          
          {/* Footer inside the main content area */}
          
        </div>
        <Footer />
      </AnimatedBackground>
    </>
  )
}

export default Music
