import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.jpeg';
import AISearch from './AISearch';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 10);
  });

  const socialLinks = [
    { icon: <FaGithub size={16} />, url: 'https://github.com/ABISHEK086', name: 'GitHub' },
    { icon: <FaTwitter size={16} />, url: 'https://x.com/Abishek098210', name: 'Twitter' },
    { icon: <FaLinkedin size={16} />, url: 'https://www.linkedin.com/in/abishek-antony-a86673ap', name: 'LinkedIn' },
    { icon: <FiMail size={16} />, url: 'mailto:abishek8673@gmail.com', name: 'Email' },
  ];

  const scrollToHome = () => {
    const element = document.getElementById('home');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const headerClass = isScrolled
    ? 'fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-[hsl(var(--background))]/90 backdrop-blur-md border-b border-[hsl(var(--border))]'
    : 'fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-transparent border-b border-transparent';

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3" onClick={scrollToHome}>
            <img
              src={profileImg}
              alt="Abishek"
              className="w-9 h-9 rounded-full object-cover border border-[hsl(var(--border))]"
              loading="lazy"
            />
            <span className="font-anton uppercase text-lg text-[hsl(var(--foreground))]">
              Abishek
            </span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-5">
            <AISearch />

            <div className="flex items-center gap-3 sm:gap-5">
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
        </div>
      </div>
    </header>
  );
}