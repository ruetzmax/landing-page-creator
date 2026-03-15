import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ContentSections from "@/components/landing/ContentSections";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import columnImg from "@/assets/column-left.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Left column overlay */}
      <div className="fixed left-0 top-0 bottom-0 w-[120px] z-20 pointer-events-none hidden lg:block">
        <img
          src={columnImg}
          alt=""
          className="h-full w-full object-cover object-right opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80" />
      </div>

      {/* Right column overlay (mirrored) */}
      <div className="fixed right-0 top-0 bottom-0 w-[120px] z-20 pointer-events-none hidden lg:block">
        <img
          src={columnImg}
          alt=""
          className="h-full w-full object-cover object-left opacity-40 -scale-x-100"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/80" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <ContentSections />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
