import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import screenMe from '../assets/screenMe.jpeg'

const Projects = () => {
  const userProjects = [
    {
      id: 1,
      title: 'Remote Interview Platform',
      description: 'A collaborative application for conducting remote technical interviews with real-time coding, video conferencing, and code playback features.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Clerk', 'Stream'],
      image: screenMe,
      liveLink: 'https://remote-interview-platform-negc7.sevalla.app/',
      githubLink: 'https://github.com/rajmangaltiwari/remote-interview-platform'
    },
    {
      id: 2,
      title: 'Real-Time Task Manager',
      description: 'A collaborative application for managing tasks and projects in real-time. Features a drag-and-drop interface and instant updates using Firebase.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Zustand'],
      image: 'https://via.placeholder.com/400x250/6a0dad/ffffff?text=Task+Manager',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Dynamic Weather Dashboard',
      description: 'An intuitive weather application that provides real-time weather data, forecasts, and interactive charts. Integrated with a third-party weather API.',
      tags: ['React', 'Weather API', 'Chart.js', 'Styled-Components'],
      image: 'https://via.placeholder.com/400x250/2d0052/ffffff?text=Weather+App',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Interactive Portfolio Website',
      description: 'A personal portfolio site to showcase projects and skills, featuring smooth animations and a clean, modern aesthetic. Built with Vite for a fast developer experience.',
      tags: ['React', 'Vite', 'Framer Motion', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/400x250/000000/ffffff?text=Portfolio',
      liveLink: '#',
      githubLink: '#'
    }
  ]

  const glows = [
    "-top-10 -right-10 w-[360px] h-[360px] opacity-40 blur-[120px]",
    "bottom-0 left-10 w-[420px] h-[420px] opacity-30 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-20 blur-[100px]"
  ]

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-black via-purple-950 to-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className='absolute inset-0 pointer-events-none'>
        {glows.map((ele, index) => (
          <div key={index} className={`absolute rounded-full bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 animate-pulse ${ele}`}/>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {userProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-500/60 transition-colors duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              style={{ willChange: 'transform, opacity' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, type: "spring", stiffness: 120, damping: 20 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-black/50 backdrop-blur-sm text-purple-300 text-xs font-semibold rounded-full border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold">
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <FaGithub />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects