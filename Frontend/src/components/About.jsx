import React from 'react';
import {motion} from 'framer-motion';
import profile from '../assets/profile.jpeg'
const About = () => {
  const stats = [
    {label: "Experience", value: "Fresher"},
    {label: "Speciality", value: "Full Stack"},
   { label: "Focus", value: "Performance & Scalable Systems" }
  ]
  const glows = [
    "-top-10 -right-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 left-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]"
  ]
  return (
    <section id='about' className='min-h-screen w-full flex items-center relative justify-center  bg-black text-white overflow-hidden'>
      <div className='absolute inset-0 pointer-events-none'>
        {glows.map((ele, index) => (
          <div key={index} className={`absolute rounded-full bg-gradient-to-r from-[#1a0033] via-[#6a0dad] to-[#2d0052] animate-pulse ${ele}`}/>
        ))}
      </div>

      <div className='relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12'>
        <motion.div className='flex flex-col md:flex-row items-center md:items-stretch gap-8'
        initial= {{opacity:0, y: 24}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.6}}
        viewport={{once:true, amount:0.4}}
        >
          <motion.div className=" relative w-40 h-40 md:w-50 md:h-50 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-500/20 to-black/50 border border-purple-500/30 "
          whileHover={{scale: 1.02}}
          transition={{type:"spring", stiffness: 200, damping: 18}}
          >
            <img src={profile} alt="profile" className='absolute inset-0 '/>
          </motion.div>
          <div className='flex-1 flex flex-col justify-center text-center md:text-left '>
            <h2 className='text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text pb-2 text-transparent bg-gradient-to-r from-[#a855f7] via-[#7c3aed] to-[#a855f7]'>Rajmangal Tiwari</h2>
            <p className='mt-2 text-lg sm:text-xl text-white/90 font-semibold'>
              Full Stack Developer
            </p>
            <p className='mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl'>
              I’m a full stack developer skilled in React, Next.js, Node.js, Express.js, JavaScript, MongoDB, MySQL, Tailwind CSS, and REST APIs, passionate about creating clean, scalable, and engaging web applications.
            </p>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl mt-6'>
              {stats.map((ele, index) => (
                <motion.div key={index} className={`rounded-xl border border-purple-500/30 bg-purple-900/10 px-4 py-3 text-center ${index === 2 ? "col-span-2 sm:col-span-1 w-[70%] sm:w-full mx-auto" : ""}`}
                initial={{opacity: 0, y: 10}}
                whileInView={{opacity: 1, y: 0}}
                transition= {{delay: 0.05*index, duration: 0.4}}
                viewport={{once:true, amount:0.3}}
                >
                  <div className='text-sm text-gray-400'>{ele.label}</div>
                  <div className='text-base font-semibold'>{ele.value}</div>
                </motion.div>
              ))}
            </div>
            <div className='mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start'>
              <a href="#projects" className='inline-flex items-center justify-center rounded-lg bg-purple-600 text-white font-semibold px-5 py-3 hover:bg-purple-700 transition'>View Projects</a>
              <a href="#contact" className='inline-flex items-center justify-center rounded-lg border border-purple-500/50 text-white bg-purple-900/20  px-5 py-3 hover:bg-purple-900/40 transition'>Get in Touch</a>
            </div>
          </div>

        </motion.div>
        <motion.div className='text-center md:text-left '
        initial={{opacity:0, x: -30}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:0.6}}
        viewport={{once:true, amount: 0.4}}
        >
          <h3 className='text-2xl sm:text-3xl font-bold text-white mb-3'>About Me</h3>
          <p className='text-gray-300 leading-relaxed text-base sm:text-lg'>I'm a Software Developer driven by the challenge of building smooth, high-performance web apps powered by React, Node.js, and modern web technologies.</p>
          <p className='mt-4 text-gray-400 text-base sm:text-lg'>I Love turning ideas into scalable, user-friendly products that make an impact</p>
        </motion.div>
      </div>
    </section>
  )
}

export default About