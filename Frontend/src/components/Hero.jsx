import React from 'react'
import avator from '../assets/avator.png'
import { motion } from 'framer-motion'

const Hero = () => {
  const glows = [
    "-top-10 -right-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 left-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]"
  ]

  return (
    <section
      id="home"
      className="bg-linear-to-br from-black via-purple-900 to-black min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className='absolute inset-0 pointer-events-none'>
        {glows.map((ele, index) => (
          <div key={index} className={`absolute rounded-full bg-gradient-to-r from-[#1a0033] via-[#6a0dad] to-[#2d0052] animate-pulse ${ele}`}/>
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        <motion.div className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-purple-400 text-lg font-semibold">Welcome to my Portfolio</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Hi, I'm{' '}
              <span className="bg-linear-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Rajmangal Tiwari
              </span>
            </h1>
          </motion.div>
          <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-300"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          >
            Web Designer & Developer Enthusiast
          </motion.h2>
          <motion.p className="text-gray-300 text-lg leading-relaxed max-w-xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          >
            I'm a Web Developer passionate about creating responsive and modern websites. I love turning ideas into clean and functional digital experiences.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          >
            <button className="bg-linear-to-r from-purple-500 to-purple-700 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/50">
              <a href="#projects">View My Work</a>
            </button>
            <button className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-500/10 transition-all duration-300 font-semibold">
              <a href="https://drive.google.com/file/d/1yV5N_GGG2mxgAoXbBRJHFXN2hOmzOt5r/view?usp=sharing">Download Resume</a>
            </button>
          </motion.div>
        </motion.div>

        <motion.div className="flex justify-center w-full"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="relative w-full max-w-sm"
          whileHover={{ scale: 1.00 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            default: { type: "spring", stiffness: 200, damping: 18 }
          }}
          >
            <img src={avator} alt="3D Developer" className="w-full h-auto object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
