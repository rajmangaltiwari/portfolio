import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Authentication', 'Database Design']
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git & GitHub', 'Vite', 'VS Code', 'Figma', 'Chrome DevTools', 'npm/yarn']
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Creative Thinking', 'Attention to Detail']
    }
  ]

  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-purple-950 via-black to-black py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((categoryData, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">
                {categoryData.category}
              </h3>
              <div className="space-y-3">
                {categoryData.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
                    <span className="text-gray-300 group-hover:text-purple-200 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-16 bg-gradient-to-r from-purple-900/30 to-black border border-purple-500/30 rounded-lg p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Proficiency Levels</h3>
          <div className="space-y-6">
            {[
              { skill: 'React & JavaScript', level: 85 },
              { skill: 'Tailwind CSS & Design', level: 90 },
              { skill: 'Full Stack Development', level: 75 },
              { skill: 'Web Performance', level: 80 }
            ].map((item, index) => (
              <motion.div key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium">{item.skill}</span>
                  <span className="text-purple-400 font-bold">{item.level}%</span>
                </div>
                <div className="h-2 bg-gradient-to-r from-black to-purple-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-purple-400 transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
