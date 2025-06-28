import { motion } from 'framer-motion';
import { FaReact, FaPython, FaJs, FaHtml5, FaCss3Alt, FaWordpress, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiDjango } from 'react-icons/si';

export default function About() {
  const tools = [
    { name: 'Python', icon: <FaPython size={32} /> },
    { name: 'Django', icon: <SiDjango size={32} /> },
    { name: 'SQL', icon: <SiMysql size={32} /> },
    { name: 'React', icon: <FaReact size={32} /> },
    { name: 'JavaScript', icon: <FaJs size={32} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={32} /> },
    { name: 'HTML5', icon: <FaHtml5 size={32} /> },
    { name: 'CSS3', icon: <FaCss3Alt size={32} /> },
    { name: 'WordPress', icon: <FaWordpress size={32} /> },
  ];

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
                Developer specializing in modern web technologies with expertise in React, JavaScript, and responsive design. I create high-performance applications that combine aesthetic appeal with technical excellence.
              </p>
              
              <h4 className="font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">Notable Projects:</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  • <span className="font-medium">Modern Dynamic Business Page</span> - Built with React, Tailwind CSS and Framer Motion, featuring engaging animations and responsive design.
                </li>
                <li>
                  • <span className="font-medium">Next-Gen Website Builder Landing Page</span> - Interactive landing page with dynamic animations and modern UI components.
                </li>
                <li>
                  • <span className="font-medium">Creative Agency Page</span> - Startup-focused digital solution built with HTML, CSS, JavaScript and Bootstrap.
                </li>
                <li>
                  • <span className="font-medium">Shopping Cart System</span> - Comprehensive order management system developed with Java, SQL and web technologies.
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">My Toolkit</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {tools.map((tool, i) => (
                  <div 
                    key={i}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-gray-700 dark:text-gray-200 mb-2">
                      {tool.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
