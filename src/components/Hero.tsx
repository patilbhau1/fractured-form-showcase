import React, { useState, useEffect, useCallback, useRef } from 'react';

const images = [
  "/images/animeshader.png",
  "/images/grass.png",
  "/images/IMG_20230525_024621.jpg",
  "/images/microphone.png",
  "/images/perfum.jpeg",
  "/images/perfum1.jpeg",
];

const RotatingText = () => {
  const texts = ["3D Artist", "VFX Creator", "Experimental Designer", "Creative Coder"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="mt-6 text-lg text-stone-600 rotating-text h-7">
      {texts.map((text, index) => (
        <span key={text} className={index === currentIndex ? 'active' : ''}>
          {text}
        </span>
      ))}
    </div>
  );
};

const CardSlider = () => {
    const [active, setActive] = useState(Math.floor(images.length / 2));
    const autoplayId = useRef<NodeJS.Timeout | null>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    const applyLayout = useCallback(() => {
        if (!sliderRef.current) return;
        const items = Array.from(sliderRef.current.querySelectorAll('.item')) as HTMLElement[];
        items.forEach((item, index) => {
            const diff = index - active;
            let transform = '';
            let zIndex = items.length - Math.abs(diff);
            let filter = '';
            let opacity = 1;

            if (index === active) {
                transform = `translateX(0) scale(1)`;
                zIndex = items.length + 1;
            } else if (index < active) {
                transform = `translateX(${-140 * Math.abs(diff)}px) scale(${1 - 0.2 * Math.abs(diff)}) perspective(16px) rotateY(1deg)`;
                filter = 'blur(2px)';
                opacity = Math.abs(diff) > 2 ? 0 : 0.6;
            } else {
                transform = `translateX(${140 * Math.abs(diff)}px) scale(${1 - 0.2 * Math.abs(diff)}) perspective(16px) rotateY(-1deg)`;
                filter = 'blur(2px)';
                opacity = Math.abs(diff) > 2 ? 0 : 0.6;
            }

            item.style.transform = transform;
            item.style.zIndex = zIndex.toString();
            item.style.filter = filter;
            item.style.opacity = opacity.toString();
        });
    }, [active]);

    const goNext = useCallback(() => {
        setActive((prevActive) => (prevActive + 1) % images.length);
    }, []);

    const goPrev = useCallback(() => {
        setActive((prevActive) => (prevActive - 1 + images.length) % images.length);
    }, []);

    const stopAutoplay = useCallback(() => {
        if (autoplayId.current) {
            clearInterval(autoplayId.current);
            autoplayId.current = null;
        }
    }, []);

    const startAutoplay = useCallback(() => {
        if (autoplayId.current) return;
        autoplayId.current = setInterval(goNext, 1500);
    }, [goNext]);


    useEffect(() => {
        applyLayout();
    }, [active, applyLayout]);

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, [startAutoplay, stopAutoplay]);

    const handleInteraction = () => {
        stopAutoplay();
        setTimeout(startAutoplay, 5000);
    };

    const onNext = () => {
        goNext();
        handleInteraction();
    }

    const onPrev = () => {
        goPrev();
        handleInteraction();
    }

    return (
        <div className="slider" ref={sliderRef} onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
            <div className="tagline">My Renders</div>
            {images.map((src, index) => (
                <div key={index} className="item"><img src={src} alt={`render-${index}`} /></div>
            ))}
            <button id="prev" className="nav-btn" onClick={onPrev}>&lt;</button>
            <button id="next" className="nav-btn" onClick={onNext}>&gt;</button>
        </div>
    );
};


export const Hero = () => {
  return (
    <div className="flex-grow flex items-center justify-center min-h-screen pt-20">
      <div className="hero-grid">
        <CardSlider />
        <div className="right-content flex flex-col md:pl-40">
          <h1 className="font-cormorant font-bold text-5xl md:text-6xl text-stone-900 leading-tight">
            Pravin Patil
          </h1>
          <p className="mt-4 text-lg md:text-xl text-stone-700 max-w-xl font-medium">
            I am Pravin , a passionate 3D Artist & VFX Creator blending technology with artistry — dedicated to turning imagination into reality through stunning renders and experimental designs.
          </p>
          <RotatingText />
          <div className="mt-8">
            <a href="#" className="inline-block bg-stone-700 text-white py-4 px-10 rounded-full text-lg font-medium hover:bg-stone-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Gallery
            </a>
          </div>
          <p className="mt-6 text-stone-500 italic">Trusted by creators & brands to deliver stunning visuals</p>
        </div>
      </div>
    </div>
  );
};
