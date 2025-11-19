import React from 'react'
import { motion } from 'framer-motion'

const FloatingPaintings = () => {
  const paintings = [
    {
      src: "/Images/Joseph_Wright_of_Derby_The_Alchemist.jpg",
      width: 220,
      top: "15%",
      left: "3%",
      rotation: -5,
      delay: 0
    },
    {
      src: "/Images/Johannes_Vermeer_-_The_Astronomer_-_1668.jpg",
      width: 200,
      top: "12%",
      right: "5%",
      rotation: 3,
      delay: 0.5
    },
    {
      src: "/Images/Wright_of_Derby,_The_Orrery.jpg",
      width: 240,
      bottom: "25%",
      left: "2%",
      rotation: -2,
      delay: 1
    },
    {
      src: "/Images/Johannes_Vermeer_-_The_Geographer_-_Google_Art_Project.jpg",
      width: 210,
      bottom: "20%",
      right: "4%",
      rotation: 4,
      delay: 1.5
    },
    {
      src: "/Images/An_Experiment_on_a_Bird_in_an_Air_Pump_by_Joseph_Wright_of_Derby,_1768.jpg",
      width: 260,
      top: "65%",
      left: "10%",
      rotation: -3,
      delay: 2
    },
    {
      src: "/Images/Laocoon_and_His_Sons.jpg",
      width: 230,
      top: "40%",
      left: "15%",
      rotation: 2,
      delay: 2.5
    },
    {
      src: "/Images/Le_prêteur_et_sa_femme_-_Quentin_Metsys_-_Musée_du_Louvre_Peintures_INV_1444_;_MR_821.jpg",
      width: 210,
      bottom: "35%",
      right: "12%",
      rotation: -1,
      delay: 3
    }
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {paintings.map((painting, index) => (
        <motion.div
          key={index}
          className="absolute hidden sm:block"
          style={{
            top: painting.top,
            left: painting.left,
            right: painting.right,
            bottom: painting.bottom,
            width: painting.width
          }}
          initial={{ y: 0, rotate: painting.rotation }}
          animate={{
            y: [0, -20, 0],
            rotate: [painting.rotation, painting.rotation + 1, painting.rotation]
          }}
          transition={{
            duration: 4,
            delay: painting.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-terracotta/10 rounded-lg blur-sm"></div>
            <img
              src={painting.src}
              alt="Peinture classique"
              className="rounded-lg shadow-2xl border-2 border-gold/30 object-cover w-full h-auto"
              style={{
                height: painting.width * 1.2
              }}
            />
          </div>
        </motion.div>
      ))}
      
      {/* Mobile-optimized paintings */}
      {paintings.slice(0, 3).map((painting, index) => (
        <motion.div
          key={`mobile-${index}`}
          className="absolute sm:hidden"
          style={{
            top: painting.top,
            left: painting.left,
            right: painting.right,
            bottom: painting.bottom,
            width: painting.width * 0.7
          }}
          initial={{ y: 0, rotate: painting.rotation }}
          animate={{
            y: [0, -15, 0],
            rotate: [painting.rotation, painting.rotation + 1, painting.rotation]
          }}
          transition={{
            duration: 4,
            delay: painting.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-terracotta/10 rounded-lg blur-sm"></div>
            <img
              src={painting.src}
              alt="Peinture classique"
              className="rounded-lg shadow-2xl border-2 border-gold/30 object-cover w-full h-auto"
              style={{
                height: painting.width * 1.2 * 0.7
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingPaintings