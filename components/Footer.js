import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-display text-3xl tracking-tight mb-8 block">
              Therapize<span className="text-accent-teal">.</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-8">
              Boutique psychiatric and wellness practice serving a global clientele with expert care and modern therapeutic solutions.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] uppercase tracking-widest hover:bg-white hover:text-text-primary transition-all duration-300">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] mb-10 text-accent-warm">Practice</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#founders" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="#approach" className="hover:text-white transition-colors">Methodology</Link></li>
              <li><Link href="#booking" className="hover:text-white transition-colors">Book Online</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] mb-10 text-accent-warm">Resources</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><Link href="/crisis" className="text-crisis-red font-semibold hover:brightness-125 transition-all">Crisis Support</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Wellness Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] mb-10 text-accent-warm">Legal</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/crisis#policy" className="hover:text-white transition-colors">Crisis Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">GDPR Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.25em] text-text-muted font-bold">
          <div>© 2024 Therapize Psychiatric Practice. All Rights Reserved.</div>
          <div className="flex gap-8">
            <span>Clinical Lead: Dr. Arjun Mehta</span>
            <span>Operations: Priya Sharma</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
