'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies?: string[]
}

const experiences: Experience[] = [
  {
    title: 'Website Administrator / Data Analyst',
    company: 'BC Sands',
    location: 'Australia',
    period: '2022 - Present',
    description: [
      'Manage and maintain company websites, ensuring optimal performance and user experience',
      'Develop and implement data analytics solutions to drive business insights and decision-making',
      'Create interactive dashboards and reports for stakeholders using Tableau and Power BI',
      'Automate data processing workflows, reducing manual effort by 60%',
      'Collaborate with cross-functional teams to identify data-driven opportunities',
      'Maintain and optimize databases, ensuring data integrity and accessibility',
    ],
    technologies: ['Web Development', 'Content Management', 'Data Analytics', 'SQL', 'Python'],
  },
  {
    title: 'Software Engineer',
    company: 'Esewa Ltd.',
    location: 'Nepal',
    period: '2023 - 2025',
    description: [
      'Developed and maintained software applications using Java and Spring Boot',
      'Implemented RESTful APIs and integrated third-party services',
      'Participated in code reviews and followed best practices',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
    ],
    technologies: ['Java', 'Spring Boot', 'RESTful APIs', 'PostgreSQL'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Building impactful solutions and driving data-driven decisions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform md:-translate-x-1/2 z-10 border-4 border-white dark:border-gray-800"></div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiMapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

