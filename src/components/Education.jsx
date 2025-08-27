import { motion } from "framer-motion"

export default function Education() {
  const education = [
    { 
      institution: "Don Bosco College (Co-Ed)-Yelagiri Hills", 
      degree: "Bachelor of Computer Applications",
      field: "Computer Science",
      year: "2022 - 2025",
      score: "CGPA: 8.77"
    },
    { 
      institution: "St James Higher Secondary School-Tricy", 
      degree: "HSC",
      field: "Bio-Maths",
      year: "2022",
      score: "74%"
    },
    { 
      institution: "John Brito Higher Secondary School", 
      degree: "SSLC",
      field: "General Education",
      year: "2020",
      score: "79.4%"
    }
  ]

  return (
    <section
      id="education"
      className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300"
    >
      {}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/2 w-[500px] h-[500px] -translate-x-1/2 rounded-full bg-primary/20 dark:bg-secondary/20 blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold mb-16 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Education
          </h2>

          <div className="relative border-l-4 border-primary/30 dark:border-secondary/30">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative mb-12 ml-6 group"
              >
                {}
                <span className="absolute -left-[30px] top-4 w-6 h-6 rounded-full bg-primary dark:bg-secondary border-4 border-white dark:border-gray-900 shadow-md group-hover:scale-110 transition-transform"></span>

                {}
                <div className="bg-gray-50 dark:bg-gray-800/90 p-6 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-transparent hover:border-primary/40 dark:hover:border-secondary/40 backdrop-blur-sm">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      {edu.institution}
                    </h3>
                    <span className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-secondary px-3 py-1 rounded-full text-sm font-medium">
                      {edu.year}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-3 flex-wrap gap-2">
                    <h4 className="text-lg font-medium text-primary dark:text-secondary">
                      {edu.degree} - {edu.field}
                    </h4>
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full shadow-sm ${
                        edu.degree === "Bachelor of Computer Applications"
                          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                          : "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                      }`}
                    >
                      {edu.score}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
