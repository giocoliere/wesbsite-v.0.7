import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faDiscord, faXTwitter, faBluesky } from '@fortawesome/free-brands-svg-icons'

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xrbkenbn")

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <div className="text-green-600 text-5xl mb-4">
                <i className="fas fa-check-circle"></i>
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Message Sent Successfully!</h2>
              <p className="text-green-700 text-lg mb-6">
                Thanks for reaching out! I'll get back to you as soon as possible.
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-6">
              Feel free to reach out if you're interested in collaborating, have questions about my projects, or just want to connect!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a 
                href="mailto:giocoliere@proton.me"
                className="inline-flex items-center px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <FontAwesomeIcon 
                  icon={faEnvelope} 
                  className="text-primary text-lg mr-3 group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="group-hover:text-primary transition-colors duration-300 font-medium">Email • giocoliere@proton.me</span>
              </a>
              <a 
                href="https://github.com/giocoliere"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <FontAwesomeIcon 
                  icon={faGithub} 
                  className="text-primary text-lg mr-3 group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="group-hover:text-primary transition-colors duration-300 font-medium">GitHub • @giocoliere</span>
              </a>
              <a 
                href="https://discord.com/users/842087107908206654"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <FontAwesomeIcon 
                  icon={faDiscord} 
                  className="text-primary text-lg mr-3 group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="group-hover:text-primary transition-colors duration-300 font-medium">Discord • @.giocoliere</span>
              </a>
              <a 
                href="https://x.com/giocolieredev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <FontAwesomeIcon 
                  icon={faXTwitter} 
                  className="text-primary text-lg mr-3 group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="group-hover:text-primary transition-colors duration-300 font-medium">X (Twitter) • @giocolieredev</span>
              </a>
              <a 
                href="https://bsky.app/profile/giocoliere.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <FontAwesomeIcon 
                  icon={faBluesky} 
                  className="text-primary text-lg mr-3 group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="group-hover:text-primary transition-colors duration-300 font-medium">Bluesky • @giocoliere.dev</span>
              </a>
              <a 
                href="https://time.is/Italy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <FontAwesomeIcon 
                  icon={faClock} 
                  className="text-primary text-lg mr-3 group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="group-hover:text-primary transition-colors duration-300 font-medium">Italy (CET)</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button 
                type="submit" 
                disabled={state.submitting}
                className={`px-6 py-3 gradient-bg text-white rounded-lg font-medium transition shadow-lg w-full ${
                  state.submitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:opacity-90'
                }`}
              >
                {state.submitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
