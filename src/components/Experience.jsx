import { motion } from 'framer-motion';

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const containerStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  return (
    <section
      id="experience"
      className="relative py-28 bg-[hsl(var(--background))] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] rounded-full bg-[hsl(var(--primary)/0.06)] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerStagger}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
            <span className="size-2 rounded-full bg-[hsl(var(--primary))]" />
            <span className="text-sm tracking-widest uppercase text-[hsl(var(--muted-foreground))]">
              Career
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-anton uppercase leading-[0.95] text-[hsl(var(--foreground))] text-4xl sm:text-5xl lg:text-6xl mb-16 max-w-3xl"
          >
            Where I&apos;ve <span className="text-[hsl(var(--primary))]">worked</span>
          </motion.h2>

          <div>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="grid md:grid-cols-12 gap-4 md:gap-8 py-10 border-t border-[hsl(var(--border))] first:border-t-0"
              >
                <div className="md:col-span-3">
                  <span className="font-anton text-5xl text-[hsl(var(--border))] leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mt-3">
                    {exp.fromDate} — {exp.toDate}
                  </p>
                  {exp.type && (
                    <p className="text-xs uppercase tracking-wide text-[hsl(var(--primary))] mt-1">
                      {exp.type}
                    </p>
                  )}
                </div>

                <div className="md:col-span-9">
                  <h3 className="text-xl font-medium text-[hsl(var(--foreground))] mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-[hsl(var(--primary))] mb-5">{exp.company}</p>

                  <ul className="space-y-3">
                    {exp.description.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed flex gap-3"
                      >
                        <span className="text-[hsl(var(--primary))] mt-0.5 shrink-0">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}