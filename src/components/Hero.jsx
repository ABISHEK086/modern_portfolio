import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";
import profileImage from "../assets/profile.jpeg";
import AuroraBackground from "./AuroraBackground";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1UxVbZAcLnt32AT1MhGjHU1riqCsZm2f4/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[hsl(var(--background))]"
    >
      <AuroraBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-3/5"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="size-2 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
              <span className="text-sm tracking-widest uppercase text-[hsl(var(--muted-foreground))]">
                Available for full-time roles
              </span>
            </div>

            <h1 className="font-anton uppercase leading-[0.9] text-[hsl(var(--foreground))] text-6xl sm:text-7xl lg:text-8xl mb-6">
              Software
              <br />
              <span className="text-[hsl(var(--primary))]">Developer</span>
            </h1>

            <p className="text-lg max-w-lg mb-10 text-[hsl(var(--muted-foreground))]">
              Hi, I'm{" "}
              <span className="text-[hsl(var(--foreground))] font-medium">
                Abishek
              </span>
              . Turning ideas into functioning software across the
              stack — solid backend systems and interfaces people
              actually enjoy using.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="px-7 py-3.5 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-medium flex items-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                See My Work <FiArrowRight />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="px-7 py-3.5 border border-[hsl(var(--border))] text-[hsl(var(--foreground))] font-medium hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in Touch
              </motion.button>
              <motion.button
                onClick={handleDownloadCV}
                className="px-7 py-3.5 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] font-medium flex items-center gap-2 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Resume <FiDownload />
              </motion.button>
            </div>

            <div className="flex gap-5">
              {[
                { icon: <FiGithub />, url: "https://github.com/ABISHEK086", name: "GitHub" },
                { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/abishek-antony-a86673ap", name: "LinkedIn" },
                { icon: <FiTwitter />, url: "https://x.com/Abishek098210", name: "Twitter" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:w-2/5 flex justify-center"
          >
            <div className="relative w-64 h-72 sm:w-80 sm:h-96">
              <div className="absolute -inset-3 border border-[hsl(var(--primary)/0.4)]" />
              <div className="relative w-full h-full overflow-hidden border border-[hsl(var(--border))]">
                <img
                  src={profileImage}
                  alt="Abishek Antony"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-[hsl(var(--primary)/0.12)] mix-blend-overlay" />
              </div>

              <span className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[hsl(var(--primary))]" />
              <span className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[hsl(var(--primary))]" />

              <div className="absolute -bottom-6 -left-6 bg-[hsl(var(--background-light))] border border-[hsl(var(--border))] px-4 py-3">
                <p className="font-anton text-2xl text-[hsl(var(--primary))]">4+</p>
                <p className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wide">
                  Internships
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}