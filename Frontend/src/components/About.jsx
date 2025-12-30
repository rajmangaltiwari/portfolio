import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-black via-purple-950 to-black py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 transition-all duration-300">
              <h3 className="text-2xl font-bold text-purple-400 mb-3">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate web developer with a keen eye for design. Over the years, I've built a strong foundation in modern web technologies and love creating beautiful, functional websites.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 transition-all duration-300">
              <h3 className="text-2xl font-bold text-purple-400 mb-3">My Passion</h3>
              <p className="text-gray-300 leading-relaxed">
                I believe in the power of great design and seamless user experiences. Every project is an opportunity to create something meaningful and impactful.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 border border-purple-500/40 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">What I Offer</h3>
              <ul className="space-y-4">
                {['Responsive Web Design', 'Modern JavaScript Development', 'UI/UX Optimization', 'Performance Enhancement', 'SEO Optimization', 'Cross-browser Compatibility'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-purple-600">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
