import { motion } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiArrowUpRight } from 'react-icons/fi';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_qwvvi0i',
      'template_595z2ti',
      form.current,
      '9lEx7DnoagwgoJo6A'
    )
      .then(() => alert('Message sent!'))
      .catch(() => alert('Failed to send message'));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const containerStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[hsl(var(--background))] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-[hsl(var(--primary)/0.05)] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
          className="max-w-2xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
            <span className="size-2 rounded-full bg-[hsl(var(--primary))]" />
            <span className="text-sm tracking-widest uppercase text-[hsl(var(--muted-foreground))]">
              Contact
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-anton uppercase leading-[0.95] text-[hsl(var(--foreground))] text-4xl sm:text-5xl lg:text-6xl mb-6"
          >
            Let&apos;s <span className="text-[hsl(var(--primary))]">talk</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-[hsl(var(--muted-foreground))] mb-12 max-w-md"
          >
            Have a project in mind or an opportunity to discuss? Send a
            message and I&apos;ll get back to you.
          </motion.p>

          <motion.form
            variants={fadeInUp}
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm text-[hsl(var(--muted-foreground))]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full px-0 py-2.5 bg-transparent border-0 border-b border-[hsl(var(--border))] focus:border-[hsl(var(--primary))] focus:outline-none text-[hsl(var(--foreground))] transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-[hsl(var(--muted-foreground))]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full px-0 py-2.5 bg-transparent border-0 border-b border-[hsl(var(--border))] focus:border-[hsl(var(--primary))] focus:outline-none text-[hsl(var(--foreground))] transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm text-[hsl(var(--muted-foreground))]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-0 py-2.5 bg-transparent border-0 border-b border-[hsl(var(--border))] focus:border-[hsl(var(--primary))] focus:outline-none text-[hsl(var(--foreground))] transition-colors resize-none"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="mt-4 px-7 py-3.5 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-medium flex items-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Send message
              <FiArrowUpRight />
            </motion.button>
          </motion.form>

          <motion.div
            variants={fadeInUp}
            className="mt-16 pt-8 border-t border-[hsl(var(--border))] flex items-center gap-2 text-[hsl(var(--muted-foreground))]"
          >
            <FiMail size={16} />
            <span className="text-sm">Or reach me directly at abishek8673@gmail.com</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}