import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    { name: 'React', level: 82 },
    { name: 'Python', level: 79 },
    { name: 'Sql', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            About <span className="text-primary dark:text-secondary">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Who I Am</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Web Developer specializing in React, JavaScript, and modern CSS (Tailwind, Framer Motion), with a knack for transforming ideas into fast, responsive, and visually compelling web applications. I build intuitive interfaces—like e-commerce systems and interactive landing pages—that marry clean code with engaging user experiences. Passionate about leveraging tools like Figma and Firebase to solve problems efficiently and elevate digital products.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I love creating beautiful, functional interfaces that provide
                great user experiences.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">My Skills</h3>
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1 text-gray-700 dark:text-gray-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-primary dark:bg-secondary h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}