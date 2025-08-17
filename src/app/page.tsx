import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero';
import ShopCategories from '@/components/sections/shop-categories';
import FeaturedCollection from '@/components/sections/featured-collection';
import OurStory from '@/components/sections/our-story';
import Testimonials from '@/components/sections/testimonials';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ShopCategories />
      <FeaturedCollection />
      <OurStory />
      <Testimonials />
      <Footer />
    </main>
  );
}