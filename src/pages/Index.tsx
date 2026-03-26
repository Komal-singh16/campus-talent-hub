import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceGrid from "@/components/ServiceGrid";
import FounderSpotlight from "@/components/FounderSpotlight";
import PortfolioGallery from "@/components/PortfolioGallery";
import ContactForm from "@/components/ContactForm";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ServiceGrid />
    <FounderSpotlight />
    <PortfolioGallery />
    <TrustBar />
    <ContactForm />
    <Footer />
  </div>
);

export default Index;
