import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce website built with React and Node.js with payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: '🛒'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      icon: '✅'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather app showing real-time weather data with interactive charts and maps.',
      tags: ['React', 'Weather API', 'Chart.js', 'Tailwind CSS'],
      icon: '🌤️'
    },
    {
      id: 4,
      title: 'Social Media Feed',
      description: 'A responsive social media platform with authentication, posts, and user interactions.',
      tags: ['React', 'Express', 'PostgreSQL', 'JWT'],
      icon: '📱'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio showcasing projects and skills with smooth animations.',
      tags: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
      icon: '🎨'
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A content management system for creating and sharing blog posts with SEO optimization.',
      tags: ['React', 'Strapi CMS', 'Markdown', 'SEO'],
      icon: '📝'
    }
  ]

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-black via-purple-900 to-black py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/30 rounded-lg overflow-hidden hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative p-6">
                <div className="text-5xl mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/30 group-hover:bg-purple-900/70 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 font-semibold text-sm">
                    View Project
                  </button>
                  <button className="flex-1 border border-purple-500/50 text-purple-400 py-2 rounded-lg hover:bg-purple-500/10 transition-all duration-300 font-semibold text-sm">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/50">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
