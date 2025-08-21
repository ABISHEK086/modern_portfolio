import { motion } from 'framer-motion'

export default function Education() {
  const education = [
    { 
      institution: 'Don Bosco College (Co-Ed)-Yelagiri Hills', 
      degree: 'Bachelor of Computer Applications',
      field: 'Computer Science',
      year: '2022 - 2025',
      score: 'CGPA: 8.77'
    },
    { 
      institution: 'St James Higher Secondary School-Trichy', 
      degree: 'HSC',
      field: 'Bio-Maths',
      year: '2022',
      score: '74%'
    },
    { 
      institution: 'John Brito Higher Secondary School', 
      degree: 'SSLC',
      field: 'General Education',
      year: '2020',
      score: '79.4%'
    }
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            <span className="text-primary dark:text-secondary">Education</span>
          </h2>
          <div className="grid md:grid-cols-1 gap-8">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {edu.institution}
                  </h3>
                  <span className="bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary px-3 py-1 rounded-full text-sm">
                    {edu.year}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <h4 className="text-lg font-medium text-primary dark:text-secondary">
                    {edu.degree} - {edu.field}
                  </h4>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    edu.degree === 'Bachelor of Computer Applications' 
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                      : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                  }`}>
                    {edu.score}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )

}
