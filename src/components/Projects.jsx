import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const Projects = () => {
  const portfolioData = {
    projects: [
      {
        title: "Mon Portfolio",
        description: "Ce site web que vous consultez actuellement, développé avec React, Tailwind CSS et Framer Motion pour présenter mon parcours en histoire de l'art dans une ambiance muséale moderne.",
        link: "#",
        linkText: "Vous y êtes !"
      }
    ]
  }

  return (
    <motion.section 
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="backdrop-blur-md bg-white/80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-white/20">
        <h2 className="text-2xl sm:text-3xl font-playfair text-charcoal mb-6 sm:mb-8 relative inline-block">
          Projets
          <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gold"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target={project.link.startsWith('http') ? '_blank' : '_self'}
              rel={project.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className="block p-4 sm:p-6 rounded-xl bg-white border border-border-light hover:border-gold hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <h3 className="text-lg sm:text-xl font-playfair text-charcoal mb-3 relative inline-block">
                {project.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </h3>
              
              <p className="text-charcoal font-lato text-sm sm:text-base leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex items-center gap-2 text-terracotta group-hover:text-gold transition-colors duration-300">
                <span className="font-medium">{project.linkText}</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Add more project cards easily */}
        <motion.div
          className="mt-6 sm:mt-8 p-4 sm:p-6 border-2 border-dashed border-border-light rounded-xl text-center hover:border-gold transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-charcoal font-lato text-sm sm:text-base">
            D'autres projets à venir...
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Projects