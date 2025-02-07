import { Competitors } from '@/partials/Competitors';
import { CTA } from '@/partials/Cta';
import { Features } from '@/partials/Features';
import { Footer } from '@/partials/Footer';
import { Intro } from '@/partials/Intro';
import { Metrics } from '@/partials/Metrics';
import { Navbar } from '@/partials/Navbar';
import { Partners } from '@/partials/Partners';
import { Testimonials } from '@/partials/Testimonials';

const Home = () => {
  return (
    <div className='container min-h-screen bg-[#fdf3ec] max-w-full'>
      <Navbar />
      <Intro />
      <Partners />
      <Metrics />
      <Features />
      <CTA />
      <Competitors />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
