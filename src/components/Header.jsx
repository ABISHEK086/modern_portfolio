import { useState, useCallback } from 'react';
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.jpeg';

export default function Header({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Smooth scroll animations
  const headerHeight = useTransform(scrollY, [0, 100], [0, -100]);
  const headerOpacity = useTransform(scrollY, [0, 80], [1, 0.9]);
  const headerBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(10px)"]);
  
  // Memoized close menu function
  const closeMenu = useCallback(() => setOpen(false), []);

  // Close mobile menu when scrolling down
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (open && latest > 100) {
      closeMenu();
    }
  });

  const navItems = [
    { name: "Home", path: "/", section: "home" },
    { name: "About", path: "/about", section: "about" },
    { name: "Projects", path: "/projects", section: "projects" },
    { name: "Contact", path: "/contact", section: "contact" },
    { name: "Experience", path: "/experience", section: "experience" },
  ];

  const socialLinks = [
    { icon: <FaGithub size={18} />, url: "https://github.com/ABISHEK086" },
    { icon: <FaTwitter size={18} />, url: "https://x.com/Abishek098210" },
    { icon: <FaLinkedin size={18} />, url: "https://www.linkedin.com/in/abishek-antony-a86673ap" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    closed: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3,
        when: "afterChildren" 
      } 
    }
  };

  const mobileItemVariants = {
    open: { 
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
    closed: { 
      y: -20,
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      style={{
        y: headerHeight,
        opacity: headerOpacity,
        backdropFilter: headerBlur,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      className="fixed w-full bg-white/80 dark:bg-gray-900/80 z-50 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with profile image */}
          <Link 
            to="/" 
            className="flex items-center gap-3"
            onClick={() => scrollToSection('home')}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary dark:border-secondary"
              >
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Portfolio
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.div key={item.name} variants={itemVariants}>
                <button
                  onClick={() => scrollToSection(item.section)}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary font-medium transition-colors"
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
          </motion.nav>

          {/* Right side (social + dark mode) */}
          <div className="flex items-center gap-4">
            {/* Social Icons - Desktop */}
            <motion.div 
              className="hidden md:flex items-center gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary"
                  aria-label={`${social.icon.type.name} profile`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full focus:outline-none"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? (
                <FiSun className="w-5 h-5 text-yellow-300" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button 
              className="md:hidden p-2 rounded-full focus:outline-none"
              onClick={() => setOpen(!open)}
              whileTap={{ scale: 0.9 }}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className="md:hidden bg-white dark:bg-gray-800 overflow-hidden"
          initial="closed"
          animate={open ? "open" : "closed"}
          variants={mobileMenuVariants}
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <motion.div 
                key={item.name}
                variants={mobileItemVariants}
              >
                <button
                  onClick={() => scrollToSection(item.section)}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary w-full text-left"
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
            <motion.div 
              className="flex gap-4 pt-2"
              variants={mobileItemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary p-2"
                  aria-label={`${social.icon.type.name} profile`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
