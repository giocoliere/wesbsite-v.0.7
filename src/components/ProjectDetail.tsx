import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AnimatedBackground from './AnimatedBackground'
import Navbar from './Navbar'
import Footer from './Footer'

interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  features?: string[]
  technologies?: string[]
  demoLink?: string
  repoLink?: string
  websiteLink?: string
  images?: string[]
  mainImage?: string
  tags: string[]
}

const ProjectDetail: React.FC = () => {
  const navigate = useNavigate()
  const { projectId } = useParams<{ projectId: string }>()

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  // FIXED: Move project data outside of component or use useMemo
  const projectsData = useMemo(() => [
    {
      id: 'creeperhub',
      title: 'CreeperHUB',
      description: 'The main HUB for all my projects.',
      longDescription: 'CreeperHUB serves as the central platform that connects and showcases all my development projects. It provides a unified interface for users to explore and interact with the various applications and services I\'ve created.',
      features: [
        'Unified dashboard for all projects',
        'User authentication and profiles',
        'Project showcase and documentation',
        'API integrations with other services'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Docker'],
      websiteLink: 'https://creeperhub.net',
      repoLink: 'https://github.com/creeperhub',
      images: [
        'https://raw.githubusercontent.com/creeperhub/.github/refs/heads/main/profile/bannerV1.png',
        'https://raw.githubusercontent.com/creeperhub/.github/refs/heads/main/profile/thumb-1.jpeg'
      ],
      mainImage: 'https://raw.githubusercontent.com/creeperhub/.github/refs/heads/main/profile/bannerV1.png',
      tags: ['Development', 'Web App', 'React']
    },
    {
      id: 'creepercraft',
      title: 'Creepercraft',
      description: 'Minecraft server network with custom plugins and unique gameplay experiences.',
      longDescription: 'Creepercraft is a Minecraft server network that offers unique gameplay modes and custom-developed plugins. It provides players with innovative experiences beyond the standard Minecraft gameplay.',
      features: [
        'Custom game modes and plugins',
        'Cross-platform play (Java & Bedrock)',
        'Player economy and progression systems',
        'Community events and challenges'
      ],
      technologies: ['Java', 'Spigot API', 'Redis', 'MySQL', 'Docker'],
      websiteLink: 'https://creepercraft.net',
      images: [
        'https://raw.githubusercontent.com/creeperhub/.github/refs/heads/main/profile/thumb-1.jpeg',
        'https://raw.githubusercontent.com/creeperhub/.github/refs/heads/main/profile/bannerV1.png'
      ],
      mainImage: 'https://raw.githubusercontent.com/creeperhub/.github/refs/heads/main/profile/thumb-1.jpeg',
      tags: ['Minecraft', 'Java', 'Bedrock']
    },
    {
      id: 'humanaelitterae',
      title: 'Humanae Litterae',
      description: 'A website dedicated to an Italian writer, showcasing their works and contributions.',
      longDescription: 'Humanae Litterae is a digital platform showcasing the literary works and contributions of a notable Italian writer. The site serves as both a portfolio and archive, making important cultural works accessible to a wider audience.',
      features: [
        'Extensive literary catalog',
        'Biographical information and timeline',
        'Interactive reading experience',
        'Search and categorization of works'
      ],
      technologies: ['React', 'Next.js', 'Contentful CMS', 'Vercel'],
      websiteLink: 'https://humanaelitterae.com',
      images: [
        'https://img.humanaelitterae.com/banner.jpg',
        'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80'
      ],
      mainImage: 'https://img.humanaelitterae.com/banner.jpg',
      tags: ['Website', 'Poetry', 'React']
    }
  ], []); // Empty dependency array since this data doesn't change

  // FIXED: Use useMemo for derived state instead of useState + useEffect
  const project = useMemo(() => {
    return projectsData.find(p => p.id === projectId) || null;
  }, [projectId, projectsData]);

  // If project not found, navigate back to home
  useEffect(() => {
    if (!project && projectId) {
      navigate('/', { replace: true });
    }
  }, [project, projectId, navigate]);

  // Simple function to open image modal
  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  // Simple function to close image modal
  const closeImageModal = () => {
    setSelectedImageIndex(null);
  };

  if (!project) {
    return null; // Or a loading state
  }

  return (
    <>
      {/* Navigation */}
      <Navbar 
        onLogoClick={() => navigate('/')}
        showInternalLinks={false}
      />

      {/* Animated Background with Content */}
      <AnimatedBackground>
        <div className="container mx-auto px-6 py-8">
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm text-primary border border-primary/20 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group mb-8"
          >
            <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform duration-300"></i> 
            Back to Projects
          </button>
          
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-200/50">
            {/* Project Header */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Main Project Image */}
            {project.mainImage && (
              <div className="w-full mb-8 overflow-hidden rounded-xl border border-gray-200/50 shadow-sm">
                <img 
                  src={project.mainImage} 
                  alt={`${project.title} main image`}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  onClick={() => project.images && openImageModal(0)}
                />
              </div>
            )}
            
            {/* Project Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 gradient-text">About the Project</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {project.longDescription || project.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4 gradient-text">Key Features</h2>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4 gradient-text">Technologies Used</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-2 bg-gray-100 text-gray-800 rounded-lg inline-flex items-center"
                      >
                        <i className="fas fa-code-branch mr-2 text-primary"></i>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Gallery */}
            {project.images && project.images.length > 1 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 gradient-text">Project Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.images.map((image, index) => (
                    <div 
                      key={index}
                      className="aspect-video overflow-hidden rounded-lg border border-gray-200/50 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300"
                      onClick={() => openImageModal(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {project.websiteLink && (
                <a 
                  href={project.websiteLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <i className="fas fa-globe mr-2"></i>
                  Visit Website
                </a>
              )}
              
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <i className="fas fa-play mr-2"></i>
                  View Demo
                </a>
              )}
              
              {project.repoLink && (
                <a 
                  href={project.repoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <i className="fab fa-github mr-2"></i>
                  View Source
                </a>
              )}
            </div>
          </div>
          
          {/* Footer */}
          
        </div>
        <Footer />
      </AnimatedBackground>

      {/* Photo Zoom Modal */}
      {selectedImageIndex !== null && project.images && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <button 
            className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
            onClick={closeImageModal}
          >
            <i className="fas fa-times"></i>
          </button>
          
          <div className="max-w-4xl max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <img 
              src={project.images[selectedImageIndex]} 
              alt={`${project.title} full size`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
          
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {project.images.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full ${selectedImageIndex === index ? 'bg-white' : 'bg-gray-500'}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImageIndex(index)
                  }}
                ></button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default ProjectDetail
