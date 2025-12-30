import React from 'react'

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-linear-to-br from-black via-purple-900 to-black min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-purple-400 text-lg font-semibold">Welcome to my Portfolio</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Hi, I'm{' '}
              <span className="bg-linear-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Rajmangal Tiwari
              </span>
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-300">
            Web Designer & Developer Enthusiast
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            I'm a Web Developer passionate about creating responsive and modern websites. I love turning ideas into clean and functional digital experiences.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-linear-to-r from-purple-500 to-purple-700 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/50">
              <a href="#projects">View My Work</a>
            </button>
            <button className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-500/10 transition-all duration-300 font-semibold">
              <a href="https://drive.google.com/file/d/1yV5N_GGG2mxgAoXbBRJHFXN2hOmzOt5r/view?usp=sharing">Download Resume</a>
            </button>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="relative w-full max-w-lg">
            
            
                <img src="/hero2.png" alt="3D Developer" className="w-full h-full object-cover" />
              
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
