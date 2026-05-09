'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });
      
      tl.fromTo('.hero-bg', 
        { scale: 1.2, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 2.5 }
      )
      .from(headlineRef.current, { y: 100, opacity: 0 }, '-=1.5')
      .from(subtextRef.current, { y: 50, opacity: 0 }, '-=1.2')
      .from(ctaRef.current, { y: 30, opacity: 0 }, '-=1.0');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="hero-bg absolute inset-0 bg-[#fdfcf9] z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[50%] bg-accent-sage/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] bg-accent-blue/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container relative z-10 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-blue mb-8 block reveal">
          Psychiatric Wellness & Counselling
        </span>
        <h1 ref={headlineRef} className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] tracking-tighter">
          Nurturing Minds.<br />
          <span className="italic font-normal text-accent-teal">Empowering Lives.</span>
        </h1>
        <p ref={subtextRef} className="max-w-2xl mx-auto text-lg md:text-xl text-text-muted mb-12">
          A premium online psychiatric practice providing expert emotional support and clinical wellness solutions for individuals globally.
        </p>
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="btn btn-primary rounded-full px-10 py-5 text-sm font-semibold">
            Begin Your Journey
          </button>
          <button className="btn btn-outline rounded-full px-10 py-5 text-sm font-semibold">
            View Our Services
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll to explore</span>
        <div className="w-px h-12 bg-text-primary origin-top scale-y-0 animate-scroll"></div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scrollLine 2s infinite var(--ease);
        }
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          50.1% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}
