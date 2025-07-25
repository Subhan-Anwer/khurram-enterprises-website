import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/AboutSection";
import FeaturedSection from "../../components/FeaturedSection";
import AreasOfDeal from "../../components/AreasOfDeal";
import Testimonials from "../../components/Testimonials";
import CallToAction from "../../components/CallToAction";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Featured Properties */}
      <FeaturedSection />

      {/* Areas We Deal In */}
      <AreasOfDeal />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <CallToAction />
    </>
  );
}
