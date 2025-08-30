import { useState } from 'react';

export const About = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skills = [
    { name: 'Blender', level: 95, category: '3D Modeling' },
    { name: 'after effects', level: 90, category: '3D Animation' },
    { name: 'Substance Designer', level: 85, category: 'Texturing' },
    { name: 'evee render ', level: 88, category: 'Rendering' },
    { name: 'gemotery nodes', level: 50, category: 'Procedural' },
    { name: 'mocha pro ', level: 80, category: 'Compositing' }
  ];

  const experience = [
    {
      year: '2024',
      title: 'Lead 3D Artist',
      company: 'Digital Futures Studio',
      description: 'Directing experimental 3D projects for high-end commercial and artistic clients.'
    },
    {
      year: '2022-2023',
      title: 'Senior 3D Designer',
      company: 'Dream Render VFX Studios',
      description: 'Specializing in architectural visualization and abstract digital sculptures.'
    },
    {
      year: '2020-2022',
      title: 'Freelance 3D Artist',
      company: 'Independent',
      description: 'Developing a unique artistic voice through experimental digital art and installations.'
    }
  ];

  return (
    <section className="py-32 bg-gradient-depth relative overflow-hidden">
      {/* Background Wireframe */}
      <div className="absolute inset-0 wireframe-overlay opacity-10" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Portrait & Bio */}
          <div className="relative animate-wipe-left">
            {/* Portrait Placeholder with Wireframe Effect */}
            <div className="relative mb-12">
              <div className="w-80 h-80 mx-auto relative">
                <img src="/images/me.jpg" alt="Portrait of the artist" className="w-full h-full object-cover rounded-2xl shadow-artistic" />
                <div className="absolute inset-0 wireframe-overlay rounded-2xl opacity-30" />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-8 text-experimental">
                About the Artist
              </h2>
              
              <div className="space-y-6 text-lg font-inter leading-relaxed text-foreground max-w-2xl">
                <p>
                  I'm a passionate 3D artist and VFX creator, specializing in Blender and After Effects. My work focuses on crafting immersive visuals and storytelling through motion. Over the years, I've created multiple projects and continuously pushed myself to deliver high-quality visuals. Now, I'm excited to take my creativity further by collaborating on short films and larger-scale productions where my skills can bring unique ideas to life.
                </p>
                
                <p>
                  Beyond art, I'm also a coder and innovator. The very website you’re exploring was built by me, and I’ve developed AI-driven projects with IoT integration. I’m also the founder of SeeBySound.in, where I combine creativity and technology to design impactful solutions. My goal is to blend art and code to create experiences that are not only visually stunning but also smart and functional.
                </p>
                
                <p className="text-velvet-smoke">
                  
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className="space-y-16 animate-wipe-right">
            
            {/* Skills Section */}
            <div>
              <h3 className="font-playfair text-3xl font-bold mb-8 text-chaos">
                Technical Expertise
              </h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setActiveSkill(skill.name)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-inter font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-velvet-smoke">
                        {skill.category}
                      </span>
                    </div>
                    
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`
                          h-full bg-gradient-chaos rounded-full transition-all duration-1000 ease-out
                          ${activeSkill === skill.name ? 'animate-pulse' : ''}
                        `}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                    
                    {activeSkill === skill.name && (
                      <div className="absolute right-0 top-0 bg-velvet-deep text-soft-white px-2 py-1 rounded text-sm font-inter animate-fade-in">
                        {skill.level}%
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="font-playfair text-3xl font-bold mb-8 text-chaos">
                Experience
              </h3>
              
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div 
                    key={index}
                    className="relative pl-8 border-l-2 border-velvet-beige/30 group hover:border-chaos-accent transition-colors duration-500"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 bg-velvet-beige rounded-full transform -translate-x-2 group-hover:bg-chaos-accent group-hover:scale-125 transition-all duration-500" />
                    
                    <div className="pb-8">
                      <div className="text-sm font-inter text-velvet-smoke mb-1">
                        {exp.year}
                      </div>
                      <h4 className="font-playfair text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h4>
                      <div className="text-chaos-accent font-inter font-medium mb-3">
                        {exp.company}
                      </div>
                      <p className="text-velvet-smoke font-inter leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-3 h-3 bg-chaos-accent/40 rounded-full animate-float" />
      <div className="absolute bottom-1/3 left-10 w-2 h-2 bg-velvet-beige/60 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-1/3 w-1 h-20 bg-gradient-to-b from-velvet-smoke/20 to-transparent rotate-12" />
    </section>
  );
};