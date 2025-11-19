import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import FloatingPaintings from './components/FloatingPaintings'

function App() {
  return (
    <div className="min-h-screen bg-off-white relative overflow-hidden">
      {/* Paintings floating in background */}
      <FloatingPaintings />
      
      {/* Main content with glassmorphism effect */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
          <Hero />
          <Experience />
          <Education />
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default App