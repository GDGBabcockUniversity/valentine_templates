import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import TemplateGallery from "./components/TemplateGallery";
import Footer from "./components/Footer";
import { Gift } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20 flex flex-col items-center w-full">
        <Hero />
        <HowItWorks />
        <TemplateGallery />

        {/* CTA Section */}
        <div className="w-full px-4 py-12 md:py-16 lg:py-20 bg-white/[0.02] border-y border-white/5 mt-8 md:mt-10 backdrop-blur-sm">
          <div className="max-w-[720px] mx-auto text-center flex flex-col items-center gap-4 md:gap-6">
            <Gift size={40} className="text-primary mb-1 md:w-12 md:h-12" />
            <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">Ready to surprise them?</h2>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg" style={{ fontFamily: 'var(--font-noto-sans), ui-sans-serif, system-ui' }}>It only takes a few minutes to create a memory that lasts forever.</p>
            <button className="flex min-w-[180px] md:min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 md:h-12 lg:h-14 px-6 md:px-8 bg-white text-black hover:bg-gray-200 transition-colors text-sm md:text-base font-bold leading-normal tracking-[0.015em] mt-2 md:mt-4 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              <span className="truncate">Create Yours Now</span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}