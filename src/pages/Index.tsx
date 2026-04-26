import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Packages />
        <WhyUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
