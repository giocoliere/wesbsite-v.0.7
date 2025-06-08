import React from 'react'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

interface HomeProps {
  onProjectClick: (projectId: string) => void
}

const Home: React.FC<HomeProps> = ({ onProjectClick }) => {
  return (
    <main>
      <div className="section-fade-in">
        <Hero />
      </div>
      <div className="section-fade-in">
        <About />
      </div>
      <div className="section-fade-in">
        <Skills />
      </div>
      <div className="section-fade-in">
        <Projects onProjectClick={onProjectClick} />
      </div>
      <div className="section-fade-in">
        <Contact />
      </div>
      
      <Footer />
    </main>
  )
}

export default Home
