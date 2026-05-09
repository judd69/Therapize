'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
      scrolled ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-black/5' : 'py-8 bg-transparent'
    }`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-tight text-primary">
          Therapize<span className="text-accent-blue">.</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-sm font-medium">
          <Link href="#services" className="hover:text-accent-blue transition-colors">Services</Link>
          <Link href="#founders" className="hover:text-accent-blue transition-colors">About Us</Link>
          <Link href="#approach" className="hover:text-accent-blue transition-colors">Our Approach</Link>
          <Link href="/crisis" className="btn btn-outline crisis-btn text-[10px] py-2 px-4 rounded-full">
            Crisis Info
          </Link>
          <Link href="#booking" className="btn btn-primary rounded-full px-6 text-[11px]">
            Book a Session
          </Link>
        </div>

        <button className="md:hidden">
          <div className="w-6 h-0.5 bg-text-primary mb-1.5"></div>
          <div className="w-4 h-0.5 bg-text-primary ml-auto"></div>
        </button>
      </div>
      
      <style jsx>{`
        nav {
          font-family: var(--font-body);
        }
        .text-primary { color: var(--text-primary); }
        .text-accent-blue { color: var(--accent-blue); }
      `}</style>
    </nav>
  );
}
