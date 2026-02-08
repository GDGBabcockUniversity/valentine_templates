import Link from "next/link";
import { Heart, Globe, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background-dark py-10 md:py-12 px-4 md:px-6 w-full mt-auto">
      <div className="flex flex-col items-center justify-center gap-5 md:gap-6 max-w-[960px] mx-auto">
        <div className="flex items-center gap-2 md:gap-3 text-white mb-2 md:mb-4">
          <div className="flex items-center justify-center size-7 md:size-8 rounded-full bg-white/5">
            <Heart size={16} fill="currentColor" className="md:w-[18px] md:h-[18px]" />
          </div>
          <span className="text-base md:text-lg font-bold">Valentine Surprise</span>
        </div>

        <div className="flex gap-4 md:gap-6">
          <Link href="#" className="size-9 md:size-10 rounded-full bg-surface-dark border border-white/5 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors duration-300">
            <Globe size={18} className="md:w-5 md:h-5" />
          </Link>
          <Link href="#" className="size-9 md:size-10 rounded-full bg-surface-dark border border-white/5 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors duration-300">
            <Mail size={18} className="md:w-5 md:h-5" />
          </Link>
        </div>

        <p className="text-gray-500 text-xs md:text-sm font-normal text-center" style={{ fontFamily: 'var(--font-noto-sans), ui-sans-serif, system-ui' }}>
          © 2024 Valentine Surprise. Made by GDG Babcock.
        </p>
      </div>
    </footer>
  );
}