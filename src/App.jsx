import { useState, useEffect } from 'react';   
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero'; 
import About from './components/About';   
import Projects from './components/Projects';  
import Contact from './components/Contact';  
import Footer from './components/Footer'; 
import Experience from './components/Experience';
import Education from './components/Education';
import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
    useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setDarkMode(
      savedMode ? savedMode === 'true' : 
      systemPrefersDark ? true : false
    );
  }, []);

 useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
      }
    }
  }, [darkMode, mounted]);

 
  if (!mounted) {
    return null;
  }

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-1 bg-white dark:bg-gray-900 transition-colors duration-200">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Education />
                <Contact />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
