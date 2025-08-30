import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="gallery">
          <Gallery />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-velvet-deep text-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="font-playfair text-2xl font-bold mb-4 text-chaos">
              NEXUS
            </div>
            <p className="font-inter text-velvet-beige mb-6">
              Experimental 3D Artist • Digital Sculptor
            </p>
            <div className="flex justify-center space-x-6 text-sm font-inter">
              <span>© 2024 Dream Render VFX Studios</span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
