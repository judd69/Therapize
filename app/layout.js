import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata = {
  title: 'Therapize — Premium Psychiatric Wellness & Counselling',
  description: 'A boutique online psychiatric practice providing expert emotional support and clinical wellness solutions globally.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
