'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  {
    src: '/logo/solar-pic.jpg',
    text: 'Investing in Clean Energy Generation With Solar System',
  },
  {
    src: '/logo/wind-pic.jpg',
    text: 'Energy Plantation To Your Smart Home',
  },
  {
    src: '/logo/sun-pic.jpg',
    text: 'Environment Friendly Energy Plantation To Your Smart Home',
  },
]

export default function HeroImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Cycle through images and text every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 4000) // Change every 2 seconds

    return () => clearInterval(interval) // Clean up on unmount
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Section */}
      <AnimatePresence>
        <motion.img
          key={items[currentIndex].src}
          src={items[currentIndex].src}
          alt={items[currentIndex].text}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Text Section */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={items[currentIndex].text}
            className="text-white text-4xl md:text-6xl font-bold text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            {items[currentIndex].text}
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  )
}
