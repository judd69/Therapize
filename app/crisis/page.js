import { crisisHotlines } from '@/data/crisisHotlines';
import Link from 'next/link';

export default function CrisisPage() {
  return (
    <div className="pt-40 pb-32 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#fff5f5] p-12 rounded-3xl border border-crisis-red/10 mb-16">
            <div className="flex items-center gap-6 mb-8 text-crisis-red">
              <div className="w-16 h-16 rounded-full bg-crisis-red/10 flex items-center justify-center shrink-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <div>
                <h1 className="text-4xl font-display mb-2">Emergency Help Required</h1>
                <p className="text-[#7a4b4b] font-medium italic">This is an emergency disclaimer.</p>
              </div>
            </div>
            
            <div className="space-y-6 text-sm text-[#7a4b4b] leading-relaxed">
              <p className="font-bold text-lg">
                If you are currently experiencing a mental health emergency, are suicidal, psychotic, or in immediate danger of harming yourself or others, PLEASE STOP and contact emergency services immediately.
              </p>
              <p>
                Therapize is an online counseling and psychiatric practice for scheduled appointments. We are NOT equipped to provide acute crisis intervention or emergency medical care. Online therapists cannot be reached 24/7.
              </p>
              <p>
                <span className="font-bold">In the UK:</span> Call 999 or go to your nearest A&E. <br />
                <span className="font-bold">In India:</span> Call 112 or local emergency services. <br />
                <span className="font-bold">In the US:</span> Call 911 or go to the nearest emergency room.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mb-12 border-b border-border pb-6">International Crisis Hotlines</h2>
          
          <div className="grid gap-8">
            {crisisHotlines.map((country) => (
              <div key={country.country} className="bg-bg-alt p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl">{country.flag}</span>
                  <h3 className="text-xl font-bold uppercase tracking-widest text-accent-blue">{country.country}</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {country.lines.map((line) => (
                    <div key={line.name} className="bg-white p-6 rounded-xl border border-border shadow-sm">
                      <h4 className="font-bold text-text-primary mb-1">{line.name}</h4>
                      <p className="text-2xl font-display text-accent-teal mb-4">{line.phone}</p>
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-text-muted pt-4 border-t border-border">
                        <span>{line.available}</span>
                        <a href={line.website} target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Website ↗</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/" className="btn btn-primary rounded-full px-12 py-5 text-sm font-bold">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
