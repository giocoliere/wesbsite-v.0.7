import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <img 
              src="/assets/creepercraft/creeperhub.png" 
              alt="About me illustration" 
              className="w-64 h-64 rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-lg text-gray-700 mb-6">
              I'm Giocoliere, a random Developer working on exciting projects like CreeperHUB, 
              Otakuforge, and various other developments. My journey in tech started when I built a prototype for
             a Minecraft server, which later became my main project: <a href="https://creepercraft.net" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Creepercraft</a>.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I specialize in JavaScript ecosystems including React, Node.js, and modern frameworks. 
              I love solving complex problems and creating intuitive user experiences for gaming and web applications.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              When I'm not coding, you can find me working on Minecraft servers, experimenting with new technologies, 
              or building creative projects for the gaming / anime / dev community.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                <i className="fas fa-briefcase text-primary mr-2"></i>
                <span>7+ Years of daydreaming</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                <i className="fas fa-project-diagram text-secondary mr-2"></i>
                <span>9+ Main Projects</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                <i className="fas fa-project-diagram text-primary mr-2"></i>
                <span>8+ Sub-projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
