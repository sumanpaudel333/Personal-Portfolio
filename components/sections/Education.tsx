'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar, FiMapPin } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'

interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  description: string
  highlights?: string[]
}

const education: EducationItem[] = [
  {
    degree: 'Master of Information Technology (Artificial Intelligence)',
    institution: 'Macquarie University',
    location: 'Australia',
    period: 'Feb, 2025 - Dec, 2026',
    description:
      'Pursuing advanced studies in Artificial Intelligence, machine learning, deep learning, and intelligent systems. Focus areas include neural networks, natural language processing, computer vision, and AI ethics.',
    highlights: [
      'Specialization in AI and Machine Learning',
      'Research in deep learning applications',
      'Advanced coursework in data science and AI',
    ],
  },
  {
    degree: 'Bachelor of Information Management',
    institution: 'Tribhuvan University',
    location: 'Australia',
    period: '2018 - 2022',
    description:
      'Comprehensive program covering information systems, database management, web technologies, and data analytics. Developed strong foundations in software development, data structures, and information architecture.',
    highlights: [
      'Focus on Information Systems and Web Technologies',
      'Database Design and Management',
      'Data Analytics and Visualization',
    ],
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 md:py-32 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Continuous learning and academic excellence in Information Technology and AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                  <FaGraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {edu.institution}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <FiCalendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiMapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {edu.description}
              </p>

              {edu.highlights && (
                <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="flex items-start text-sm text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

