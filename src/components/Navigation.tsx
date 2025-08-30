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
              <div className="flex flex-col leading-none font-playfair text-foreground group-hover:text-chaos-accent transition-colors duration-300">
                <span className="text-2xl font-bold">
                  <span className="text-chaos-accent">D</span>ream <span className="text-chaos-accent">R</span>ender
                </span>
                <span className="text-xs tracking-widest">STUDIOS</span>
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
      <a
        href="https://wa.me/917506750982?text=hi%20pravin%20!"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          fixed bottom-8 right-8 z-40 group transition-all duration-500
          ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        <div className="relative">
          <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-chaos flex items-center justify-center group-hover:bg-gradient-chaos group-hover:scale-110 group-hover:shadow-depth transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          </div>
          
          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-chaos-accent animate-ping opacity-75" />
        </div>
      </a>
    </>
  );
};