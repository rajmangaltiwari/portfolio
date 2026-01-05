import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-linear-to-r from-black via-purple-950 to-black border-t border-purple-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        >
          {/* Brand */}
          <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
              Rajmangal Tiwari
            </h3>
            <p className="text-gray-400">
              Web Designer & Developer Enthusiast
            </p>
          </motion.div>


          {/* Social Links */}
          <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="text-white font-bold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {[
                { name: 'GitHub', icon: <FaGithub/>, link: 'https://github.com/rajmangaltiwari' },
                { name: 'LinkedIn', icon: <FaLinkedin/>, link: 'https://www.linkedin.com/in/rajmangal-tiwari' },
                { name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/rajmangal__01' },
                { name: 'Email', icon: <FaEnvelope/>, link: 'https://mail.google.com/mail/?view=cm&fs=1&to=rajmangltiwari@example.com' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 flex items-center justify-center bg-linear-to-br from-purple-900/30 to-black border border-purple-500/30 rounded-full hover:border-purple-500/60 hover:bg-purple-900/50 transition-all duration-300 text-lg text-white"
                  title={social.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-purple-500/30 to-transparent my-8"></div>

        {/* Bottom Footer */}
        <motion.div className="flex flex-col md:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Rajmangal Tiwari. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
