import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
  title: "RepoPilot – AI GitHub Repository Explainer & Issue Resolver",
  description:
    "An AI-powered developer platform with two tools: a Repo Explainer that analyzes any public GitHub repository and generates an architecture summary, tech stack breakdown, and system diagram — and an autonomous Issue Solver that reads a GitHub issue, analyzes the actual repo code, generates a targeted fix using LLMs, and opens a real pull request via the GitHub API. Built with deterministic snippet-patching to prevent silent code corruption, GitHub/Google OAuth2 authentication, and engineered entirely on free-tier APIs.",
  tags: ["React.js","Next.js", "TypeScript", "FastAPI", "Groq LLM"],
  image: "/repo-pilot.jpg",
  githubUrl: "https://github.com/ABISHEK086/RepoPilot",
},{
  title: "MeetMind – AI Meeting Intelligence Tool",
  description:
    "A full-stack AI web application that transcribes meeting audio using Groq Whisper and extracts structured action items, owner assignments, priority levels, and meeting summaries using Groq LLaMA — running entirely on free-tier APIs. Features animated drag-to-reorder action cards, PDF export, shareable summary links, and a fully mobile-responsive UI with swipe gestures. Deployed on Vercel.",
  tags: ["React.js","Next.js" ,"TypeScript", "Groq API", "Tailwind CSS"],
  image: "/meetmind.jpg",
  githubUrl: "https://github.com/ABISHEK086/Meet-Mind-",
},{
  title: "Fault-line - A software supply-chain vulnerability detection tool",
  description:
    "A tool that instantly shows which parts of a software company would be affected if a security flaw were found in one of their code libraries - and which team to notify. Built with a graph database (CognoDB) to trace these hidden dependency chains, since traditional databases handle this poorly.",
  tags: ["Next.js", "TypeScript","Python","Tailwind CSS", "Flask", "Groq LLM"],
  image: "/fault-line.jpg",
  githubUrl: "https://github.com/ABISHEK086/Fault-line",
},{
    title: "HRMS – Human Resource Management System",
    description:
      "A full-stack HR management platform with JWT-based authentication and role-based access control for employees and admins.",
    tags: ["React.js","Tailwind CSS", "FastAPI", "MySQL"],
    image: "/hrms.jfif",
    githubUrl:
      "https://github.com/ABISHEK086/HRMS-Human-Resource-Management-System",
  },
  {
    title: "Instant Question Generator",
    description:
      "A Django app for generating subject-specific question papers with role-based access and PDF generation.",
    tags: ["HTML","CSS","JavaScript","Python", "Django", "SQLite"],
    image: "/p9.jfif",
    githubUrl: "https://github.com/ABISHEK086/Django-Question-generator",
  },
  {
    title: "Modern Dynamic Business Page",
    description:
      "A high-performance business page with engaging animations and seamless responsiveness.",
    tags: ["React.js","Tailwind CSS", "Framer Motion"],
    image: "/P1.png",
    githubUrl: "https://buisnesspage-git-main-abishek086s-projects.vercel.app/",
  },
  {
    title: "Next-Gen Website Builder Landing Page",
    description:
      "An interactive landing page featuring dynamic animations and a modern aesthetic.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    image: "/p2.png",
    githubUrl: "https://modernbusinesslanding-git-main-abishek086s-projects.vercel.app/",
  },
  {
    title: "Creative Agency Page for Startup",
    description:
      "A digital business page leveraging technology to offer innovative solutions online.",
    tags: ["HTML","CSS","JavaScript","Bootstrap"],
    image: "/p5.png",
    githubUrl: "https://modernstartup-git-master-abishek086s-projects.vercel.app/",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export default function Projects() {
  const handleVisitClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section
      id="projects"
      className="relative py-28 bg-[hsl(var(--background))] overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-[hsl(var(--primary)/0.06)] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerStagger}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
            <span className="size-2 rounded-full bg-[hsl(var(--primary))]" />
            <span className="text-sm tracking-widest uppercase text-[hsl(var(--muted-foreground))]">
              Work
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-anton uppercase leading-[0.95] text-[hsl(var(--foreground))] text-4xl sm:text-5xl lg:text-6xl mb-16 max-w-3xl"
          >
            Selected <span className="text-[hsl(var(--primary))]">projects</span>
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(var(--border))] border border-[hsl(var(--border))]">
            {projects.map((project, i) => (
              <motion.button
                key={i}
                variants={fadeInUp}
                onClick={() => handleVisitClick(project.githubUrl)}
                className="group relative aspect-square bg-[hsl(var(--background))] overflow-hidden text-left cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-[hsl(var(--background))]/70 group-hover:bg-[hsl(var(--background))]/92 transition-colors duration-500" />

                <span className="absolute top-4 left-4 font-anton text-xs text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                  <FiArrowUpRight className="text-[hsl(var(--primary))]" size={18} />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-sm font-medium text-[hsl(var(--foreground))] mb-1.5 leading-snug line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[hsl(var(--muted-foreground))] mb-3 leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-16 transition-all duration-500 overflow-hidden">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[10px] uppercase tracking-wide text-[hsl(var(--primary))] border border-[hsl(var(--primary)/0.3)] px-1.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}