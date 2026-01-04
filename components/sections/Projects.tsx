'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { SiReact, SiPython, SiNodedotjs, SiPostgresql, SiTableau } from 'react-icons/si'

interface Project {
  title: string
  description: string
  longDescription: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  outcome: string
}

const projects: Project[] = [
  {
    title: 'E-Commerce Analytics Dashboard',
    description: 'Comprehensive analytics platform for e-commerce data visualization and insights',
    longDescription:
      'Built a real-time analytics dashboard that processes millions of transactions, providing actionable insights through interactive visualizations. Features include sales forecasting, customer segmentation, and inventory management analytics.',
    techStack: ['React', 'Python', 'PostgreSQL', 'Tableau', 'Node.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    outcome: 'Improved decision-making speed by 40% and increased revenue insights visibility',
  },
  {
    title: 'Facility Services Management System',
    description: 'Web-based platform for managing facility services and maintenance operations',
    longDescription:
      'Developed a full-stack web application for facility management with features including work order tracking, vendor management, automated scheduling, and comprehensive reporting. Integrated with multiple third-party APIs for seamless operations.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Node.js', 'AWS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    outcome: 'Streamlined operations, reducing processing time by 60% and improving customer satisfaction',
  },
  {
    title: 'Data Automation Pipeline',
    description: 'Automated data processing and ETL pipeline for business intelligence',
    longDescription:
      'Created an automated data pipeline that extracts, transforms, and loads data from multiple sources into a centralized data warehouse. Includes data validation, error handling, and scheduled reporting capabilities.',
    techStack: ['Python', 'PostgreSQL', 'Docker', 'AWS'],
    githubUrl: 'https://github.com',
    outcome: 'Reduced manual data processing time by 80% and improved data accuracy to 99.5%',
  },
  {
    title: 'AI-Powered Recommendation System',
    description: 'Machine learning model for personalized content recommendations',
    longDescription:
      'Developed a recommendation system using collaborative filtering and deep learning techniques. The system analyzes user behavior patterns and provides personalized suggestions with high accuracy.',
    techStack: ['Python', 'TensorFlow', 'PostgreSQL', 'React'],
    githubUrl: 'https://github.com',
    outcome: 'Increased user engagement by 35% and improved recommendation accuracy by 25%',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
      React: SiReact,
      Python: SiPython,
      'Node.js': SiNodedotjs,
      PostgreSQL: SiPostgresql,
      Tableau: SiTableau,
    }
    return iconMap[tech] || null
  }

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in web development, data analytics, and AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-4xl font-bold opacity-50">
                  {project.title.charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.longDescription}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => {
                      const Icon = getTechIcon(tech)
                      return (
                        <span
                          key={tech}
                          className="inline-flex items-center px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {Icon && <Icon className="w-4 h-4 mr-1" />}
                          {tech}
                        </span>
                      )
                    })}
                  </div>
                </div>

                <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Outcome:</span> {project.outcome}
                  </p>
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FiGithub className="w-5 h-5" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

