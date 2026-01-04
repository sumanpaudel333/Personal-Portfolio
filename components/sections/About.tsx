'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              My Story
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I'm a passionate Software Engineer and Data Analyst with a strong foundation in
              Information Management and a growing expertise in Artificial Intelligence. My journey
              began with a Bachelor's degree in Information Management, where I developed a deep
              understanding of data structures, information systems, and web technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Currently pursuing my Master's in Information Technology with a focus on AI, I'm
              constantly exploring how machine learning and intelligent systems can transform
              businesses and solve real-world problems. My experience spans web development, data
              analytics, dashboard creation, automation, and e-commerce analytics.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm particularly interested in AI, FinTech, SaaS platforms, scalable systems, and
              data visualization. When I'm not coding, I enjoy staying updated with the latest
              tech trends and contributing to open-source projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                Professional Values
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Problem-solving mindset with a focus on scalable solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Data-driven decision making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Continuous learning and adaptation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Clean code and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Collaboration and knowledge sharing</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                Current Focus
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Deepening my expertise in AI and machine learning while building practical
                applications that combine web development, data analytics, and intelligent systems.
                I'm always open to new opportunities and collaborations in the tech space.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

