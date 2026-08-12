import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowUpRight, FiCopy, FiCheck } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const EMAIL = 'abishek8673@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const containerStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const socials = [
    { icon: <FaGithub size={16} />, url: 'https://github.com/ABISHEK086', name: 'GitHub' },
    { icon: <FaLinkedin size={16} />, url: 'https://www.linkedin.com/in/abishek-antony-a86673ap', name: 'LinkedIn' },
    { icon: <FaTwitter size={16} />, url: 'https://x.com/Abishek098210', name: 'Twitter' },
  ];

  return (
    <section id="contact" className="relative py-28 bg-[hsl(var(--background))] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] rounded-full bg-[hsl(var(--primary)/0.06)] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-6">
            <span className="size-2 rounded-full bg-[hsl(var(--primary))]" />
            <span className="text-sm tracking-widest uppercase text-[hsl(var(--muted-foreground))]">
              Contact
            </span>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-[hsl(var(--muted-foreground))] mb-4">
            Have a project in mind or an opportunity to discuss?
          </motion.p>

          <motion.div variants={fadeInUp}>
            <a
              href={'mailto:' + EMAIL}
              className="group inline-flex flex-wrap items-center justify-center gap-3 font-anton uppercase leading-[0.95] text-[hsl(var(--foreground))] text-3xl sm:text-5xl lg:text-6xl mb-2 hover:text-[hsl(var(--primary))] transition-colors duration-300"
            >
              <span className="relative">
                {EMAIL}
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[hsl(var(--primary))] group-hover:w-full transition-all duration-500" />
              </span>
              <FiArrowUpRight className="text-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 shrink-0" size={36} />
            </a>
          </motion.div>

          <motion.button
            variants={fadeInUp}
            onClick={handleCopy}
            className="mt-8 inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] px-4 py-2"
          >
            {copied ? (
              <>
                <FiCheck size={14} />
                Copied to clipboard
              </>
            ) : (
              <>
                <FiCopy size={14} />
                Copy email address
              </>
            )}
          </motion.button>

          <motion.div
            variants={fadeInUp}
            className="mt-16 pt-8 border-t border-[hsl(var(--border))] flex items-center justify-center gap-6"
          >
            {socials.map(function (social, i) {
              return (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  {social.icon}
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}