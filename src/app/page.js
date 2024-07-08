import 'boxicons/css/boxicons.min.css';
import Hero from '@/components/hero/page';
import AboutUs from '@/components/aboutus/page';
import Features from '@/components/features/page';
import Testimonials from '@/components/testimonial/page';
import Contactus from '@/components/contactus/page';
// import Footer from '@/components/footer/page';


export default function Home() {
  return (
   <>
   <Hero />
   <AboutUs />
   <Features />
   <Testimonials />
   <Contactus />
   </>
  );
}



