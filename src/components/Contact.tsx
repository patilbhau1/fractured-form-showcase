import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      // In a real app, you'd handle the form submission here
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/3d_artist.pravin/',
      handle: '@3d_artist.pravin'
    }
  ];

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20 animate-wipe-left">
          <h2 className="font-playfair text-6xl md:text-7xl font-bold mb-8 text-experimental">
            Let's Create
          </h2>
          <p className="text-xl font-inter text-velvet-smoke max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's discuss your next project 
            and explore the possibilities of experimental 3D art.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <div className="animate-wipe-right">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label 
                  htmlFor="name" 
                  className="block font-inter font-medium text-foreground mb-3"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-muted border border-border rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-chaos-accent focus:border-transparent transition-all duration-300 placeholder:text-charcoal"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block font-inter font-medium text-foreground mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-muted border border-border rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-chaos-accent focus:border-transparent transition-all duration-300 placeholder:text-charcoal"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block font-inter font-medium text-foreground mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-muted border border-border rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-chaos-accent focus:border-transparent transition-all duration-300 resize-none placeholder:text-charcoal"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-4 px-8 font-inter font-semibold rounded-lg transition-all duration-500
                  ${isSubmitting 
                    ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                    : 'bg-primary text-primary-foreground hover:bg-gradient-chaos hover:scale-105 shadow-artistic hover:shadow-chaos'
                  }
                `}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-12 animate-slide-chaos">
            
            {/* Direct Contact */}
            <div>
              <h3 className="font-playfair text-3xl font-bold mb-6 text-chaos">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="group">
                  <p className="font-inter text-velvet-smoke text-sm uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a 
                    href="mailto:hello@nexus3d.com" 
                    className="font-inter text-xl text-foreground hover:text-chaos-accent transition-colors duration-300 group-hover:underline"
                  >
                    pravinpatil90939@gmial.com
                  </a>
                </div>
                
                <div className="group">
                  <p className="font-inter text-velvet-smoke text-sm uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <a 
                    href="tel:+1234567890" 
                    className="font-inter text-xl text-foreground hover:text-chaos-accent transition-colors duration-300 group-hover:underline"
                  >
                    7506750982
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-playfair text-3xl font-bold mb-6 text-chaos">
                Follow the Work
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="group p-6 bg-muted rounded-xl hover:bg-gradient-chaos hover:shadow-artistic transition-all duration-500 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-center">
                      <h4 className="font-inter font-semibold text-foreground group-hover:text-primary-foreground transition-colors duration-300 mb-2">
                        {social.name}
                      </h4>
                      <p className="font-inter text-sm text-velvet-smoke group-hover:text-primary-foreground/80 transition-colors duration-300">
                        {social.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-6 bg-gradient-depth rounded-xl border border-velvet-beige/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-inter font-semibold text-foreground">
                  Available for Projects
                </span>
              </div>
              <p className="font-inter text-velvet-smoke text-sm leading-relaxed">
                Currently accepting select projects for Q2 2024. 
                Let's create something extraordinary together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-1 bg-gradient-to-r from-velvet-beige/20 to-transparent rotate-45" />
      <div className="absolute bottom-1/4 right-10 w-1 h-40 bg-gradient-to-b from-chaos-accent/20 to-transparent -rotate-12" />
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-velvet-smoke/10 rounded-full animate-float" />
    </section>
  );
};