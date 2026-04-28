import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery"; // ✅ added
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <Hero />
      <Packages />
      <WhyUs />
      <Gallery /> {/* ✅ added here */}
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
