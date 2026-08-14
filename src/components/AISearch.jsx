import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';
import { FiSearch, FiCornerDownLeft, FiX } from 'react-icons/fi';

const RESUME_URL = 'https://drive.google.com/file/d/1UxVbZAcLnt32AT1MhGjHU1riqCsZm2f4/view?usp=sharing';

export default function AISearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const items = [
    {
      label: 'About',
      hint: 'Who I am, my background',
      keywords: 'about who me background bio',
      action: () => scrollToSection('about'),
    },
    {
      label: 'Experience',
      hint: 'Where I have worked',
      keywords: 'experience work job career internship',
      action: () => scrollToSection('experience'),
    },
    {
      label: 'Education',
      hint: 'My academic background',
      keywords: 'education college degree school cgpa',
      action: () => scrollToSection('education'),
    },
    {
      label: 'Projects',
      hint: 'Things I have built',
      keywords: 'projects work portfolio builds apps',
      action: () => scrollToSection('projects'),
    },
    {
      label: 'Contact',
      hint: 'Get in touch',
      keywords: 'contact email reach message talk',
      action: () => scrollToSection('contact'),
    },
    {
      label: 'Resume',
      hint: 'Opens my resume in Google Drive',
      keywords: 'resume cv download pdf',
      action: () => window.open(RESUME_URL, '_blank', 'noopener,noreferrer'),
    },
    {
      label: 'View Full Portfolio',
      hint: 'Jump back to the top',
      keywords: 'portfolio home top full view everything',
      action: () => scrollToSection('home'),
    },
  ];

  const filtered = query.trim()
    ? items.filter((item) =>
        (item.label + ' ' + item.keywords).toLowerCase().includes(query.trim().toLowerCase())
      )
    : items;

  const closeSearch = useCallback(() => {
    setOpen(false);
    setQuery('');
  }, []);

  const handleSelect = (item) => {
    item.action();
    closeSearch();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        closeSearch();
      }
      if (e.key === 'Enter' && open && filtered.length > 0) {
        handleSelect(filtered[0]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, filtered, closeSearch]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open AI search"
        title="Search (Ctrl+K)"
        className="w-9 h-9 flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
      >
        <HiSparkles size={20} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 sm:pt-32 px-4"
            onClick={closeSearch}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl bg-[hsl(var(--background))] border border-[hsl(var(--border))] shadow-2xl"
            >
              <div className="flex items-center gap-3 px-5 py-4 border-b border-[hsl(var(--border))]">
                <FiSearch className="text-[hsl(var(--primary))] shrink-0" size={18} />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask me anything... try 'projects' or 'resume'"
                  className="flex-1 bg-transparent border-0 outline-none text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] text-base"
                />
                <button
                  onClick={closeSearch}
                  aria-label="Close search"
                  className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors shrink-0"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="max-h-80 overflow-y-auto py-2 custom-scrollbar">
                {filtered.length === 0 ? (
                  <p className="px-5 py-8 text-center text-sm text-[hsl(var(--muted-foreground))]">
                    No matches. Try "about", "projects", or "resume".
                  </p>
                ) : (
                  filtered.map((item, i) => (
                    <button
                      key={item.label}
                      onClick={() => handleSelect(item)}
                      className={`w-full flex items-center justify-between gap-3 px-5 py-3 text-left transition-colors ${
                        i === 0 ? 'bg-[hsl(var(--background-light))]' : 'hover:bg-[hsl(var(--background-light))]'
                      }`}
                    >
                      <div>
                        <p className="text-sm font-medium text-[hsl(var(--foreground))]">{item.label}</p>
                        <p className="text-xs text-[hsl(var(--muted-foreground))] mt-0.5">{item.hint}</p>
                      </div>
                      {i === 0 && (
                        <span className="flex items-center gap-1 text-xs text-[hsl(var(--muted-foreground))] shrink-0">
                          <FiCornerDownLeft size={12} />
                          Enter
                        </span>
                      )}
                    </button>
                  ))
                )}
              </div>

              <div className="px-5 py-3 border-t border-[hsl(var(--border))] flex items-center justify-between text-xs text-[hsl(var(--muted-foreground))]">
                <span>Navigate my portfolio instantly</span>
                <span className="hidden sm:inline">Esc to close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}