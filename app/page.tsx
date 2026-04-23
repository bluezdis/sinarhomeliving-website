import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategoriesGrid from "@/components/home/CategoriesGrid";
import Testimonials from "@/components/home/Testimonials";
import PromoSection from "@/components/home/PromoSection";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesGrid />
      <PromoSection />
      <Testimonials />
      <WhatsAppButton fixed />
    </>
  );
}
