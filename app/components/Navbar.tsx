import Link from 'next/link';
import { Heart, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-4 md:px-6 lg:px-10 py-3 md:py-4">
      <div className="flex items-center gap-2 md:gap-3 text-white">
        <div className="flex items-center justify-center size-7 md:size-8 rounded-full bg-primary/20 text-primary">
          <Heart size={16} fill="currentColor" className="md:w-5 md:h-5" />
        </div>
        <h2 className="text-white text-base md:text-xl font-bold leading-tight tracking-[-0.015em]">Valentine Surprise</h2>
      </div>


    </header>
  );
}