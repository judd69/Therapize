'use client';
import { useState } from 'react';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [consents, setConsents] = useState({
    onlineLimits: false,
    confidentiality: false,
    notEmergency: false
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <section id="booking" className="py-32 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent-blue mb-6 block">Secure Onboarding</span>
            <h2 className="text-5xl mb-6">Begin Your Consultation.</h2>
            <p className="text-text-muted">Fill out our secure onboarding form to request a session. Your information is handled with strict medical confidentiality.</p>
          </div>

          <div className="bg-bg-alt rounded-3xl p-8 md:p-16 border border-border shadow-sm">
            <div className="flex justify-between items-center mb-12">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-500 ${
                    step >= num ? 'bg-accent-blue text-white' : 'bg-white text-text-muted border border-border'
                  }`}>
                    {num}
                  </div>
                  <span className={`hidden sm:block text-[10px] uppercase tracking-widest font-bold ${
                    step >= num ? 'text-text-primary' : 'text-text-muted'
                  }`}>
                    {num === 1 ? 'Personal Details' : num === 2 ? 'Session Info' : 'Consent'}
                  </span>
                  {num < 3 && <div className="hidden sm:block w-12 h-px bg-border mx-2"></div>}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-8 animate-fade-in">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-text-muted">Full Name</label>
                    <input type="text" className="w-full bg-white border border-border rounded-xl px-6 py-4 focus:border-accent-blue outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-text-muted">Email Address</label>
                    <input type="email" className="w-full bg-white border border-border rounded-xl px-6 py-4 focus:border-accent-blue outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-text-muted">Phone Number</label>
                  <input type="tel" className="w-full bg-white border border-border rounded-xl px-6 py-4 focus:border-accent-blue outline-none transition-all" placeholder="+44 7700 900000" />
                </div>
                <button onClick={nextStep} className="btn btn-primary w-full rounded-xl py-5 text-sm font-bold shadow-lg">Continue</button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-text-muted">Select Service</label>
                  <select className="w-full bg-white border border-border rounded-xl px-6 py-4 focus:border-accent-blue outline-none transition-all appearance-none cursor-pointer">
                    <option>Talk Therapy & Counselling</option>
                    <option>Psychiatric Consultation</option>
                    <option>Wellness Coaching</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-text-muted">Brief Reason for Visit (Optional)</label>
                  <textarea className="w-full bg-white border border-border rounded-xl px-6 py-4 focus:border-accent-blue outline-none transition-all h-32 resize-none" placeholder="How can we help?"></textarea>
                </div>
                <div className="flex gap-4">
                  <button onClick={prevStep} className="btn btn-outline flex-1 rounded-xl py-5 text-sm font-bold">Back</button>
                  <button onClick={nextStep} className="btn btn-primary flex-1 rounded-xl py-5 text-sm font-bold">Almost Done</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8 animate-fade-in">
                <div className="bg-white p-8 rounded-2xl border border-border space-y-6">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border text-accent-blue focus:ring-accent-blue cursor-pointer" onChange={(e) => setConsents({...consents, onlineLimits: e.target.checked})} />
                    <span className="text-sm text-text-body leading-relaxed">
                      I understand the limits of online sessions and that this service is conducted remotely via secure video platform.
                    </span>
                  </label>
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border text-accent-blue focus:ring-accent-blue cursor-pointer" onChange={(e) => setConsents({...consents, confidentiality: e.target.checked})} />
                    <span className="text-sm text-text-body leading-relaxed">
                      I acknowledge the confidentiality boundaries and privacy policy regarding my personal and clinical data.
                    </span>
                  </label>
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border text-accent-blue focus:ring-accent-blue cursor-pointer" onChange={(e) => setConsents({...consents, notEmergency: e.target.checked})} />
                    <span className="text-sm font-bold text-crisis-red leading-relaxed">
                      I confirm that this is NOT an emergency. I am not currently suicidal, psychotic, or in immediate danger.
                    </span>
                  </label>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-text-muted font-bold">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  256-bit Encrypted Transmission
                </div>

                <div className="flex gap-4">
                  <button onClick={prevStep} className="btn btn-outline flex-1 rounded-xl py-5 text-sm font-bold">Back</button>
                  <button disabled={!Object.values(consents).every(Boolean)} className={`btn btn-primary flex-1 rounded-xl py-5 text-sm font-bold ${!Object.values(consents).every(Boolean) ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    Request Booking
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
