import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const portfolioData = {
    experience: [
      {
        title: "Téléconseiller pour les Services Étudiants",
        company: "Centre régional des œuvres universitaires et scolaires",
        logo: "/Logo/logo-crous.png",
        website: "https://www.crous-strasbourg.fr/",
        date: "Mars 2024 - Présent",
        description: "Prise en charge d'une cinquantaine d'appels par jour. Assistance et guidance des étudiants pour les bourses sur critères sociaux, le logement et autres sujets. Assimilation rapide d'une circulaire complexe et résolution efficace des problématiques étudiantes."
      },
      {
        title: "Ludothécaire",
        company: "Ludothèque Saint-Nicolas",
        logo: "/Logo/ludotheque.png",
        website: "https://www.nancy.fr/culture/bibliotheques-mediatheques-de-nancy/ludotheque-saint-nicolas",
        date: "Juillet 2023 - Août 2023", 
        description: "Accueil de 80 visiteurs par jour en moyenne. Introduction variée à des jeux de société dans une collection de plus de 20 000 jeux. Médiation culturelle et animation auprès d'un public diversifié."
      },
      {
        title: "Bénévole polyvalent",
        company: "Musée Adolf Michaelis",
        logo: "/Logo/musee_adolf_michaelis.png",
        website: "https://amamstrasbourg.org/",
        date: "Mars 2023 - Présent",
        description: "Accueil des visiteurs, orientation dans les expositions et assistance lors d'événements spéciaux. Contribution active à la vie culturelle du musée et à la médiation du patrimoine artistique."
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
          Expériences Professionnelles
          <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gold"></span>
        </h2>

        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl border border-border-light hover:border-gold/50 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Logo */}
              <motion.a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 self-start lg:self-auto"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 border-border-light bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300 hover:border-gold">
                  <img
                    src={exp.logo}
                    alt={`Logo ${exp.company}`}
                    className={`w-full h-full object-contain ${exp.logo.includes('crous') ? 'transform scale-[2]' : ''}`}
                  />
                </div>
              </motion.a>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-playfair text-charcoal mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-base sm:text-lg font-lato text-gold font-medium mb-2">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm font-lato text-terracotta italic bg-gold/10 px-3 py-1 rounded-full self-start">
                    {exp.date}
                  </span>
                </div>
                <p className="text-charcoal font-lato text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience