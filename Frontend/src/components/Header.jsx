import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const heroRef = useRef(null)

  useEffect(() => {
    const heroSection = document.getElementById('home')

    const handleScroll = () => {
      const currentScrollY = window.scrollY * 2
      const heroHeight = heroSection?.offsetHeight || 600

      // While in hero section, always show header
      if (currentScrollY < heroHeight) {
        setIsVisible(true)
      } else {
        // After hero section, hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY.current && currentScrollY > 20) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header className={`bg-transparent md:bg-linear-to-r md:from-black/50 md:via-purple-900/50 md:to-black/50 md:backdrop-blur-lg shadow-none md:shadow-lg rounded-2xl md:rounded-4xl fixed mx-3 md:mx-7 mt-2 md:mt-3 inset-x-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-32'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div className="flex justify-between items-center h-12 md:h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/logo.png" alt="Logo" className="h-12 md:h-12 w-auto" />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul className="hidden md:flex space-x-6 lg:space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <li>
              <a
                href="#home"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium text-sm lg:text-base"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium text-sm lg:text-base"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium text-sm lg:text-base"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium text-sm lg:text-base"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium text-sm lg:text-base"
              >
                Contact
              </a>
            </li>
          </motion.ul>

          <div className="flex items-center gap-3 md:gap-4">
            {/* Desktop Button */}
            <motion.button className="hidden md:block bg-linear-to-r from-purple-500 to-purple-700 text-white px-5 lg:px-6 py-2 rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 font-semibold text-sm lg:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-purple-400 hover:text-purple-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          
          className="md:hidden overflow-hidden bg-black/40 backdrop-blur-sm rounded-b-2xl"
        >
          <motion.ul className="flex flex-col space-y-3 pb-4 pt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <li>
              <a
                href="#home"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium block py-2 px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium block py-2 px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium block py-2 px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium block py-2 px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium block py-2 px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            <li className="pt-2 border-t border-purple-500/30">
              <motion.button className="w-full bg-linear-to-r from-purple-500 to-purple-700 text-white px-5 py-2 rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 font-semibold text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Connect
              </motion.button>
            </li>
          </motion.ul>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Header
