'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiAngular,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiAmazonaws,
  SiMysql,
  SiTensorflow,
  SiPytorch,
} from 'react-icons/si'
import { FaDatabase, FaChartLine, FaJava } from 'react-icons/fa'

interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
  level: number
  category: string
}

const skills: Skill[] = [
  // Frontend
  { name: 'Angular', icon: SiAngular, level: 90, category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, level: 90, category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, level: 85, category: 'Frontend' },
  
  // Backend
  { name: 'Java', icon: FaJava, level: 85, category: 'Backend' },
  { name: 'Python', icon: SiPython, level: 80, category: 'Backend' },
  
  // Database
  { name: 'MySQL', icon: SiMysql, level: 80, category: 'Database' },
  { name: 'PostgreSQL', icon: SiPostgresql, level: 80, category: 'Database' },
  { name: 'MongoDB', icon: SiMongodb, level: 75, category: 'Database' },
  
  // Data Analytics
  { name: 'Data Visualization', icon: FaChartLine, level: 85, category: 'Data Analytics' },
  
  // AI/ML
  { name: 'TensorFlow', icon: SiTensorflow, level: 70, category: 'AI/ML' },
  { name: 'PyTorch', icon: SiPytorch, level: 65, category: 'AI/ML' },
  
  // Tools
  { name: 'Git', icon: SiGit, level: 90, category: 'Tools' },
  { name: 'Docker', icon: SiDocker, level: 75, category: 'Tools' },
  { name: 'AWS', icon: SiAmazonaws, level: 70, category: 'Tools' },
]

const categories = ['Frontend', 'Backend', 'Database', 'Data Analytics', 'AI/ML', 'Tools']

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="skills"
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
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications, analyzing data, and
            implementing AI solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter((skill) => skill.category === category)
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                  {category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {categorySkills.map((skill, index) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + index * 0.05 }}
                        className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                      >
                        <div className="flex items-center mb-4">
                          <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                          <span className="ml-3 font-semibold text-gray-900 dark:text-gray-100">
                            {skill.name}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 }}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                          ></motion.div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          {skill.level}%
                        </p>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
