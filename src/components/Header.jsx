import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiMail } from 'react-icons/fi';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.jpeg';

export default function Header({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const closeMenu = useCallback(() => setOpen(false), []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (open && latest > 100) closeMenu();
    setIsScrolled(latest > 10);
  });

  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Projects', section: 'projects' },
    { name: 'Experience', section: 'experience' },
    { name: 'Education', section: 'education' },
    { name: 'Contact', section: 'contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub size={16} />, url: 'https://github.com/ABISHEK086', name: 'GitHub' },
    { icon: <FaTwitter size={16} />, url: 'https://x.com/Abishek098210', name: 'Twitter' },
    { icon: <FaLinkedin size={16} />, url: 'https://www.linkedin.com/in/abishek-antony-a86673ap', name: 'LinkedIn' },
    { icon: <FiMail size={16} />, url: 'mailto:abishek8673@gmail.com', name: 'Email' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest('.mobile-menu-container')) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, closeMenu]);

  const headerClass = isScrolled
    ? 'fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-[hsl(var(--background))]/90 backdrop-blur-md border-b border-[hsl(var(--border))]'
    : 'fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-transparent border-b border-transparent';

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3" onClick={() => scrollToSection('home')}>
            <img
              src={profileImg}
              alt="Abishek"
              className="w-9 h-9 rounded-full object-cover border border-[hsl(var(--border))]"
              loading="lazy"
            />
            <span className="font-anton uppercase text-lg text-[hsl(var(--foreground))]">
              ABI
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(function (item) {
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-5">
              {socialLinks.map(function (social, index) {
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                );
              })}
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 flex items-center justify-center border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:border-[hsl(var(--primary))] transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>

            <button
              className="md:hidden text-[hsl(var(--foreground))]"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mobile-menu-container overflow-hidden border-t border-[hsl(var(--border))]"
            >
              <div className="py-6 space-y-5">
                {navItems.map(function (item) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.section)}
                      className="block text-left text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                    >
                      {item.name}
                    </button>
                  );
                })}
                <div className="flex items-center gap-5 pt-4 border-t border-[hsl(var(--border))]">
                  {socialLinks.map(function (social, index) {
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                        aria-label={social.name}
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}