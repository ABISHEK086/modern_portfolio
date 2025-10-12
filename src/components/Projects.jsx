import { motion } from "framer-motion"
import SpaceBackground from "./SpaceBackground" 

const projects = [
  {
    title: "Machine Learning – Student Performance Prediction",
    description:
      "Built a predictive model to classify student performance using academic and demographic data, comparing multiple classifiers and providing graph visualizations with an interactive CLI.",
    tags: ["Python", "Scikit-learn", "Matplotlib", "Seaborn", "Pandas", "NumPy"],
    image: "/p7.jfif",
    githubUrl:
      "https://student-performance-prediction-ml-enjugumqrmvssvnarrquav.streamlit.app/",
  },
  {
    title: "Django E-Commerce Website (Amazon Clone)",
    description:
      "A full-stack e-commerce application with authentication, product & order management, shopping cart, and admin dashboard, built using Django, MySQL, and REST APIs with a responsive frontend for real-world deployment",
    tags: ["Python", "Django", "JavaScript", "MySQL","Bootstrap", "HTML", "Css"],
    image: "/p8.jpg",
    githubUrl:
      "https://github.com/ABISHEK086/E-Commerce---Django/",
  },
   {
    title: "Instant Question Generator",
    description:
      "A full-stack Django web application that lets users generate and view subject-specific question papers with multiple difficulty levels. Features role-based access for Admin, Staff, and Students, PDF generation and retrieval, and a responsive, user-friendly interface.",
    tags: ["Python", "Django", "JavaScript", "SQLite","HTML", "Css"],
    image: "/p9.jfif",
    githubUrl:
      "https://github.com/ABISHEK086/Django-Question-generator",
  },

  {
    title: "Modern Dynamic Business Page",
    description:
      "Crafted a visually appealing and high-performance business page with engaging animations and seamless responsiveness, ensuring an immersive user experience.",
    tags: ["React", "Tailwind Css", "Framer Motion"],
    image: "/P1.png",
    githubUrl:
      "https://buisnesspage-git-main-abishek086s-projects.vercel.app/",
  },
  {
    title: "Next-Gen Website Builder Landing Page",
    description:
      "Designed a sleek and interactive landing page for a website builder, featuring dynamic animations, smooth transitions, and a modern aesthetic to captivate users.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/p2.png",
    githubUrl:
      "https://modernbusinesslanding-git-main-abishek086s-projects.vercel.app/",
  },
  {
    title: "Creative Agency Page for Startup",
    description:
      "A digital business leveraging technology to offer innovative solutions, products, or services online. Focused on scalability, efficiency, and a seamless user experience.",
    tags: ["HTML", "Css", "Javascript", "Bootstrap"],
    image: "/p5.png",
    githubUrl:
      "https://modernstartup-git-master-abishek086s-projects.vercel.app/",
  },
  {
    title: "Shopping Cart System",
    description:
      "The shopping cart in Java is a project for the management of a shopping list. The project intends for the ordering of products you want. With this project, you can easily manage your orders in a more systematic way.",
    tags: ["Java", "SQL", "HTML", "Css", "Javascript"],
    image: "/p.jpg",
    githubUrl: "https://github.com/ABISHEK086/ShoppingCart",
  },
  {
    title: "PractiScore",
    description:
      "A mobile application designed to manage and track lab practical marks for students. Faculty can input marks based on categories like observation, verification, and viva. The app features role-based access, real-time updates, and centralized data storage using Firebase.",
    tags: ["Java", "XML", "Firebase"],
    image: "/p5.jpg",
    githubUrl: "https://github.com/ABISHEK086/PractiScore",
  },
  {
    title: "QueriesGen",
    description:
      "A mobile app to track lab practical marks and generate question papers using the built-in tool for faculty and students. Includes features like subject-wise question paper selection, role-based access, and offline PDF viewing for enhanced usability.",
    tags: ["Java", "XML", "Firebase"],
    image: "/p6.jfif",
    githubUrl: "https://github.com/ABISHEK086/QueriesGen",
  },
]

export default function Projects() {
  const handleVisitClick = (url) => {
    window.open(url, "_blank")
  }

  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section
      id="projects"
      className="relative py-16 bg-white dark:bg-gray-900 transition-colors duration-200 overflow-hidden"
    >
      {}
      <div className="absolute inset-0 z-0">
        <SpaceBackground />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          My <span className="text-primary dark:text-secondary">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden transition-colors duration-200 group h-full flex flex-col border border-purple-500/10"
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
                  className="w-full h-40 object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </motion.div>
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag, j) => (
                    <motion.span
                      key={j}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-800 dark:text-gray-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                  <motion.span
                    onClick={() => handleVisitClick(project.githubUrl)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-xs text-blue-800 dark:text-blue-200 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors ml-auto"
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
