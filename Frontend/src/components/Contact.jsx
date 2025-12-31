import React, { useState } from 'react'
import { contactAPI } from '../services/api'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setErrorMessage('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('📤 Form submitted with data:', formData)
    setLoading(true)
    setErrorMessage('')
    setSuccessMessage('')

    try {
      console.log('🔄 Sending request to backend...')
      const response = await contactAPI.submitContact(formData)
      console.log('✅ Response received:', response)
      
      setSuccessMessage('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(''), 5000)
    } catch (error) {
      console.error('❌ Error:', error)
      console.error('Error message:', error.message)
      setErrorMessage(error.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const contactMethods = [
    {
      icon: <FaEnvelope/>,
      title: 'Email',
      value: 'rajmangltiwari@example.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=rajmangltiwari@example.com'
    },
    {
      icon: <FaLinkedin/>,
      title: 'LinkedIn',
      value: 'linkedin.com/in/rajmangaltiwari',
      link: 'https://www.linkedin.com/in/rajmangal-tiwari'
    },
    {
      icon: <FaGithub/>,
      title: 'GitHub',
      value: 'github.com/rajmangaltiwari',
      link: 'https://github.com/rajmangaltiwari'
    }
  ]

  return (
    <section
      id="contact"
      className="bg-linear-to-br from-purple-950 via-black to-purple-950 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-purple-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  className="group flex items-start gap-4 p-4 bg-linear-to-br from-purple-900/20 to-black border border-purple-500/30 rounded-lg hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-4xl text-white">{method.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Resume', link: 'https://drive.google.com/file/d/1yV5N_GGG2mxgAoXbBRJHFXN2hOmzOt5r/view?usp=sharing' },
                  { name: 'Portfolio', link: '#projects' },
                  { name: 'Projects', link: '#projects' }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="px-4 py-2 bg-linear-to-r from-purple-900/30 to-black border border-purple-500/30 text-purple-300 rounded-lg hover:border-purple-500/60 hover:bg-purple-900/50 transition-all duration-300 font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="bg-linear-to-br from-purple-900/30 to-black border border-purple-500/30 rounded-lg p-8 hover:border-purple-500/60 transition-all duration-300"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {successMessage && (
                <div className="bg-green-900/30 border border-green-500/50 text-green-300 px-4 py-3 rounded-lg">
                  {successMessage}
                </div>
              )}

              {errorMessage && (
                <div className="bg-red-900/30 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg">
                  {errorMessage}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-black border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all duration-300"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-black border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all duration-300"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="w-full bg-black border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all duration-300 resize-none"
                  required
                  disabled={loading}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full ${
                  loading
                    ? 'bg-purple-700/50 cursor-not-allowed'
                    : 'bg-linear-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800'
                } text-white py-3 rounded-lg transition-all duration-300 font-bold shadow-lg hover:shadow-purple-500/50`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
