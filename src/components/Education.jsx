import React from 'react'
import { motion } from 'framer-motion'

const Education = () => {
  const portfolioData = {
    education: [
      {
        degree: "Licence d'Histoire de l'Art (L3)",
        school: "Faculté des Sciences Historiques de Strasbourg",
        date: "En cours"
      },
      {
        degree: "Licence d'Histoire de l'Art (L2)",
        school: "Faculté des Sciences Historiques",
        date: "2023"
      },
      {
        degree: "Baccalauréat général option Mathématique et Physique-Chimie",
        school: "Lycée Henri Loritz",
        date: "2022"
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
          Formations
          <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gold"></span>
        </h2>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              className="p-4 sm:p-6 rounded-xl border-l-4 border-gold bg-white/50 hover:bg-white/70 transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <h3 className="text-lg sm:text-xl font-playfair text-charcoal mb-2">
                {edu.degree}
              </h3>
              <p className="text-base sm:text-lg font-lato text-terracotta font-medium mb-2">
                {edu.school}
              </p>
              <span className="text-xs sm:text-sm font-lato text-charcoal italic bg-gold/10 px-3 py-1 rounded-full inline-block">
                {edu.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Education