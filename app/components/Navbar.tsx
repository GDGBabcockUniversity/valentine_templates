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

      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <nav className="flex items-center gap-8">
          <Link className="text-gray-300 hover:text-white transition-colors text-sm font-medium leading-normal" href="/">Templates</Link>
        </nav>
        <Link href="/proposal" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-primary/90 transition-all text-white text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Get Started</span>
        </Link>
      </div>
    </header>
  );
}