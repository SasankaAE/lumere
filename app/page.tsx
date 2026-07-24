import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { Benefits } from "@/components/sections/benefits";
import { Offers } from "@/components/sections/offers";
import { Routine } from "@/components/sections/routine";
import { BeforeAfter } from "@/components/sections/before-after";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Newsletter } from "@/components/sections/newsletter";
import { InstagramGallery } from "@/components/sections/instagram-gallery";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <FeaturedProducts />
        <Benefits />
        <Offers />
        <Routine />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <InstagramGallery />
      </main>
      <Footer />
    </>
  );
}
