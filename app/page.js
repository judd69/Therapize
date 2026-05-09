import Hero from '@/components/Hero';
import CrisisDisclaimer from '@/components/CrisisDisclaimer';
import Founders from '@/components/Founders';
import Services from '@/components/Services';
import Booking from '@/components/Booking';

export default function Home() {
  return (
    <>
      <Hero />
      <CrisisDisclaimer />
      <Services />
      <Founders />
      <Booking />
    </>
  );
}
