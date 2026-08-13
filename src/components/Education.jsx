import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      institution: "Don Bosco College (Co-Ed) - Yelagiri Hills",
      degree: "Bachelor of Computer Applications",
      field: "Computer Science",
      year: "2022 - 2025",
      score: "CGPA 8.77"
    },
    {
      institution: "St James Higher Secondary School - Trichy",
      degree: "HSC",
      field: "Bio-Maths",
      year: "2022",
      score: "74%"
    },
    {
      institution: "John Brito Higher Secondary School",
      degree: "SSLC",
      field: "General Education",
      year: "2020",
      score: "79.4%"
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
      id="education"
      className="relative py-28 bg-[hsl(var(--background))] overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] rounded-full bg-[hsl(var(--primary)/0.06)] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
            <span className="size-2 rounded-full bg-[hsl(var(--primary))]" />
            <span className="text-sm tracking-widest uppercase text-[hsl(var(--muted-foreground))]">
              Background
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-anton uppercase leading-[0.95] text-[hsl(var(--foreground))] text-4xl sm:text-5xl lg:text-6xl mb-16 max-w-3xl"
          >
            Education
          </motion.h2>

          <div>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-[hsl(var(--border))] first:border-t-0"
              >
                <div className="md:col-span-3">
                  <span className="font-anton text-4xl text-[hsl(var(--border))] leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mt-3">
                    {edu.year}
                  </p>
                </div>

                <div className="md:col-span-9 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-medium text-[hsl(var(--foreground))] mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-[hsl(var(--primary))]">
                      {edu.degree} - {edu.field}
                    </p>
                  </div>

                  <span className="text-sm font-medium text-[hsl(var(--foreground))] border border-[hsl(var(--border))] px-3 py-1 shrink-0">
                    {edu.score}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}