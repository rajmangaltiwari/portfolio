import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 20) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header className={`bg-linear-to-r from-black/50 via-purple-900/50 to-black/50 backdrop-blur-lg shadow-lg rounded-4xl fixed mx-7 mt-3 inset-x-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-32'}`}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="flex justify-between items-center h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div className="flex items-center"
          whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Rajmangal Tiwari
            </h1>
          </motion.div>
          <motion.ul className="hidden md:flex space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          >
            <li>
              <a
                href="#home"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
              >
                Contact
              </a>
            </li>
          </motion.ul>
          <motion.button className="bg-linear-to-r from-purple-500 to-purple-700 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          >
            Connect
          </motion.button>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Header
