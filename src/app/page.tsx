import { Navbar, HeroSection, AboutSection, StatsSection, ResultsSection, GallerySection, CoachingSection, ContactSection, Footer } from "@/components/sections";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ResultsSection />
        <GallerySection />
        <CoachingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
