import { useState, useEffect } from 'react';
import artwork1 from '@/assets/artwork-1.jpg';
import artwork2 from '@/assets/artwork-2.jpg';
import artwork3 from '@/assets/artwork-3.jpg';
import artwork4 from '@/assets/artwork-4.jpg';
import artwork5 from '@/assets/artwork-5.jpg';
import artwork6 from '@/assets/artwork-6.jpg';

const artworks = [
  { id: 1, src: artwork1, title: "Fluid Geometry" },
  { id: 2, src: artwork2, title: "Impossible Architecture" },
  { id: 3, src: artwork3, title: "Ethereal Forms" },
  { id: 4, src: artwork4, title: "Crystal Dynamics" },
  { id: 5, src: artwork5, title: "Liquid Metal" },
  { id: 6, src: artwork6, title: "Organic Brutalism" }
];

export const Hero = () => {
  const [shuffling, setShuffling] = useState(false);
  const [currentFragments, setCurrentFragments] = useState(artworks);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffling(true);
      setTimeout(() => {
        setCurrentFragments(prev => [...prev].sort(() => Math.random() - 0.5));
        setShuffling(false);
      }, 800);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleFragmentHover = () => {
    if (!shuffling) {
      setShuffling(true);
      setTimeout(() => {
        setCurrentFragments(prev => [...prev].sort(() => Math.random() - 0.5));
        setShuffling(false);
      }, 600);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-depth">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="wireframe-overlay w-full h-full" />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-chaos">
          <h1 className="font-playfair text-7xl md:text-9xl font-bold mb-6 text-chaos">
            <span className="glitch-effect" data-text="NEXUS">NEXUS</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter text-velvet-smoke max-w-2xl mx-auto leading-relaxed">
            3D Artist • Digital Sculptor • Experimental Designer
          </p>
          <div className="w-24 h-1 bg-gradient-chaos mx-auto mt-8 rounded-full" />
        </div>

        {/* Chaos Reel */}
        <div className="perspective-1000 relative">
          <div className="transform-3d">
            <div className="grid grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
              {currentFragments.map((artwork, index) => (
                <div
                  key={artwork.id}
                  className={`
                    chaos-fragment cursor-pointer relative group
                    ${shuffling ? 'animate-chaos-shuffle' : ''}
                    ${index % 2 === 0 ? 'mt-8' : ''}
                    ${index % 3 === 0 ? 'animate-float' : ''}
                  `}
                  onMouseEnter={handleFragmentHover}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    height: `${200 + (index % 3) * 50}px`
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-artistic">
                    <img
                      src={artwork.src}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-velvet-deep/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-soft-white text-sm font-inter font-medium">
                        {artwork.title}
                      </p>
                    </div>
                  </div>
                  
                  {/* 3D Transform Effect */}
                  <div className="absolute inset-0 rounded-lg border border-velvet-beige/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-wipe-left">
          <button className="group relative px-8 py-4 font-inter font-medium text-primary-foreground bg-primary rounded-full shadow-chaos hover:shadow-depth transition-all duration-500 hover:scale-105">
            <span className="relative z-10">Explore Gallery</span>
            <div className="absolute inset-0 bg-gradient-chaos rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>

      {/* Ambient Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-chaos-accent rounded-full animate-float opacity-60" />
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-velvet-beige rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-velvet-smoke/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};