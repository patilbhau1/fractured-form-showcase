import { useState, useEffect } from 'react';

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled 
            ? 'bg-soft-white/90 backdrop-blur-lg shadow-artistic' 
            : 'bg-transparent'
          }
        `}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="group"
            >
              <div className="font-playfair text-2xl font-bold text-foreground group-hover:text-chaos-accent transition-colors duration-300">
                <span className="glitch-effect" data-text="NEXUS">NEXUS</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative font-inter font-medium transition-all duration-300 group
                    ${activeSection === item.id 
                      ? 'text-chaos-accent' 
                      : 'text-foreground hover:text-chaos-accent'
                    }
                  `}
                >
                  {item.label}
                  <span 
                    className={`
                      absolute bottom-0 left-0 w-full h-0.5 bg-chaos-accent transform origin-left transition-transform duration-300
                      ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                    `}
                  />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className="w-full h-0.5 bg-foreground transition-all duration-300" />
                <span className="w-full h-0.5 bg-foreground transition-all duration-300" />
                <span className="w-full h-0.5 bg-foreground transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
        <div 
          className="h-full bg-gradient-chaos transition-all duration-150 ease-out"
          style={{
            width: `${Math.min(100, (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
          }}
        />
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => scrollToSection('contact')}
        className={`
          fixed bottom-8 right-8 z-40 group transition-all duration-500
          ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        <div className="relative">
          <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-chaos flex items-center justify-center group-hover:bg-gradient-chaos group-hover:scale-110 group-hover:shadow-depth transition-all duration-300">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
              />
            </svg>
          </div>
          
          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-chaos-accent animate-ping opacity-75" />
        </div>
      </button>
    </>
  );
};