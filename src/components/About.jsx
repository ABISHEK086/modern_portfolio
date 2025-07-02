import { motion } from 'framer-motion';
import { FaReact, FaPython, FaJs, FaHtml5, FaCss3Alt, FaWordpress, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiDjango, SiFlutter } from 'react-icons/si';

export default function About() {
  const tools = [
    { name: 'Python', icon: <FaPython size={32} className="text-[#3776AB]" /> },
    { name: 'Django', icon: <SiDjango size={32} className="text-[#092E20]" /> },
    { name: 'SQL', icon: <SiMysql size={32} className="text-[#4479A1]" /> },
    { name: 'React', icon: <FaReact size={32} className="text-[#61DAFB]" /> },
    { name: 'JavaScript', icon: <FaJs size={32} className="text-[#F7DF1E]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} className="text-[#06B6D4]" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={32} className="text-[#7952B3]" /> },
    { name: 'HTML5', icon: <FaHtml5 size={32} className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={32} className="text-[#1572B6]" /> },
    { name: 'WordPress', icon: <FaWordpress size={32} className="text-[#21759B]" /> },
    { name: 'Flutter', icon: <SiFlutter size={32} className="text-[#02569B]" /> },
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
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">My Expertise</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">Passionate and detail-oriented Frontend Developer with strong proficiency in React.js, JavaScript, and Tailwind CSS, dedicated to building modern, responsive web applications. Skilled in crafting clean, efficient code and intuitive user interfaces. Experienced in Python, Django, and SQL for full-stack development, with a keen interest in expanding technical expertise. Collaborative problem-solver with a commitment to continuous learning and staying updated with industry trends. Eager to contribute to impactful projects and grow within a dynamic development team.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">My Toolkit</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {tools.map((tool, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="mb-2">
                      {tool.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
