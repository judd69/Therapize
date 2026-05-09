import Link from 'next/link';

export default function CrisisDisclaimer() {
  return (
    <div className="bg-[#fff5f5] border-y border-crisis-red/10 py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="w-12 h-12 rounded-full bg-crisis-red/10 flex items-center justify-center shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crisis-red">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-display text-lg mb-1 text-crisis-red">Emergency & Crisis Disclaimer</h4>
            <p className="text-sm text-[#7a4b4b] leading-relaxed max-w-4xl">
              This service is not for emergency mental-health crises. If you are suicidal, psychotic, or in immediate danger, please contact local emergency services or a crisis hotline immediately. 
              <span className="font-semibold ml-1">Do not wait for an online appointment.</span>
            </p>
          </div>
          <Link href="/crisis" className="btn btn-outline crisis-btn rounded-full whitespace-nowrap px-8 py-3 text-xs font-bold">
            Get Immediate Help
          </Link>
        </div>
      </div>
    </div>
  );
}
