import { motion } from 'framer-motion'

const projects = [
  {
    title: "Modern Dynamic Business Page",
    description: "Crafted a visually appealing and high-performance business page with engaginganimations and seamless responsiveness, ensuring an immersive user experience.",
    tags: ["React", "Tailwind Css", "Framer Motion"],
    image: "/P1.png",
    githubUrl: "https://buisnesspage-git-main-abishek086s-projects.vercel.app/"
  },
  {
    title: "Next-Gen Website Builder Landing Page",
    description: "Designed a sleek and interactive landing page for a website builder,featuring dynamic animations, smooth transitions, and a modern aesthetic to captivate users.",
    tags: ["React", "Tailwind CSS" ,"Framer Motion"],
    image: "/p2.png",
    githubUrl: "https://modernbusinesslanding-git-main-abishek086s-projects.vercel.app/"
  },
  {
    title: "Creative Agency Page for Startup",
    description: "A digital business leveraging technology to offer innovative solutions, products, or services online. Focused on scalability, efficiency, and a seamless user experience.",
    tags: ["HTML", "Css", "Javascript","Bootstrap"],
    image: "/p5.png",
    githubUrl: "https://modernstartup-git-master-abishek086s-projects.vercel.app/"
  },
  {
    title: "Shopping Cart System",
    description: "The shopping cart in Java is a project for the management of a shopping list.The project intends for the ordering of  products you want. With this project, you can easily manage your orders in a more systematic way.",
    tags: ["Java", "SQL", "HTML","Css","Javascript"],
    image: "/p.jpg",
    githubUrl: "https://github.com/ABISHEK086/ShoppingCart"
  }
]

export default function Projects() {
  const handleVisitClick = (url) => {
    window.open(url, '_blank');
  };

  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          My <span className="text-primary dark:text-secondary">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-colors duration-200 group"
            >
              <motion.div
                className="overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <motion.span 
                      key={j}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                  <motion.span 
                    onClick={() => handleVisitClick(project.githubUrl)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm text-blue-800 dark:text-blue-200 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  >
                    Visit
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}