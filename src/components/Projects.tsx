import React from 'react'

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
  websiteUrl?: string
}

interface ProjectsProps {
  onProjectClick: (projectId: string) => void
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const projects: Project[] = [
    { 
      id: "creeperhub",
      title: "CreeperHUB", 
      description: "The main HUB for all my projects.", 
      tags: ["Development", "Web App", "React"],
      image: "https://raw.githubusercontent.com/creeperhub/.github/refs/heads/main/profile/bannerV1.png",
      websiteUrl: "https://creeperhub.net"
    },
    { 
      id: "creepercraft",
      title: "Creepercraft", 
      description: "Minecraft server network with custom plugins and unique gameplay experiences.", 
      tags: ["Minecraft", "Java", "Bedrock"],
      image: "https://raw.githubusercontent.com/creeperhub/.github/refs/heads/main/profile/thumb-1.jpeg",
      websiteUrl: "https://creepercraft.net"
    },
    { 
      id: "humanaelitterae",
      title: "Humanae Litterae", 
      description: "A website dedicated to an italian writer, showcasing their works and contributions.", 
      tags: ["Website", "Poetry", "React"],
      image: "https://img.humanaelitterae.com/banner.jpg",
      websiteUrl: "https://humanaelitterae.com"
    }
  ]

  const handleWebsiteClick = (url: string, event: React.MouseEvent) => {
    event.stopPropagation()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-100 to-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 relative">
            {projects.map((project, index) => (
              <div key={index} className="project-item bg-white p-6 rounded-xl shadow-sm relative cursor-pointer group hover:shadow-lg transition-shadow duration-300">
                <div className="project-preview cursor-pointer" onClick={() => onProjectClick(project.id)}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                
                {/* Website Link Button */}
                {project.websiteUrl && (
                  <button
                    onClick={(e) => handleWebsiteClick(project.websiteUrl!, e)}
                    className="absolute top-4 right-4 z-30 p-2 hover:scale-110 transition-transform duration-300"
                    title={`Visit ${project.title} website`}
                  >
                    <i className="fas fa-globe text-primary text-xl hover:text-secondary transition-colors duration-300"></i>
                  </button>
                )}
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div 
                  className="absolute inset-0 z-20 cursor-pointer"
                  onClick={() => onProjectClick(project.id)}
                />
              </div>
            ))}
          </div>
          
          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <a
              href="https://creeperhub.net/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <i className="fas fa-external-link-alt mr-3"></i>
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
