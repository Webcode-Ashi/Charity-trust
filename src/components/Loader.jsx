import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ramvatiImg from '../assets/images/ramvati.jpeg';

export default function Loader({ onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the loader itself
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete
        });
      }
    });

    // 1. Animate image appearing with a soft scale and fade
    tl.fromTo(imageContainerRef.current, 
      { scale: 0.8, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 1, ease: 'back.out(1.2)' }
    );

    // 2. Animate text filling with brand gold
    // Using clip-path to reveal the gold text from left to right
    tl.fromTo(textRef.current,
      { clipPath: 'inset(0% 100% 0% 0%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'power2.inOut' }
    );

    // 3. Add a slight pause before fading out the whole loader
    tl.to({}, { duration: 0.3 });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50"
    >
      {/* Image Container */}
      <div 
        ref={imageContainerRef} 
        className="relative w-32 h-32 sm:w-44 sm:h-44 mb-8"
      >
        {/* Pulsing background ring */}
        <div className="absolute inset-0 rounded-full border-4 border-brand-gold/30 animate-ping" style={{ animationDuration: '2s' }}></div>
        
        {/* Main Image */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-white flex items-center justify-center">
          <img 
            src={ramvatiImg} 
            alt="Smt. Ramvati Kasana" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Loading Text */}
      <div className="relative text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-widest font-serif flex items-center justify-center">
        {/* Base Light Color Text */}
        <span className="text-slate-200">RKCT</span>
        
        {/* Overlay Gold Text (Revealed by GSAP) */}
        <span 
          ref={textRef} 
          className="absolute left-0 top-0 text-brand-gold"
          style={{ clipPath: 'inset(0% 100% 0% 0%)' }} // Initial state fallback
        >
          RKCT
        </span>
      </div>
      
      {/* Small loading indicator text underneath */}
      <div className="mt-6 text-sm sm:text-base font-semibold tracking-[0.2em] text-slate-400 uppercase animate-pulse">
        Loading...
      </div>
    </div>
  );
}
