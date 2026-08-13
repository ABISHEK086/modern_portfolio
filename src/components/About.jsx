import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaBootstrap,
  FaJava,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiDjango,
  SiFirebase,
  SiNextdotjs,
  SiFastapi,
  SiPostgresql,
  SiAnthropic,
} from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function About() {
  const tools = [
    { name: "Python", icon: <FaPython size={22} /> },
    { name: "Java", icon: <FaJava size={22} /> },
    { name: "Django", icon: <SiDjango size={22} /> },
    { name: "FastAPI", icon: <SiFastapi size={22} /> },
    { name: "SQL", icon: <SiPostgresql size={22} /> },
    { name: "MySQL", icon: <SiMysql size={22} /> },
    { name: "React", icon: <FaReact size={22} /> },
    { name: "Next.js", icon: <SiNextdotjs size={22} /> },
    { name: "JavaScript", icon: <FaJs size={22} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={22} /> },
    { name: "Bootstrap", icon: <FaBootstrap size={22} /> },
    { name: "HTML5", icon: <FaHtml5 size={22} /> },
    { name: "CSS3", icon: <FaCss3Alt size={22} /> },
    { name: "Firebase", icon: <SiFirebase size={22} /> },
    { name: "WordPress", icon: <FaWordpress size={22} /> },
    { name: "AWS", icon: <FaAws size={22} /> },
    { name: "Claude Code", icon: <SiAnthropic size={22} /> },
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-[hsl(var(--background))] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] rounded-full bg-[hsl(var(--primary)/0.06)] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
            <span className="size-2 rounded-full bg-[hsl(var(--primary))]" />
            <span className="text-sm tracking-widest uppercase text-[hsl(var(--muted-foreground))]">
              About
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-anton uppercase leading-[0.95] text-[hsl(var(--foreground))] text-4xl sm:text-5xl lg:text-6xl mb-16 max-w-3xl"
          >
            Who I <span className="text-[hsl(var(--primary))]">am</span>
          </motion.h2>

          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <motion.div variants={fadeInUp} className="md:col-span-6">
              <p className="text-sm tracking-widest uppercase text-[hsl(var(--muted-foreground))] mb-4">
                My expertise
              </p>
              <p className="text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
                I'm a Software Engineer focused on building intelligent,
                user-centric applications powered by modern web
                technologies and AI. From frontend performance to backend
                logic, I enjoy turning complex ideas into scalable, clean,
                and practical solutions.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
                I've worked across product development and internships
                with companies like{" "}
                <span className="text-[hsl(var(--foreground))]">
                  JLK Technology, JPMorgan Chase, Accenture, and Quantium
                </span>{" "}
                - solving problems ranging from UI performance
                optimization to financial data visualization and
                data-driven decision making.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-[hsl(var(--border))]">
                <div>
                  <p className="font-anton text-3xl text-[hsl(var(--primary))]">4+</p>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wide mt-1">
                    Internships
                  </p>
                </div>
                <div>
                  <p className="font-anton text-3xl text-[hsl(var(--primary))]">15+</p>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wide mt-1">
                    Projects built
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="md:col-span-6">
              <p className="text-sm tracking-widest uppercase text-[hsl(var(--muted-foreground))] mb-4">
                My toolkit
              </p>

              <motion.div
                variants={containerStagger}
                className="grid grid-cols-3 gap-px bg-[hsl(var(--border))] border border-[hsl(var(--border))]"
              >
                {tools.map((tool, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ backgroundColor: "hsl(var(--background-light))" }}
                    className="flex flex-col items-center justify-center gap-2 py-6 bg-[hsl(var(--background))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    {tool.icon}
                    <span className="text-xs font-medium text-center px-2">
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