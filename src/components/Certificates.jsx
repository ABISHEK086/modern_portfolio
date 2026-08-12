import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import AccentureImage from '../assets/accenture.png';
import AccentureeImage from '../assets/Accenturee.png';
import JpmorganImage from '../assets/Jp.png';
import pythonImage from '../assets/python.png';
import AIImage from '../assets/AI-Fun.png';
import ClaudeImage from '../assets/Claude.png';
import AWSImage from '../assets/aws.png';
import GenAIImage from '../assets/Gen.png';

export default function Experience() {
  const experiences = [
    {
      role: "Developer and Technology Job Simulation",
      company: "Accenture",
      duration: "Aug 2024",
      description: [
        "Completed Accenture's Developer & Technology Job Simulation, gaining hands-on experience in web development, code debugging, and technical assessments.",
        "Developed and optimized functional applications while following industry best practices in Agile workflows and version control.",
      ],
      image: AccentureImage,
      imageAlt: "Accenture Office"
    },
    {
      role: "Python",
      company: "Kaggle",
      description: [
        "Completed a Python course covering fundamental concepts such as variables, data types, loops, conditionals, and functions.",
      ],
      image: pythonImage,
      imageAlt: "Kaggle Python Course"
    },
    {
      role: "AI Fundamentals",
      company: "IBM",
      description: [
        "Explored Developer Tools, gaining expertise in version control, debugging, and testing, plus CI/CD pipelines and containerization.",
      ],
      image: AIImage,
      imageAlt: "AI Fundamentals"
    },
    {
      role: "Claude Code Certification",
      company: "Anthropic",
      description: [
        "Completed Claude Code Certification from Anthropic, gaining expertise in AI-assisted coding, debugging, and documentation.",
      ],
      image: ClaudeImage,
      imageAlt: "Claude Code Certification"
    },
    {
      role: "Solutions Architecture",
      company: "AWS",
      description: [
        "Completed AWS Solution Architecture training, gaining expertise in designing scalable, secure cloud solutions using EC2, S3, RDS, and Lambda.",
      ],
      image: AWSImage,
      imageAlt: "AWS Solution Architecture"
    },
    {
      role: "GenAI",
      company: "BCG",
      description: [
        "Trained in applying GenAI solutions to business transformation — LLMs, RAG, multimodal AI, responsible AI, and prompt engineering.",
      ],
      image: GenAIImage,
      imageAlt: "GenAI"
    },
    {
      role: "Development and Advanced Engineering Job Simulation",
      company: "Accenture",
      duration: "Jun 2024",
      description: [
        "Mastered OOP principles through hands-on coding challenges and system design exercises, refactoring legacy code with SOLID principles.",
      ],
      image: AccentureeImage,
      imageAlt: "Accenture Office"
    },
    {
      role: "Software Engineering",
      company: "JPMorgan & Co",
      duration: "Oct 2024",
      description: [
        "Completed JPMorgan Chase's Software Engineering Simulation, interfacing with real-time stock price data feeds and financial data visualization tools.",
      ],
      image: JpmorganImage,
      imageAlt: "JPMorgan Office"
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="certificates"
      className="relative py-28 bg-[hsl(var(--background))] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[30vw] h-[30vw] rounded-full bg-[hsl(var(--primary)/0.06)] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="size-2 rounded-full bg-[hsl(var(--primary))]" />
            <span className="text-sm tracking-widest uppercase text-[hsl(var(--muted-foreground))]">
              Credentials
            </span>
          </div>

          <h2 className="font-anton uppercase leading-[0.95] text-[hsl(var(--foreground))] text-4xl sm:text-5xl lg:text-6xl mb-16 max-w-3xl">
            Certificates
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={1}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.3, spaceBetween: 1 },
              768: { slidesPerView: 2, spaceBetween: 1 },
              1024: { slidesPerView: 3, spaceBetween: 1 },
            }}
            className="!pb-12 certificate-swiper"
          >
            {experiences.map((exp, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="border border-[hsl(var(--border))] bg-[hsl(var(--background))] h-full flex flex-col">
                  <div className="relative h-44 w-full overflow-hidden border-b border-[hsl(var(--border))] bg-[hsl(var(--background-light))]">
                    <img
                      src={exp.image}
                      alt={exp.imageAlt}
                      className="w-full h-full object-contain p-4 grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <span className="font-anton text-xs text-[hsl(var(--primary))] mb-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-medium text-[hsl(var(--foreground))] mb-1 leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[hsl(var(--primary))] mb-3">
                      {exp.company}
                      {exp.duration && (
                        <span className="text-[hsl(var(--muted-foreground))]"> · {exp.duration}</span>
                      )}
                    </p>

                    <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed line-clamp-4">
                      {exp.description[0]}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}