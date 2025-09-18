// app/page.js (Main page component in Next.js app directory structure)

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Banners from '@/components/Banners';
import Categories from '@/components/Categories';
import Products from '@/components/Products';
import Brands from '@/components/Brands';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import About from '@/components/About';
import Address from '@/components/Address';
import Footer from '@/components/Footer';
import Mission from '@/components/Mission';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Services /> */}
      <Banners />
      <Categories />
      <Products />
      <Team />
      {/* <Brands /> */}
      <Testimonials />
      <Mission />
      <About />
      <Address />
      <Footer />
    </div>
  );
}