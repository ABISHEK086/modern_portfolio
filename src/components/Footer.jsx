import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 transition-colors duration-200 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </motion.p>
          <div className="flex gap-4">
            {[
              { icon: <FiGithub />, url: "https://github.com/ABISHEK086" },
              { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/abishek-antony-a86673ap" },
              { icon: <FiTwitter />, url: "https://x.com/Abishek098210" }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.url}
                className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-secondary transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
