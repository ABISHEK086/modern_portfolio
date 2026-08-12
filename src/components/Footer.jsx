import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { icon: <FiGithub />, url: 'https://github.com/ABISHEK086', name: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/abishek-antony-a86673ap', name: 'LinkedIn' },
    { icon: <FiTwitter />, url: 'https://x.com/Abishek098210', name: 'Twitter' },
  ];

  return (
    <footer className="relative bg-[hsl(var(--background))] border-t border-[hsl(var(--border))]">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <p className="text-sm tracking-widest uppercase text-[hsl(var(--muted-foreground))] mb-3">
              Have a project in mind?
            </p>
            <a
              href="mailto:abishek8673@gmail.com"
              className="font-anton uppercase text-3xl sm:text-4xl text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors inline-block"
            >
              Let's talk
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-11 h-11 flex items-center justify-center border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:border-[hsl(var(--primary))] transition-colors shrink-0"
          >
            <FiArrowUp size={18} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[hsl(var(--border))]">
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            Copyright {new Date().getFullYear()} Abishek Antony. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
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
            <a
              href="mailto:abishek8673@gmail.com"
              aria-label="Email"
              className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}