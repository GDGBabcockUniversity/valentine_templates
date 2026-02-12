import Link from "next/link";
import { ArrowRight, Heart } from 'lucide-react';

const templates = [
  {
    title: "The Proposal",
    subtitle: "Neon & Vibrant",
    image: "/proposal.png",
    href: "/proposal",
    isNew: false
  },
  {
    title: "Love Letter",
    subtitle: "Classic Envelope",
    image: "/love-letter.png",
    href: "/love-letter",
    isNew: false
  },
  {
    title: "Secret Card",
    subtitle: "Sealed with a Heart",
    image: "/secret-letter.png",
    href: "/secret-card",
    isNew: false
  },
  {
    title: "Our Story",
    subtitle: "Timeline Journey",
    image: "/our-story.png",
    href: "/our-story",
    isNew: false
  },
];

export default function TemplateGallery() {
  return (
    <div className="w-full max-w-[1200px] px-4 py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6 mb-8 md:mb-10 border-b border-white/10 pb-5 md:pb-6">
        <div>
          <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight mb-2">Template Gallery</h2>
          <p className="text-gray-400 text-sm md:text-base" style={{ fontFamily: 'var(--font-noto-sans), ui-sans-serif, system-ui' }}>Pick a style that matches your vibe.</p>
        </div>
        <Link href="#" className="text-primary text-sm md:text-base font-bold hover:text-white transition-colors flex items-center gap-1 group">
          View all templates
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {templates.map((template, index) => (
          <Link key={index} href={template.href} className="group flex flex-col gap-3 pb-3 cursor-pointer">
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-surface-dark card-hover transition-all duration-300">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${template.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

              {template.isNew && (
                <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                  New
                </div>
              )}

              <div className="absolute bottom-4 left-4 right-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-full h-10 bg-white text-black rounded-full font-bold text-sm flex items-center justify-center hover:bg-gray-200">
                  Use Template
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-white text-base md:text-lg font-bold leading-normal group-hover:text-primary transition-colors">{template.title}</p>
              </div>
              <p className="text-gray-500 text-xs md:text-sm font-normal leading-normal" style={{ fontFamily: 'var(--font-noto-sans), ui-sans-serif, system-ui' }}>{template.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}