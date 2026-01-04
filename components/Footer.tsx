'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Suman Paudel
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software Engineer | Website Administrator | Data Analyst
              <br />
              Building scalable solutions and transforming data into insights
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/sumanpaudel333"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sumanpaudel333"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sumanpaudel333@gmail.com"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <FiMapPin className="w-4 h-4 mr-2" />
              <span>Australia</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>
            © {currentYear} Suman Paudel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

