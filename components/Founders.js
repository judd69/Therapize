import { founders } from '@/data/founders';

export default function Founders() {
  return (
    <section id="founders" className="py-32 bg-white">
      <div className="container">
        <div className="max-w-3xl mb-24">
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent-blue mb-6 block">Our Leadership</span>
          <h2 className="text-5xl md:text-6xl mb-8 leading-tight">Founded by Experts, Driven by Compassion.</h2>
          <p className="text-xl text-text-muted">Meet the visionary clinical and operational leads dedicated to redefining psychiatric wellness through a boutique, patient-centric approach.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {founders.map((founder) => (
            <div key={founder.id} className="group">
              <div className="aspect-[4/5] bg-bg-alt rounded-2xl mb-10 overflow-hidden relative">
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-accent-blue shadow-sm">
                    {founder.badge}
                  </span>
                </div>
                {/* Placeholder for portrait image */}
                <div className="w-full h-full bg-gradient-to-br from-accent-blue/5 to-accent-teal/5 flex items-center justify-center text-accent-blue/20">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-3xl mb-2">{founder.name}</h3>
              <p className="font-mono text-[11px] uppercase tracking-wider text-accent-teal mb-6">{founder.role}</p>
              
              <p className="text-text-muted mb-8 leading-relaxed italic border-l-2 border-accent-warm/30 pl-6">
                &ldquo;{founder.bio}&rdquo;
              </p>

              <div className="space-y-4">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-text-primary border-b border-border pb-2">Qualifications</h4>
                <ul className="space-y-2">
                  {founder.qualifications.map((qual, idx) => (
                    <li key={idx} className="text-sm flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-warm shrink-0 mt-1.5"></span>
                      {qual}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
