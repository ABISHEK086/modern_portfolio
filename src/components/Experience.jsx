import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer Trainee",
      company: "JLK Technology India",
      fromDate: "Dec 2025",
      toDate: "May 2026",
      description: [
        "Noticed the app was sluggish on slower devices — traced it to unnecessary re-renders and oversized bundles, then fixed it with lazy loading and memoization, cutting page load time by 30%.",
        "Inherited a UI with inconsistent rendering across 10+ components — refactored the component structure and enforced consistent patterns, eliminating recurring layout bugs and improving reliability across the application.",
        "Identified a recurring frontend-backend data sync issue affecting user flows and built a fix without being asked, resolving 15+ inconsistencies and reducing reported UI bugs to zero across 4 consecutive releases."
      ]
    },
    {
      role: "Application Developer",
      company: "Accenture",
      type: "Virtual Experience Programme",
      fromDate: "Jun 2024",
      toDate: "Aug 2024",
      description: [
        "Faced inefficient SQL queries causing slow data retrieval — restructured the queries and optimized 5+ Python modules, improving system throughput and database performance by 25-30%.",
        "Tracked down the root cause behind 5+ recurring backend incidents through structured debugging, implementing fixes that cut failure rates by 40% and stabilized application behavior.",
        "Applied clean coding and version control practices throughout, improving code maintainability and reducing review feedback cycles."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "JP Morgan Chase & Co.",
      type: "Internship · Remote",
      fromDate: "Aug 2024",
      toDate: "Oct 2024",
      description: [
        "Needed to make raw, fast-moving stock market data usable for traders — built interactive dashboards using proprietary frameworks to transform live feeds, significantly improving data visualization clarity.",
        "Processed and structured real-time financial data feeds, turning noisy raw data into accurate, actionable insights for end users.",
        "Designed and implemented UI components for financial applications, enhancing usability and data readability for traders relying on split-second decisions.",
        "Diagnosed data flow and UI issues by analyzing system behavior under simulated production conditions, ensuring dashboards stayed reliable and responsive."
      ]
    },
    {
      role: "Full Stack Development Intern",
      company: "Kaashiv InfoTech",
      type: "Internship",
      fromDate: "Mar 2024",
      toDate: "May 2024",
      description: [
        "Faced scalability issues in legacy backend services — restructured them using Django and Flask, improving load handling and reducing response latency.",
        "Delivered 4 application features on schedule with 100% sprint completion, while addressing API failures through structured error handling and fallback mechanisms that reduced failure rates noticeably.",
        "Improved frontend responsiveness across devices, cutting layout inconsistencies and boosting overall usability for end users."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Experience
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-blue-200 dark:border-blue-900 ml-3 md:ml-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 md:pl-10 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-900" />

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                    <FiBriefcase className="w-3 h-3" />
                    {exp.type}
                  </span>
                </div>

                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {exp.company}
                </p>

                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <FiCalendar className="w-4 h-4" />
                  <span>{exp.fromDate} — {exp.toDate}</span>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex gap-2"
                    >
                      <span className="text-blue-500 dark:text-blue-400 mt-1">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}