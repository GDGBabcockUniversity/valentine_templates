import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full max-w-[1200px] px-4 py-8 md:py-16 lg:py-24">
      <div className="relative w-full overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl bg-white/[0.02] border border-white/5 p-6 md:p-12 lg:p-16 text-center flex flex-col items-center justify-center gap-4 md:gap-6 backdrop-blur-sm">

        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#e00b5c 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none"></div>

        <div className="animate-bounce mb-1 relative z-10 text-primary">
          <Heart size={48} fill="currentColor" className="md:w-16 md:h-16" />
        </div>

        <div className="relative z-10 flex flex-col gap-3 md:gap-4 max-w-3xl mx-auto">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight">
            Create & Share Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-400">Valentine Surprise!</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-xl mx-auto" style={{ fontFamily: 'var(--font-noto-sans), ui-sans-serif, system-ui' }}>
            Design the perfect digital moment for your special someone in seconds. Choose a template, customize it, and share the love.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-3 md:gap-4 mt-2 md:mt-4 w-full justify-center text-center">
          <Link href="#templates" className="flex items-center justify-center gap-2 h-11 md:h-12 lg:h-14 px-6 md:px-8 rounded-full bg-primary hover:bg-primary/90 text-white text-sm md:text-base font-bold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40">
            <span>Get Started</span>
          </Link>
          <Link href="#templates" className="flex items-center justify-center gap-2 h-11 md:h-12 lg:h-14 px-6 md:px-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm md:text-base font-medium transition-all backdrop-blur-sm">
            <span>View Gallery</span>
          </Link>
        </div>
      </div>
    </div>
  );
}