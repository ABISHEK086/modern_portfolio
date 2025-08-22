import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiArrowRight, FiDownload } from 'react-icons/fi'
import profileImage from '../assets/profile.jpeg'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/14nn0qNd9ITvYtteb0UIIoSLBogKRzYQN/view?usp=sharing', '_blank')
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary-light via-secondary-light to-primary-dark animate-gradient-x opacity-50"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
              whileHover={{ scale: 1.02 }}
            >
              Hi, I'm <span className="text-primary dark:text-secondary">Abi</span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6"
              whileHover={{ scale: 1.01 }}
            >
              The Stack Architect
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-gray-700 dark:text-gray-200"
              whileHover={{ scale: 1.01 }}
            >
              I transform React components into seamless digital experiences where 
              performance meets pixel-perfect design. My code doesn't just work - 
              it sings.
            </motion.p>
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button 
                onClick={() => scrollToSection('projects')}
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See My Magic <FiArrowRight />
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary border border-primary text-primary hover:bg-primary/10 dark:border-secondary dark:text-secondary dark:hover:bg-secondary/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Create
              </motion.button>
              <motion.button 
                onClick={handleDownloadCV}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                My Spellbook <FiDownload />
              </motion.button>
            </div>
            <div className="flex gap-4">
              {[
                { icon: <FiGithub />, url: "https://github.com/ABISHEK086", name: "GitHub" },
                { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/abishek-antony-a86673ap", name: "LinkedIn" },
                { icon: <FiTwitter />, url: "https://x.com/Abishek098210", name: "Twitter" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.url}
                  aria-label={social.name}
                  className="text-2xl text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-secondary transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                className="absolute inset-0 border-4 border-primary dark:border-secondary rounded-full animate-spin-slow"
                animate={{
                  rotate: 360,
                }}
              />
              <motion.img
                src={profileImage}
                alt="Abi's Profile"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl animate-float"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
