import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from './components/Portfolio'
import NotFound from './components/NotFound'
import ProjectDetail from './components/ProjectDetail'
import Music from './components/Music'

function App() {
  const handleBackToHome = () => {
    window.location.href = '/'
  }

  // Discord redirect component
  const DiscordRedirect = () => {
    React.useEffect(() => {
      window.location.href = "https://discord.com/users/842087107908206654"
    }, [])
    
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to Discord...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="font-sans antialiased overflow-x-hidden" 
         onContextMenu={(e) => e.preventDefault()}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
            <Route path="/music" element={<Music />} />
            <Route path="/discord" element={<DiscordRedirect />} />
            {/* Catch all non-existent routes and show 404 page */}
            <Route path="*" element={<NotFound onBackToHome={handleBackToHome} />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
