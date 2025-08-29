import { useState } from 'react';
import artwork1 from '@/assets/artwork-1.jpg';
import artwork2 from '@/assets/artwork-2.jpg';
import artwork3 from '@/assets/artwork-3.jpg';
import artwork4 from '@/assets/artwork-4.jpg';
import artwork5 from '@/assets/artwork-5.jpg';
import artwork6 from '@/assets/artwork-6.jpg';

const portfolioItems = [
  {
    id: 1,
    src: artwork1,
    title: "Fluid Geometry",
    category: "Abstract Sculpture",
    year: "2024",
    description: "Exploring the intersection of organic fluidity and geometric precision through metallic surfaces and crystalline structures."
  },
  {
    id: 2,
    src: artwork2,
    title: "Impossible Architecture",
    category: "Architectural Visualization",
    year: "2024",
    description: "Futuristic architectural concepts that challenge gravity and conventional building principles with holographic materials."
  },
  {
    id: 3,
    src: artwork3,
    title: "Ethereal Forms",
    category: "Digital Sculpture",
    year: "2023",
    description: "Interwoven ribbons of marble and glass creating elegant compositions between curves and sharp angles."
  },
  {
    id: 4,
    src: artwork4,
    title: "Crystal Dynamics",
    category: "Generative Art",
    year: "2024",
    description: "Prismatic crystalline formations emerging from organic bases, exploring light refraction and geometric fractals."
  },
  {
    id: 5,
    src: artwork5,
    title: "Liquid Metal",
    category: "Motion Graphics",
    year: "2023",
    description: "Kinetic energy captured in liquid metal sculptures, showcasing surface tension and fluid dynamics."
  },
  {
    id: 6,
    src: artwork6,
    title: "Organic Brutalism",
    category: "Conceptual Design",
    year: "2024",
    description: "The marriage of brutalist architecture with bio-morphic elements, creating monumental yet organic compositions."
  }
];

export const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center animate-wipe-left">
          <h2 className="font-playfair text-6xl md:text-7xl font-bold mb-8 text-experimental">
            Selected Works
          </h2>
          <p className="text-xl font-inter text-velvet-smoke max-w-3xl mx-auto leading-relaxed">
            A curated collection of experimental 3D artworks exploring the boundaries 
            between digital and physical, chaos and order, emotion and technology.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mt-16 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`
                px-6 py-3 font-inter font-medium rounded-full transition-all duration-500
                ${filter === category 
                  ? 'bg-primary text-primary-foreground shadow-artistic' 
                  : 'bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground hover:shadow-chaos'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetrical Grid Gallery */}
      <div className="container mx-auto px-6">
        <div className="asymmetric-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`
                gallery-item cursor-pointer group relative
                grid-chaos-${(index % 6) + 1}
                animate-wipe-right
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-artistic">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-velvet-deep/80 via-velvet-smoke/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-playfair text-2xl font-bold text-soft-white mb-2">
                      {item.title}
                    </h3>
                    <p className="font-inter text-velvet-beige mb-1">
                      {item.category} • {item.year}
                    </p>
                    <p className="font-inter text-sm text-soft-white/80 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Glitch Border Effect */}
                <div className="absolute inset-0 border-2 border-chaos-accent rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-glitch" />
              </div>

              {/* Floating Category Tag */}
              <div className="absolute top-4 right-4 bg-velvet-smoke/90 backdrop-blur-sm text-soft-white px-3 py-1 rounded-full text-sm font-inter font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.year}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Selected Item */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-velvet-deep/90 backdrop-blur-lg z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-card rounded-2xl shadow-depth overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Details */}
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <h3 className="font-playfair text-4xl font-bold text-chaos mb-4">
                    {selectedItem.title}
                  </h3>
                  <div className="flex items-center gap-4 text-velvet-smoke font-inter mb-6">
                    <span>{selectedItem.category}</span>
                    <span>•</span>
                    <span>{selectedItem.year}</span>
                  </div>
                </div>
                
                <p className="font-inter text-lg leading-relaxed text-foreground mb-8">
                  {selectedItem.description}
                </p>
                
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-3 bg-primary text-primary-foreground font-inter font-medium rounded-lg hover:bg-gradient-chaos transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Background Ambient Elements */}
      <div className="absolute top-20 right-20 w-1 h-32 bg-gradient-to-b from-velvet-beige/20 to-transparent rotate-45" />
      <div className="absolute bottom-40 left-20 w-24 h-1 bg-gradient-to-r from-velvet-smoke/20 to-transparent" />
    </section>
  );
};