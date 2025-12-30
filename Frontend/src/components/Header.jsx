import React from 'react'

const Header = () => {
  return (
    <header className="bg-linear-to-r from-black/50 via-purple-900/50 to-black/50 backdrop-blur-lg shadow-lg rounded-4xl fixed mx-7 mt-5 inset-x-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Rajmangal Tiwari
            </h1>
          </div>
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="#home"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
          <button className="bg-linear-to-r from-purple-500 to-purple-700 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 font-semibold">
            Connect
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
