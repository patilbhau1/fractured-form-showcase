import BoundlessVideo from "./BoundlessVideo";

const brandVideos = [
  {
    src: "/videos/Brand_collab_beear.mp4",
    title: "Fruit Beer Ad",
    description: "A vibrant and refreshing animation showcasing a new fruit beer, emphasizing its natural ingredients and crisp taste.",
    shadow: "#C97B3C40",
  },
  {
    src: "/videos/Explore the magic of Moon Watch _ Commercial _ Product commercial.mp4",
    title: "Moon Watch Commercial",
    description: "An elegant commercial highlighting the intricate design and celestial inspiration of the Moon Watch, blending luxury with cosmic wonder.",
    shadow: "#C9C9C933",
  },
  {
    src: "/videos/ssvid.net--Lipstick-Cosmetics-Product-Animation-blender_v720P.mp4",
    title: "Lipstick Animation",
    description: "A sleek and sophisticated product animation for a new line of lipsticks, focusing on rich colors and smooth application.",
    shadow: "#D67B7B40",
  },
  {
    src: "/videos/ssvid.net--buds-product-visualization-3d-animation-blender_1080p.mp4",
    title: "Earbuds Visualization",
    description: "A detailed 3D visualization of cutting-edge earbuds, showcasing their ergonomic design, sound quality, and advanced features.",
    shadow: "#6BAE7540",
  },
  {
    src: "/videos/ssvid.net--coffee-drink-coffee-drink-coffee-blender_v720P.mp4",
    title: "Coffee Drink Animation",
    description: "An inviting animation for a coffee drink, capturing the warmth and aroma of freshly brewed coffee with a modern twist.",
    shadow: "#8B5A3C40",
  },
  {
    src: "/videos/naturals_ice_cream_ad.mp4",
    title: "Naturals Ice Cream Ad",
    description: "A delightful and playful advertisement for Naturals ice cream, emphasizing its natural flavors and creamy texture.",
    shadow: "#4A7A3D40",
  },
];

export const Gallery = () => {
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
      </div>

      {/* Project 1: VFX Breakdown */}
      <div className="container mx-auto px-6 mb-20">
        <h3 className="font-playfair text-4xl font-bold mb-8 text-chaos">VFX Breakdown</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-inter text-2xl font-bold mb-4">Concept</h4>
            <BoundlessVideo src="/videos/minicar_vfx _raw.mp4" shadow="#A0A0A040" className="w-full rounded-lg shadow-lg" />
          </div>
          <div>
            <h4 className="font-inter text-2xl font-bold mb-4">Final</h4>
            <BoundlessVideo src="/videos/Minicar_vfx_final.mp4" shadow="#A0A0A040" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Project 2: Book Brand Promotion */}
      <div className="container mx-auto px-6 mb-20">
        <h3 className="font-playfair text-4xl font-bold mb-8 text-chaos">Book Brand Promotion</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-inter text-2xl font-bold mb-4">Concept</h4>
            <BoundlessVideo src="/videos/Concept_for_book_aniamtion_raw.mp4" shadow="#A0A0A040" className="w-full rounded-lg shadow-lg" />
          </div>
          <div>
            <h4 className="font-inter text-2xl font-bold mb-4">Final</h4>
            <BoundlessVideo src="/videos/Fibal_book animation.mp4" shadow="#A0A0A040" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="container mx-auto px-6 my-20">
        <div className="w-full h-1 bg-gradient-to-r from-velvet-beige/20 via-velvet-smoke/50 to-transparent rounded-full" />
      </div>

      {/* Animated Reels for Brands */}
      <div className="container mx-auto px-6 mt-32 mb-20">
        <div className="text-center animate-wipe-left">
          <h2 className="font-playfair text-6xl md:text-7xl font-bold mb-8 text-experimental">
            Animated Reels for Brands
          </h2>
        </div>
        {brandVideos.map((video, index) => (
          <div key={index} className={`grid md:grid-cols-2 gap-8 items-center mb-16 ${index % 2 === 0 ? '' : 'md:grid-flow-col-dense'}`}>
            <div className={`animate-wipe-right ${index % 2 === 0 ? '' : 'md:col-start-2'}`}>
              <BoundlessVideo src={video.src} shadow={video.shadow} className="w-full h-full object-cover" />
            </div>
            <div className={`animate-wipe-left ${index % 2 === 0 ? '' : 'md:col-start-1'}`}>
              <h3 className="font-playfair text-4xl font-bold mb-4 text-chaos">
                {video.title}
              </h3>
              <p className="font-inter text-xl text-velvet-smoke leading-relaxed">
                {video.description}
              </p>
            </div>
          </div>
        ))}
        <div className="text-center mt-8">
          <a href="#contact" className="px-8 py-4 bg-primary text-primary-foreground font-inter font-medium rounded-lg hover:bg-gradient-chaos transition-all duration-300">
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
};