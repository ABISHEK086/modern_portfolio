import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiDjango, SiFlutter } from "react-icons/si";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function About() {
  const tools = [
    { name: "Python", icon: <FaPython size={32} className="text-[#3776AB]" /> },
    { name: "Django", icon: <SiDjango size={32} className="text-[#092E20]" /> },
    { name: "SQL", icon: <SiMysql size={32} className="text-[#4479A1]" /> },
    { name: "React", icon: <FaReact size={32} className="text-[#61DAFB]" /> },
    { name: "JavaScript", icon: <FaJs size={32} className="text-[#F7DF1E]" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={32} className="text-[#06B6D4]" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap size={32} className="text-[#7952B3]" />,
    },
    { name: "HTML5", icon: <FaHtml5 size={32} className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <FaCss3Alt size={32} className="text-[#1572B6]" /> },
    {
      name: "WordPress",
      icon: <FaWordpress size={32} className="text-[#21759B]" />,
    },
    { name: "Flutter", icon: <SiFlutter size={32} className="text-[#02569B]" /> },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
          className="max-w-4xl mx-auto"
        >
          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          >
            About <span className="text-primary dark:text-secondary">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {}
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                My Expertise
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
               Software Developer skilled in React.js, JavaScript, Tailwind CSS, Python, Django, and SQL, with hands-on experience from internships at JPMorgan Chase & Co. and Accenture. I build scalable, responsive applications and excel at API integration, debugging, and data-driven solutions. Eager to contribute technical expertise, problem-solving, and a growth mindset to create impactful products.
              </p>
            </motion.div>

            {}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                My Toolkit
              </h3>

              <motion.div
                variants={containerStagger}
                className="grid grid-cols-3 sm:grid-cols-4 gap-4"
              >
                {tools.map((tool, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="mb-2">{tool.icon}</div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
