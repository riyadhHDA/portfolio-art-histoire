import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

const Hero = () => {
  const portfolioData = {
    name: "Riyadh Hadjba",
    title: "Étudiant en Histoire de l'Art",
    about: "Étudiant passionné en 3ème année de licence d'histoire de l'art à la Faculté des Sciences Historiques de Strasbourg. Je me consacre à l'étude et à la valorisation du patrimoine artistique, combinant mes compétences en médiation culturelle avec une approche moderne de la conservation. Bilingue français-anglais et compétent en programmation Python, je cherche à créer des ponts entre l'art traditionnel et les technologies contemporaines.",
    contact: [
      { type: "email", label: "riyadhhadjba@gmail.com", url: "mailto:riyadhhadjba@gmail.com", icon: Mail },
      { type: "phone", label: "07 68 74 78 96", url: "tel:+33768747896", icon: Phone }
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
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/Photo_identite.jpg"
              alt="Photo d'identité"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-gold shadow-2xl object-cover"
            />
          </motion.div>

          {/* Profile Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-charcoal mb-4 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {portfolioData.name}
            </motion.h1>
            
            <motion.h2 
              className="text-xl sm:text-2xl lg:text-3xl font-lato font-light text-terracotta mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {portfolioData.title}
            </motion.h2>

            {/* Contact Links */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {portfolioData.contact.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.url}
                  className="flex items-center gap-2 text-charcoal hover:text-gold transition-colors duration-300 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <contact.icon className="w-5 h-5" />
                  <span className="relative">
                    {contact.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* About Section */}
        <motion.div 
          className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl sm:text-2xl font-playfair text-charcoal mb-4">À propos</h3>
          <p className="text-base sm:text-lg font-lato text-charcoal leading-relaxed">
            {portfolioData.about}
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero